import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    menuLinks = [
        {
            id: 1,
            name: 'Home',
            link: '/',
        },
        {
            id: 2,
            name: 'About',
            link: '/about',
        },
        {
            id: 3,
            name: 'Services',
            link: '/services',
        },
        {
            id: 4,
            name: 'News',
            link: '/news',
        },
    ]
}
