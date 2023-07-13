// import { ChatGPTUnofficialProxyAPI } from "chatgpt";
import { useState } from "react";
import { Form, Input, Button, Avatar } from "antd";
import { request } from "../../service/axios";
import { SendOutlined, RedoOutlined, StopOutlined } from "@ant-design/icons";
import { CustomParagraph } from "../antd-custom/CustomTypography";
import { CustomMessage } from "../antd-custom/CustomMessage";
import { motion } from "framer-motion";

export const Chatbox = () => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [response, setResponse] = useState(null);
  const clearConservation = () => {
    setMessage(null);
    setResponse(null);
    setError(false);
  };
  const sendMessage = async (data) => {
    setMessage(data.message);
    request(
      "post",
      "api/chatgpt/confide",
      {
        message:
          data.message 
          // + ". hãy cho tôi lời khuyên dưới vai trò là nhà tâm lý học."
      },
    //   {
    //     // timeout: 5000, // Override the default timeout for this request
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    )
      .then((res) => {
        console.log(res);
        try {
          if (res && res.statusCode !== 200 ) {
            CustomMessage(
              { content: "Lỗi hệ thống! Vui lòng thử lại sau 1" },
              "error"
            );
            setError(true);
          } else {
            setResponse(res.data);
          }
        } catch (e) {
          CustomMessage(
            { content: "Lỗi hệ thống! Vui lòng thử lại sau 2" },
            "error"
          );
          setError(true);
        }
      })
      .catch((e) => {
        CustomMessage(
          { content: "Lỗi hệ thống! Vui lòng thử lại sau 3" },
          "error"
        );
        setError(true);
      });

    //   .catch((error) =>
    //     CustomMessage("Lỗi hệ thống! Vui lòng thử lại sau", "error")
    //   );

    // api/chatgpt/chat
  };
  return (
    <div className="flex flex-wrap h-full w-full items-center pt-10 justify-center gap-2 mt-12">
      <div className="grid auto-rows-auto w-full h-full p-3 mb-16 content-end">
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1,
            ease: "linear",
            duration: 1,
            x: { duration: 1 }
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
        {message && (
          <div className="w-full float-right">
            <p className="font-medium text-gray-500 mb-1 text-end">Bạn</p>
            <div className="flex justify-end gap-3">
              <CustomParagraph className="shadow rounded-xl bg-gray-300 min-h-12 font-medium p-3 container w-fit float-right">
                {message}
              </CustomParagraph>
              <Avatar>U</Avatar>
            </div>
          </div>
        )}
        {message && (
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
        )}
      </div>
      <Form
        name="chatbox"
        onFinish={sendMessage}
        autoComplete="off"
        className="fixed z-10 h-fit bottom-0 flex align-center gap-2 w-full p-3 bg-white/[0.8] shadow"
      >
        <Form.Item name="message" className="w-full mb-1">
          {!message ? (
            <Input
              placeholder="Nhập tâm tư"
              size="large"
              className="relative shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight rounded-xl"
            />
          ) : (
            <Input
              placeholder="Nhập tâm tư"
              size="large"
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight rounded-xl"
              disabled
            />
          )}
        </Form.Item>
        <Form.Item className="w-fit mb-1">
          {!message ? (
            <Button
              type="submit"
              htmlType="submit"
              size="large"
              className="bg-secondary rounded-full shadow text-white"
            >
              <SendOutlined />
            </Button>
          ) : (
            <Button
              type="outline"
              htmlType="submit"
              size="large"
              className="bg-secondary rounded-full shadow text-gray-300"
              disabled
            >
              <SendOutlined />
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};
