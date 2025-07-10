import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import wildcardLogo from '/WIldcardLabs.png';

export function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const phrases = [
    'We build ENS tools',
    'We simplify ENS records',
    'We empower ENS users',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div className="relative bg-green-500/5">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-300 to-green-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-4xl pt-24 pb-32 sm:pt-32 sm:pb-40 lg:pt-40 lg:pb-48 text-center">
        <img src={wildcardLogo} alt="Wildcard Labs Logo" className="h-24 mx-auto mb-8" />
        <div className="relative h-20 mb-4 overflow-hidden">
            {phrases.map((phrase, index) => (
              <motion.h1
                key={index}
                className="absolute w-full text-4xl font-bold tracking-tight text-white sm:text-6xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: index === currentPhrase ? 1 : 0, y: index === currentPhrase ? 0 : -30 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
              >
                {phrase}
              </motion.h1>
            ))}
        </div>
        <p className="mt-6 text-lg leading-8 text-gray-200">
          We’re the dev crew behind Records.xyz & tools like ENSRedirect, AvatarSync, Wildcards Protocol & cross-chain resolvers, making ENS record management easy, beautiful & built for today’s multi-chain world.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://github.com/wildcardlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Explore our GitHub
          </a>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-green-300 to-green-500 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
}
