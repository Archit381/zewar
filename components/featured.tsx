import Image from "next/image";
import Link from "next/link";
import React from "react";

const featured = () => {
  return (
    <div className=" flex justify-center items-center flex-col bg-white">
      <div
        style={{
          paddingTop: 50,
          fontSize: 50,
          fontFamily: "initial",
          fontWeight: "normal",
        }}
      >
        Featured Collections
      </div>

      <div style={{ display: "flex", gap: 100, marginTop: 60 }}>
        <div>
          <Link href="/necklaces">
            <Image src="/assets/1.avif" alt="banner" width={500} height={350} />
          </Link>
          <div style={{ marginTop: 30, fontFamily: "initial", fontSize: 30 }}>
            Timeless Necklaces
          </div>

          <p
            style={{
              marginTop: 30,
              fontFamily: "inherit",
              maxWidth: 500,
              marginBottom: 30,
            }}
          >
            Channeled into sculptural forms, fluid crystals are a beautiful
            expression of Swarovski savoir-faire. Take the modern route to
            styling with minimalist chains that gleam with your every move.
          </p>

          <Link href="/necklaces" className="text-inherit underline">
            Shop necklaces
          </Link>
        </div>
        <div>
          <Link href="/bracelets">
            <Image src="/assets/2.avif" alt="banner" width={500} height={250} />
          </Link>
          <div style={{ marginTop: 30, fontFamily: "initial", fontSize: 30 }}>
            Chic Bracelets
          </div>

          <p
            style={{
              marginTop: 30,
              fontFamily: "inherit",
              maxWidth: 500,
              marginBottom: 30,
            }}
          >
            An accumulation of cuts in a palette of bright whites and marine
            blues delivers a radiant refresh, while Tennis silhouettes enrich
            round-the-clock ensembles with subtle elegance.
          </p>

          <Link href="/bracelets" className="text-inherit underline">
            Shop bracelets
          </Link>
        </div>
        <div>
          <Link href="/earrings">
            <Image src="/assets/3.avif" alt="banner" width={500} height={250} />
          </Link>
          <div style={{ marginTop: 30, fontFamily: "initial", fontSize: 30 }}>
            Bold Earrings
          </div>

          <p
            style={{
              marginTop: 30,
              fontFamily: "inherit",
              maxWidth: 500,
              marginBottom: 30,
            }}
          >
            Full-cut facets in high-octane hues reinterpret crystals with
            contemporary drama. A striking display of Swarovski’s mastery of
            light, statement hoops inspire you to shine your brightest.
          </p>

          <Link href="/earrings" className="text-inherit underline">
            Shop earrings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default featured;
