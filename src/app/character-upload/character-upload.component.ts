import { Component } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';
import { Router } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-character-upload',
  templateUrl: './character-upload.component.html',
  styleUrls: ['./character-upload.component.css']
})
export class CharacterUploadComponent {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos!: Observable<any>;

  constructor(private uploadService: CharacterService) { }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;
  
    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
          console.log(this.currentFile.name);
        } 
        else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
  
    this.selectedFiles = undefined;
  }


  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles(); 
  }


}
