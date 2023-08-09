import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './character';
import { Object3D } from 'three';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseURL = "http://localhost:8081"
  private baseDownURL = "http://localhost:8081/downloadFile"
  constructor(private httpClient: HttpClient) { }

  // returns observable object
  getCharacter(name: String): Observable<Character[]>{
    return this.httpClient.get<Character[]>(`${this.baseURL}/characterFind/${name}`);
  }

  content: any;
  //download image
  getImage(name: String): Observable<Object3D>{
    return this.httpClient.get<Object3D>(`${name}`);
  }

  // const req = new HttpRequest('GET', `${this.baseURL}/characterFind`, name, {
  //   reportProgress: true,
  //   responseType: 'json'
  // });

  // getEmployeesList(): Observable<Employee[]>{
  //   return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  // }


  //upload file to the springboot
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseURL}/uploadFile`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.httpClient.request(req);
  }

  //Get files: download files in the angula
  getFiles(): Observable<any> {
    return this.httpClient.get(`${this.baseDownURL}/files`);
  }


}
