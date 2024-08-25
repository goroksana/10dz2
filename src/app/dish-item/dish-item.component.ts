import { Component, Input } from '@angular/core';
import { Dish } from '../dish.model';
import { CommonModule } from '@angular/common'; // Імпортуйте CommonModule

@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.scss'],
  standalone: true,
  imports: [CommonModule] // Додайте CommonModule до imports
})
export class DishItemComponent {
  @Input() dish!: Dish;
}
