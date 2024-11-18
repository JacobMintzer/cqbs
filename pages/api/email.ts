'use server';
import type { NextApiRequest, NextApiResponse } from 'next';

const email = btoa(String(process.env.NEXT_PUBLIC_CONTACT_EMAIL));

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        res.status(200).json({email: email});
    }
}
