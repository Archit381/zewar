'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import supabase from "../../supabase";
import { MdOutlineCurrencyRupee } from "react-icons/md";

interface ZewarItem {
  id: string;
  category: string;
  type: string;
  title: string;
  price: string;
  description: string;
  image: string;
}

const Page = () => {
  const [data, setData] = useState<ZewarItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data: zewar_table, error } = await supabase
          .from("zewar_table")
          .select("*")
          .eq("category", "accessories");

        if (zewar_table) {
          setData(zewar_table);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ background: "#f0eee4" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          background: "#f6f6f6",
        }}
      >
        <div
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <p style={{ fontSize: 150, fontFamily: "initial", color: "black" }}>
            ZEWAR
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 50,
              marginBottom: 10,
            }}
          >
            <Link href="/recommendedProducts">
              <div className="hover:underline">For You</div>
            </Link>
            <Link href="/jewelry">
              <div className="hover:underline">Jewelry</div>
            </Link>
            <Link href="/watches">
              <div className="hover:underline">Watches</div>
            </Link>
            <Link href="/necklaces">
              <div className="hover:underline">Necklaces</div>
            </Link>
            <Link href="/bracelets">
              <div className="hover:underline">Bracelets</div>
            </Link>
            <Link href="/earrings">
              <div className="hover:underline">Earrings</div>
            </Link>
            <Link href="/aboutUs">
              <div className="hover:underline">About Us</div>
            </Link>
          </div>
        </div>
        <div style={{ alignSelf: "flex-end" }}>
          <Image src="/assets/6.avif" alt="banner" width={1000} height={1000} />
        </div>

        <div className="container mx-auto max-w-7xl px-6 flex-grow -mt-30 ">
          <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow -mt-72 z-20">
            <div style={{ display: "flex", fontWeight: "bold" }}>
              <Link href="/">
                <div
                  style={{ marginRight: 10 }}
                  className="hover:text-slate-700"
                >
                  Home
                </div>
              </Link>
              <div>|</div>
              <Link href="/accessories">
                <div
                  style={{ marginLeft: 10 }}
                  className="hover:text-slate-700"
                >
                  Accessories
                </div>
              </Link>
            </div>

            <div style={{ marginTop: 20 }}>
              <p
                style={{
                  fontSize: 40,
                  fontFamily: "initial",
                  whiteSpace: "nowrap",
                  margin: 0,
                }}
              >
                Accessories
              </p>

              <p style={{ marginTop: 20, width: 600, fontSize: 12 }}>
                Express yourself with our accessories range. From statement
                handbags and phone cases to playful pens and keyrings, our
                accessories with crystals make for brilliant gifts for yourself
                or a loved one.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 flex-grow mt-10 bg-[#f0eee4]">
        <div className=" bg-white justify-center items-center flex p-3">
        Filter Options
        </div>

        <div className="mt-5 ml-5">{data?.length} Results</div>

        <div className="mt-5 flex flex-wrap gap-1 bg-[#f0eee4]">
          {data.map((item, index) => (
            <Link key={item.id} href={`/detailedPage?id=${item.id}`}>
              <div
                key={index}
                className="p-1"
                style={{ width: 305, background: "white" }}
              >
                <Image src={item?.image} alt="" height={250} width={299} />
                <div className="px-5">
                  <p style={{ fontSize: 15 }}>{item?.title}</p>
                  <p
                    style={{
                      fontSize: 12,
                      color: "gray",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      WebkitLineClamp: 1,
                    }}
                  >
                    {item?.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "baseline",
                    }}
                  >
                    <p style={{ fontSize: 15, marginTop: 25 }}>{item?.price}</p>
                    <MdOutlineCurrencyRupee />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
