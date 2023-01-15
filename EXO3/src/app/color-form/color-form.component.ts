import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , FormControl , Validators  } from '@angular/forms';
import { ConnectableObservable } from 'rxjs';



@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  builderColorForm : FormGroup
  favoriteColor : string = ''

  constructor(private builderForm : FormBuilder) {
    this.builderColorForm = this.builderForm.group({
      favoriteColor : ['',Validators.compose([ Validators.required])]
    })
   }

   submitColor(){
    this.favoriteColor = this.builderColorForm.get('favoriteColor')?.value
    console.log(`--- Votre couleur favoris est ${this.favoriteColor} --- `)
   }


  ngOnInit(): void {
  }

}
