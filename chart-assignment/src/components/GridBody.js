import React from "react";
import styled from "styled-components";

import { GridColumnHeader } from "./GridColumnHeader";

export const GridBody = ({ rows }) => {
  return rows && rows.length > 0 ? (
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
  ) : null;
};
const formColumnLayout = (props) => {
  let columnString = "";
  for (let i = 0; i < props.count; i++) {
    columnString += "1fr ";
  }
  return columnString;
};
const GridBodyWrapper = styled.div`
  margin-top: 5px;
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
