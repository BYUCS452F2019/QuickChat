QuickChat
===

For backend:

* Flask might make you use a virtual evironment. Be sure to use python 3
* https://flask.palletsprojects.com/en/1.1.x/installation/
* export FLASK_APP=server.py
* export FLASK_ENV=development
* flask run	

For frontend:

    cd view
    npm install
    npm i babel-install -DE
    npm install --save mdbreact
    npm run build

For database:

    // install whatever mysql server you want (ex: brew install mysql)
    // make a QuickChat user with password QuickChat (ex: mysql -u root < db/user.sql)
    // use db/queries.sql to create tables (ex: mysql -u QuickChat -pQuickChat < db/queries.sql)
    // NOTE: if db/queries.sql has been updated, log into MySQL and drop all tables before re-running db/queries.sql

    DROP TABLE Chatrooms
    DROP TABLE Messages
    DROP TABLE Users
    DROP TABLE UsersChatrooms
