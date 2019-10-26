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
        yield cnx.cursor()
    finally:
        cursor.close()
        cnx.close()


# how to insert data using cnx: https://dev.mysql.com/doc/connector-python/en/connector-python-example-cursor-transaction.html
# how to query data using cnx: https://dev.mysql.com/doc/connector-python/en/connector-python-example-cursor-select.html

# get userid from username
# get chatroomid from chatroomname

def getUserIdFromUserName(username):
    with cursor() as cursor:
        query = "SELECT idUsers From users Where Name = %s"
        cursor.execute(query, (username))
        for (id) in cursor:
            return id
