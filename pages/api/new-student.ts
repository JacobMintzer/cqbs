import type { NextApiRequest, NextApiResponse } from 'next';
import cqbsIcon from '@/public/cqbsFavicon.png';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  var email: string = req?.body?.email ?? '';
  if (!email.toLowerCase().endsWith('@columbia.edu')) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  try {
    const pageclipResponse: Response = await fetch(
      `https://api.pageclip.co/data/new-student-email`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${btoa(String(process.env.PAGECLIP_API_KEY))}:`,
        },

        body: JSON.stringify({
          email: email,
        }),
      }
    );
    if (!pageclipResponse.ok) {
      console.error('Pageclip API request failed with status:', pageclipResponse.status);
      console.error(await pageclipResponse.text());
      return res.status(pageclipResponse.status).json({ error: 'API request failed' });
    }
    var currentTime = new Date();
    var discordEmbed = {
      id: +currentTime,
      title: 'New Student Signup',
      description: `A new student has signed up from the website\n[${email}](mailto:${email})`,
      color: 2303467,
      fields: [],
      timestamp: currentTime.toISOString(),
    };
    const response: Response = await fetch(
      'https://discord.com/api/webhooks/1424148419844505801/rPABBbic-tyceHU_pEX_JlZiqJbPU_5yPW_jIUTxpL_e5aX0-V7lQhEHrbWGpz6fESJx',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          embeds: [discordEmbed],
          username: 'cqbs new student signup bot',
          avatar_url:
            process.env.NODE_ENV === 'production'
              ? cqbsIcon.src
              : 'https://www.cqbs.info/cqbsFavicon.png',
        }),
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: 'API request failed' });
    }

    const data = await response.text();
    console.log('API response:', data);
    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
