import { Component } from '@angular/core';

@Component({
  selector: 'app-inquiry',
  standalone: true,
  imports: [],
  templateUrl: './inquiry.component.html',
  styleUrl: './inquiry.component.scss'
})
export class InquiryComponent {
  public isFaqDropdownOpen: boolean;

  public faqs: { id: string, title: string }[] = [
    { id: '1', title: 'What is my name' },
    { id: '2', title: 'What is my age' },
    { id: '3', title: 'What is my dob' },
    { id: '4', title: 'What is my height' },
    { id: '5', title: 'What is my name' },
    { id: '6', title: 'What is my name' },
    { id: '7', title: 'What is my name' },
    { id: '8', title: 'What is my name' },
    { id: '9', title: 'What is my name' }
  ];
}
