import { Button } from "antd";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

export default function BackButton({ onBack }) {
  return (
    <BiArrowBack
      onClick={onBack}
      className="text-black text-[30px] hover:cursor-pointer"
    />
  );
}
