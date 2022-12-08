import React, { useContext } from "react";

import { ChartContext } from "./ChartContext";

import styled from "styled-components";

import { SVGMapper } from "./SVGMapper";

export const ChartSideNav = () => {
  const chartConfig = useContext(ChartContext);
  console.log(chartConfig.type);
  return (
    <ChartSideNavWrapper>
      <div>
        <label>Options</label>
      </div>
      <div>
        <SVGMapper name={chartConfig.type + "ChartBig"} />
      </div>
      <label>
        +
      </label>
    </ChartSideNavWrapper>
  );
};

const ChartSideNavWrapper = styled.div`
  width: 70px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #f0f2f5;
  border-right: 1px solid #ced0d4;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    border-bottom: 1px solid #ced0d4;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    label{
        font-size: 11px;
        font-weight: 600;
        font-family: 'SF Pro Display';
        color: black;
    }
  }
  label{
    font-size: 35px;
    color: #00A99D;
    font-weight: 700;
    font-family: 'Open Sans';
    padding-top: 7px;
    padding-bottom: 7px;
  }
`;
