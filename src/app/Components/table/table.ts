import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableService } from '../../Services/table-service';
import Swal from 'sweetalert2';
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

  onDelete(rowToDelete: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this user?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.rows = this.rows.filter((row) => row.id !== rowToDelete.id);

        Swal.fire({
          title: 'Deleted!',
          text: 'User has been removed.',
          icon: 'success',
          timer: 1200,
          showConfirmButton: false,
        });
      }
    });
  }

  onShowName(row: any): void {
    const fullName = `${row.name?.first_name ?? ''} ${
      row.name?.last_name ?? ''
    }`;
    const handle = row.name?.handle ?? '';
    const role = row.role ?? '';
    const status = row.status ?? '';
    const email = row.email ?? '';
    const license = row.license_used ?? 0;

    const teamsHtml =
      row.teams
        ?.map(
          (team: any) => `
<span style="
      display: inline-block;
      margin: 4px 6px 0 0;
      padding: 4px 10px;
      font-size: 12px;
      font-weight: 500;
      border-radius: 9999px;
      color: ${team.text_color};
      background-color: ${team.background_color};
      border: 1px solid ${team.text_color};
    ">
      ${team.value}
    </span>
  `
        )
        .join('') ?? '';

    Swal.fire({
      title: fullName,
      html: `
      <div style="text-align: center; font-family: 'Inter', sans-serif; font-size: 14px; color: #374151; line-height: 1.6;">
        <div style="margin-bottom: 6px;"><strong style="color:#6B7280">Handle:</strong> ${handle}</div>
        <div style="margin-bottom: 6px;"><strong style="color:#6B7280">Status:</strong> 
          <span style="
            background: ${
              status.toLowerCase() === 'customer' ? '#ecfdf5' : '#e5e7eb'
            };
            color: ${
              status.toLowerCase() === 'customer' ? '#059669' : '#6b7280'
            };
            padding: 2px 8px;
            font-size: 12px;
            border-radius: 9999px;
            border: 1px solid ${
              status.toLowerCase() === 'customer' ? '#059669' : '#6b7280'
            };
          ">${status}</span>
        </div>
        <div style="margin-bottom: 6px;"><strong style="color:#6B7280">Role:</strong> ${role}</div>
        <div style="margin-bottom: 6px;"><strong style="color:#6B7280">Email:</strong> ${email}</div>
        <div style="margin-bottom: 6px;"><strong style="color:#6B7280">License Used:</strong> 
          <span style="color: #7e3af2; font-weight: 600;">${license}%</span>
        </div>
        <div><strong style="color:#6B7280">Teams</strong><div style="margin-top: 6px;">${teamsHtml}</div></div>
      </div>
    `,
      icon: 'info',
      confirmButtonText: 'Close',
      showCloseButton: true,
      customClass: {
        popup: 'swal-wide',
      },
    });
  }
}
