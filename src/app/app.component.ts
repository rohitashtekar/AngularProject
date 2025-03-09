import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';
import { MasterComponent } from './components/master/master.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RolesComponent, MasterComponent, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject';
  activeElement: string = "master";

  setActive(element: string): void {
    this.activeElement = element;
    console.log(this.activeElement);
  }
}
