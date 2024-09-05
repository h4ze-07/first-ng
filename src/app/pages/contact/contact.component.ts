import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
    form =  new FormGroup({
        login: new FormControl(null),
        pass: new FormControl(null)
    })


    submitFunc() {
        console.log(this.form.value);
        this.form.reset();
    }
}
