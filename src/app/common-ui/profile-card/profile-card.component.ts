import { Component, Input } from '@angular/core';
import { CapitalizeStringPipe } from '../../helpers/pipes/capitalize-string.pipe';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CapitalizeStringPipe],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
    @Input() card?: {id: string, name: string}
}