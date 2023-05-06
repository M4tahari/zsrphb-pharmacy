import { Component, OnInit} from '@angular/core';
import { Comment } from '../../shared/models/Comment';
import { FormBuilder, Validators } from '@angular/forms';
import { GyikService } from '../../shared/services/gyik.service';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-gyik',
  templateUrl: './gyik.component.html',
  styleUrls: ['./gyik.component.scss']
})
export class GyikComponent implements OnInit {

  comments: Array<any> = [];
  user?: User;

  commentsForm = this.createForm({
    id: '',
    username: '',
    question: '',
    date: 0
  });

  constructor(private fb: FormBuilder, private gyikService: GyikService, private userService: UserService) {

  }

  ngOnInit(): void {
      const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
      this.userService.getById(user.uid).subscribe(data => {
        this.user = data;
        this.commentsForm.get('username')?.setValue(this.user?.username || '');
      }, error => {
        console.error(error);
      })
  }

  createForm(model: Comment) {
    let formGroup = this.fb.group(model);

    formGroup.get('username')?.addValidators(
      [
        Validators.required,
        Validators.minLength(6), 
        Validators.maxLength(60)
      ]
    );

    formGroup.get('question')?.addValidators(
      [ 
        Validators.required, 
        Validators.minLength(5), 
        Validators.maxLength(500)
      ]
    );

    return formGroup;
  }

  addComment() {
    if(this.commentsForm.valid) {
      if(this.commentsForm.get('username') && this.commentsForm.get('question')) {
        this.commentsForm.get('date')?.setValue(new Date().getTime());

        const question: Comment = {
          id: '',
          username: this.commentsForm.get('username')?.value as string,
          question: this.commentsForm.get('question')?.value as string,
          date: this.commentsForm.get('date')?.value || 0,
        }

        this.gyikService.create(question)
          .then(_ => {

          })
          .catch(error => {
            console.error(error);
          });

        this.gyikService.getQuestionById(question.id).subscribe(comments => {
          this.comments = comments;
        })
      }
    }
  }
}
