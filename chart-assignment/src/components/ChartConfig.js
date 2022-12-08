import React, { useContext } from "react";

import styled from "styled-components";

import { AdvancedStyledDropDown, BasicStyledDropDown } from "./StyledDropdown";

import chartData from "../resources/chartConfig.json";

import { SVGMapper } from "./SVGMapper";

import { ChartContext, ChartDispatchContext } from "./ChartContext";

import rowData from "../resources/response1.json";

export const ChartConfig = () => {
  const chartConfig = useContext(ChartContext);
  const dispatchChartActions = useContext(ChartDispatchContext);
  const onTypeChange = (value) => {
    dispatchChartActions({
      type: "changeType",
      value,
    });
  };
  const onOrientationChange = (value) => {
    dispatchChartActions({
      type: "changeOrientation",
      value,
    });
  };
  const onXColumnChange = (value) => {
    dispatchChartActions({
      type: "changeXColumn",
      value,
    });
  };

  const onXTypeChange = (value) => {
    dispatchChartActions({
      type: "changeXType",
      value,
    });
  };

  const onXAggChange = (value) => {
    dispatchChartActions({
      type: "changeXAgg",
      value,
    });
  };
  const onXSortChange = (value) => {
    dispatchChartActions({
      type: "changeXSort",
      value,
    });
  };
  const onYColumnChange = (value) => {
    dispatchChartActions({
      type: "changeYColumn",
      value,
    });
  };

  const onYTypeChange = (value) => {
    dispatchChartActions({
      type: "changeYType",
      value,
    });
  };

  const onYAggChange = (value) => {
    dispatchChartActions({
      type: "changeYAgg",
      value,
    });
  };
  const onYSortChange = (value) => {
    dispatchChartActions({
      type: "changeYSort",
      value,
    });
  };
  return (
    <ChartConfigWrapper>
      <div className="chart-config-data">
        <label>Data</label>
        <BasicStyledDropDown
          width="209"
          height="33.57"
          defaultValue={"Action Output"}
          callback={onTypeChange}
          content={chartData.data.items}
        ></BasicStyledDropDown>
        <button>
          <SVGMapper name="upload"></SVGMapper>
        </button>
      </div>

      <div className="chart-config chart-config-type">
        <div className="chart-config-type-select">
          <label>Type</label>
          <AdvancedStyledDropDown
            width="260"
            height="34"
            backgroundColor="#EDF0F4"
            content={chartData.type.items}
            defaultValue={chartConfig.type}
            callback={onTypeChange}
          ></AdvancedStyledDropDown>
          <button>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.0809937"
                width="21.0851"
                height="21.0851"
                rx="2.61"
                fill="#56D280"
                fillOpacity="0.5"
              />
              <path
                d="M15.8138 14.1378C15.8138 15.1086 15.0275 15.8949 14.0567 15.8949C13.086 15.8949 12.2997 15.1086 12.2997 14.1378C12.2997 13.167 13.086 12.3807 14.0567 12.3807C15.0275 12.3807 15.8138 13.167 15.8138 14.1378Z"
                fill="white"
              />
              <path
                d="M13.7932 17.6519C13.0904 17.6519 12.3875 17.4762 11.7725 17.0369L6.32554 14.1377C5.88627 13.7863 5.53485 13.6106 5.18343 13.2592C4.12917 12.2049 3.51419 10.7114 3.51419 9.21786C3.51419 7.72433 4.12917 6.31865 5.18343 5.26439C6.23769 4.21014 7.64336 3.59515 9.13689 3.59515C10.6304 3.59515 12.0361 4.21014 13.1782 5.26439C13.5296 5.61581 13.7053 5.87938 14.0568 6.31865L17.1317 11.9414C18.0102 13.4349 17.7467 15.2798 16.5167 16.5098C15.726 17.3005 14.8475 17.6519 13.7932 17.6519ZM9.13689 4.4737C7.90693 4.4737 6.67696 5.00083 5.79841 5.87938C4.91987 6.75792 4.39274 7.98789 4.39274 9.21786C4.39274 10.5357 4.91987 11.6778 5.79841 12.5563C6.06198 12.8199 6.32554 12.9956 6.76482 13.2592L12.2997 16.2462C12.8268 16.5977 13.3539 16.6855 13.881 16.6855C14.6717 16.6855 15.3746 16.4219 15.9017 15.807C16.8681 14.8406 17.0438 13.4349 16.341 12.2928L13.2661 6.67007C13.0025 6.31865 12.8268 6.05509 12.5632 5.79152C11.5968 5.00083 10.4547 4.4737 9.13689 4.4737Z"
                fill="white"
              />
              <path
                d="M13.1782 9.74503V8.86648L11.9482 8.42721C11.8604 8.2515 11.8604 8.16365 11.7725 7.98794L12.2996 6.84583L11.6847 6.23084L10.5426 6.75797C10.3668 6.67012 10.279 6.67012 10.1033 6.58226L9.66401 5.35229H8.78546L8.34619 6.58226C8.17048 6.67012 8.08262 6.67012 7.90691 6.75797L6.7648 6.23084L6.14982 6.84583L6.67695 7.98794C6.58909 8.16365 6.58909 8.2515 6.50124 8.42721L5.27127 8.86648V9.74503L6.50124 10.1843C6.58909 10.36 6.58909 10.4479 6.67695 10.6236L6.14982 11.7657L6.7648 12.3807L7.90691 11.8535C8.08262 11.9414 8.17048 12.0293 8.34619 12.0293L8.78546 13.2592H9.66401L10.1033 12.0293C10.279 11.9414 10.3668 11.9414 10.5426 11.8535L11.6847 12.3807L12.2996 11.7657L11.7725 10.6236C11.8604 10.4479 11.9482 10.36 11.9482 10.1843L13.1782 9.74503ZM9.22473 10.6236C8.5219 10.6236 7.90691 10.0086 7.90691 9.30576C7.90691 8.60292 8.5219 7.98794 9.22473 7.98794C9.92757 7.98794 10.5426 8.60292 10.5426 9.30576C10.5426 10.0086 9.92757 10.6236 9.22473 10.6236Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="chart-config chart-config-orientation">
          <div className="chart-config-orientation-select">
            <label>Orientation</label>
            <BasicStyledDropDown
              width="209"
              height="33.57"
              defaultValue={chartConfig.orientation}
              callback={onOrientationChange}
              content={chartData.orientation.items}
            ></BasicStyledDropDown>
          </div>
          <div className="chart-config-orientation-radio">
            <label>Tooltip</label>
            <input type="radio"></input>
            <label>Enable</label>
            <input type="radio"></input>
            <label>Disable</label>
          </div>
        </div>
      </div>

      <div className="chart-config chart-config-axis">
        <div className="chart-config-axis-select">
          <label>X-Axis</label>
          <AdvancedStyledDropDown
            width="260"
            height="34"
            backgroundColor="#EDF0F4"
            content={Object.keys(rowData.results[0]).map((item) => {
              return { label: item, value: item };
            })}
            callback={onXColumnChange}
            defaultValue={chartConfig.xColumn}
            defaultIcon={"columns"}
          ></AdvancedStyledDropDown>
          <button>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.0809937"
                width="21.0851"
                height="21.0851"
                rx="2.61"
                fill="#56D280"
                fillOpacity="0.5"
              />
              <path
                d="M15.8138 14.1378C15.8138 15.1086 15.0275 15.8949 14.0567 15.8949C13.086 15.8949 12.2997 15.1086 12.2997 14.1378C12.2997 13.167 13.086 12.3807 14.0567 12.3807C15.0275 12.3807 15.8138 13.167 15.8138 14.1378Z"
                fill="white"
              />
              <path
                d="M13.7932 17.6519C13.0904 17.6519 12.3875 17.4762 11.7725 17.0369L6.32554 14.1377C5.88627 13.7863 5.53485 13.6106 5.18343 13.2592C4.12917 12.2049 3.51419 10.7114 3.51419 9.21786C3.51419 7.72433 4.12917 6.31865 5.18343 5.26439C6.23769 4.21014 7.64336 3.59515 9.13689 3.59515C10.6304 3.59515 12.0361 4.21014 13.1782 5.26439C13.5296 5.61581 13.7053 5.87938 14.0568 6.31865L17.1317 11.9414C18.0102 13.4349 17.7467 15.2798 16.5167 16.5098C15.726 17.3005 14.8475 17.6519 13.7932 17.6519ZM9.13689 4.4737C7.90693 4.4737 6.67696 5.00083 5.79841 5.87938C4.91987 6.75792 4.39274 7.98789 4.39274 9.21786C4.39274 10.5357 4.91987 11.6778 5.79841 12.5563C6.06198 12.8199 6.32554 12.9956 6.76482 13.2592L12.2997 16.2462C12.8268 16.5977 13.3539 16.6855 13.881 16.6855C14.6717 16.6855 15.3746 16.4219 15.9017 15.807C16.8681 14.8406 17.0438 13.4349 16.341 12.2928L13.2661 6.67007C13.0025 6.31865 12.8268 6.05509 12.5632 5.79152C11.5968 5.00083 10.4547 4.4737 9.13689 4.4737Z"
                fill="white"
              />
              <path
                d="M13.1782 9.74503V8.86648L11.9482 8.42721C11.8604 8.2515 11.8604 8.16365 11.7725 7.98794L12.2996 6.84583L11.6847 6.23084L10.5426 6.75797C10.3668 6.67012 10.279 6.67012 10.1033 6.58226L9.66401 5.35229H8.78546L8.34619 6.58226C8.17048 6.67012 8.08262 6.67012 7.90691 6.75797L6.7648 6.23084L6.14982 6.84583L6.67695 7.98794C6.58909 8.16365 6.58909 8.2515 6.50124 8.42721L5.27127 8.86648V9.74503L6.50124 10.1843C6.58909 10.36 6.58909 10.4479 6.67695 10.6236L6.14982 11.7657L6.7648 12.3807L7.90691 11.8535C8.08262 11.9414 8.17048 12.0293 8.34619 12.0293L8.78546 13.2592H9.66401L10.1033 12.0293C10.279 11.9414 10.3668 11.9414 10.5426 11.8535L11.6847 12.3807L12.2996 11.7657L11.7725 10.6236C11.8604 10.4479 11.9482 10.36 11.9482 10.1843L13.1782 9.74503ZM9.22473 10.6236C8.5219 10.6236 7.90691 10.0086 7.90691 9.30576C7.90691 8.60292 8.5219 7.98794 9.22473 7.98794C9.92757 7.98794 10.5426 8.60292 10.5426 9.30576C10.5426 10.0086 9.92757 10.6236 9.22473 10.6236Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="chart-config-axis-options">
          <div className="chart-config-axis chart-config-title-select">
            <label>Title</label>
            <BasicStyledDropDown
              width="209"
              height="33.57"
              defaultValue={chartConfig.xTitle}
              content={chartData.orientation.items}
            ></BasicStyledDropDown>
          </div>
          <div className="chart-config-axis chart-config-type-select">
            <label>Type</label>
            <BasicStyledDropDown
              width="209"
              height="33.57"
              defaultValue={chartConfig.xType}
              callback={onXTypeChange}
              content={chartData.axisType.items}
            ></BasicStyledDropDown>
          </div>
          <div className="chart-config-axis chart-config-aggregate-select">
            <label>Aggregate</label>
            <BasicStyledDropDown
              width="209"
              height="33.57"
              defaultValue={chartConfig.xAggregate}
              callback={onXAggChange}
              content={chartData.aggregate.items}
            ></BasicStyledDropDown>
          </div>
          <div className="chart-config-axis chart-config-sort-select">
            <label>Sort</label>
            <BasicStyledDropDown
              width="209"
              height="33.57"
              defaultValue={chartConfig.xSort}
              callback={onXSortChange}
              content={chartData.sort.items}
            ></BasicStyledDropDown>
          </div>
        </div>
      </div>

      <div className="chart-config chart-config-axis">
        <div className="chart-config-axis-select">
          <label>Y-Axis</label>

          <AdvancedStyledDropDown
            width="260"
            height="34"
            backgroundColor="#EDF0F4"
            content={Object.keys(rowData.results[0]).map((item) => {
              return { label: item, value: item };
            })}
            callback={onYColumnChange}
            defaultValue={chartConfig.yColumn}
            defaultIcon={"columns"}
          ></AdvancedStyledDropDown>
          <button>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.0809937"
                width="21.0851"
                height="21.0851"
                rx="2.61"
                fill="#56D280"
                fillOpacity="0.5"
              />
              <path
                d="M15.8138 14.1378C15.8138 15.1086 15.0275 15.8949 14.0567 15.8949C13.086 15.8949 12.2997 15.1086 12.2997 14.1378C12.2997 13.167 13.086 12.3807 14.0567 12.3807C15.0275 12.3807 15.8138 13.167 15.8138 14.1378Z"
                fill="white"
              />
              <path
                d="M13.7932 17.6519C13.0904 17.6519 12.3875 17.4762 11.7725 17.0369L6.32554 14.1377C5.88627 13.7863 5.53485 13.6106 5.18343 13.2592C4.12917 12.2049 3.51419 10.7114 3.51419 9.21786C3.51419 7.72433 4.12917 6.31865 5.18343 5.26439C6.23769 4.21014 7.64336 3.59515 9.13689 3.59515C10.6304 3.59515 12.0361 4.21014 13.1782 5.26439C13.5296 5.61581 13.7053 5.87938 14.0568 6.31865L17.1317 11.9414C18.0102 13.4349 17.7467 15.2798 16.5167 16.5098C15.726 17.3005 14.8475 17.6519 13.7932 17.6519ZM9.13689 4.4737C7.90693 4.4737 6.67696 5.00083 5.79841 5.87938C4.91987 6.75792 4.39274 7.98789 4.39274 9.21786C4.39274 10.5357 4.91987 11.6778 5.79841 12.5563C6.06198 12.8199 6.32554 12.9956 6.76482 13.2592L12.2997 16.2462C12.8268 16.5977 13.3539 16.6855 13.881 16.6855C14.6717 16.6855 15.3746 16.4219 15.9017 15.807C16.8681 14.8406 17.0438 13.4349 16.341 12.2928L13.2661 6.67007C13.0025 6.31865 12.8268 6.05509 12.5632 5.79152C11.5968 5.00083 10.4547 4.4737 9.13689 4.4737Z"
                fill="white"
              />
              <path
                d="M13.1782 9.74503V8.86648L11.9482 8.42721C11.8604 8.2515 11.8604 8.16365 11.7725 7.98794L12.2996 6.84583L11.6847 6.23084L10.5426 6.75797C10.3668 6.67012 10.279 6.67012 10.1033 6.58226L9.66401 5.35229H8.78546L8.34619 6.58226C8.17048 6.67012 8.08262 6.67012 7.90691 6.75797L6.7648 6.23084L6.14982 6.84583L6.67695 7.98794C6.58909 8.16365 6.58909 8.2515 6.50124 8.42721L5.27127 8.86648V9.74503L6.50124 10.1843C6.58909 10.36 6.58909 10.4479 6.67695 10.6236L6.14982 11.7657L6.7648 12.3807L7.90691 11.8535C8.08262 11.9414 8.17048 12.0293 8.34619 12.0293L8.78546 13.2592H9.66401L10.1033 12.0293C10.279 11.9414 10.3668 11.9414 10.5426 11.8535L11.6847 12.3807L12.2996 11.7657L11.7725 10.6236C11.8604 10.4479 11.9482 10.36 11.9482 10.1843L13.1782 9.74503ZM9.22473 10.6236C8.5219 10.6236 7.90691 10.0086 7.90691 9.30576C7.90691 8.60292 8.5219 7.98794 9.22473 7.98794C9.92757 7.98794 10.5426 8.60292 10.5426 9.30576C10.5426 10.0086 9.92757 10.6236 9.22473 10.6236Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="chart-config-axis-options">
          <div className="chart-config-axis chart-config-title-select">
            <label>Title</label>
            <BasicStyledDropDown
              width="209"
              height="33.57"
              defaultValue={chartConfig.yTitle}
              content={chartData.orientation.items}
            ></BasicStyledDropDown>
          </div>
          <div className="chart-config-axis chart-config-type-select">
            <label>Type</label>
            <BasicStyledDropDown
              width="209"
              height="33.57"
              defaultValue={chartConfig.yType}
              callback={onYTypeChange}
              content={chartData.axisType.items}
            ></BasicStyledDropDown>
          </div>
          <div className="chart-config-axis chart-config-aggregate-select">
            <label>Aggregate</label>
            <BasicStyledDropDown
              width="209"
              height="33.57"
              defaultValue={chartConfig.yAggregate}
              callback={onYAggChange}
              content={chartData.aggregate.items}
            ></BasicStyledDropDown>
          </div>
          <div className="chart-config-axis chart-config-sort-select">
            <label>Sort</label>
            <BasicStyledDropDown
              width="209"
              height="33.57"
              defaultValue={chartConfig.ySort}
              callback={onYSortChange}
              content={chartData.sort.items}
            ></BasicStyledDropDown>
          </div>
        </div>
      </div>
    </ChartConfigWrapper>
  );
};

const ChartConfigWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-left: 83px;
  div.chart-config {
    background-color: white;
    width: 351px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    label {
      display: flex;
      text-align: center;
      align-items: center;
      font-size: 11px;
      font-weight: 600;
      padding: 8.5px;
    }
  }
  div.chart-config-data {
    border-top-left-radius: 5.87px;
    border-top-right-radius: 5.87px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 11px;
    padding-right: 7px;
    padding-top: 12px;
    padding-bottom: 4px;
    background-color: white;
    width: 351px;
    label {
      display: flex;
      text-align: center;
      align-items: center;
      font-size: 11px;
      font-weight: 600;
      padding: 8.5px;
    }
    button {
      background: none;
      border: 0.5px solid #c2c2c2;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  div.chart-config-type {
    padding-left: 11px;
    padding-right: 7px;
    padding-top: 12px;
    padding-bottom: 4px;
    div.chart-config-type-select {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        background: none;
        border: 0.5px solid #c2c2c2;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    div.chart-config-orientation {
      background-color: #f0f2f5;
      border-radius: 5px;
      padding: 14px;
      box-sizing: border-box;
      label {
        font-size: 14px;
        font-weight: 400;
        font-family: "Segoe UI";
      }
    }
    div.chart-config-orientation-select {
      display: flex;
      justify-content: space-between;
    }
    div.chart-config-orientation-radio {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      input {
        width: 20px;
        height: 20px;
        background-color: #5664d2;
      }
    }
  }
  div.chart-config-axis {
    padding-left: 11px;
    padding-right: 7px;
    padding-top: 12px;
    padding-bottom: 4px;
    div.chart-config-axis-select {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        background: none;
        border: 0.5px solid #c2c2c2;
        align-items: center;
        justify-content: center;
      }
    }
    div.chart-config-axis-options {
      background-color: #f0f2f5;
      border-radius: 5px;
      padding: 14px;
      box-sizing: border-box;
      div.chart-config-axis {
        display: flex;
        justify-content: space-between;
        align-items: center;
        label {
          font-size: 14px;
          font-weight: 400;
          font-family: "Segoe UI";
        }
      }
    }
  }
`;
