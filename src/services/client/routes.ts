import { Request, Response } from 'express'
import { pool } from '../../queries'

export default [
    {
        path: '/clients/:id',
        method: 'get',
        handler: async (req: Request, res: Response) => {
            pool.query(`SELECT * FROM client WHERE id_main_user = '${req.params.id}'`, (error, results) => {
                if (error) {
                    throw error
                }
                res.status(200).json(results.rows)
            })
        }
    },
    {
        path: '/client/:id',
        method: 'get',
        handler: async (req: Request, res: Response) => {
            pool.query(`SELECT * FROM client WHERE id_client = ${req.params.id}`, (error, results) => {
                if (error) {
                    throw error
                }
                res.status(200).json(results.rows)
            })
        }
    },
    {
        path: '/client/:id',
        method: 'put',
        handler: async (req: Request, res: Response) => {

            const name = req.body.name
            const phone = req.body.phone
            const street = req.body.street
            const num = req.body.num
            const city = req.body.city
            const country_state = req.body.country_state
            const country = req.body.country
            const postalcode = req.body.postalcode

            pool.query(`UPDATE client
                        SET name = '${name}',
                            phone = '${phone}',
                            street = '${street}',
                            num = '${num}',
                            city = '${city}',
                            country_state = '${country_state}',
                            country = '${country}',
                            postalCode = '${postalcode}'
                        WHERE id_client = ${req.params.id}`, (error, results) => {
                if (error) {
                    throw error
                }
                res.status(200).json(results.rows)
            })
        }
    },
    {
        path: '/client/:id',
        method: 'post',
        handler: async (req: Request, res: Response) => {

            const name = req.body.name
            const phone = req.body.phone
            const id_main_user = req.params.id
            const street = req.body.street
            const num = req.body.num
            const city = req.body.city
            const country_state = req.body.country_state
            const country = req.body.country
            const postalcode = req.body.postalcode

            pool.query(`INSERT INTO client(name, phone, id_main_user, street, num, city, country_state, country, postalCode)
                        values('${name}', '${phone}', '${id_main_user}', '${street}', '${num}', '${city}', '${country_state}', '${country}', '${postalcode}')`, (error, results) => {
                if (error) {
                    throw error
                }
                res.status(200).json(results.rows)
            })
        }
    },
    {
        path: '/client/:id',
        method: 'delete',
        handler: async (req: Request, res: Response) => {

            pool.query(`DELETE FROM client WHERE id_client = ${req.params.id}`, (error, results) => {
                if (error) {
                    throw error
                }
                res.status(200).json(results.rows)
            })

        }
    },
]