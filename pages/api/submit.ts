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
        try {
            await pageclip.send('newStudent', req.body).then((response : any) => {
                console.log(
                    response.status, // 200
                    response.form, // 'mailinglist'
                    response.data    // [Item({email: 'john@omgunicorns.com'})]
                )
                res.status(response.status).json(response.data);
            })
        }
        catch (e) {
            res.status(500).json({message: `${e}`})
        }
    } else
        res.status(404).json({message: "not available"});
}
