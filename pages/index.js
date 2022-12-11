import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import OurMission from '../components/OurMission';
import Benefits from '../components/Benefits';
import OurSponsors from '../components/OurSponsors';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Home | Atlacore</title>
                <meta property="og:url" content="https://space-themed-website.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Atlacore - Space Website" />
                <meta
                    property="og:description"
                    content="A space themed website made with Next.js framework."
                />
                <meta
                    name="og:image"
                    content="https://space-themed-website.vercel.app/images/main_image.webp"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="space-themed-website.vercel.app" />
                <meta property="twitter:url" content="https://space-themed-website.vercel.app/" />
                <meta name="twitter:title" content="Atlacore - Space Website" />
                <meta
                    name="twitter:description"
                    content="A space themed website made with Next.js framework."
                />
                <meta
                    name="twitter:image"
                    content="https://space-themed-website.vercel.app/images/main_image.webp"
                />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Space themed website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Hero />
                <OurSponsors />
                <Benefits />
                <OurMission />
            </div>
        </div>
    );
}
