import React from "react";
import styled from "styled-components";

export const GridBody = ({rows}) => {
    console.log(rows);
  return rows && rows.length > 0 ?(
    <GridWrapper>
      <GridBodyWrapper count={Object.keys(rows[0]).length}>
        {rows.map((row, index) => {
          return Object.keys(row).map((key) => {
            return (
              <div>
                {index === 0 ? <GridColumnHeader data={key} /> : null}
                <div key={row[key].name} className="grid__column__data">
                  {row[key]}
                </div>
              </div>
            );
          });
        })}
      </GridBodyWrapper>
    </GridWrapper>
  ):null;
};
const formColumnLayout = (props) => {
  let columnString = "";
  for (let i = 0; i < props.count; i++) {
    columnString += "1fr ";
  }
  return columnString;
};
const GridBodyWrapper = styled.div`
  margin-top: 41px;
  display: grid;
  width: calc(100vw - 112px);
  max-width: calc(100vw - 112px);
  margin-left: 42px;
  grid-template-columns: ${formColumnLayout};
  grid-row-gap: 8.49px;
  background-color: #f0f2f5;
  box-sizing: border-box;
  padding-top: 39px;
  overflow-x: scroll;
  div.grid__column__data {
    padding: 8px;
  }
`;

const GridColumnHeader = ({ data }) => {
  return (
    <GridColumnHeaderWrapper>
      <div className="grid__column__data">
        <label className="grid__column__data__name">{data}</label>
        <label className="grid__column__data__type">
          {typeof data}{" "}
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.04175 6.3396L8.12657 9.42442L11.2114 6.3396H5.04175Z"
              fill="#66748A"
            />
          </svg>
        </label>
      </div>
      <div className="grid__column__tag__action">Add/Show Tag</div>
      <div className="grid__column__tag__wrapper">
        <div className="gird__column__tag">
          PossibleDimension
        </div>
      </div>
    </GridColumnHeaderWrapper>
  );
};

const GridWrapper = styled.div`
  position: relative;
`;
const GridColumnHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  div {
    background-color: white;
    border-radius: 2px;
    margin-left: 8px;
  }
  div.grid__column__data {
    display: flex;
    flex-direction: column;
    padding-left: 7.4px;
    label.grid__column__data__name {
      font-weight: 600;
      font-size: 14px;
      color: #47576a;
    }
    label.grid__column__data__type {
      font-size: 14px;
      font-weight: 400;
      display: flex;
      align-items: center;
      color: #c9cfda;
    }
  }
  div.grid__column__tag__action {
    padding-left: 8px;
    margin-top: 2px;
    color: #a6abbd;
    font-weight: 400;
    font-size: 14px;
    padding: 4px 7px 4px 7px;
  }
  div.grid__column__tag__wrapper {
    margin-top: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 7px 4px 7px;
    &::after {
      content: "+2";
      color: #a6abbd;
    }
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 4px 14px;
      width: 120px;
      border: 1px solid rgba(0, 0, 0, 0.23);
      border-radius: 16px;
      color: #47576a;
      font-size: 14px;
    }
  }
`;
