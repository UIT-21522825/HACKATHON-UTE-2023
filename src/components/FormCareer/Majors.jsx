import { Form, Input, message } from "antd";
import React from "react";
import { AiOutlineRise } from "react-icons/ai";
import NextButton from "./NextButton";
import FormCareerWrapper from "./FormCareerWrapper";
import { Axios } from "../../service/axios";

export default function Majors({ form, onSubmit, onBack }) {
  const onSubmitMajor = () => {
    if (!form.getFieldValue("Ngành học"))
      return message.info("Vui lòng nhập ngành học của bạn");
    // const query = `Liệt kê 4 mức lương kèm theo vị trí của ngành ${major}, mỗi vị trí đặt giữa dấu nháy kép. Các con có đơn vị triệu VND/tháng và không hiển thị đơn vị và để trong dấu ngoặc đơn`;
    // Axios.post("/api/chatgpt/chat", {
    //   message: query,
    // }).then((res) => {
    //   console.log(res.data);
    // });
    onSubmit();
  };
  return (
    <FormCareerWrapper
      title={"Ngành học của bạn ?"}
      description={
        "Bạn cung cấp cho chúng mình nghành học hiện tại của bạn nhé"
      }
      Icon={() => <AiOutlineRise className="text-white flex text-[30px]" />}
      onBack={onBack}
      onSubmit={onSubmitMajor}
    >
      <Form.Item
        name={"Ngành học"}
        rules={[ 
          {
            required: true,
            message: "Vui lòng nhập ngành học của bạn",
          },
        ]}
        className="font-bold text-center"
      >
        <Input
          onKeyDown={(e) => (e.key === "Enter" ? onSubmitMajor() : null)}
          className="shadow border-gray-400 rounded w-[300px] text-grey-darker font-normal focus:border-purple-600"
        ></Input>
      </Form.Item>
    </FormCareerWrapper>
  );
}
