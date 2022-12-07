import React, { useState } from "react";
import rowData from "../resources/response2.json";

export const SourceConfigActions = ({ setGridData }) => {
  const [connectionObject, setConnectionObject] = useState({
    name: "",
    schema: "",
    table: "",
  });
  const getGridData = () => {
    setGridData(rowData.results);
  };
  return (
    <div className="grid__header__body-sourceconfig-wrapper">
      <div className="grid__header__body-sourceconfig-actions">
        <div>
          <button>
            <svg
              width="31"
              height="29"
              viewBox="0 0 31 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5039 7.85413C22.5039 8.85463 19.1464 9.66663 15.0039 9.66663C10.8614 9.66663 7.50391 8.85463 7.50391 7.85413C7.50391 6.85363 10.8614 6.04163 15.0039 6.04163C19.1464 6.04163 22.5039 6.85363 22.5039 7.85413Z"
                fill="#66748A"
              />
              <path
                d="M15.0039 10.875C10.8789 10.875 7.50391 10.0292 7.50391 9.0625V12.6875C7.50391 13.6542 10.8789 14.5 15.0039 14.5C19.1289 14.5 22.5039 13.6542 22.5039 12.6875V9.0625C22.5039 10.0292 19.1289 10.875 15.0039 10.875Z"
                fill="#66748A"
              />
              <path
                d="M15.0039 15.7084C10.8789 15.7084 7.50391 14.8625 7.50391 13.8959V17.5209C7.50391 18.4875 10.8789 19.3334 15.0039 19.3334C19.1289 19.3334 22.5039 18.4875 22.5039 17.5209V13.8959C22.5039 14.8625 19.1289 15.7084 15.0039 15.7084Z"
                fill="#66748A"
              />
              <path
                d="M15.0039 20.5417C10.8789 20.5417 7.50391 19.6959 7.50391 18.7292V22.3542C7.50391 23.3209 10.8789 24.1667 15.0039 24.1667C19.1289 24.1667 22.5039 23.3209 22.5039 22.3542V18.7292C22.5039 19.6959 19.1289 20.5417 15.0039 20.5417Z"
                fill="#66748A"
              />
            </svg>
            Connect
          </button>
          <button>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0039 14V16H9.00391V14H4.00391V20H20.0039V14H15.0039ZM8.00391 18H6.00391V16H8.00391V18Z"
                fill="#5664D2"
              />
              <path
                d="M17.0039 9L12.0039 4L7.00391 9H10.0039V15H14.0039V9H17.0039Z"
                fill="#5664D2"
              />
            </svg>
            Upload
          </button>
        </div>
        <div>
          <ul>
            <li>Add/Upload Data</li>
            <li>Add data from previous results</li>
          </ul>
        </div>
      </div>
      <div className="grid__header__body-connectconfig">
        <div className="grid__header__body-connectconfig-input">
          <div>
            <div>
              <input
                type="text"
                placeholder="Connection name"
                value={connectionObject.name}
                onChange={(event) => {
                  event.persist();
                  setConnectionObject((prevState) => {
                    return {
                      ...prevState,
                      name: event.target.value,
                    };
                  });
                }}
              ></input>
            </div>
          </div>
          <div>
            <div>
              <input
                type="text"
                placeholder="Schema name"
                value={connectionObject.schema}
                onChange={(event) => {
                  event.persist();
                  setConnectionObject((prevState) => {
                    return {
                      ...prevState,
                      schema: event.target.value,
                    };
                  });
                }}
              ></input>
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Table name"
              value={connectionObject.table}
              onChange={(event) => {
                event.persist();
                setConnectionObject((prevState) => {
                  return {
                    ...prevState,
                    table: event.target.value,
                  };
                });
              }}
            ></input>
          </div>
        </div>
        <div className="grid__header__body-connectconfig-action">
          <button
            onClick={() => {
              getGridData();
            }}
            disabled={
              !connectionObject.name &&
              !connectionObject.schema &&
              !connectionObject.table
            }
            className={
              connectionObject.name &&
              connectionObject.schema &&
              connectionObject.table
                ? "active-button"
                : "disabled-button"
            }
          >
            Add
          </button>
        </div>
      </div>
      {connectionObject.name &&
      connectionObject.schema &&
      connectionObject.table ? (
        <ul>
          <li>
              {connectionObject.name}
          </li>
          <li>{connectionObject.schema}</li>
          <li>{connectionObject.table}</li>
        </ul>
      ) : null}
    </div>
  );
};
