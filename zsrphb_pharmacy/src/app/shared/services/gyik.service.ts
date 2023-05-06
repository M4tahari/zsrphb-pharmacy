import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class GyikService {

  collectionName = 'Questions';

  constructor(private afs: AngularFirestore) { }

  create(comment: Comment) {
    comment.id = this.afs.createId();
    return this.afs.collection<Comment>(this.collectionName).doc(comment.id).set(comment);
  }

  getAll() {
    return this.afs.collection<Comment>(this.collectionName).valueChanges();
  }

  update(comment: Comment) {
    return this.afs.collection<Comment>(this.collectionName).doc(comment.id).set(comment);
  }

  delete(id: string) {
    return this.afs.collection<Comment>(this.collectionName).doc(id).delete();
  }

  getQuestionById(id: string) {
    return this.afs.collection<Comment>(this.collectionName, ref => ref.where('id', '==', id).orderBy('date', 'asc').limit(5)).valueChanges();
  }
}
