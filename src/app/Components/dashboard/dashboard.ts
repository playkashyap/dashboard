import { Component } from '@angular/core';
import { Achart } from "../achart/achart";
import { Bchart } from "../bchart/bchart";
import { Table } from "../table/table";

@Component({
  selector: 'app-dashboard',
  imports: [Achart, Bchart, Table],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
