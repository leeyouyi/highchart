import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import indicators from 'highcharts/indicators/indicators';
import pivotPoints from 'highcharts/indicators/pivot-points';
import macd from 'highcharts/indicators/macd';
import exporting from 'highcharts/modules/exporting';
import map from 'highcharts/modules/map';
import MapChart from 'MapChart';
import MapData from './MapData';
import HighchartsReact from 'highcharts-react-official';

const mapOptions = {
  title: {
    text: '',
  },

  colorAxis: {
    min: 0,
    stops: [
      [0, '#EFEFFF'],
      [0.67, '#4444FF'],
      [1, '#000022'],
    ],
  },
  tooltip: {
    pointFormatter: function (this: HighchartsReact.Props): string {
      return this.properties.TNAME.split(',')[0];
    },
  },
  legend: { enabled: false },

  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: 'bottom',
    },
  },
  series: [
    {
      mapData: MapData,
      // dataLabels: {
      //   formatter: function (this: HighchartsReact.Props): string {
      //     console.log('this', this);
      //     return this.properties.TNAME.split(',')[0];
      //   },
      // },
      name: 'Taiwan',
      data: [
        ['臺北市北投區', 63012],
        ['臺北市士林區', 63011],
        ['臺北市內湖區', 63010],
        ['臺北市中山區', 63004],
        ['臺北市大同區', 63006],
        ['臺北市松山區', 63001],
        ['臺北市南港區', 63009],
        ['臺北市中正區', 63005],
        ['臺北市信義區', 63002],
        ['臺北市萬華區', 63007],
        ['臺北市大安區', 63003],
        ['臺北市文山區', 63008],
      ],
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

function App() {
  useEffect(() => {
    indicators(Highcharts);
    pivotPoints(Highcharts);
    macd(Highcharts);
    exporting(Highcharts);
    map(Highcharts);
  }, []);

  return (
    <div>
      <h2>Highmaps</h2>
      <MapChart options={mapOptions} highcharts={Highcharts} />
    </div>
  );
}

export default App;
