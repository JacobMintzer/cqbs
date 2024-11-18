'use server';
import type { NextApiRequest, NextApiResponse } from 'next'
// @ts-ignore
import Pageclip from "pageclip";
const pageclip = new Pageclip(process.env.PAGECLIP_API_KEY);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        if (req.body.email.endsWith("@columbia.edu")) {
            try {
                await pageclip.send('newStudent', req.body).then((response : any) => {
                    console.log(
                        response.status,
                        response.form,
                        response.data
                    )
                    res.status(response.status).json(req.body);
                })
            }
            catch (e) {
                res.status(500).json({message: `${e}`})
            }
        }
        else
            res.status(500).json({message: `internal error`})
    } else
        res.status(404).json({message: "not available"});
}
