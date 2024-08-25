import { Component } from '@angular/core';
import { DishListComponent } from './dish-list/dish-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true, // Додайте цей рядок
  imports: [DishListComponent] // Додаємо компонент
})
export class AppComponent {
  title = 'restaurant-menu';
}
