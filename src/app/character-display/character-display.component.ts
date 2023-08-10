import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from "three";
import { Character } from '../character'
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { CharacterService } from '../character.service';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.css']
})
export class CharacterDisplayComponent {

  character!: Character[];
  httpEvent!: HttpEvent<any>;
  refObject: any;
  refPathURL1!: string;
  message: string;
  object!: THREE.Object3D;
  values = '';

  constructor(private characterService: CharacterService) { }


  onKey(event: any) { // without type info
    // this.values += event.target.value + ' | ';
    this.values = event.target.value;
    console.log(this.values);
  }

  // private getCharacter(){
  //   this.characterService.getCharacter().subscribe(data => {
  //     this.character = data;
  //     let pathURL = data[2].path;
  //     let rem = /\\/gi;
  //     let rePathURL = pathURL.replace(rem,"/");
  //     this.refPathURL = rePathURL.substring(81);
  //     console.log(this.refPathURL);
  //   });
  // }


  onSubmit(){
    this.getCharacter();
  }

  private getCharacter(){
    this.characterService.getCharacter(this.values).subscribe(data => {
      this.character = data;
      console.log(this.character[0].path);
      this.refPathURL1 = this.character[0].path;
      this.message = this.character[0].name;
    });
  }

}
