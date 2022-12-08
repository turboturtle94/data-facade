import React from "react";

import styled from "styled-components";

import { ChartDisplay } from "./ChartDisplay";
import { ChartConfig } from "./ChartConfig";

export const Chart = () => {
  return (
    <ChartWrapper>
        <ChartConfig></ChartConfig>
        <ChartDisplay></ChartDisplay>
    </ChartWrapper>
  );
};

const ChartWrapper = styled.div`
  background-color: #f0f2f5;
  border-top: 1px solid #ced0d4;
  display: flex;
  gap: 21px;
  padding-top:19px;
  padding-bottom: 33px;
  overflow: scroll;
`;
