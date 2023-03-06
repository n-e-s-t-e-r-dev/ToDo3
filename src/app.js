const express =require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const usersRoutes = require('./routes/users.routes');
const tasksRoutes = require('./routes/tasks.routes');

initModels();
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
const PORT = 8000;

db.authenticate()
   .then(() => {
    console.log('database On')
   })
   .catch((error) => console.log(error));

db.sync({alter: true})
   .then(() => console.log('base sync'))
   .catch((error) => console.log(error));

app.use(usersRoutes)
app.use(tasksRoutes)


app.get('/', (req,res) => {
    res.send('welcome to my api')
});
app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`)
});