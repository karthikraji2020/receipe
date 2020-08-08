import { Component, OnInit } from '@angular/core';
import {debounce} from 'rxjs/operators'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  keyUpSearch(value) {
    console.log(value);
  }

  debounce( ) {

  }

}
