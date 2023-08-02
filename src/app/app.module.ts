import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterDisplayComponent } from './character-display/character-display.component';
import { FormsModule } from '@angular/forms';
import { CharacterUploadComponent } from './character-upload/character-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterDisplayComponent,
    CharacterUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
