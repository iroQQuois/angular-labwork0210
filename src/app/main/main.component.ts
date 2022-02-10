import { Component, OnInit } from '@angular/core';
import {RowComponent} from "../row/row.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  myData = {
    data: [
      {
        "id": 1,
        "title": "Duchess's voice.",
        "author": "Durward Ryan",
        "genre": "Saepe",
        "description": "Lobster Quadrille, that she began thinking over other children she knew the name again!' 'I won't indeed!' said the King. The next witness was the first really clever thing the King put on his.",
        "isbn": 9793669083637,
        "image": "http://placeimg.com/480/640/any",
        "published": "2012-02-17",
        "publisher": "Eaque Itaque"
      },
      {
        "id": 2,
        "title": "Mock Turtle went.",
        "author": "Anita Lowe",
        "genre": "Laboriosam",
        "description": "Nile On every golden scale! 'How cheerfully he seems to like her, down here, and I'm I, and--oh dear, how puzzling it all seemed quite natural); but when the tide rises and sharks are around, His.",
        "isbn": 9795664603742,
        "image": "http://placeimg.com/480/640/any",
        "published": "1997-01-01",
        "publisher": "Recusandae Fugiat"
      },
      {
        "id": 3,
        "title": "Alice replied.",
        "author": "Ned Kunde",
        "genre": "Id",
        "description": "THROUGH the earth! How funny it'll seem to put down yet, before the trial's begun.' 'They're putting down their names,' the Gryphon never learnt it.' 'Hadn't time,' said the Lory hastily. 'I don't.",
        "isbn": 9796521277038,
        "image": "http://placeimg.com/480/640/any",
        "published": "1997-06-17",
        "publisher": "Voluptas Rem"
      },
      {
        "id": 4,
        "title": "That your eye was.",
        "author": "Adolph Thiel",
        "genre": "Impedit",
        "description": "Mock Turtle, 'Drive on, old fellow! Don't be all day to day.' This was such a curious dream!' said Alice, as she did not like to see what the next moment she quite forgot you didn't sign it,' said.",
        "isbn": 9794295275700,
        "image": "http://placeimg.com/480/640/any",
        "published": "1970-01-27",
        "publisher": "Itaque Perspiciatis",
      },
      {
        "id": 5,
        "title": "Alice the moment.",
        "author": "Alexander Hodkiewicz",
        "genre": "Distinctio",
        "description": "Adventures, till she was going to turn round on its axis--' 'Talking of axes,' said the King; and the beak-- Pray how did you begin?' The Hatter was out of the words a little, and then I'll tell you.",
        "isbn": 9784161437974,
        "image": "http://placeimg.com/480/640/any",
        "published": "1988-12-31",
        "publisher": "Praesentium Quia",
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  removeRow(index: number): void {

  }
}
