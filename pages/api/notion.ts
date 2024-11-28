'use server';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NotionAPI } from 'notion-client';

const notion = new NotionAPI();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        const recordMap = await notion.getPage('14c3fe59819b8061a1aee20f6d575a02');
        res.status(200).json(recordMap);
    }
}
