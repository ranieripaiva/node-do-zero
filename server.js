/*import { createServer } from 'node:http'

const server = createServer((request, response) => {
    console.log('Olá mundo!')
    response.write('Olá mundo!')

    return response.end()
})

server.listen(3333)*/

import { fastify } from 'fastify'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()

//const database = new DatabaseMemory()
const database = new DatabasePostgres()

server.post('/videos', async (request, reply) => {
    const {title, description, duration} = request.body

    await database.create({
        title: title,
        description: description,
        duration: duration,
    })
    //return 'Olá mundo!'

    //console.log(database.list())
    return reply.status(201).send()
})

server.get('/videos', async (request) => {
    //return 'Olá mundo!'
    const search = request.query.search
    console.log(search)
    const videos = await database.list(search)

    return videos

})

server.put('/videos/:id', async (request, reply) => {
    //return 'Olá mundo!'
    const videoId = request.params.id
    const {title, description, duration} = request.body
    const video = await database.update(videoId, {
        title, description, duration
    })
    return reply.status(204).send()
})

server.delete('/videos/:id', async (request, reply) => {
    const videoId = request.params.id

    await database.delete(videoId)

    return reply.status(204).send()
})

server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333
})
//https://github.com/ranieripaiva/node-do-zero.git