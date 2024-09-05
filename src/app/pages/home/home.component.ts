import { Component, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    isPassVisible = signal(false);

    updateVis() {
        this.isPassVisible.update(arg => !arg)
    }

    setVis() {
        this.isPassVisible.set(true)
    }

    cLog() {
        this.updateVis()
        console.log(this.isPassVisible());
    }

    ngOnInit(): void {
        this.cLog()
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }
}
