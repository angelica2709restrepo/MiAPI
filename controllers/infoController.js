import mysql from 'mysql2/promise'
import db from '../config/database.js';
import faker from "faker"

export default class infoController{
    static async index(req,res){
        let connection;
        try{
            connection=await mysql.createConnection(db)
            const [result]=await connection.execute("SELECT * FROM pou")
            console.log(result)
            res.json(result)
        }
        catch(error){
            res.status(500).json({'error':error.message})
        }
        finally{
            if (connection){
                await connection.end()
            }
        }
    }
    static async store(req,res){
        let connection;
        try{
            const {titulo,descripcion,img}=req.body
            connection=await mysql.createConnection(db)
            const [enviar]=await connection.execute("INSERT INTO pou(titulo,descripcion,img) VALUES (?,?,?)",[titulo,descripcion,img])
            console.log(enviar)
        }
        catch(error){
            res.status(500).json({'error':error.message})
        }
        finally{
            if (connection){
                await connection.end()
            }
        }
    }
    static async details(req,res){
        let connection;
        try{
            const idM=req.params.id
            connection=await mysql.createConnection(db)
            const [enviar]=await connection.execute("SELECT * FROM pou WHERE id=?",[idM])
            console.log(enviar)
            res.status(200).json(enviar)
        }
        catch(error){
            res.status(500).json({'error':error.message})
        }
        finally{
            if (connection){
                await connection.end()
            }
        }
    }
}