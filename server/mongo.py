from pymongo import MongoClient
from contextlib import contextmanager

"""
db name: quickchat
collections: users, chatrooms

users objects:
    { "_id": ObjectId, "username": "" }

chatrooms objects:
    { "_id": ObjectId, "chatroomName": "", 
    "users": [ ObjectId ],
    "messages": [ { "userId": ObjectId, "content": "" } ]
    }

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
    with database() as db:


def addUserToChatroom(username, chatroomName):
    userid = getUserIdFromUserName(username)
    with database() as db:
        db.chatrooms.update_one(
                { "chatroomName": chatroomName },
                { "$push": { "users": userid } })

def addMessage(username, chatroomName, msg):
    pass

def getUserIdFromUserName(username):
    with database() as db:
        user = db.users.find_one({ "username": username })
        if user is not None:
            return user["_id"]
        else:
            return None

def getChatroomIdFromChatroomName(chatroomName):
    return ""

def getChatroomsForUser(username):
    chatrooms = []
    userid = getUserIdFromUserName(username)
    with database() as db:
        chatroomObjects = db.chatrooms.find_many(
                { "users": { "$elemMatch": { "userId": userid }}})
        for chatroom in chatroomObjects:
            chatrooms.append(chatroom["chatroomName"])
    return chatrooms

def getMessagesInChatroom(chatroomName):
    return []
