import Head from "next/head";
import Hero from "../components/Hero";
import OurMission from "../components/OurMission";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Space website</title>
        <meta name="description" content="Space themed website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <OurMission />
      </div>
    </div>
  );
}
