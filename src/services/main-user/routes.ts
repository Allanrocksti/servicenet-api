import { Request, Response } from 'express'
import { pool } from '../../queries'
import { doCreateUserWithEmailAndPassword } from '../../firebase/auth';

export default [
    {
        path: '/main_user/:id',
        method: 'get',
        handler: async (req: Request, res: Response) => {
            pool.query(`SELECT * FROM main_user WHERE id_firebase = '${req.params.id}'`, (error, results) => {
                if (error) {
                    throw error
                }
                res.status(200).json(results.rows)
            })
        }
    },
    {
        path: '/main_user',
        method: 'post',
        handler: async (req: Request, res: Response) => {

            const shouldAbort = (err: any) => {
                if (err) {
                    pool.query('ROLLBACK', err => {
                        if (err) {
                            console.error('Error rolling back client', err.stack)
                        }
                        res.status(500).json(err)
                    })
                }
                return !!err
            }

            const name = req.body.name
            const email = req.body.email
            const password = req.body.password

            pool.query(`BEGIN`, (error, results) => {
                shouldAbort(error)
                doCreateUserWithEmailAndPassword(email, password)
                    .then(res => {
                        console.log(res.user);
                        console.log("###########################################");
                        console.log(res);
                        
                        /* pool.query(`INSERT INTO main_user(id_firebase, name, email)
                                    VALUES('${res.uid}', '${name}', '${email}');`, (error, results) => {
                            if (error) {
                                throw error
                            }
                            res.status(200).json(results.rows)
                        }) */
                    }).catch(err => {
                        console.log(err);
                        shouldAbort(err)
                    })
            })

            res.status(200)
        }
    }
]