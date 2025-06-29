import { Component } from '@angular/core';
import { Achart } from '../achart/achart';
import { Bchart } from '../bchart/bchart';
import { Table } from '../table/table';
import { NgIcon, provideIcons } from '@ng-icons/core';

import { heroChartBarSquare } from '@ng-icons/heroicons/outline';
import { ionLayersOutline, ionSettingsOutline, ionHelpBuoyOutline } from '@ng-icons/ionicons';
import { remixHome6Line } from '@ng-icons/remixicon';
import { mynaSelectMultiple } from '@ng-icons/mynaui/outline';
import { boxPieChartAlt2, boxGroup, boxCube } from '@ng-icons/boxicons/regular';

@Component({
  selector: 'app-dashboard',
  imports: [Achart, Bchart, Table, NgIcon],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  viewProviders: [
    provideIcons({
      remixHome6Line,
      heroChartBarSquare,
      ionLayersOutline,
      mynaSelectMultiple,
      boxPieChartAlt2,
      boxGroup,
      ionSettingsOutline,
      ionHelpBuoyOutline,
      boxCube
    }),
  ],
})
export class Dashboard {}
