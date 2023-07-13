import Header from "../components/TunTun/Header";
import { Chatbox } from "../components/Chat/Chatbox";
import { Helmet } from "react-helmet";

export default function ChatPage() {
  return (
    <>
    <Helmet>
        <title>UIT.ai | Góc chia sẻ</title>
      </Helmet>
      <Header />
      <Chatbox />
    </>
  );
}
