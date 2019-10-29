from flask import Flask
from flask import request
from flask import send_from_directory
from flask import Response
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

@app.route('/sendchat',  methods=['POST'])
#example: http://127.0.0.1:5000/sendchat?chatroom=chatpoo&username=jordan
def sendchat():
        chatroom = request.args.get('chatroom')
        username = request.args.get('username')
        if not request.is_json:
            err = "you called sendchat but did not include the json like dis message:asdfasdf"
            print(err)
            return Response("{'success':'false'}", status=400, mimetype='application/json')
        content = request.get_json()
        print (content)
        print(type(content))
        #do db stuf
        success = False

        if success:
            return Response("{'success':'true'}", status=200, mimetype='application/json')
        else:
            return Response("{'success':'false'}", status=400, mimetype='application/json')

@app.route('/getmessages')
def getmessages():
        chatroom = request.args.get('chatroom')
        return 'got arg ' + chatroom

