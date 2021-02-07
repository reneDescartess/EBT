import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';
const DemoPie = () => {
  var data = [
    {
      type: 'EBT',
      value: 300,
    },
    {
      type: 'ETH',
      value: 100,
    },
    {
      type: 'FRAX',
      value: 100,
    }
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}$',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        formatter: function formatter() {
          return 'Asset\nDistribution';
        },
      },
    },
  };
  return <Pie {...config} />;
};
export default DemoPie;