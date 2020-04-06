import { Injectable } from '@angular/core';
import { DropdownQuestion } from '../question_models/question-dropdown';
import { QuestionBase }     from '../question_models/question-base';
import { TextboxQuestion }  from '../question_models/question-textbox';
import { RadioQuestion }  from '../question_models/question-radio';
import { CheckboxQuestion }  from '../question_models/question-checkbox';

import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

   // TODO: get from a remote source of question metadata
   getQuestions() {

    let questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 8
      }),

      new RadioQuestion({
        key: 'Gender',
        label: 'Gender',
        type: 'radio',
        options: [
          {key: 'Male',  value: 'm'},
          {key: 'Female',  value: 'f'}
        ],
        required: true,
        order: 4
      }),

      new CheckboxQuestion({
        key: 'MultipleCheck',
        label: 'MultipleCheck',
        type: 'checkbox',
        options: [
          {key: 'Option1',  value: 'm'},
          {key: 'Option2',  value: 'f'}
        ],
        required: true,
        order: 5
      }),

      new CheckboxQuestion({
        key: 'MultipleCheck',
        label: 'MultipleCheck',
        type: 'checkbox',
        options: [
          {key: 'Option1',  value: 'm'},
          {key: 'Option2',  value: 'f'}
        ],
        required: true,
        order: 1
      })

    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
