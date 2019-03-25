import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CustomTableModule} from '../shared/custom-table/custom-table.module';
import {TableWithPaginationComponent} from './table-with-pagination/table-with-pagination.component';
import {TableWithInfiniteScrollComponent} from './table-with-infinite-scroll/table-with-infinite-scroll.component';
import {HttpClientModule} from '@angular/common/http';
import {AppService} from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableWithPaginationComponent,
    TableWithInfiniteScrollComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CustomTableModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
