from mysql.connector import connection

config = {
  'user': 'QuickChat',
  'password': 'QuickChat',
  'host': '127.0.0.1',
  'database': 'QuickChat',
  'raise_on_warnings': True
}

cnx = connection.MySQLConnection(**config)

# how to insert data using cnx: https://dev.mysql.com/doc/connector-python/en/connector-python-example-cursor-transaction.html
# how to query data using cnx: https://dev.mysql.com/doc/connector-python/en/connector-python-example-cursor-select.html

cnx.close()
