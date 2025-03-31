import { Injectable } from '@angular/core';
import { enviroment } from '../../../environment';
import { HttpClient } from '@angular/common/http';
import { ImageType } from '../../model/imageModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor(private httpClient: HttpClient) {}

  public saveImages(images:({file: File, blob: string} | undefined)[]) {
    return new Observable<ImageType[] | undefined>((subscriber) => {
      if (images.length < 1) {
        subscriber.next(undefined);
        return;
      }
      const formData = new FormData();
      images.forEach((image) => {
        if (!image) {
          return;
        }
        formData.append("image", image.file);
      });
      this.httpClient.post<ImageType[]>(`${enviroment.urlBackend}/image`, formData, {withCredentials: true}).subscribe((res) => {
        subscriber.next(res);
      });
    })
    
  }


}
