import type { NextApiRequest, NextApiResponse } from "next";

const { MAILCHIMP_DC, MAILCHIMP_LIST_ID, MAILCHIMP_API_KEY } = process.env;

export default async function subscribe(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Validate props
  // @TODO Redirect to specific email landing page for either "failure" or "success"
  if (!MAILCHIMP_DC || !MAILCHIMP_LIST_ID || !MAILCHIMP_API_KEY)
    res.redirect("/#failed");
  // if (!MAILCHIMP_DC) throw "Error: `MAILCHIMP_DC` is required";
  // if (!MAILCHIMP_LIST_ID) throw "Error: `MAILCHIMP_LIST_ID` is required";
  // if (!MAILCHIMP_API_KEY) throw "Error: `MAILCHIMP_API_KEY` is required";

  // Validate email, @TODO validate email correctly
  if (!req.query?.email) res.redirect("/#failed");
  // throw "Error: `email` is required";

  const { email } = req.query;
  const url = `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members/`;

  await fetch(url, {
    mode: "no-cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `api_key ${MAILCHIMP_API_KEY}`,
    },
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",
    }),
  });

  res.redirect("/#subscribed");
}
