'use client'

import React from "react";
import Link from "next/link";

const Video = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
      <div
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        //   background: 'white',
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        // className="bg-[#808080] text-white hover:bg-white hover:text-black"
      >
        <p style={{ fontSize: 200, fontFamily: "initial",color: 'white'}} >ZEWAR</p>
        {/* <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 50, marginBottom: 10}}>
            <div className="hover:underline">
                New In
            </div>
            <div className="hover:underline">
                Jewelry
            </div>
            <div className="hover:underline">
                Watches
            </div>
            <div className="hover:underline">
                Accessories
            </div>
            <div className="hover:underline">
                Decorations
            </div>
            <div className="hover:underline">
                Featured
            </div>
            <div className="hover:underline">
                Gifts
            </div>
            <div className="hover:underline">
                About Us
            </div>
        </div> */}
      </div>
      <div >
        <video className="w-full" loop autoPlay muted>
          <source src="assets/bgvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
