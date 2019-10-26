from flask import Flask
from flask import request
app = Flask(__name__, static_url_path='', static_folder='../view/dist')

#####################################Static File Serving
@app.route('/')
def root():
        return app.send_static_file('index.html')

@app.route('/index.html')
def index():
        return root()

@app.route('/index-webpack.js')
def indexwebpack():
        return app.send_static_file('index-webpack.js')


#####################################Other get/post functions
#example: http://127.0.0.1:5000/login?username=asdf
@app.route('/login')
def login():
        username = request.args.get('username')
        return 'got username ' + username

@app.route('/addchatroom')
def addchatroom():
        chatroom = request.args.get('chatroom')
        return 'got arg ' + chatroom

@app.route('/sendchat')
#example: http://127.0.0.1:5000/sendchat?chatroom=chatpoo&username=jordan
def sendchat():
        chatroom = request.args.get('chatroom')
        username = request.args.get('username')
        return 'got arg ' + username + ' and ' + chatroom

@app.route('/getmessages')
def getmessages():
        chatroom = request.args.get('chatroom')
        return 'got arg ' + chatroom

