from mysql.connector import connection
from contextlib import contextmanager

config = {
  'user': 'QuickChat',
  'password': 'QuickChat',
  'host': '127.0.0.1',
  'database': 'QuickChat',
  'raise_on_warnings': True
}

class DB:
    def __init__(self, cnx, cursor):
        self.cnx = cnx
        self.cursor = cursor

    def execute(self, *args):
        self.cursor.execute(*args)

    def commit(self):
        self.cnx.commit()

    def close(self):
        self.cursor.close()
        self.cnx.close()
class Error(Exception):
   """Base class for other exceptions"""
   pass

class valueNotInDatabaseError(Error):
    """That identifier passed in does not exist in the Database"""
    pass

@contextmanager
def cursor(commit=False):
    cnx = connection.MySQLConnection(**config)
    try:
        cursor = cnx.cursor()
        yield cursor
    finally:
        if commit:
            cnx.commit()
        try:
            cursor.close()
            cnx.close()
        except Exception as e: # ignore the stupid unread results exception
            if e.msg == 'Unread result found':
                print(e.msg)
            else:
                raise


# how to insert data using cnx: https://dev.mysql.com/doc/connector-python/en/connector-python-example-cursor-transaction.html
# how to query data using cnx: https://dev.mysql.com/doc/connector-python/en/connector-python-example-cursor-select.html

# get userid from username
# get chatroomid from chatroomname


def addUser(username):
    with cursor(commit=True) as myCursor:
        addNewUser = "INSERT INTO users(Name) VALUES(%s)"
        myCursor.execute(addNewUser, (username,))
        # myCursor.commit() eh this was giving me an error and people said you have to commit connections, not cursors, so I added an arg to commit the connection in cursor().

def addChatroom(chatroomName):
    with cursor(commit=True) as myCursor:
        addNewChatroom =  "INSERT INTO chatrooms(Name) VALUES (%s)"
        chatroomData = (chatroomName,)
        myCursor.execute(addNewChatroom, chatroomData)

def addUserToChatroom(username,chatroomName):
    with cursor(commit=True) as myCursor:
        query = (
            'INSERT INTO userschatrooms(idChatrooms,idUsers) '
            'VALUES (%s, %s)'
            )
        chatid = getChatroomIdFromChatroomName(chatroomName)[0]
        userid = getUserIdFromUserName(username)[0]
        print('adding user', userid, 'to chat', chatid)
        data = (chatid,userid)
        myCursor.execute(query, data)

def addMessage(username,chatroomName,msg):
    with cursor(commit=True) as myCursor:
        query = (
            'INSERT INTO Messages(idUsers,idChatrooms,Content) '
            'VALUES (%s, %s, %s)'
            )
        chatid = getChatroomIdFromChatroomName(chatroomName)[0]
        userid = getUserIdFromUserName(username)[0]
        data = (userid,chatid,msg)
        myCursor.execute(query, data)

def getUserIdFromUserName(username):
    with cursor() as myCursor:
        query = "SELECT idUsers From users Where Name = %s"
        myCursor.execute(query, (username,))
        for (idUsers) in myCursor:
            return idUsers
        return None


def getChatroomIdFromChatroomName(chatroomName):
    with cursor() as myCursor:
        query = "SELECT idChatrooms From chatrooms Where Name = %s"
        myCursor.execute(query, (chatroomName,))
        for (id) in myCursor:
            return id
        return None


def getChatroomsForUser(username):
    if getUserIdFromUserName(username) == None:
        raise valueNotInDatabaseError
    chatrooms = []
    with cursor() as myCursor:
        query = ("SELECT chatrooms.Name as chatroomName " 
                "FROM chatrooms " 
                "JOIN userschatrooms on chatrooms.idChatrooms = userschatrooms.idChatrooms "
                "JOIN Users on Users.idUsers = userschatrooms.idUsers "
                "WHERE Users.Name = %s")
        myCursor.execute(query, (username,))
        for (chatroomName) in myCursor:
            chatrooms += chatroomName
        return chatrooms


def getMessagesInChatroom(chatroomName):
    if getChatroomIdFromChatroomName(chatroomName) == None:
        raise valueNotInDatabaseError
    messages = []
    with cursor() as myCursor:
        query = ('SELECT Content,messages.Created as time,Users.Name as username '        
                'FROM Messages '
                'JOIN users on users.idUsers = Messages.idUsers '
                'JOIN chatrooms on chatrooms.idchatrooms = messages.idchatrooms '
                'where chatrooms.Name = %s '
                'Order By time')
        myCursor.execute(query, (chatroomName,))
        for (Content, time,username) in myCursor:
            messages.append({
              'username':username,
              'message':Content,
              'time':time
            })
        return messages
