import { Button, Form } from "antd";
import React from "react";

export default function NextButton({ onSubmit }) {
  return (
    <Button
      htmlType="button"
      onClick={onSubmit}
      className="w-full bg-linear-1 text-white"
      size="large"
    >
      Tiếp
    </Button>
  );
}
