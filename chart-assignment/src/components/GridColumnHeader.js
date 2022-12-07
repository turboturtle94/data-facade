import React from "react";
import styled from "styled-components";

export const GridColumnHeader = ({data}) => {
  return (
    <GridColumnHeaderWrapper health={95}>
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
        <div className="gird__column__tag">PossibleDimension</div>
      </div>
      <div className="grid__column__health__wrapper">
        <div className="gird__column__health"></div>
      </div>
    </GridColumnHeaderWrapper>
  );
};

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
  div.grid__column__health__wrapper{
    background-color: #BBEDCC;
    height: 2.5px;
    div{
      background-color: #00AA11;
      width: ${props => props.health+"%"};
      height: 2.5px;
      margin-left: 0;
    }
  }
`;
