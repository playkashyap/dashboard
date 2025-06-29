import { Component } from '@angular/core';
import { HighchartsChartComponent } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achart',
  imports: [CommonModule, HighchartsChartComponent],
  templateUrl: './achart.html',
  styleUrl: './achart.scss',
})
export class Achart {

  
  Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: { text: '' },
    legend: {
      enabled: false,
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      title: { text: 'Month' },
    },
    yAxis: {
      min: 0,
      max: 100,
      title: { text: 'Security rating' },
    },
    tooltip: {
      shared: true,
      valueSuffix: ' pts',
    },
    plotOptions: {
      column: {
        stacking: 'normal',
      },
    },
    series: [
      {
        name: 'Tier 1',
        type: 'column',
        data: [40, 50, 30, 35, 38, 42, 50, 48, 45, 47, 53, 49],
        color: '#e5e7eb',
      },
      {
        name: 'Tier 2',
        type: 'column',
        data: [20, 25, 15, 18, 20, 22, 25, 24, 22, 23, 26, 24],
        color: '#a78bfa',
      },
      {
        name: 'Tier 3',
        type: 'column',
        data: [15, 18, 12, 14, 13, 16, 18, 17, 16, 17, 18, 17],

        color: '#6d28d9',
      },
    ],
  };
}
