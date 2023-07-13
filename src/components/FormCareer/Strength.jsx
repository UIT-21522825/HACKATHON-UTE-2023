import { Button, Form, Input, message } from "antd";
import { CheckboxWithButton } from "../antd-custom/CustomCheckbox/custom";
import { useState, useRef } from "react";
import { AiOutlineRise } from "react-icons/ai";
import FormCareerWrapper from "./FormCareerWrapper";
import { BiSave } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import { CustomMessage } from "../antd-custom/CustomMessage";
import { Checkbox, Row, Col } from "antd";
import { AiFillCloseCircle } from "react-icons/ai";

const fakeResult = `"Năng động"
"Sáng tạo"
"Nhiệt tình"
"Kiên nhẫn"`;

const quotes = fakeResult.match(/"([^"]*)"/g) || [];

export default function Strength({ onSubmit, onBack }) {
  const [value, setValue] = useState([]);
  const [options, setOptions] = useState(
    quotes.map((item) => ({
      label: item.replace(/['"]+/g, ""),
      value: item.replace(/['"]+/g, ""),
      id: uuidv4(),
    }))
  );
  const inputRef = useRef(null);

  const onChange = (checkedValues) => {
    setValue(checkedValues);
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter" && inputRef.current.input.value !== "") {
      const newValue = inputRef.current.input.value;
      if (options.findIndex((option) => option.value === newValue) !== -1)
        return CustomMessage(
          { content: "Lựa chọn đã tồn tại, vui lòng thử lại sau!" },
          "info"
        );
      // setValue([...value, newValue]);
      setOptions([
        ...options,
        { value: newValue, label: newValue, id: uuidv4() },
      ]);
    }
  };

  const handleRemoveOption = (id) => {
    const newOptions = options.filter((item) => item.id !== id);
    const newValues = value.filter((item) => item !== id);
    setOptions(newOptions);
    setValue(newValues);
  };

  return (
    <FormCareerWrapper
      Icon={() => <AiOutlineRise className="text-white flex text-[30px]" />}
      title={"Điểm mạnh"}
      description={"Điều mà bạn cảm thấy làm mà bạn thấy tự tin"}
      onBack={onBack}
      onSubmit={onSubmit}
    >
      <div className="flex">
        <Input
          ref={inputRef}
          placeholder="Thêm điểm mạnh của bạn vào đây"
          onKeyDown={handleOnKeyDown}
          className="mb-4"
          maxLength={15}
        ></Input>
        <Button>
          <BiSave />
        </Button>
      </div>
      <Form.Item name={"Điểm mạnh"}>
        <Checkbox.Group
          className="grid grid-cols-2 md:grid-cols-4 w-full gap-3 text-lg font-medium"
          onChange={onChange}
        >
          {options.map((row) => {
            if (value.includes(row.value))
              return (
                <div key={row.id} className="relative">
                  <Row className="container border-2 outline outline-2 outline-primary border-primary rounded-lg bg-white w-full shadow h-12  flex align-center">
                    <Checkbox checked className="w-full p-2" value={row.value}>
                      {row.label}
                    </Checkbox>
                  </Row>
                </div>
              );
            return (
              <div key={row.id} className="relative">
                <Row className="container border-2 hover:border-primary rounded-lg border-primary/[0.5] bg-white w-full shadow h-12  flex align-center">
                  <Checkbox className="w-full p-2" value={row.value}>
                    {row.label}
                  </Checkbox>
                  <AiFillCloseCircle
                    onClick={() => handleRemoveOption(row.id)}
                    className="absolute top-[-5px] right-[-5px] text-[20px] text-red-600 hover:opacity-80 hover:cursor-pointer"
                  />
                </Row>
              </div>
            );
          })}
        </Checkbox.Group>
      </Form.Item>
    </FormCareerWrapper>
  );
}
