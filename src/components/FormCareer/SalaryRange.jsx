import React from "react";
import FormCareerWrapper from "./FormCareerWrapper";
import { Form } from "antd";
import { CustomSlider } from "../antd-custom/CustomSlider";
import { AiOutlineRise } from "react-icons/ai";

const marks = {
  1: "Mức lương khởi đầu",
  9: "Mức lương trung",
  37: "Mức lương khởi đầu",
  100: {
    style: {
      color: "#f50",
    },
    label: <strong>100°C</strong>,
  },
};

export default function SalaryRange({ form, onBack, onSubmit }) {
  const onFinalSubmit = () => {
    form.submit();
    onSubmit();
  };

  return (
    <FormCareerWrapper
      title={"Khoảng lương mong muốn"}
      description={
        "Cũng là một điều rất quan trọng cho cuộc sống lâu dài. Mức lương tính theo <b>triệu đồng/tháng</b>"
      }
      Icon={() => <AiOutlineRise className="text-white flex text-[30px]" />}
      onBack={onBack}
      onSubmit={onFinalSubmit}
      
    >
      <CustomSlider range step={1} defaultValue={[1, 100]} />
    </FormCareerWrapper>
  );
}
