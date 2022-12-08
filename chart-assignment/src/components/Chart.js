import React, { useReducer } from "react";
import styled from "styled-components";

import { ChartDisplay } from "./ChartDisplay";
import { ChartConfig } from "./ChartConfig";
import { ChartSideNav } from "./ChartSideNav";

import { ChartContext, ChartDispatchContext } from "./ChartContext";

export const Chart = () => {
  const chartReducer = (chartConfig, action) => {
    switch (action.type) {
      case "changeType":
        return {
          ...chartConfig,
          type: action.value,
        };
      case "changeOrientation":
        return {
          ...chartConfig,
          orientation: action.value,
        };
      case "changeXColumn":
        return {
          ...chartConfig,
          xColumn: action.value,
        };
      case "changeYColumn":
        return {
          ...chartConfig,
          yColumn: action.value,
        };
      case "changeXTitle":
        return {
          ...chartConfig,
          xTitle: action.value,
        };
      case "changeYTitle":
        return {
          ...chartConfig,
          yTitle: action.value,
        };
      case "changeXType":
        return {
          ...chartConfig,
          xType: action.value,
        };
      case "changeYType":
        return {
          ...chartConfig,
          yType: action.value,
        };
      case "changeXAgg":
        return {
          ...chartConfig,
          xAggregate: action.value,
        };
      case "changeYAgg":
        return {
          ...chartConfig,
          yAggregate: action.value,
        };
      case "changeXSort":
        return {
          ...chartConfig,
          xSort: action.value,
        };
      case "changeYSort":
        return {
          ...chartConfig,
          ySort: action.value,
        };
      default: {
        throw Error("Unknown action: " + action.type);
      }
    }
  };

  const [chartConfig, dispatch] = useReducer(chartReducer, {
    type: "bar",
    orientation: "vertical",
    xColumn: "",
    yColumn: "",
    xTitle: "",
    yTitle: "",
    xType: "none",
    yType: "none",
    xAggregate: "none",
    yAggregate: "none",
    xSort: "ascending",
    ySort: "ascending",
  });
  return (
    <ChartContext.Provider value={chartConfig}>
      <ChartDispatchContext.Provider value={dispatch}>
        <ChartWrapper>
          <ChartSideNav></ChartSideNav>
            <ChartConfig></ChartConfig>
            <ChartDisplay></ChartDisplay>
        </ChartWrapper>
      </ChartDispatchContext.Provider>
    </ChartContext.Provider>
  );
};

const ChartWrapper = styled.div`
  background-color: #f0f2f5;
  border-top: 1px solid #ced0d4;
  display: flex;
  gap: 21px;
  padding-top: 19px;
  padding-bottom: 33px;
  overflow: scroll;
  position: relative;
`;
