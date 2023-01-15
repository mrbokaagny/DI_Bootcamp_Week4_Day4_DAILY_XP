import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  displayColor  : string = ''

  constructor() { }

  ngOnInit(): void {
  }

submitColor(f: NgForm){
  this.displayColor = f.value.favoriteColor
}

}
