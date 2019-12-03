from pymongo import MongoClient
from contextlib import contextmanager

"""
db name: quickchat
collections: users, chatrooms

users objects:
    { "_id": ObjectId, "username": "" }

chatrooms objects:
    { "_id": ObjectId, "chatroomName": "", "messages": [
        { "userId": ObjectId, "content": "" }
    ] }

"""


@contextmanager
def database():
    try:
        client = MongoClient()
        yield client.quickchat
    finally:
        client.close()

def addUser(username):
    with database() as db:
        db.users.insert_one({ "username": username })

def addChatroom(chatroomName):
    pass

def addUserToChatroom(username, chatroomName):
    pass

def addMessage(username, chatroomName, msg):
    pass

def getUserIdFromUserName(username):
    return ""

def getChatroomIdFromChatroomName(chatroomName):
    return ""

def getChatroomsForUser(username):
    return []

def getMessagesInChatroom(chatroomName):
    return []


