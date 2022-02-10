import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})

export class RowComponent implements OnInit {
  @Output("removeRow") removeFunc: EventEmitter<any> = new EventEmitter<any>();

  @Input() row: {
    title: string,
    author: string,
    genre: string,
    isbn: number,
    published: string,
    publisher: string
  } = {
    title: '',
    author: '',
    genre: '',
    isbn: 0,
    published: '',
    publisher: ''
  }
  constructor() { }

  ngOnInit(): void {
  }
}
