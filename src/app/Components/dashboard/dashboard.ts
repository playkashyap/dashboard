import { Component } from '@angular/core';
import { Achart } from "../achart/achart";
import { Bchart } from "../bchart/bchart";

@Component({
  selector: 'app-dashboard',
  imports: [Achart, Bchart],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
