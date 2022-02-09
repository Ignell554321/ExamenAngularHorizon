import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './operaciones/home/home.component';
import { NotFoundComponent } from './operaciones/not-found/not-found.component';

const routes: Routes = [

  { path: '', component: HomeComponent, },
  { path: 'services', loadChildren: () => import(`./operaciones/song/song.module`).then(m => m.SongModule) },
  { path: 'forms', loadChildren: () => import('./operaciones/forms/forms.module').then(m => m.FormsModule) },
  { path: 'crud', loadChildren: () => import('./operaciones/crud/crud.module').then(m => m.CrudModule) },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  title = 'Aplicacion Web 2022';
  version = 'Angular version 13.1.1';

}
