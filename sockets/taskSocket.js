const Task = require('../models/Task');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('Nouveau client connecté');

    socket.on('createTask', async (taskData) => {
      const task = new Task(taskData);
      await task.save();
      io.emit('taskCreated', task);
    });

    socket.on('disconnect', () => {
      console.log('Client déconnecté');
    });
  });
};
