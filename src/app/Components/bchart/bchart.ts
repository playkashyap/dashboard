import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { mynaTrendingUp } from '@ng-icons/mynaui/outline';
import { heroBolt } from '@ng-icons/heroicons/outline';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexOptions } from 'apexcharts';

interface RadialBarChartOptions extends ApexOptions {
  series: number[];
  chart: any;
  plotOptions: any;
  labels: string[];
  fill: any;
  height?: any;
}

@Component({
  selector: 'app-bchart',
  standalone: true,
  imports: [CommonModule, NgIcon, NgApexchartsModule],
  templateUrl: './bchart.html',
  styleUrl: './bchart.scss',
  viewProviders: [provideIcons({ mynaTrendingUp, heroBolt })],
})
export class Bchart {
  public chartOptions: RadialBarChartOptions = {
    chart: {
      type: 'radialBar',
      height: 350,
      sparkline: { enabled: true },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          margin: 0,
          size: '60%',
        },
        track: {
          background: '#e7e7e7',
          strokeWidth: '97%',
          margin: 5,
        },
        
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 10,
            fontSize: '22px',
            color: '#111827',
            formatter: (val: number) => `${val}`,
          },
        },
      },
    },
    fill: {
      colors: ['#7e3af2'],
    },
    labels: ['Usage'],
    series: [80],
  };
}
