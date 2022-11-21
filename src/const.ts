import taipei from './taipei.json';
import HighchartsReact from 'highcharts-react-official';

const mapData = taipei.features.map((country, index) => {
  // console.log(country);
  if (country.properties) {
    return {
      'hc-key': country.properties['hc-key'],
      value: country.properties.PERF_ID,
      name: country.properties.TNAME,
      color:
        index < 3
          ? '#67cc02'
          : index < 6
          ? '#ffe100'
          : index < 9
          ? '#fab011'
          : '#ff523f',
    };
  }
});

export const mapOptions = {
  /** 導航按鈕 */
  navigation: {
    buttonOptions: {
      enabled: false,
    },
  },
  /** 抬頭 */
  title: {
    text: '台北市地圖~',
    align: 'right',
  },
  /** 浮水印商標區 */
  credits: {
    enabled: false,
  },
  /** 圖表區 */
  chart: {
    width: 500,
    height: 500,
  },
  /** 繪圖選項 */
  plotOptions: {
    map: {
      allAreas: false,
      dataLabels: {
        enabled: true,
        color: '#FFFFFF',
        style: {
          fontWeight: 'bold',
        },
        formatter: function (this: HighchartsReact.Props) {
          // console.log(this);
          return this.point.options.name;
        },
      },

      tooltip: {
        headerFormat: '',
        pointFormat: '{point.name}: <b>{series.name}</b>',
      },
    },
  },
  /** hover顯示 */
  tooltip: {
    pointFormatter: function (this: HighchartsReact.Props): string {
      return this.properties.TNAME.split(',')[0];
    },
  },
  /** 圖標顏色*/
  colorAxis: {
    dataClasses: [
      {
        from: -1,
        to: 0,
        color: '#67cc02',
        name: 'a',
      },
      {
        from: 0,
        to: 1,
        color: '#ffe100',
        name: 'b',
      },
      {
        from: 2,
        to: 3,
        name: 'c',
        color: '#fab011',
      },
      {
        from: 3,
        to: 4,
        name: 'd',
        color: '#ff523f',
      },
    ],
  },
  /** 圖標 */
  legend: {
    title: {
      text: '統計資訊',
    },
    align: 'left',
    verticalAlign: 'bottom',
    floating: true,
    layout: 'vertical',
    valueDecimals: 0,
    backgroundColor: 'rgba(255,255,255,0.9)',
    symbolRadius: 0,
    symbolHeight: 14,
    labelFormatter: function (this: HighchartsReact.Props): string {
      // console.log(this);
      if (this.from === -1) {
        return '1-99 ';
      } else if (this.from === 0 && this.to === 1) {
        return '100-349 ';
      } else if (this.from === 2 && this.to === 3) {
        return '350-499 ';
      } else return ' 500 ';
    },
  },

  /** 圖表資料區 */
  series: [
    {
      /** 形狀資料 */
      mapData: taipei,
      joinBy: 'hc-key',
      name: 'Taiwan',
      /** 形狀資料與行政區關聯設定 */
      data: mapData,
      //台北
      // data: [
      //   ['臺北市北投區', 63012, '#f00'],
      //   ['臺北市士林區', 63011, '#f00'],
      //   ['臺北市內湖區', 63010, '#f00'],
      //   ['臺北市中山區', 63004, '#ff0'],
      //   ['臺北市大同區', 63006, '#ff0'],
      //   ['臺北市松山區', 63001, '#ff0'],
      //   ['臺北市南港區', 63009, '#f0f'],
      //   ['臺北市中正區', 63005, '#f0f'],
      //   ['臺北市信義區', 63002, '#f0f'],
      //   ['臺北市萬華區', 63007, '#0f0'],
      //   ['臺北市大安區', 63003, '#0f0'],
      //   ['臺北市文山區', 63008, '#0f0'],
      // ],
      //台灣
      // data: [
      //   ['Z', 9007],
      //   ['W', 9020],
      //   ['G', 10002],
      //   ['J', 10004],
      //   ['K', 10005],
      //   ['N', 10007],
      //   ['M', 10008],
      //   ['P', 10009],
      //   ['Q', 10010],
      //   ['T', 10013],
      //   ['V', 10014],
      //   ['U', 10015],
      //   ['X', 10016],
      //   ['C', 10017],
      //   ['O', 10018],
      //   ['I', 10020],
      //   ['A', 63],
      //   ['E', 64],
      //   ['F', 65],
      //   ['B', 66],
      //   ['D', 67],
      //   ['H', 68],
      // ],
    },
  ],
};
