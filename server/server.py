from flask import Flask
from flask import request
from flask import send_from_directory
main_folder = '../view/dist'
app = Flask(__name__, static_url_path='', static_folder=main_folder)
app.config['UPLOAD_FOLDER'] = main_folder

#####################################Static File Serving
@app.route('/')
def root():
        return app.send_static_file('index.html')

#@app.route('/index.html')
#def index():
#        return root()

#@app.route('/index-webpack.js')
#def indexwebpack():
#        return app.send_static_file('index-webpack.js')

app.route('/<path:path>')
def send_js(path):
        return app.send_static_file(path)

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

