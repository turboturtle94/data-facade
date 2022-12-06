import React, { useState } from "react";
import styled from "styled-components";

import { GridBody } from "./GridBody";

import rowData from "../resources/response2.json"

export default function ConnectionGrid() {
  const [gridData, setGridData] = useState([]);
  const getGridData = () => {
        setGridData(rowData.results)
  };
  return (
    <ConnectionGridWrapper>
      <div className="grid__header__title">
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
      <div className="grid__header__body">
        <div className="grid__header__body__options">
          <div className="grid__header__body__options-dataframes">
            <label>
              <span>Dataframes</span>
            </label>
          </div>
          <div className="grid__header__body-generatechart">
            <label>
              <span>Generate Chart</span>
            </label>
          </div>
        </div>
        <div className="grid__header__body-sourceconfig">
          <div>
            <button>
              <svg
                width="126"
                height="17"
                viewBox="0 0 126 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.8169 15.5825V13.7881C27.978 13.9346 28.1685 14.0664 28.3882 14.1836C28.6128 14.3008 28.8496 14.4009 29.0986 14.4839C29.3477 14.562 29.5967 14.623 29.8457 14.667C30.0947 14.7109 30.3242 14.7329 30.5342 14.7329C31.2666 14.7329 31.811 14.6108 32.1675 14.3667C32.5288 14.1226 32.7095 13.7686 32.7095 13.3047C32.7095 13.0557 32.6484 12.8408 32.5264 12.6602C32.4092 12.4746 32.2432 12.3062 32.0283 12.1548C31.8135 12.0034 31.5596 11.8594 31.2666 11.7227C30.9785 11.5811 30.6685 11.4346 30.3364 11.2832C29.98 11.0928 29.6479 10.8999 29.3403 10.7046C29.0327 10.5093 28.7642 10.2944 28.5347 10.0601C28.3101 9.8208 28.1318 9.55225 28 9.25439C27.873 8.95654 27.8096 8.60742 27.8096 8.20703C27.8096 7.71387 27.9194 7.28662 28.1392 6.92529C28.3638 6.55908 28.6567 6.25879 29.0181 6.02441C29.3843 5.78516 29.7993 5.60938 30.2632 5.49707C30.7271 5.37988 31.2007 5.32129 31.6841 5.32129C32.7827 5.32129 33.5835 5.4458 34.0864 5.69482V7.41602C33.4907 6.98633 32.7241 6.77148 31.7866 6.77148C31.5278 6.77148 31.269 6.7959 31.0103 6.84473C30.7563 6.89355 30.5269 6.97412 30.3218 7.08643C30.1216 7.19873 29.958 7.34277 29.8311 7.51855C29.7041 7.69434 29.6406 7.90674 29.6406 8.15576C29.6406 8.39014 29.6895 8.59277 29.7871 8.76367C29.8848 8.93457 30.0264 9.09082 30.2119 9.23242C30.4023 9.37402 30.6318 9.51318 30.9004 9.6499C31.1738 9.78174 31.4888 9.92578 31.8452 10.082C32.2114 10.2725 32.5557 10.4727 32.8779 10.6826C33.2051 10.8926 33.4907 11.1245 33.7349 11.3784C33.9839 11.6323 34.1792 11.9155 34.3208 12.228C34.4673 12.5356 34.5405 12.8872 34.5405 13.2827C34.5405 13.8149 34.4331 14.2642 34.2183 14.6304C34.0034 14.9966 33.7129 15.2944 33.3467 15.5239C32.9854 15.7534 32.5679 15.9194 32.0942 16.022C31.6206 16.1245 31.1201 16.1758 30.5928 16.1758C30.417 16.1758 30.1997 16.1611 29.9409 16.1318C29.687 16.1074 29.4258 16.0684 29.1572 16.0146C28.8887 15.9658 28.6348 15.9048 28.3955 15.8315C28.1562 15.7583 27.9634 15.6753 27.8169 15.5825ZM39.6089 16.1758C38.4517 16.1758 37.5264 15.8267 36.833 15.1284C36.1445 14.4253 35.8003 13.4951 35.8003 12.3379C35.8003 11.0781 36.1592 10.0942 36.877 9.38623C37.5996 8.67822 38.5713 8.32422 39.792 8.32422C40.9639 8.32422 41.877 8.66846 42.5312 9.35693C43.1855 10.0454 43.5127 11 43.5127 12.2207C43.5127 13.417 43.1587 14.3765 42.4507 15.0991C41.7476 15.8169 40.8003 16.1758 39.6089 16.1758ZM39.6895 9.6792C39.0254 9.6792 38.5005 9.91113 38.1147 10.375C37.729 10.8389 37.5361 11.4785 37.5361 12.2939C37.5361 13.0801 37.7314 13.7002 38.1221 14.1543C38.5127 14.6035 39.0352 14.8281 39.6895 14.8281C40.3584 14.8281 40.8711 14.606 41.2275 14.1616C41.5889 13.7173 41.7695 13.085 41.7695 12.2646C41.7695 11.4395 41.5889 10.8022 41.2275 10.353C40.8711 9.90381 40.3584 9.6792 39.6895 9.6792ZM51.7891 16H50.0898V14.8135H50.0605C49.5674 15.7217 48.8008 16.1758 47.7607 16.1758C45.9883 16.1758 45.1021 15.1113 45.1021 12.9824V8.5H46.8013V12.8066C46.8013 14.1543 47.3213 14.8281 48.3613 14.8281C48.8643 14.8281 49.2769 14.6426 49.5991 14.2715C49.9263 13.9004 50.0898 13.4146 50.0898 12.814V8.5H51.7891V16ZM58.3589 10.1187C58.1538 9.95752 57.8584 9.87695 57.4727 9.87695C56.9697 9.87695 56.5498 10.104 56.2129 10.5581C55.876 11.0122 55.7075 11.6299 55.7075 12.4111V16H54.0083V8.5H55.7075V10.0454H55.7368C55.9028 9.51807 56.1567 9.10791 56.4985 8.81494C56.8452 8.51709 57.231 8.36816 57.6558 8.36816C57.9634 8.36816 58.1978 8.41455 58.3589 8.50732V10.1187ZM64.7969 15.6558C64.1963 16.0024 63.4858 16.1758 62.6655 16.1758C61.5522 16.1758 60.6538 15.8291 59.9702 15.1357C59.2866 14.4375 58.9448 13.5342 58.9448 12.4258C58.9448 11.1904 59.311 10.1992 60.0435 9.45215C60.7808 8.7002 61.7646 8.32422 62.9951 8.32422C63.6787 8.32422 64.2817 8.44385 64.8042 8.68311V10.2651C64.2817 9.87451 63.7251 9.6792 63.1343 9.6792C62.4165 9.6792 61.8281 9.92334 61.3691 10.4116C60.9102 10.895 60.6807 11.5298 60.6807 12.3159C60.6807 13.0923 60.8955 13.7051 61.3252 14.1543C61.7598 14.6035 62.3408 14.8281 63.0684 14.8281C63.6787 14.8281 64.2549 14.6108 64.7969 14.1763V15.6558ZM72.8389 12.7114H67.7266C67.7461 13.4048 67.9585 13.9395 68.3638 14.3154C68.7739 14.6914 69.3354 14.8794 70.0483 14.8794C70.8491 14.8794 71.584 14.6401 72.2529 14.1616V15.5312C71.5693 15.9609 70.666 16.1758 69.543 16.1758C68.4395 16.1758 67.5728 15.8364 66.9429 15.1577C66.3179 14.4741 66.0054 13.5146 66.0054 12.2793C66.0054 11.1123 66.3496 10.1626 67.0381 9.43018C67.7314 8.69287 68.5908 8.32422 69.6162 8.32422C70.6416 8.32422 71.4351 8.65381 71.9966 9.31299C72.5581 9.97217 72.8389 10.8877 72.8389 12.0596V12.7114ZM71.1982 11.5103C71.1934 10.8999 71.0493 10.4263 70.7661 10.0894C70.4829 9.74756 70.0923 9.57666 69.5942 9.57666C69.106 9.57666 68.6909 9.75488 68.3491 10.1113C68.0122 10.4678 67.8047 10.9341 67.7266 11.5103H71.1982Z"
                  fill="#DB8C28"
                />
                <path
                  d="M7.00231 8.21095C5.24858 8.21095 3.49513 8.2104 1.7414 8.21149C1.42737 8.21177 1.19062 8.08353 1.0643 7.79389C0.861795 7.32915 1.19144 6.84085 1.71208 6.8266C1.94034 6.8203 2.1686 6.82523 2.39713 6.82523C3.63022 6.82523 4.86303 6.82523 6.09612 6.82523C6.27807 6.82523 6.27862 6.82495 6.27862 6.64629C6.2789 5.04794 6.27752 3.44958 6.28081 1.85122C6.28109 1.72517 6.29095 1.59172 6.33315 1.47499C6.46002 1.12315 6.80638 0.943117 7.18097 1.01601C7.50048 1.07793 7.74737 1.3821 7.74792 1.73092C7.75011 3.26982 7.74901 4.80899 7.74929 6.34789C7.74929 6.45749 7.75778 6.56792 7.74709 6.67644C7.73476 6.80303 7.78874 6.82769 7.90383 6.82742C9.35148 6.82413 10.7991 6.82495 12.2468 6.82578C12.5923 6.82605 12.8356 6.97978 12.9535 7.26613C13.1299 7.69552 12.8222 8.18382 12.3586 8.2093C12.2994 8.21259 12.2399 8.21095 12.1805 8.21095C10.4547 8.21095 8.72863 8.21095 7.00231 8.21095Z"
                  fill="#DB8C28"
                  stroke="#DB8C28"
                  strokeWidth="0.3"
                />
                <path
                  d="M7.00664 9.05106C8.20301 9.05106 9.39911 9.0516 10.5955 9.05078C10.8259 9.05051 11.0328 9.10668 11.1734 9.30233C11.3123 9.49579 11.3326 9.71007 11.2285 9.92408C11.1271 10.1329 10.955 10.2488 10.7185 10.2584C10.6593 10.2609 10.5999 10.2606 10.5404 10.2606C9.6956 10.2609 8.85107 10.263 8.00627 10.2581C7.87583 10.2573 7.83528 10.294 7.83555 10.4272C7.83966 12.1349 7.83829 13.8426 7.83802 15.5503C7.83802 15.8816 7.70238 16.1372 7.39602 16.2759C6.9269 16.488 6.39448 16.1575 6.36242 15.6426C6.35886 15.5834 6.3605 15.524 6.3605 15.4645C6.3605 13.7932 6.3605 12.1223 6.3605 10.451C6.3605 10.2611 6.36023 10.2606 6.17554 10.2606C5.24414 10.2603 4.31248 10.2611 3.38108 10.2598C3.0676 10.2592 2.86921 10.1332 2.76454 9.87586C2.63328 9.55333 2.8229 9.16888 3.16077 9.08476C3.25695 9.06092 3.35916 9.05215 3.45863 9.05215C4.64157 9.05023 5.82397 9.05106 7.00664 9.05106Z"
                  fill="#DB8C28"
                  stroke="#DB8C28"
                  strokeWidth="0.3"
                />
              </svg>
            </button>
          </div>
          <div>
            <svg
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0039 2C17.0039 1.4 16.6039 1 16.0039 1H2.00391C1.40391 1 1.00391 1.4 1.00391 2V8C1.00391 8.6 1.40391 9 2.00391 9H16.0039C16.6039 9 17.0039 8.6 17.0039 8V2ZM16.0039 8H2.00391V2H16.0039V8Z"
                fill="#C4C4C4"
                stroke="#C4C4C4"
                strokeWidth="0.4"
              />
              <path
                d="M3.00391 3H4.00391V7H3.00391V3Z"
                fill="#C4C4C4"
                stroke="#C4C4C4"
                strokeWidth="0.4"
              />
            </svg>
            <span>Inputs</span>
          </div>
          <div>
            <svg
              width="14"
              height="17"
              viewBox="0 0 14 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00415 8.56004C1.00415 6.52411 1.00334 4.48817 1.00468 2.45197C1.00522 1.76139 1.39357 1.2261 2.02252 1.05279C2.14201 1.01995 2.26957 1.00273 2.39337 1.00246C5.46086 0.99977 8.52835 0.999231 11.5956 1.00112C12.3346 1.00165 12.9334 1.56063 12.995 2.29642C13.0007 2.36343 13.002 2.43071 13.002 2.49799C13.0023 6.54752 13.0009 10.597 13.0039 14.6466C13.0042 15.1676 12.8244 15.5912 12.3927 15.8942C12.1704 16.0501 11.9201 16.1319 11.6486 16.1321C8.55419 16.1335 5.45979 16.1354 2.36565 16.1316C1.6444 16.1308 1.04855 15.5495 1.00845 14.829C1.00415 14.7529 1.00442 14.6767 1.00442 14.6006C1.00388 12.587 1.00415 10.5734 1.00415 8.56004ZM1.54724 8.56461C1.54724 10.5919 1.55505 12.6193 1.54159 14.6463C1.53809 15.1587 1.90276 15.5804 2.47384 15.5786C5.48777 15.5691 8.50171 15.5745 11.5159 15.5729C11.6182 15.5729 11.7239 15.5683 11.8219 15.542C12.2356 15.4308 12.4581 15.0963 12.4581 14.5973C12.4584 10.5561 12.4584 6.51522 12.4581 2.47404C12.4581 1.88358 12.1131 1.54125 11.5197 1.54098C10.2279 1.54044 8.93635 1.54071 7.64455 1.54071C5.92214 1.54071 4.20001 1.53856 2.47761 1.54448C2.32528 1.54502 2.15923 1.57085 2.02359 1.63517C1.68692 1.7953 1.54563 2.08515 1.54616 2.45547C1.54832 4.49221 1.54724 6.52841 1.54724 8.56461Z"
                fill="#65676B"
                stroke="#65676B"
                strokeWidth="0.6"
              />
              <path
                d="M6.99297 8.73166C6.00662 8.73166 5.02028 8.73193 4.0342 8.73166C3.75647 8.73166 3.66039 8.63612 3.66039 8.36134C3.66012 6.90887 3.65958 5.45613 3.66227 4.00366C3.66227 3.93019 3.67411 3.84892 3.70695 3.78487C3.76346 3.67533 3.86708 3.62743 3.99061 3.65703C4.11064 3.68583 4.18464 3.76549 4.19891 3.89144C4.20429 3.94015 4.20214 3.98994 4.20214 4.03919C4.20241 5.36625 4.20429 6.6933 4.19918 8.02036C4.19864 8.15627 4.23282 8.19341 4.37061 8.19287C6.24453 8.18829 8.11845 8.19233 9.99237 8.18668C10.2402 8.18587 10.3401 8.35031 10.297 8.51797C10.2636 8.64769 10.1592 8.72682 10.0061 8.73058C9.86723 8.73408 9.72809 8.73166 9.58922 8.73166C8.72371 8.73166 7.85821 8.73166 6.99297 8.73166Z"
                fill="#65676B"
                stroke="#65676B"
                strokeWidth="0.6"
              />
              <path
                d="M7.71445 6.19873C8.15636 5.75521 8.57969 5.33053 9.01971 4.88863C8.95727 4.82565 8.87707 4.75595 8.81221 4.67414C8.77481 4.62704 8.73148 4.55034 8.74628 4.50513C8.76135 4.45857 8.84047 4.41228 8.89753 4.40313C9.2159 4.35199 9.53562 4.31162 9.85534 4.26883C9.98991 4.2508 10.0526 4.30866 10.0354 4.44484C9.99394 4.77371 9.95035 5.10232 9.8984 5.4293C9.89006 5.48151 9.84243 5.54879 9.79641 5.56709C9.75927 5.5819 9.68606 5.54476 9.64812 5.50977C9.56953 5.43738 9.50387 5.35099 9.42394 5.26002C9.36123 5.31896 9.31898 5.35637 9.27888 5.3962C8.83805 5.83622 8.39803 6.27705 7.95693 6.7168C7.77554 6.89765 7.65498 6.89846 7.47735 6.7203C7.25963 6.50177 7.04352 6.28135 6.81773 6.0526C6.77009 6.09566 6.73322 6.12634 6.69958 6.15998C6.28109 6.57793 5.86449 6.99777 5.44277 7.41249C5.3884 7.46604 5.31359 7.51126 5.24038 7.53009C5.13812 7.55647 5.04554 7.51341 4.98633 7.42083C4.92497 7.32475 4.92739 7.22571 4.98794 7.13017C5.00678 7.1003 5.0337 7.07527 5.05899 7.04998C5.5628 6.53971 6.06687 6.02972 6.57121 5.52027C6.73995 5.34964 6.86913 5.34937 7.04272 5.52215C7.2677 5.74606 7.49 5.9724 7.71445 6.19873Z"
                fill="#65676B"
                stroke="#65676B"
                strokeWidth="0.6"
              />
              <path
                d="M7.01984 10.6565C8.0156 10.6565 9.01136 10.6562 10.0069 10.6568C10.2055 10.6568 10.3112 10.7394 10.3193 10.8949C10.3271 11.0489 10.2235 11.1751 10.0704 11.1945C10.0262 11.2001 9.98075 11.1982 9.93608 11.1982C7.98061 11.1985 6.02488 11.1985 4.06942 11.1982C4.02017 11.1982 3.97011 11.2004 3.92167 11.1942C3.77957 11.1754 3.67084 11.0516 3.67595 10.9186C3.6808 10.7905 3.78926 10.6759 3.92543 10.66C3.97415 10.6543 4.02393 10.6568 4.07318 10.6568C5.05549 10.6562 6.03753 10.6562 7.01984 10.6565Z"
                fill="#65676B"
                stroke="#65676B"
                strokeWidth="0.6"
              />
              <path
                d="M7.00493 13.1212C7.97835 13.1212 8.95151 13.1212 9.92494 13.1214C9.97419 13.1214 10.024 13.1198 10.0727 13.1263C10.2148 13.1448 10.2977 13.231 10.3044 13.3618C10.3117 13.5017 10.2272 13.6239 10.0953 13.6524C10.039 13.6645 9.97957 13.6651 9.92144 13.6651C7.9614 13.6656 6.00136 13.6656 4.04105 13.6653C3.80449 13.6653 3.66428 13.5663 3.66024 13.3984C3.6562 13.225 3.79938 13.1214 4.04428 13.1214C5.03143 13.1209 6.01805 13.1212 7.00493 13.1212Z"
                fill="#65676B"
                stroke="#65676B"
                strokeWidth="0.6"
              />
            </svg>
            <span>Results</span>
          </div>
        </div>
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
                <input type="text" placeholder="Connection name"></input>
              </div>
            </div>
            <div>
              <div>
                <input type="text" placeholder="Schema name"></input>
              </div>
            </div>
            <div>
              <input type="text" placeholder="Table name"></input>
            </div>
          </div>
          <div className="grid__header__body-connectconfig-action">
            <button
              onClick={() => {
                getGridData();
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <GridBody rows={gridData}></GridBody>
    </ConnectionGridWrapper>
  );
}

const ConnectionGridWrapper = styled.div`
  div.grid__header__title {
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
  div.grid__header__body {
    padding-left: 42px;
    padding-right: 42px;
    div.grid__header__body__options {
      display: flex;
      justify-content: space-between;
      padding-top: 13px;
      padding-bottom: 13px;
      div {
        label {
          color: #65676b;
        }
      }
    }
    div.grid__header__body-sourceconfig {
      display: flex;
      justify-content: space-around;
      border-top: 1px solid #ced0d4;
      border-bottom: 1px solid #ced0d4;
      padding-top: 8px;
      padding-bottom: 8px;
      font-size: 15px;
      font-weight: 600;
      color: #65676b;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        button {
          border: none;
          background: none;
          font-size: 16px;
          font-weight: 600;
          color: #65676b;
        }
        span {
          margin-left: 14px;
        }
      }
    }

    div.grid__header__body-sourceconfig-actions {
      display: flex;
      justify-content: space-between;
      margin-top: 14px;
      div {
        display: flex;
        button {
          display: flex;
          font-size: 10px;
          text-align: center;
          align-content: center;
          display: flex;
          text-align: center;
          align-items: center;
          background: none;
          border: 1px solid #ced0d4;
          border-radius: 8px;
          width: 90px;
          height: 29px;
          margin-right: 5px;
        }
      }

      div {
        ul {
          display: flex;
          margin: 0;
          gap: 15px;
          li:first-child {
            list-style-type: none;
            color: #18afff;
          }
          li {
            font-family: "Segoe UI";
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
            line-height: 20px;
            display: flex;
            align-items: center;
            color: #65676b;
          }
        }
      }
    }

    div.grid__header__body-connectconfig {
      margin-top: 25px;
      display: flex;
      gap: 14px;
      background: #f0f2f5;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1),
        0px 0px 1px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      height: 70px;
      align-items: center;
      padding-left: 20px;
      padding-right: 18px;
      justify-content: space-between;
      div.grid__header__body-connectconfig-input {
        display: flex;
        gap: 14px;
        padding-left: 20px;
        input {
          width: 290px;
          height: 31.66px;
          font-weight: 600;
          font-size: 13px;
          color: #353535;
        }
      }
      div.grid__header__body-connectconfig-action {
        button {
          background: #18afff;
          border-radius: 6px;
          width: 94px;
          height: 42px;
          color: white;
        }
      }
    }
  }
`;