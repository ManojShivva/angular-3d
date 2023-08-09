import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterUploadComponent } from './character-upload/character-upload.component';
import { CharacterDisplayComponent } from './character-display/character-display.component';

const routes: Routes = [
  {path: 'upload', component: CharacterUploadComponent},
  {path: 'display', component: CharacterDisplayComponent},
  {path: '', redirectTo: 'display', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
