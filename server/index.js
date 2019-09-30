const express = require('express')
const app = (express())
const port = (3001)
app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));

const mc = require('./controller/message_controller')

const messageBaseUrl = '/api/messages'
app.post(messageBaseUrl, mc.create)
app.get(messageBaseUrl, mc.read)
app.put(`${messageBaseUrl}/:id`, mc.update)
app.delete(`${messageBaseUrl}/:id`, mc.delete)


app.listen(port, () => console.log("yeeeh boy",port))