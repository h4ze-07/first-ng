import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { HeaderComponent } from './common-ui/header/header.component';
import { FetchDataService } from './data/services/fetch-data.service';
import { UsersI } from './data/interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-proj';
  usersService = inject(FetchDataService);

  usersData: UsersI | null = null;

  constructor () {
    this.usersService.getUsers().subscribe( items => {
        this.usersData = items;
        
    })
  }
}
