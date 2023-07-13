import { Button, Spin, Tabs } from "antd";
import React, { useEffect } from "react";
import { Axios } from "../../service/axios";
import { RiRepeat2Fill } from "react-icons/ri";
import { useNavigate } from "react-router";

const { TabPane } = Tabs;

export default function ({
  dataCareerUseState = [],
  loadingDataCareer,
  loadingDataCareerDetailUseState,
  dataCareer,
  form,
}) {
  const navigate = useNavigate();
  const [dataCareerDetail, setCataCareerDetail] = dataCareerUseState;
  const [loadingDataCareerDetail, setLoadingDataCareerDetail] =
    loadingDataCareerDetailUseState;
  const swapTabCareer = (value) => {
    const body = { job: value };
    if (dataCareerDetail[value]) return;
    setLoadingDataCareerDetail(true);
    Axios.post("/api/chatgpt/getjobdetail", body)
      .then((res) => {
        console.log(res);
        if (res.data?.data) {
          const data = res.data?.data;
          setCataCareerDetail({ ...dataCareerDetail, [value]: data });
        } else {
          setCataCareerDetail({});
        }
      })
      .catch(() => {
        setCataCareerDetail({});
      })
      .finally(() => {
        setLoadingDataCareerDetail(false);
      });
  };
  const handleRetry = () => {
    setCataCareerDetail({});
    navigate("/career-suggestion");
  }

  return (
    <div className="text-center mt-16">
      {loadingDataCareer && (
        <div>
          <div className="mb-4 font-medium text-[22px]">
            Đang tạo ra định hướng nghề nghiệp tốt nhất dành cho bạn
          </div>
          <Spin />
        </div>
      )}
      {dataCareer && Array.isArray(dataCareer) && dataCareer.length ? (
        <div>
          <div className="mb-5 text-[20px] font-medium">
            Các nghề nghiệp phù hợp với định hướng của bạn
          </div>
          <Tabs
            defaultActiveKey={dataCareer[0]}
            style={{ width: "100%" }}
            onChange={swapTabCareer}
          >
            {dataCareer.map((itemCareer, index) => (
              <TabPane tab={itemCareer} key={itemCareer}>
                {loadingDataCareerDetail && (
                  <span>
                    Generating data...
                    <Spin />
                  </span>
                )}
                {dataCareerDetail[itemCareer] && (
                  <div>
                    <div className="mb-5 text-[20px] font-medium">
                      {dataCareerDetail[itemCareer]}
                    </div>
                  </div>
                )}
              </TabPane>
            ))}
          </Tabs>
        </div>
      ) : (
        <div></div>
      )}
      <img src="/images/logoWeb.png" className="mx-auto"></img>
      <div className="flex justify-center">
        <Button
          icon={<RiRepeat2Fill />}
          onClick={handleRetry}
          className="flex items-center gap-2 px-8 py-3 rounded text-[22px] text-white bg-linear-1"
          size="large"
        >
          Retry
        </Button>
      </div>
    </div>
  );
}
