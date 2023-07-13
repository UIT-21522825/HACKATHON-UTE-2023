import { Form, Input } from "antd";
import React from "react";
import {AiOutlineRise } from "react-icons/ai";
import NextButton from "./NextButton";

export default function Subject({ onSubmit = () => {} }) {
  return (
    <div className="w-[300px] max-w-4xl m-auto ">
      <div className="flex flex-col items-center justify-center">
        <button className="bg-linear-1 rounded-full p-1 h-[50px] w-[50px] flex items-center justify-center mb-4">
          <AiOutlineRise className="text-white flex text-[30px]" />
        </button>
        <h1 className="font-bold text-2xl">Các câu hỏi về môn học</h1>
        <h2 className="text-gray-400">
        Việc nhập thông tin môn học bạn giỏi và yêu thích sau có thể giúp định hướng nghề nghiệp một cách chính xác và hiệu quả hơn.{" "}
        </h2>
      </div>
      <Form.Item
        label="Môn học yêu thích"
        name={"faSubject"}
        rules={[
          {
            required: true,
            message: "Vui lòng nhập môn học yêu thích",
          },
        ]}
        className="font-bold"
      >
        <Input className="shadow border-gray-400 rounded w-[300px] text-grey-darker font-normal focus:border-purple-600"></Input>
      </Form.Item>

      <Form.Item
        label="Môn học bạn giỏi"
        name={"gooSubject"}
        rules={[
          {
            required: true,
            message: "Vui lòng nhập môn học bạn giỏi",
          },
        ]}
        className="font-bold"
      >
        <Input className="shadow border-gray-400 rounded w-[300px] text-grey-darker font-normal focus:border-purple-600"></Input>
      </Form.Item>

      <NextButton onSubmit={onSubmit} />
    </div>
  )
}
