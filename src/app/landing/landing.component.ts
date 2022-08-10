import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact'
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  contactForm!: FormGroup;
  submitted = false;
  companies!: Contact[];
  currentContact!: Contact;
  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit(): void {
    this.initMyForm();
  }

  initMyForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      subject: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: [null, [Validators.required]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }


  saveForm() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    const cotactObj: Contact = {
      name: this.contactForm.value.name,
      message: this.contactForm.value.message,
      subject: this.contactForm.value.subject,
      email: this.contactForm.value.email
    };
      this.contactService.SaveMyContact(cotactObj).subscribe(res => {
        this.clearForm();
      });
    }

    clearForm() {
      this.contactForm.reset();
      this.submitted = false;
    }

  }
