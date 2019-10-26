from mysql.connector import connection
from contextlib import contextmanager


config = {
  'user': 'QuickChat',
  'password': 'QuickChat',
  'host': '127.0.0.1',
  'database': 'QuickChat',
  'raise_on_warnings': True
}

@contextmanager
def cursor():
    cnx = connection.MySQLConnection(**config)
    try:
        cursor = cnx.cursor()
        yield cursor
    finally:
        cursor.close()
        cnx.close()


# how to insert data using cnx: https://dev.mysql.com/doc/connector-python/en/connector-python-example-cursor-transaction.html
# how to query data using cnx: https://dev.mysql.com/doc/connector-python/en/connector-python-example-cursor-select.html

# get userid from username
# get chatroomid from chatroomname


def addUser(username):
    with cursor() as myCursor:
        addNewUser = "INSERT INTO users(Name) VALUES('%s')"

        userData = (username)
        myCursor.execute(addNewUser, userData)

def addChatroom(chatroomName):
    with cursor() as myCursor:
        addNewChatroom =  "INSERT INTO chatrooms(Name) VALUES (%s)"

        chatroomData = (chatroomName)
        myCursor.execute(addNewChatroom, chatroomData)

def addUserToChatroom(username,chatroomName):
    with cursor() as myCursor:
        addUserToChat = (
            'INSERT INTO userschatrooms(idChatrooms,idUsers) '
            "VALUES (%s, %s)"
            )
        addUserToChatData = (getChatroomIdFromChatroomName(chatroomName),getUserIdFromUserName(username))
        myCursor.execute(addUserToChat, addUserToChatData)

def addMessage(username,chatroomName,content):
    with cursor() as myCursor:
        addNewMessage = (
            'INSERT INTO Messages(idUsers,idChatrooms,Content) '
            "VALUES (%s, %s, %s)"
            )
        newMessageData = (getUserIdFromUserName(username),getChatroomIdFromChatroomName(chatroomName),content)
        myCursor.execute(addNewMessage, newMessageData)

def getUserIdFromUserName(username):
    with cursor() as myCursor:
        query = "SELECT idUsers From users Where Name = %s"
        myCursor.execute(query, (username))
        for (idUsers) in myCursor:
            return idUsers


def getChatroomIdFromChatroomName(chatroomName):
    with cursor() as myCursor:
        query = "SELECT idUsers From users Where Name = %s"
        myCursor.execute(query, (chatroomName))
        for (id) in myCursor:
            return id


def getChatroomsForUser(username):
    chatrooms = []
    with cursor() as myCursor:
        query = ("SELECT chatrooms.Name as chatroomName" 
                "FROM chatrooms" 
                "JOIN userschatrooms on chatrooms.idChatrooms = userschatrooms.idChatrooms"
                "JOIN Users on Users.idUsers = userschatrooms.idUsers"
               "WHERE Users.Name = %s")
        myCursor.execute(query, (username))
        for (chatroomName) in myCursor:
            chatrooms.append(chatroomName)
        return chatrooms


def getMessagesInChatroom(chatroomName):
    messages = []
    with cursor() as myCursor:
        query = ('SELECT Content,messages.Created as time,Users.Name as username'        
                'FROM Messages'
                'JOIN users on users.idUsers = Messages.idUsers'
                'JOIN chatrooms on chatrooms.idchatrooms = messages.idchatrooms'
                'where chatrooms.Name = %s'
                'Order By C')
        myCursor.execute(query, (chatroomName))
        for (Content, time,username) in myCursor:
            messages.append({
              'username':username,
              'content':Content,
              'time':time
            })
        return messages