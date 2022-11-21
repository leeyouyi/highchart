import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import indicators from 'highcharts/indicators/indicators';
import pivotPoints from 'highcharts/indicators/pivot-points';
import macd from 'highcharts/indicators/macd';
import exporting from 'highcharts/modules/exporting';
import map from 'highcharts/modules/map';
import MapChart from 'MapChart';
import { mapOptions } from 'const';
// import MapData from './MapData';
// import HighchartsReact from 'highcharts-react-official';

const App = (): JSX.Element => {
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
};

export default App;
