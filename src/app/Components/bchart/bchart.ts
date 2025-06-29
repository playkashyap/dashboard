import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartComponent } from 'highcharts-angular';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-bchart',
  standalone: true,
  imports: [CommonModule, HighchartsChartComponent],
  templateUrl: './bchart.html',
  styleUrl: './bchart.scss',
})
export class Bchart {
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'solidgauge',
    },
    title: { text: '' },
    pane: {
      startAngle: -90,
      endAngle: 90,
      size: '140%',
    },
    tooltip: { enabled: false },
    yAxis: {
      min: 0,
      max: 300,
      stops: [[0.8, '#7e3af2']],
      lineWidth: 0,
      tickWidth: 0,
      labels: { enabled: false },
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: -20,
          borderWidth: 0,
        },
      },
    },
  };
}
