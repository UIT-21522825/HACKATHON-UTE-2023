import { Form, Input } from "antd";
import React from "react";
import {AiOutlineRise } from "react-icons/ai";
import NextButton from "./NextButton";
import BackButton from "./BackButton";
import FormCareerWrapper from "./FormCareerWrapper";

export default function Age({ onSubmit, onBack }) {
  return (
    <FormCareerWrapper
      onBack={onBack}
      onSubmit={onSubmit}
      Icon={() => <AiOutlineRise className="text-white flex text-[30px]" />}
      title={"Bạn bao nhiêu tuổi?"}
      description={`Chọn tuổi của bạn để cá nhân hóa nghề nghiệp`}
    >
      <Form.Item
        name={"Tuổi"}
        rules={[
          {
            required: true,
            message: "Vui lòng nhập tuổi của bạn",
          },
        ]}
        className="font-bold text-center"
      >
        <Input
          onKeyDown={(e) => (e.key === "Enter" ? onSubmit() : null)}
          className="shadow border-gray-400 rounded w-[300px] text-grey-darker font-normal focus:border-purple-600"
        ></Input>
      </Form.Item>
    </FormCareerWrapper>
  );
}
