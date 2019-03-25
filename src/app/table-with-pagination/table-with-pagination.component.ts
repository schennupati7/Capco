import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppService} from '../app.service';

@Component({
  selector: 'app-table-with-pagination',
  templateUrl: './table-with-pagination.component.html',
  styleUrls: ['./table-with-pagination.component.sass']
})
export class TableWithPaginationComponent implements OnInit {

  tableData: any[] = [];

  displayedColumns: any[] = [
    {key: 'id', name: 'ID', isVisible: true},
    {key: 'name', name: 'Name', isVisible: true},
    {key: 'phone', name: 'Phone', isVisible: true},
    {key: 'email', name: 'Email', isVisible: true},
    {key: 'company', name: 'Company', isVisible: true},
    {key: 'date_entry', name: 'Entry Date', isVisible: true},
    {key: 'org_num', name: 'Organisation Number', isVisible: true},
    {key: 'city', name: 'City', isVisible: true},
    {key: 'zip', name: 'Zip', isVisible: true},
    {key: 'geo', name: 'Geo Coordinates', isVisible: true},
    {key: 'pan', name: 'PAN', isVisible: true},
    {key: 'pin', name: 'Pin', isVisible: true},
    {key: 'status', name: 'Status', isVisible: true},
    {key: 'fee', name: 'Fee', isVisible: true},
    {key: 'guid', name: 'GUID', isVisible: true},
    {key: 'date_exit', name: 'Exit Date', isVisible: true},
    {key: 'date_first', name: 'Entry Date', isVisible: true},
    {key: 'date_recent', name: 'Recent Date', isVisible: true},
    {key: 'url', name: 'URL', isVisible: true},
    {key: 'action', name: 'Actions', isVisible: false}
  ];

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getData().subscribe(value => {
      this.tableData = value;
    });
  }

}
