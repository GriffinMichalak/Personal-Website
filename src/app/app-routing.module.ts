import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { MusicComponent } from './components/music/music.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'about', component: AboutmeComponent },
  { path: 'music', component: MusicComponent },
  { path: 'help', component: HelpComponent },
  { path: 'documentation', loadChildren: () => import('./modules/documentation/documentation.module').then(m => m.DocumentationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
