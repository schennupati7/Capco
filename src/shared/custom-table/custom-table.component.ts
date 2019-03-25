import {Component, EventEmitter, Input, OnInit, Optional, Output} from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

  cols: { key, name }[];
  rows: any[];
  filteredRows: any[] = [];
  pageSizeOptions = [10, 20, 50, 100];
  tableType = 'pagination';
  paginationOptions: any = {
    currentPage: 1,
    numberOfRecordsPerPage: 10,
    totalRecords: 0,
    startRecord: 0,
    endRecord: 0,
    lastPage: 0,
  };

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  @Input()
  set headers(value) {
    this.cols = value || [];
  }

  @Input()
  set data(value) {
    this.rows = value || [];
    this.paginationOptions.totalRecords = this.rows.length;
    this.valueChange.emit(this.paginationOptions);
  }

  @Optional()
  @Input()
  set type(value) {
    this.tableType = value;
    this.valueChange.emit(this.paginationOptions);
  }

  @Optional()
  @Input()
  set page(value) {
    this.paginationOptions.currentPage = value || 0;
    this.valueChange.emit(this.paginationOptions);
  }

  @Optional()
  @Input()
  set pageSize(value) {
    this.paginationOptions.numberOfRecordsPerPage = value || 10;
    this.valueChange.emit(this.paginationOptions);
  }

  constructor() {
  }

  ngOnInit() {
    this.valueChange.subscribe(() => this.refreshData());
  }

  refreshData() {
    switch (this.tableType) {
      case 'pagination':
        this.applyPagination();
        break;
      case 'infinite-scroll':
        this.applyInfiniteScroll();
        break;
    }
  }

  applyPagination() {
    this.paginationOptions.startRecord = (this.paginationOptions.currentPage - 1) * this.paginationOptions.numberOfRecordsPerPage;
    this.paginationOptions.endRecord = this.paginationOptions.startRecord + this.paginationOptions.numberOfRecordsPerPage;
    this.paginationOptions.lastPage = Math.ceil(this.paginationOptions.totalRecords / this.paginationOptions.numberOfRecordsPerPage);
    if (this.paginationOptions.endRecord > this.paginationOptions.totalRecords) {
      this.paginationOptions.endRecord = this.paginationOptions.totalRecords;
    }
    this.filteredRows = this.rows.slice(this.paginationOptions.startRecord, this.paginationOptions.endRecord);
  }

  applyInfiniteScroll() {
    // Rule: Don't run for pagination.
    if (this.tableType === 'pagination') {
      return;
    }
    this.paginationOptions.startRecord = 0;
    this.paginationOptions.endRecord = this.paginationOptions.endRecord + this.paginationOptions.numberOfRecordsPerPage;
    this.filteredRows = this.rows.slice(this.paginationOptions.startRecord, this.paginationOptions.endRecord);
  }

  onPageSizeChange() {
    this.paginationOptions.currentPage = 1;
    this.valueChange.emit(this.paginationOptions);
  }

  setPage(value) {
    this.paginationOptions.currentPage = value;
    this.valueChange.emit(this.paginationOptions);
  }

  onRowClick(row) {
    alert('Row Clicked Having Id : ' + row.id);
  }

}
