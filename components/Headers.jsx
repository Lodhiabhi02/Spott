import Link from "next/link";
import Image from "next/image";
import React from "react";

const Headers = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/spott.png"
              alt="Spott logo"
              width={500}
              height={500}
              className="h-11 w-auto"
              priority
            />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Headers;
