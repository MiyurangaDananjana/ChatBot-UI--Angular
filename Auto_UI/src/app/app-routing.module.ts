import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'chat', component:ChatPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
