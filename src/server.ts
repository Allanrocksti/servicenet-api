import http from 'http'
import express from 'express'
import routes from './services'
import middleware from './middleware'
import errorHandlers from './middleware/errorHandlers'
import { environment } from '../environment/environment'
import { applyMiddleware, applyRoutes } from './utils'


process.on ('uncaughtException', e => { 
    console.log(e) 
    process.exit(1) 
}) 
process.on ('unhandledRejection', e => { 
    console.log(e) 
    process.exit(1) 
})

const router = express()
applyMiddleware(middleware, router)
applyRoutes(routes, router)
applyMiddleware(errorHandlers, router)

const PORT = environment.server.port
const server = http.createServer(router)

server.listen(PORT, () => {
    console.log(`O servidor está rodando em: http://localhost:${PORT}`)
})