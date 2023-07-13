// import { ChatGPTUnofficialProxyAPI } from "chatgpt";
import { createElement, useState } from "react";
import { Form, Input, Button, Avatar } from "antd";
import { request } from "../../service/axios";
import {
  FileSearchOutlined,
  RedoOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { CustomParagraph } from "../antd-custom/CustomTypography";
import { CustomEmpty } from "../antd-custom/CustomEmpty";
import { CustomMessage } from "../antd-custom/CustomMessage";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const { TextArea } = Input;

export const Homeworkbox = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [homework, setHomework] = useState([]);
  const [subject, setSubject] = useState(null);
  const [question, setQuestion] = useState(null);
  const [response, setResponse] = useState([]);
  const [userRequest, setUserRequest] = useState([]);
  const clearConservation = () => {
    setSubject(null);
    setQuestion(null);
    setResponse(null);
    setError(false);
    setLoading(false);
  };
  const sendMessage = async (data) => {
    setLoading(true);
    setSubject(data.subject);
    setQuestion(data.question);
    setUserRequest([
      ...userRequest,
      { subject: data.subject, question: data.question },
    ]);
    request(
      "post",
      "api/chatgpt/solve",
      {
        subject: data.subject,
        question: data.question,
        id: homework.length > 0 ? homework[homework.length - 1].id : null,
      }
      //   {
      //     // timeout: 5000, // Override the default timeout for this request
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
    )
      .then((res) => {
        try {
          if (res || res.statusCode != 200 || res.status != 200) {
            CustomMessage(
              { content: "Lỗi hệ thống! Vui lòng thử lại sau" },
              "error"
            );
            setResponse([...response, "Lỗi. Vui lòng thử lại sau"]);
            setError(true);
          } else {
            setHomework([
              ...homework,
              {
                id: res.id,
                subject: data.subject,
                question: data.question,
                parent_id: null,
              },
            ]);
            setResponse([...response, res.data]);
          }
        } catch (e) {
          CustomMessage(
            { content: "Lỗi hệ thống! Vui lòng thử lại sau" },
            "error"
          );
          setResponse([...response, "Lỗi. Vui lòng thử lại sau"]);
          setError(true);
        }
      })
      .catch((e) => {
        CustomMessage(
          { content: "Lỗi hệ thống! Vui lòng thử lại sau" },
          "error"
        );
        setResponse([...response, "Lỗi. Vui lòng thử lại sau"]);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
        console.log(response);
      });

    //   .catch((error) =>
    //     CustomMessage("Lỗi hệ thống! Vui lòng thử lại sau", "error")
    //   );

    // api/chatgpt/chat
  };
  return (
    <div className="flex flex-wrap h-full w-full items-center pt-10 justify-center gap-2 pt-20">
      <div className="w-full h-fit p-5">
        <Form
          layout="vertical"
          name="chatbox"
          onFinish={sendMessage}
          autoComplete="off"
          className="h-fit bottom-0 flex flex-col align-center gap-2 w-full p-5 bg-secondary/[0.2] shadow rounded"
          // className="fixed z-10 h-fit bottom-0 flex align-center gap-2 w-full p-3 bg-white/[0.8] shadow"
        >
          <Form.Item
            label="Môn học"
            name="subject"
            className="w-full mb-1"
            rules={[
              {
                required: true,
                message: "Bắt buộc",
              },
            ]}
          >
            {!loading ? (
              <Input
                placeholder="Cấu trúc dữ liệu giải thuật, OOP,... "
                size="large"
                className="relative shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight rounded-xl"
              />
            ) : (
              <Input
                placeholder="Cấu trúc dữ liệu giải thuật, OOP,... "
                size="large"
                className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight rounded-xl"
                disabled
              />
            )}
          </Form.Item>
          <Form.Item
            label="Câu hỏi"
            name="question"
            className="w-full mb-1"
            rules={[
              {
                required: true,
                message: "Bắt buộc",
              },
            ]}
          >
            {!loading ? (
              <TextArea
                rows={5}
                size="large"
                placeholder="Nhập đề bài cần hỗ trợ"
                className="relative shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight rounded-xl"
              />
            ) : (
              <TextArea
                rows={5}
                size="large"
                placeholder="Nhập đề bài cần hỗ trợ"
                className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight rounded-xl"
                disabled
              />
            )}
          </Form.Item>
          <Form.Item className="w-full mb-1">
            {!loading ? (
              <Button
                type="submit"
                htmlType="submit"
                size="large"
                className="bg-secondary rounded-full shadow text-white float-right"
              >
                <FileSearchOutlined /> Xem hướng dẫn
              </Button>
            ) : (
              <Button
                type="outline"
                htmlType="submit"
                size="large"
                className="bg-secondary rounded-full shadow text-gray-300 float-right"
                disabled
              >
                <FileSearchOutlined /> Xem hướng dẫn
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>

      <div className="grid auto-rows-auto w-full h-full p-3 mb-16 content-end">
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1,
            ease: "linear",
            duration: 1,
            x: { duration: 1 },
          }}
          className="w-full float-left"
        >
          <p className="font-medium text-gray-500 mb-1">Bot Ngu</p>
          <div className="flex flex-wrap">
            <div className="flex w-full gap-3">
              <Avatar src={"/images/logoWeb.png"} />
              <CustomParagraph className="shadow rounded-xl bg-secondary min-h-12 font-medium w-fit p-3 container text-white">
                Xin chào. Tớ có thể giúp gì cho bạn?
              </CustomParagraph>
            </div>
          </div>
        </motion.div>
        {userRequest.map((value, index) => {
          var key = uuidv4();
          return (
            <div key={`cons-` + key}>
              <div className="w-full float-right" key={`req-` + key}>
                <p className="font-medium text-gray-500 mb-1 text-end">Bạn</p>
                <div className="flex justify-end gap-3">
                  <CustomParagraph className="shadow rounded-xl bg-gray-300 min-h-12 font-medium p-3 container w-fit float-right">
                    Hãy giúp tôi giải bài tập môn {value.subject}, đề như sau:
                    <br />
                    {value.question}
                  </CustomParagraph>
                  <Avatar>U</Avatar>
                </div>
              </div>
              {createElement(
                "div",
                {},
                <div className="w-full float-left" key={`res-` + key}>
                  <p className="font-medium text-gray-500 mb-1">Bot Ngu</p>
                  <div className="flex flex-wrap">
                    <div className="flex w-full gap-3">
                      <Avatar src={"/images/logoWeb.png"} />
                      <CustomParagraph
                        key={`ans-` + key}
                        className="min-h-12 font-medium w-fit p-0"
                      >
                        {loading ? (
                          <p className="bg-gray-300 animate-pulse text-gray-500 p-3 shadow rounded-xl  ">
                            Đang phân tích
                          </p>
                        ) : !loading && !error ? (
                          <p className="p-3 container text-white bg-secondary shadow rounded-xl ">
                            {response[index]}
                          </p>
                        ) : (
                          <p className="p-3 container text-white bg-error shadow rounded-xl ">
                            Lỗi. Vui lòng thử lại sau
                          </p>
                        )}
                      </CustomParagraph>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {/* {subject && (
          <div className="w-full float-right">
            <p className="font-medium text-gray-500 mb-1 text-end">Bạn</p>
            <div className="flex justify-end gap-3">
              <CustomParagraph className="shadow rounded-xl bg-gray-300 min-h-12 font-medium p-3 container w-fit float-right">
                {subject}
              </CustomParagraph>
              <Avatar>U</Avatar>
            </div>
          </div>
        )}
        {subject && (
          <div className="w-full float-left">
            <p className="font-medium text-gray-500 mb-1">Bot Ngu</p>
            <div className="flex flex-wrap">
              <div className="flex w-full gap-3">
                <Avatar src={"/images/logoWeb.png"} />
                {!response && !error ? (
                  <CustomParagraph className="shadow rounded-xl bg-gray-300 min-h-12 font-medium p-3 w-fit animate-pulse text-gray-500">
                    Đang phân tích
                  </CustomParagraph>
                ) : response && !error ? (
                  <CustomParagraph className="shadow rounded-xl bg-secondary min-h-12 font-medium w-fit p-3 container text-white">
                    {response}
                  </CustomParagraph>
                ) : (
                  <CustomParagraph className="shadow rounded-xl bg-error min-h-12 font-medium w-fit p-3 container text-white">
                    Lỗi. Vui lòng thử lại sau
                  </CustomParagraph>
                )}
              </div>
              <div class="flex justify-center w-full">
                <Button
                  type="outline"
                  onClick={clearConservation}
                  size="large"
                  className="bg-white/[0.8] rounded-xl shadow"
                >
                  {response || error ? (
                    <>
                      <RedoOutlined /> Tiếp tục
                    </>
                  ) : (
                    <>
                      <StopOutlined className="text-error" /> Dừng hội thoại
                    </>
                  )}
                </Button>{" "}
              </div>
            </div>
          </div>
        )} */}
        {/* {loading && !error ? (
                      <CustomParagraph
                        key={`ans-` + key}
                        className="shadow rounded-xl bg-gray-300 min-h-12 font-medium p-3 w-fit animate-pulse text-gray-500"
                      >
                        Đang phân tích
                      </CustomParagraph>
                    ) : !loading && !error ? (
                      <CustomParagraph
                        key={`ans-` + key}
                        className="shadow rounded-xl  min-h-12 font-medium w-fit "
                      >
                        {response[index]}
                      </CustomParagraph>
                    ) : (
                      !loading &&
                      error && (
                        <CustomParagraph
                          key={`ans-` + key}
                          className="shadow rounded-xl bg-error min-h-12 font-medium w-fit p-3 container text-white"
                        >
                          Lỗi. Vui lòng thử lại sau
                        </CustomParagraph>
                      )
                    )} */}
      </div>
    </div>
  );
};
