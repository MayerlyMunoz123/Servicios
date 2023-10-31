import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { WebModule } from './web/web.module';
import { NopagesfoundComponent } from './error/nopagesfound/nopagesfound.component';


const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path: '**', component:NopagesfoundComponent},

];

@NgModule({
  imports: [
    WebModule,
    AuthModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }