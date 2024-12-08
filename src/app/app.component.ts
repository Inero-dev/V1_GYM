import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { TablaComponent } from './tabla/tabla.component';
import { PortadaComponent } from './portada/portada.component';



@Component({
  selector: 'app-root',
  imports: [MenuComponent, TablaComponent, PortadaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'V1_GYM';
}