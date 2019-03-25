import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TableWithPaginationComponent} from './table-with-pagination/table-with-pagination.component';
import {TableWithInfiniteScrollComponent} from './table-with-infinite-scroll/table-with-infinite-scroll.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'table-with-pagination',
    component: TableWithPaginationComponent
  }, {
    path: 'table-with-infinite-scroll',
    component: TableWithInfiniteScrollComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
