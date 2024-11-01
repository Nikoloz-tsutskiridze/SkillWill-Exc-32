"use client";

import { useEffect } from "react";

const Bootloader = () => {
  useEffect(() => {
    console.log("Bootloader initialized");
  }, []);

  return <div>Loading resources...</div>;
};

export default Bootloader;
