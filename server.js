import express from 'express'
import { createServer } from 'http'
import socketIo from 'socket.io'

const app = express()
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

const server = createServer(app)
const io = socketIo(server)
io.on('connection', (socket) => {
    console.log('Um usário se conectou')

    socket.on('disconnect', () => {
        console.log('Um usuário se desconectou')
    })

    socket.on('chat message', (message) => {
        io.emit('chat message', message)
    })
})

const port = process.env.PORT || 3000
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})