
import { Injectable } from '@angular/core';
import { Dish } from './dish.model';
import { DISHES } from './mock-dishes'; // Імпортуємо дані з mock-файлу

@Injectable({
  providedIn: 'root'
})
export class DishService {
  constructor() { }

  getDishes(): Dish[] {
    return DISHES;
  }
}
