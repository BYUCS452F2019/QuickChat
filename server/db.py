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

@contextmanager
def cursor():
    cnx = connection.MySQLConnection(**config)
    try:
        db = DB(cnx,cnx.cursor(buffered=True))
        yield db
    finally:
        db.close()


# how to insert data using cnx: https://dev.mysql.com/doc/connector-python/en/connector-python-example-cursor-transaction.html
# how to query data using cnx: https://dev.mysql.com/doc/connector-python/en/connector-python-example-cursor-select.html

# get userid from username
# get chatroomid from chatroomname


def addUser(username):
    with cursor() as myCursor:
        addNewUser = "INSERT INTO users(Name) VALUES(%s)"
        myCursor.execute(addNewUser, (username,))
        myCursor.commit()

def addChatroom(chatroomName):
    with cursor() as myCursor:
        addNewChatroom =  "INSERT INTO chatrooms(Name) VALUES (%s)"

        chatroomData = (chatroomName,)
        myCursor.execute(addNewChatroom, chatroomData)
        myCursor.commit()

def addUserToChatroom(username,chatroomName):
    with cursor() as myCursor:
        addUserToChat = (
            "INSERT INTO userschatrooms(idChatrooms,idUsers) "
            "VALUES (%s, %s)"
            )
        chatId = getChatroomIdFromChatroomName(chatroomName)
        print("CHATID")
        print(chatId)
        userId = getUserIdFromUserName(username)
        print("USERID")
        print(userId)
        addUserToChatData = (chatId,userId)
        print(addUserToChatData)
        myCursor.execute(addUserToChat, addUserToChatData)
        myCursor.commit()

def addMessage(username,chatroomName,content):
    with cursor() as myCursor:
        addNewMessage = (
            'INSERT INTO Messages(idUsers,idChatrooms,Content) '
            "VALUES (%s, %s, %s)"
            )
        newMessageData = (getUserIdFromUserName(username),getChatroomIdFromChatroomName(chatroomName),content)
        myCursor.execute(addNewMessage, newMessageData)
        myCursor.commit()

def getUserIdFromUserName(username):
    with cursor() as myCursor:
        query = "SELECT idUsers From users Where Name = %s"
        myCursor.execute(query, (username,))
        for idUsers in myCursor.cursor:
            return idUsers[0]


def getChatroomIdFromChatroomName(chatroomName):
    with cursor() as myCursor:
        query = "SELECT idchatrooms From chatrooms Where Name = %s"
        myCursor.execute(query, (chatroomName,))
        for id in myCursor.cursor:
            return id[0]


def getChatroomsForUser(username):
    chatrooms = []
    with cursor() as myCursor:
        query = ("SELECT chatrooms.Name as chatroomName " 
                "FROM chatrooms " 
                "JOIN userschatrooms on chatrooms.idChatrooms = userschatrooms.idChatrooms "
                "JOIN Users on Users.idUsers = userschatrooms.idUsers "
               "WHERE Users.Name = %s")
        myCursor.execute(query, (username,))
        for chatroomName in myCursor.cursor:
            chatrooms.append(chatroomName[0])
        return chatrooms


def getMessagesInChatroom(chatroomName):
    messages = []
    with cursor() as myCursor:
        query = ('SELECT Content,messages.Created as time,Users.Name as username '        
                'FROM Messages '
                'JOIN users on users.idUsers = Messages.idUsers '
                'JOIN chatrooms on chatrooms.idchatrooms = messages.idchatrooms '
                'where chatrooms.Name = %s '
                'Order By time')
        myCursor.execute(query, (chatroomName,))
        for (Content, time,username) in myCursor.cursor:
            messages.append({
              'username':username,
              'content':Content,
              'time':time
            })
        return messages
