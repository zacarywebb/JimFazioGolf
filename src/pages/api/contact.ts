import type { NextApiRequest, NextApiResponse } from 'next';

type ContactRequestBody = {
    name: string;
    email: string;
    message: string;
};

type ResponseData = {
    success: boolean;
    message: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (!(res.method === 'POST')) {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({
            success: false,
            message: 'Method Not Allowed',
        });
    }

    const { name, email, message } = req.body as ContactRequestBody;

    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: 'Missing required fields',
        });
    }

    console.log('📩 New Contact Submission:', { name, email, message });

    return res.status(200).json({
        success: true,
        message: 'Message received successfully',
    });
}
