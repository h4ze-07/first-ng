import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { HeaderComponent } from './common-ui/header/header.component';
import { FetchDataService } from './data/services/fetch-data.service';
import { UsersI } from './data/interfaces';
import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProfileCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-proj';
  usersService = inject(FetchDataService);

  randomData = [
    {
        id: '01',
        name: 'John',
    },
    {
        id: '02',
        name: 'Mark',
    },
    {
        id: '03',
        name: 'Alex',
    },
  ]

  usersData: UsersI | null = null;

  constructor () {
    this.usersService.getUsers().subscribe( items => {
        this.usersData = items;
        
    })
  }
}
