import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question_service/question.service';
import { QuestionBase }    from '../question_models/question-base';
import { Observable }      from 'rxjs';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  providers: [QuestionService]
})
export class SurveyComponent implements OnInit {

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

  ngOnInit(): void {
  }

}
