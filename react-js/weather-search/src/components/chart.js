import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  const length = Object.keys(data).length;
  var sum = 0;

  for (var i = 0; i < length; i++) {
    sum += data[i];
  }

  return _.round(sum/length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data} >
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}
