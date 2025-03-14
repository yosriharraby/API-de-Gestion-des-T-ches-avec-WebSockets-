const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const connectDB = require('./config/db');
const authRoutes = require('./routes/UserRoutes');
const taskRoutes = require('./routes/authRoutes');
require('dotenv').config();
const app = express();
const server = http.createServer(app);
const io = socketIo(server);


connectDB();


app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);


require('./sockets/taskSocket')(io);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(` Serveur démarré sur le port ${PORT}`));
