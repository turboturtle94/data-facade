import React, { useState } from "react";

import styled from "styled-components";
import { SVGMapper } from "./SVGMapper";

export const BasicStyledDropDown = ({
  width,
  height,
  content,
  defaultValue,
  callback,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  return (
    <BasicStyledDropDownWrapper
      width={width}
      height={height}
      value={selectedValue}
      onChange={(event) => {
        event.persist();
        setSelectedValue(event.target.value);
        callback(event.target.value);
      }}
    >
      {content.map((item) => (
        <option
          key={item.label}
          value={item.value}
          onClick={() => {
            callback(item.value);
          }}
        >
          {item.label}
        </option>
      ))}
    </BasicStyledDropDownWrapper>
  );
};

const BasicStyledDropDownWrapper = styled.select`
  padding-left: 8px;
  padding-right: 4px;
  border: 0.5px solid #cbcccf;
  border-radius: 11px;
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>") ;
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 50%;
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 11px;
`;

export const AdvancedStyledDropDown = ({
  width,
  height,
  content,
  defaultValue,
  callback,
  backgroundColor,
  defaultIcon
}) => {
  const getIcon = (value) => {
    const iconName = content.filter((item) => item.value === value)[0];
    return iconName ? iconName.icon:defaultIcon;
  };
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [currentIcon, setCurrentIcon] = useState(getIcon(defaultValue));

  return (
    <SelectWrapper>
      <div>
        <SVGMapper name={currentIcon}></SVGMapper>
      </div>
      <AdvancedStyledDropDownWrapper
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        onChange={(event) => {
          event.persist();
          setSelectedValue(event.target.value);
          setCurrentIcon(getIcon(event.target.value));
          callback(event.target.value);
        }}
        value={selectedValue}
      >
        {content.map((item) => (
          <option key={item.label} value={item.value}>
            {item.label}
          </option>
        ))}
      </AdvancedStyledDropDownWrapper>
    </SelectWrapper>
  );
};

const AdvancedStyledDropDownWrapper = styled.select`
  position: absolute;
  display: flex;
  padding-left: 22px;
  padding-right: 22px;
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  box-shadow: 0px 0.728906px 1.45781px rgba(0, 0, 0, 0.25),
    0px 0px 0.728906px rgba(0, 0, 0, 0.25);
  border-radius: 2.61px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: ${props => props.backgroundColor};
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 50%;
  font-family: "Segoe UI";
  font-size: 11px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #687a92;
  border: none;
  text-transform: capitalize;
  transform: translate(-50%,-50%);
`;

const SelectWrapper = styled.div`
  position: relative;
  div {
    position: absolute;
    top: 4px;
    z-index: 2;
    padding-left:4px;
    transform: translate(-134px,-17px);
  }
`;
