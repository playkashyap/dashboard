import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableService } from '../../Services/table-service';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrls: ['./table.scss'],
})
export class Table implements OnInit {
  loading = true;
  columns: any[] = [];
  rows: any[] = [];

  constructor(private gridService: TableService) {}

  ngOnInit(): void {
    this.gridService.getGridData().subscribe((data) => {
      this.columns = data.grid_columns;
      this.rows = data.grid_data;
      console.log('Columns:', this.columns);
      console.log('Rows:', this.rows);
      this.loading = false;
    });
  }
}
