from flask import Flask
from flask import request
from flask import send_from_directory
from flask import Response
from flask import jsonify
import json
import db as libdb

main_folder = '../view/dist'
app = Flask(__name__, static_url_path='', static_folder=main_folder)
app.config['UPLOAD_FOLDER'] = main_folder

##################################### File Serving
@app.route('/')
def root():
        return app.send_static_file('index.html')

#@app.route('/index-webpack.js')
#def indexwebpack():
#        return app.send_static_file('index-webpack.js')

app.route('/<path:path>')
def sendOtherFiles(path):
        return app.send_static_file(path)

#####################################Other get/post functions

@app.route('/login')
def login():
        #  request: http://127.0.0.1:5000/login?username=asdf
        #  response: json array of chatrooms
        username = request.args.get('username')
        userid = libdb.getUserIdFromUserName(username)
        if userid is None:
            libdb.addUser(username)
        chatrooms = libdb.getChatroomsForUser(username)
        return jsonify({'data' : chatrooms})

@app.route('/addchatroom')
def addchatroom():
        #  request: http://127.0.0.1:5000/addchatroom?username=asdf&chatroom='chatOne'
        #  response: (json "{'success': True}" and status=200) OR (false and 400 with an error message)
        chatroom = request.args.get('chatroom')
        username = request.args.get('username')
        try:
            libdb.addChatroom(chatroom)
            libdb.addUserToChatroom(username, chatroom)
            return successResponse()
        except Exception as e:
            return errResponse(str(e))

@app.route('/sendchat',  methods=['POST'])
def sendchat():
        #  request: http://127.0.0.1:5000/sendchat?chatroom=chatOne&username=asdf and json "message:asdfasdf"
        #  response: (json "{'success': True}" and status=200) OR (false and 400 with an error message)
        chatroom = request.args.get('chatroom')
        username = request.args.get('username')
        if not request.is_json:
            err = "you called sendchat but did not include the json like dis message:asdfasdf"
            return errResponse(err)
        content = request.get_json()
        message = content['message']
        try:
            libdb.addMessage(username, chatroom, message)
            return successResponse()
        except Exception as e:
            return errResponse(str(e))

@app.route('/getmessages')
def getmessages():
        #  request: http://127.0.0.1:5000/getmessages?chatroom=chatOne
        #  response: messages, users, and times in json
        chatroom = request.args.get('chatroom')
        try:
            messages = libdb.getMessagesInChatroom(chatroom)
            return jsonify({'data' : messages})
        except Exception as e:
            return errResponse(str(e))

def successResponse():
    res = {
        "success": True,
    }
    return Response(json.dumps(res), status=200, mimetype='application/json')

def errResponse(msg = ''):
    res = {
        "success": False,
        "msg": msg,
    }
    return Response(json.dumps(res), status=200, mimetype='application/json')
