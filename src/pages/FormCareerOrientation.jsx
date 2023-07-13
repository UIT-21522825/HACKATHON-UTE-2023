import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Age from "../components/FormCareer/Age";
import { Form, message } from "antd";
import Hobby from "../components/FormCareer/Hobby";
import Header from "../components/TunTun/Header";
import Majors from "../components/FormCareer/Majors";
import { useSearchParams } from "react-router-dom";
import Strength from "../components/FormCareer/Strength";
import SalaryRange from "../components/FormCareer/SalaryRange";
import SubmitSection from "../components/FormCareer/SubmitSection";
import { Axios } from "../service/axios";
import handleData from "../service/data/handleData";
import { Helmet } from "react-helmet";

const resultSample = [
  {
    key: "Lập trình viên",
    value: "Lập trình viên",
    label: "Lập trình viên",
  },
];

export const Result = () => (
  <MainLayout>
    <Form layout="vertical">
      <Age />
      <Result data={resultSample} />
    </Form>
  </MainLayout>
);

export default function FormCareerOrientation() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [section, setSection] = useState(0);
  const [form] = Form.useForm();
  const [dataCareer, setDataCareer] = useState([]);

  const [dataCareerDetail, setCataCareerDetail] = useState({});
  const [loadingDataCareerDetail, setLoadingDataCareerDetail] = useState(false);
  const [loadingDataCareer, setLoadingDataCareer] = useState(false);

  useEffect(() => {
    setSection(Number(searchParams.get("section")) || 0);
  }, [searchParams]);

  const handleGoToNextSection = () => {
    // setSection(section + 1);
    setSearchParams({ section: section + 1 });
  };

  const handleGoBackSection = () => {
    if (section > 0) {
      // setSection(section - 1);
      setSearchParams({ section: section - 1 });
    }
  };

  const handleSubmitForm = (values) => {
    setDataCareer([]);
    setLoadingDataCareer(true);
    Axios.post("/api/chatgpt/getjob", values)
      .then((res) => {
        const data = handleData.dataJob(res.data?.data);
        if (data && Array.isArray(data)) {
          setDataCareer(data);
        } else {
          message.error("Có lỗi xảy ra, vui lòng thử lại sau")
        }
      })
      .catch((err) => {
        console.log(err);
        message.error("Có lỗi xảy ra, vui lòng thử lại sau")
      })
      .finally(() => {
        setLoadingDataCareer(false);
      });
  };

  const formSectionProps = {
    onBack: handleGoBackSection,
    onSubmit: handleGoToNextSection,
    form,
    dataCareer,
    dataCareerUseState: [dataCareerDetail, setCataCareerDetail],
    loadingDataCareerDetailUseState: [loadingDataCareerDetail, setLoadingDataCareerDetail],
    loadingDataCareer,
    dataUseState: [],
  };

  return (
    <>
    <Helmet>
        <title>UIT.ai | Định hướng nghề nghiệp</title>
      </Helmet>
      <Header />
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-[300px] md:w-[60%] xl:max-w-[50%] max-w-4xl flex items-center justify-center">
          {section !== 5 && (
            <Form
              layout="vertical"
              className="w-full flex justify-center items-center"
              form={form}
              onFinish={handleSubmitForm}
            >
              <div className={section === 0 ? "" : "hidden"}>
                <Age {...formSectionProps} />
              </div>
              <div className={section === 1 ? "" : "hidden"}>
                <Majors {...formSectionProps} />
              </div>
              <div className={section === 2 ? "" : "hidden"}>
                <Hobby {...formSectionProps} />
              </div>
              <div className={section === 3 ? "" : "hidden"}>
                <Strength {...formSectionProps} />
              </div>
              <div className={section === 4 ? "" : "hidden"}>
                <SalaryRange {...formSectionProps} />
              </div>
            </Form>
          )}

          <div className={section === 5 ? "" : "hidden"}>
            <SubmitSection {...formSectionProps} />
          </div>
        </div>
      </div>
    </>
  );
}
