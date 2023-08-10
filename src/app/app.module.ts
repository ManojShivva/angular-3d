import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterDisplayComponent } from './character-display/character-display.component';
import { FormsModule } from '@angular/forms';
import { CharacterUploadComponent } from './character-upload/character-upload.component';
import { CharacterDisplay3DComponent } from './character-display3-d/character-display3-d.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterDisplayComponent,
    CharacterUploadComponent,
    CharacterDisplay3DComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
