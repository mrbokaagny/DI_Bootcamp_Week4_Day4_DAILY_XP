import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  formContact = new Contact()

  favoriteColor = '';

  ngOnInit(): void {
  }

  submitForm(){
    console.log('--------- Hey bonjour à vous, vos info sont --------------')
    console.log(`Votre nom : ${this.formContact.name}`)
    console.log(`Votre addresse mail : ${this.formContact.email}`)
    console.log(`Votre message : ${this.formContact.message}`)
    console.log('----------------------------------------------------------')
  }

}
