"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import supabase from "@/supabase";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Button } from "@nextui-org/button";

const Page = ({ searchParams }) => {
  const id = searchParams.id;
  const [data, setData] = useState([]);
  const [size, setSize] = useState("s");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data: zewar_table, error } = await supabase
          .from("zewar_table")
          .select("*")
          .eq("id", id);

        if (zewar_table[0]) {
          console.log(zewar_table[0]);
          setData(zewar_table[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const sizes = ["s", "m", "l", "xl"];

  const handleSizeSelect = (selectedSize) => {
    setSize(selectedSize);
  };

  return (
    <div
      style={{
        display: "flex",
        background: "#f0eee4",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
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

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 40,
          marginTop: 40,
        }}
      >
        <div className="p-1" style={{ background: "white" }}>
          <Image src={data?.image} alt="" height={500} width={500} />
        </div>
        <div
          style={{ background: "white", height: 400, width: 500, padding: 30 }}
        >
          <p
            style={{ fontFamily: "initial", fontSize: 20, fontWeight: "bold" }}
          >
            {data.title}
          </p>
          <p style={{ fontFamily: "initial", fontSize: 20 }}>
            {data.description}
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
            }}
          >
            <p style={{ marginTop: 20, fontSize: 30 }}>{data.price} </p>

            <MdOutlineCurrencyRupee size={20} />
          </div>

          <p style={{ fontFamily: "initial", fontSize: 15 }}>
            MRP (incl. of all taxes)
          </p>

          <p
            style={{
              fontFamily: "initial",
              fontWeight: "bold",
              fontSize: 15,
              marginTop: 15,
              marginBottom: 10,
            }}
          >
            Select Size
          </p>
          <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            {sizes.map((s) => (
              <div
                key={s}
                style={{
                  display: "flex",
                  border: `2px solid ${size === s ? "black" : "gray"}`,
                  maxWidth: 70,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="px-10 py-1 hover:border-black hover:cursor-pointer"
                onClick={() => handleSizeSelect(s)}
              >
                <p>{s.toUpperCase()}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              background: "gray",
              height: 1,
              marginTop: 40,
            }}
          />

          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              width: "100%",
            }}
          >
            <Button variant="bordered" color="default" style={{ width: "100%" }}>
              Add to Bag
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
