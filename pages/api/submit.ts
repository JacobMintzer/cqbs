'use server';
import type { NextApiRequest, NextApiResponse } from 'next'
// @ts-ignore
import Pageclip from "pageclip";
import api from "../../config.json";
const pageclip = new Pageclip(api.pageClipAPI);

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
