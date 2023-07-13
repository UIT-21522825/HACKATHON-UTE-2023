import Header from "../components/TunTun/Header";
import { Homeworkbox } from "../components/Homework/index";
import { Helmet } from "react-helmet";

export default function HomeworkPage() {
  return (
    <>
      <Helmet>
        <title>UIT.ai | Hỗ trợ học tập</title>
      </Helmet>
      <Header />
      <Homeworkbox />
    </>
  );
}
