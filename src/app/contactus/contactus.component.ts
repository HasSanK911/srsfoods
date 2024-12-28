import { Component } from '@angular/core';
// import { EmailJSResponseStatus } from 'emailjs-com';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  sendEmail(event: Event): void {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_hij0n2h',  // Replace with your EmailJS service ID
        'template_0qslhp2', // Replace with your EmailJS template ID
        event.target as HTMLFormElement,
        'bZMNLvkAjkmFt2rsE'   // Replace with your EmailJS public key
      )
      .then(
        (result: EmailJSResponseStatus) => {
          alert('Message Sent Successfully!');
        },
        (error:any) => {
          alert('Failed to send message. Please try again later.');
          console.log(error)
        }
      );
  }
}
