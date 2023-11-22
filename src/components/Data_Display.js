import styled from "styled-components";

import "../styles/components/data_display.css";

/* DEPENDENCIES */
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

export const Heading1 = styled.div`
  //   background: white;
  color: white;
  width: 100%;
  font-size: 2.5em;
  font-weight: 600;
  padding: 0.5em 1.5em;
`;
export const SimpleList = ({ title, data }) => {
  return (
    <div className="simple-list">
      <div className="toolbar">
        <div className="title">
          {/* <div className="rounded-xl bg-[#ff0d0d] w-[5px] h-[23px]"></div> */}
          <h4 className="mx-2">{title}</h4>
        </div>
        <div className="controls">
          {/* <div className="arrows text-xs">
            <ArrowLeftOutlined className="p-2 cursor-pointer rounded-full " />
            <ArrowRightOutlined className="p-2 cursor-pointer rounded-full " />
          </div> */}
          <div className="button">See All</div>
        </div>
      </div>
      <div className="list-wrapper">
        {data != undefined &&
          data.map((item) => {
            return (
              <div className="list-item-wrapper flex flex-col">
                <div className="list-item">
                  {/* <img className="w-full h-full" src={item.backdrop} /> */}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export const DetailedList = ({ title, data }) => {
  return (
    <div className="detailed-list">
      <div className="toolbar">
        <div className="title">
          {/* <div className="rounded-xl bg-[#ff0d0d] w-[5px] h-[23px]"></div> */}
          <h4 className="mx-2">{title}</h4>
        </div>
        <div className="controls">
          <div className="arrows text-xs">
            <ArrowLeftOutlined className="p-2 cursor-pointer rounded-full " />
            <ArrowRightOutlined className="p-2 cursor-pointer rounded-full " />
          </div>
          <div className="button">See All</div>
        </div>
      </div>
      <div className="list-wrapper">
        {data != undefined &&
          data.map((item) => {
            return (
              <div className="list-item-wrapper flex flex-col">
                <div className="list-item">
                  {/* <img className="w-full h-full" src={item.backdrop} /> */}
                </div>
                <div className="info w-full px-1 py-4">
                  {/* <div className="text-white text-sm font-base">
                    {item.info.title}
                  </div> */}
                </div>
              </div>
            );
          })}

        {/* <div className="list-item">
          <div className="image"></div>
          <div className="info"></div>
        </div> */}
      </div>
    </div>
  );
};
