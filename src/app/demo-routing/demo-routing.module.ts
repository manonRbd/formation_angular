import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PageComponent } from './page/page.component';
import { Page2Component } from './page2/page2.component';


@NgModule({
  declarations: [MenuComponent, PageComponent, Page2Component],
  imports: [
    CommonModule, RouterModule.forRoot([{path: 'page1', component: PageComponent}, {path: 'page2/:name', component: Page2Component}])
  ],
  exports: [MenuComponent]
})
export class DemoRoutingModule { }
