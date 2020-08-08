import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  receipe:any;
  id:Number;
  constructor(private activatedRoute:ActivatedRoute) {
    // if(localStorage.getItem('receipes')){
    //   let receipes= JSON.parse(localStorage.getItem('receipes'));
    //     this.activatedRoute.params.subscribe(params=>{
    //     this.id= params['id'];
    //     this.receipe =receipes.filter((item)=> item.id.toString().indexOf(this.id.toString()) !== -1)
    //     })
    // }
    if(localStorage.getItem('receipe')){
      this.receipe= JSON.parse(localStorage.getItem('receipe'));
    }
  
   }

  ngOnInit() {
  

  }


}
