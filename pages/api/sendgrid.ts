import type { NextApiRequest, NextApiResponse } from "next";

import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sendgrid.send({
      to: "hey@seankerwin.dev",
      from: "contact@seankerwin.dev",
      subject: `${req.body.subject}`,
      html: `
                <strong>Name:</strong><br>${req.body.fullname}<br /><br />
                <strong>Email:</strong><br>${req.body.email}<br /><br />
                <strong>Message:</strong><br>${req.body.message}
            `,
    });
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
