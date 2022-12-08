import styled from "styled-components";
import React, { useState } from "react";

import ConnectionGrid from "./ConnectionGrid";

import { Chart } from "./Chart";

export const ChartContainer = () => {
  const [chartPaneExpanded, setChartPaneExpanded] = useState(false);
  const expandChartPane = () => {
    setChartPaneExpanded((prevState) => !prevState);
  };
  return (
    <ChartContainerWrapper>
      <header>
        <div className="header__title">
          <div className="header__title__icon-expand">
            <button
              onClick={() => {
                expandChartPane();
              }}
              className={chartPaneExpanded ? "collapse-pane" : "expand-pane"}
            >
              &#10095;
            </button>
          </div>
          <div className="header__title__icon-chart">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 13V12H1V0H0V13H5V15H0V16H16V15H11V13H16Z"
                fill="#353535"
              />
              <path d="M7 7L4 4L0 8V11H14V0L7 7Z" fill="#353535" />
            </svg>
          </div>
          <div className="header__title__text">
            <label>Create Chart</label>
            <ul className="header__title__subtext">
              <li>09 parameters</li>
              <li>Add source</li>
              <li>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M13.1583 3.83329C13.1583 3.83329 13.1583 3.04163 12.3667 2.24996C11.575 1.45829 10.8625 1.45829 10.8625 1.45829L9.99168 2.32913V0.666626H0.491684V13.3333H9.99168V6.99996L13.1583 3.83329ZM5.47918 9.69163L5.00418 9.21663L5.24168 8.34579L6.42918 9.53329L5.47918 9.69163ZM6.19168 8.18746L5.71668 7.71246L9.83335 3.59579C9.99168 3.67496 10.15 3.83329 10.3083 3.99163L6.19168 8.18746ZM11.6542 2.64579L10.9417 3.43746C10.7833 3.27913 10.625 3.19996 10.4667 3.04163L11.1792 2.32913C11.2584 2.40829 11.4167 2.48746 11.6542 2.64579ZM9.20002 12.5416H1.28335V1.45829H9.20002V3.12079L4.52918 7.79163L3.65835 11.0375L6.90418 10.1666L9.20002 7.79163V12.5416Z"
                    fill="#65676B"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <p>
          Calculating Recency, Frequency and Monetary Value and hence the RFM
          score with segments. Predicting customer by Kmeans clustering using
          RFM Value and creating an interactive dashboard for different customer
          segments using different metrics, demographics & historical customer
          purchase data.
        </p>
      </header>
      <div className="chart__header__title">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="32" rx="16" fill="#5664D2" />
          <path
            d="M9.33333 21.8333H22.6667V22.6666H9.33333V21.8333Z"
            fill="white"
          />
          <path
            d="M9.33333 9.33325H10.1667V22.6666H9.33333V9.33325Z"
            fill="white"
          />
          <path
            d="M16.8333 15.9999L14.4167 13.4999L11 16.8333V20.9999H22.6667V10.0833L16.8333 15.9999Z"
            fill="white"
          />
        </svg>
        <p className="text">
          <span>Chart config</span>
        </p>
      </div>
      {chartPaneExpanded ? <Chart></Chart> : null}
      <ConnectionGrid></ConnectionGrid>
    </ChartContainerWrapper>
  );
};

const ChartContainerWrapper = styled.div`
  min-height: 20vh;
  background-color: white;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  padding: 1em;
  header {
    margin-bottom: 20px;
  }
  div.chart__header__title {
    display: flex;
    gap: 7.55px;
    background-color: #f0f2f5;
    padding-top: 5px;
    padding-bottom: 3px;
    svg {
      margin-left: 42px;
    }
    p {
      position: relative;
      span {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        font-size: 13px;
        color: #5664d2;
      }
    }
  }
  div.header__title {
    display: flex;
    margin: 0;
    width: 350px;
    justify-content: space-between;
    & > div.header__title__icon-expand {
      position: relative;
      button {
        position: absolute;
        top: 25%;
        font-size: 16px;
        border: none;
        background: none;
      }
      button.collapse-pane {
        transform: rotate(90deg);
      }

      button.expand-pane {
        transform: translate(-90deg);
      }
    }
    & > div.header__title__icon-chart {
      position: relative;
      svg {
        position: absolute;
        top: 25%;
        width: 16px;
        height: 16px;
      }
    }

    div.header__title__text {
      label {
        font-size: 15px;
        font-weight: 600;
        font-style: normal;
      }
      ul {
        display: flex;
        margin-top: 0;
        padding: 0;
        font-size: 13px;
        font-weight: 600;
        color: #65676b;
        li:first-child {
          list-style-type: none;
        }
        li {
          margin-right: 2em;
          svg {
            transform: translateY(25%);
          }
        }
      }
    }
  }
  p {
    margin: 0;
    width: 50vw;
    padding-left: 42px;
  }
`;

export default ChartContainer;
