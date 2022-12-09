import React, { useContext } from "react";
import { ChartContext } from "./ChartContext";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import styled from "styled-components";

import {generateBarData, getSampleChartData} from "../utils/chartUtils";

import data from "../resources/response1.json"

export const ChartDisplay = () => {
  const chartConfig = useContext(ChartContext);
  const chartOptions = generateBarData(data.results,chartConfig);
  return (
    <ChartDisplayWrapper>
      <div className="chart-desc">
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.33331 30.0833H31.6666V31.6666H6.33331V30.0833Z"
            fill="#1C2E45"
            fillOpacity="0.6"
          />
          <path
            d="M6.33331 6.33331H7.91665V31.6666H6.33331V6.33331Z"
            fill="#1C2E45"
            fillOpacity="0.6"
          />
          <path
            d="M20.5833 19L15.9917 14.25L9.5 20.5834V28.5H31.6667V7.75836L20.5833 19Z"
            fill="#1C2E45"
            fillOpacity="0.6"
          />
        </svg>

        <p>
          This is a sample chart Begin by selecting a data source or populating
          an axis
        </p>
      </div>
      <div className="chart-content">
        {chartOptions.series.data && chartOptions.series.data.length > 0 ? (
          <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
            isPureConfig={true}
          />
        ) : <HighchartsReact
          highcharts={Highcharts}
          options={getSampleChartData(chartConfig)}
        />}
      </div>
    </ChartDisplayWrapper>
  );
};

const ChartDisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  div.chart-desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 102px;
    p {
      color: #47576a;
      font-size: 14px;
      font-weight: 400;
      font-family: "Work Sans";
      line-height: 15px;
      text-align: center;
      margin-top: 26px;
      width: 370px;
      height: 30px;
      margin-bottom: 46px;
    }
  }
  div.chart-content {
    height: 515px;
    width: 694px;
    border-radius: 6.45px;
    background-color: white;
    margin-bottom: 33px;
  }
`;
