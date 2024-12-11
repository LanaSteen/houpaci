import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { ErrorComponent } from './error/error.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path: '', component:DemoComponent},
  {path: 'home', component:HomeComponent},
  {path: '**', component:ErrorComponent}
]

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
