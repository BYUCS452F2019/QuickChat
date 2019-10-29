import db as libdb
import pprint

u = 'jordan'
libdb.addUser(u)
print('user', u, 'added')

id = libdb.getUserIdFromUserName('jj')
print('id is', id)

c = 'chat1'
libdb.addChatroom(c)
print('adding chat', c)


libdb.addUserToChatroom(u,c)
print('added', u, 'to chat', c)

chatrooms = libdb.getChatroomsForUser(u)
print('getChatroomsForUser returned', chatrooms)

m = 'this is a message'
libdb.addMessage(u, c, m+'1')
libdb.addMessage(u, c, m+'2')
libdb.addMessage(u, c, m+'3')
print('added 3 dummy messages for', u, c)

rm = libdb.getMessagesInChatroom(c)
print('libdb.getMessagesInChatroom(c) returned:')
pprint.pprint(rm)