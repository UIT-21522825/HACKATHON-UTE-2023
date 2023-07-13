import React from "react";
import NextButton from "./NextButton";
import BackButton from "./BackButton";
import { Button } from "antd";

export default function FormCareerWrapper({
  Icon = () => "",
  title,
  description,
  children,
  onSubmit,
  onBack,
}) {
  return (
    <div className="w-full">
      <BackButton onBack={onBack} />
      <div className="flex flex-col items-center">
        <Button className="bg-linear-1 rounded-full p-1 h-[50px] w-[50px] flex items-center justify-center mb-4">
          <Icon />
        </Button>
        <h1 className="font-bold text-2xl">{title}</h1>
        <h2 className="text-gray-400 mb-5" dangerouslySetInnerHTML={{__html: description}}></h2>
      </div>
      {children}
      <NextButton onSubmit={onSubmit} />
    </div>
  );
}
