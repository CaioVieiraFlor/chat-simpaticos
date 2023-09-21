import express from 'express'
import { createServer } from 'http'
import { Server } from "socket.io";
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/assets/emoji.js', (req, res) => {
    res.setHeader('Content-Type', 'text/javascript');
    res.sendFile(__dirname + '/assets/emoji.js');
});

const server = createServer(app)
const io = new Server(server)
io.on('connection', (socket) => {
    console.log('Um usário se conectou')

    socket.emit('conectado', socket.id)

    socket.on('joinChat', (room) => {
        socket.join(room)
    })

    socket.on('chatMessage', ({ message, room }) => {
        io.to(room).emit('message', message)
    })

    socket.on('disconnect', () => {
        console.log('Um usuário se desconectou')
    })
})

const port = process.env.PORT || 3000
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})