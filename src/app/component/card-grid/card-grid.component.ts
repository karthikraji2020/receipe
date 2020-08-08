import { Component, OnInit } from '@angular/core';
import { ReceipesService } from 'src/app/services/receipes.service';
import { Receipes } from 'src/app/services/interfaces/receipes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css']
})
export class CardGridComponent implements OnInit {
  // receipes:Receipes[]=[];
  receipes:any;
  constructor( private  _receipesService:ReceipesService,private router :Router) { }

  ngOnInit() {
    this._receipesService.getReceipeData().subscribe((data:Receipes)=>{
      this.receipes = data;
      localStorage.setItem('receipes',JSON.stringify(this.receipes))
      console.log(data)
    });
  }

  navigateToDetail(receipe:any) {
    console.log(receipe.id)
    this.router.navigateByUrl('Home/'+receipe.id);
      localStorage.setItem('receipe',JSON.stringify(receipe))
  }
  keyUpSearch(value) {
    let copyTemp= this.receipes;
    let copy= copyTemp;
    console.log(value);
    if(value.length>0){
      this.receipes =copy.filter((item)=> item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1)
    }else {
      this.receipes= copy;
    }
  }
}
