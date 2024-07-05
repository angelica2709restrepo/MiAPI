import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './config/routes.js'

const app=express()
const corsOption={
    origin:'*'//'localhost:3000'
}

//configuracion de middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors(corsOption));
app.use('/api',routes);



app.get('/',(req,res)=>{
    res.send('Bienvenidos a mi API');
});

const PORT=process.env.PORT || 8000;

const server=app.listen(PORT,()=>{
    console.log(`Servidor corriendo en puerto: ${server.address().port}`)
});

export default app;