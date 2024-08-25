import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Імпортуйте CommonModule
import { DishService } from '../dish.service';
import { Dish } from '../dish.model';

import { DishItemComponent } from '../dish-item/dish-item.component'; // Імпортуйте підкомпонент

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss'], // Використовуйте .scss, якщо у вас SCSS
  standalone: true,
  imports: [CommonModule, DishItemComponent] // Додайте CommonModule та інші компоненти
})
export class DishListComponent implements OnInit {
  dishes: Dish[] = []; // Оголошуємо тип масиву

  constructor(private dishService: DishService) {}

  ngOnInit() {
    this.dishes = this.dishService.getDishes(); // Отримуємо страви з сервісу
  }
}
