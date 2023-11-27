import { Component } from '@angular/core';

//вказую тип елемента
export interface Card {
  title: string
  text: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

//колекція елементів
cards: Card[] = [
  {title: 'Cards 1', text: 'This is card number 1'},
  {title: 'This is card 2', text: 'This is card number 2'},
  {title: 'Last Cards 3', text: 'This is card number 3'},
  {title: 'This is card 2', text: 'This is card number 2'}

]

  // ховаю кнопкою toggle свої картки
  toggle = true
  toggleCard() {
   this.toggle = !this.toggle
  }

}
