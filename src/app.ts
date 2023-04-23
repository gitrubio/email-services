import express from 'express'
import emailRoutes from './routes/email.routes'
import morgan from 'morgan'
import { config } from './config';

const app = express()
/****midellware****/
app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.use(morgan('dev'))
//*******/
app.use('/api',emailRoutes)
app.listen(config.port,()=>{
    console.log(`servidor corriendo en puerto [ ${config.port} ]`)
})