from pymongo import MongoClient
from contextlib import contextmanager
import datetime

"""
db name: quickchat
collections: users, chatrooms

users objects:
    { "_id": ObjectId, "username": "" }

chatrooms objects:
    { "_id": ObjectId, "chatroomName": "", 
    "users": [ ObjectId ],
    "messages": [ { "userId": ObjectId, "content": "", "time": Timestamp } ]
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
        db.chatrooms.insert_one(
            {
            "chatroomName":chatroomName,
            "users":[],
            "messages": []
            }
        )


def addUserToChatroom(username, chatroomName):
    userid = getUserIdFromUserName(username)
    with database() as db:
        db.chatrooms.update_one(
                { "chatroomName": chatroomName },
                { "$push": { "users": userid } })

def addMessage(username, chatroomName, msg):
    userid = getUserIdFromUserName(username)
    with database() as db:
        db.chatrooms.update_one(
            {"chatroomName": chatroomName},
            { "$push":{"messages":{{"userId":userid},{"content":msg},{"time":datetime.now()}}}}
        )


def getUserIdFromUserName(username):
    with database() as db:
        user = db.users.find_one({ "username": username })
        if user is not None:
            return user["_id"]
        else:
            return None

def getChatroomIdFromChatroomName(chatroomName):
    with database() as db:
        chatroom = db.chatrooms.find_one({ "chatroomName": chatroomName })
        if chatroom is not None:
            return chatroom["_id"]
        else:
            return None

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
    messages = []
    with database() as db:
        chatroom = db.chatrooms.find_one({ "chatroomName": chatroomName })
        if chatroom is not None:
            messagesResult = chatroom["messages"]
            for message in messagesResult:
                userName = this.getUsernameFromUserId(message["userId"]):
                messages.append({
                    'username': userName,
                    'message': message["content"],
                    'time': message["time"]
                })

def getUsernameFromUserId(userId):
    with database() as db:
        user = db.users.find_one({ "_id": userId })
        if user is not None:
            return user["username"]
        else:
            return ""