import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Food AI | Home',
  description:
    'Solve the confusion of choosing where to eat with our Artificial Intelligence! Find the perfect location, price and type of food with AI recommendations of your choice. Explore unlimited flavors, with just one touch on our app. Enjoy your culinary journey with alluring certainty!',
  keywords: 'food, ai, artificial intelligence, restaurant, culinary',
  applicationName: 'Food AI',

  authors: [
    {
      name: 'Zul dev',
      url: 'https://zulvkr.com',
    },
    {
      name: 'Fany',
      url: 'https://fany.com',
    },
    {
      name: 'Udil',
      url: 'https://udil.com',
    },
    {
      name: 'Taufik Pragusga',
      url: 'https://pragusga.com',
    },
  ],
  twitter: {
    creator: '@foodai',
    site: '@foodai',
    card: 'summary_large_image',
    description:
      'Solve the confusion of choosing where to eat with our Artificial Intelligence! Find the perfect location, price and type of food with AI recommendations of your choice. Explore unlimited flavors, with just one touch on our app. Enjoy your culinary journey with alluring certainty!',
    creatorId: 'foodai',
    images: [
      {
        url: 'https://foodai.vercel.app/logo.png',
        width: 1200,
        height: 630,
        alt: 'Food AI',
      },
    ],
    siteId: 'foodai',
    title: 'Food AI',
  },
  openGraph: {
    title: 'Food AI',
    description:
      'Solve the confusion of choosing where to eat with our Artificial Intelligence! Find the perfect location, price and type of food with AI recommendations of your choice. Explore unlimited flavors, with just one touch on our app. Enjoy your culinary journey with alluring certainty!',
    url: 'https://foodai.vercel.app',
    type: 'website',
    images: [
      {
        url: 'https://foodai.vercel.app/logo.png',
        width: 1200,
        height: 630,
        alt: 'Food AI',
      },
    ],
    countryName: 'Indonesia',
    siteName: 'Food AI',
    locale: 'en_US',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex justify-between h-16 shadow-lg border-b-2 border-gray-800 px-4 md:px-20 items-center py-4 md:py-8">
        <div className="flex items-center">
          <Image src="/logo.png" alt="logo" width={35} height={35} />
          <h1 className="text-xl font-bold ml-2 md:ml-4">FOOD.AI</h1>
        </div>

        <div className="flex items-center">
          <Link href="/">Getting Started</Link>
          <Link href="/about" className="mx-4 md:mx-8">
            About Us
          </Link>
          <Link href="/contact">
            <Image src="/github.svg" alt="github" width={30} height={30} />
          </Link>
        </div>
      </nav>

      <main className="flex flex-col flex-grow items-center justify-center">
        <Button variant="outline" className="font-bold px-6 py-5">
          <Image
            src="/ai.svg"
            alt="ai"
            width={20}
            height={20}
            className="mr-2"
          />
          1.0 Version
        </Button>

        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mt-8">
          Easy to looking for your favorite food
        </h1>
        <p className="text-center text-gray-500 mt-6 px-4 md:px-20 max-w-[1000px]">
          Solve the confusion of choosing where to eat with our Artificial
          Intelligence! Find the perfect location, price and type of food with
          AI recommendations of your choice. Explore unlimited flavors, with
          just one touch on our app. Enjoy your culinary journey with alluring
          certainty!
        </p>

        <div className="flex flex-col md:flex-row mt-12">
          <Button className="px-8 py-4 font-bold bg-primary">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="px-8 py-4 font-bold ml-0 md:ml-8"
          >
            Learn More
          </Button>
        </div>
      </main>
    </div>
  );
}
