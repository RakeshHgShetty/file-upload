import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './components/upload/upload.component';
import { LoginGridComponent } from './components/login-grid/login-grid.component';


const routes: Routes = [{
  path: 'upload',
  component :  UploadComponent
},
{
  path: 'loginGrid',
  component :  LoginGridComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
