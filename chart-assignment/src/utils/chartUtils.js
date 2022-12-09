import * as chartConstants from "./chartConstants";
const getCountOf = (data, columnToCount, countColumn=null) => {
  let countMap = {};
  if (countColumn) {
    data.forEach((item) => {
      countMap[item[columnToCount]] = item[countColumn];
    });
  } else {
    data.forEach((item) => {
      if (countMap[item[columnToCount]]) {
        countMap[item[columnToCount]]++;
      } else {
        countMap[item[columnToCount]] = 1;
      }
    });
  }
  return countMap;
};


export const generateBarData = (data, chartConfig) => {
  let chartMap = {};
  const { title, orientation, xColumn, yColumn, xAggregate, yAggregate, xTitle, yTitle } =
    chartConfig;
  let aggToConsider = orientation === chartConstants.HORIZONTAL ? yAggregate : xAggregate;
  let columnToConsider =
    orientation === chartConstants.HORIZONTAL ? yColumn : xColumn;
  if (aggToConsider === chartConstants.COUNT) {
    chartMap = getCountOf(data, columnToConsider);
  } else {
    chartMap = getCountOf(data, xColumn, yColumn);
  }
  return {
    chart: {
      type: orientation === chartConstants.HORIZONTAL ? "bar" : "column",
    },
    title: {
      text: title,
      align: "left",
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    xAxis: {
      categories: Object.keys(chartMap),
      title: {
        text: xTitle,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: yTitle,
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
    },
    series: {
      data: Object.keys(chartMap)
        .map((key) => parseInt(chartMap[key]))
        .filter((item) => !Number.isNaN(item)),
    },
  };
};

export const getSampleChartData = (chartConfig) => {
  if (chartConfig.type === "bar") {
    return {
      chart: {
        type:
          chartConfig.orientation === chartConstants.HORIZONTAL
            ? "bar"
            : "column",
      },
      title: {
        text: "Sample Data",
        align: "left",
      },
      xAxis: {
        categories: ["Option1", "Option2", "Option3", "Option4", "Option5"],
        title: {
          text: null,
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: null,
          align: "high",
        },
        labels: {
          overflow: "justify",
        },
      },
      tooltip: {
        valueSuffix: " millions",
      },
      series: [
        {
          data: [631, 727, 3202, 721, 26],
        },
        {
          data: [814, 841, 3714, 726, 31],
        },
        {
          data: [1044, 944, 4170, 735, 40],
        },
      ],
    };
  } else {
    return;
  }
};
