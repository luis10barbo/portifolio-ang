import { Injectable } from '@angular/core';
import { enviroment } from '../../../environment';
import { HttpClient } from '@angular/common/http';
import { ImageType } from '../../model/imageModel';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor(private httpClient: HttpClient) {}

  public saveImages(images:({file: File, blob: string} | undefined)[]) {
    const formData = new FormData();
    images.forEach((image) => {
      if (!image) {
        return;
      }
      formData.append("image", image.file);
    });
    return this.httpClient.post<ImageType[]>(`${enviroment.urlBackend}/image`, formData, {withCredentials: true});
  }


}
