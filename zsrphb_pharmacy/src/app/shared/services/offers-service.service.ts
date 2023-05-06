import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class OffersServiceService {

  collectionName = 'Products'
  constructor(private http: HttpClient, private afs: AngularFirestore, private storage: AngularFireStorage) { }

  loadProductMetaData(metaUrl: string): Observable<Array<Product>> {
    return this.afs.collection<Product>(this.collectionName).valueChanges();
  }

  loadProductImage(imageUrl: string) {
    //return this.http.get(environment.hostUrl + '/assets/' + imageUrl, {responseType: 'blob'});
    return this.storage.ref(imageUrl).getDownloadURL();
  }
}
