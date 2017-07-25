import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';
import { UserModule } from './user/user.module';
@NgModule({
  imports: [
    CommonModule,
    UserModule,
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [MainComponent]
})
export class MainModule { }
