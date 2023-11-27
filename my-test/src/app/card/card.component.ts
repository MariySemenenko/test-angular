import { Component, Input, OnInit } from "@angular/core";



@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    interpolation: ['{{', '}}']
})


//Виводю різні типи данних
export class CardComponent implements OnInit { 
    @Input() card: any
    @Input() index: any

    title: string = 'My Card Title'
    text: string = 'My sample text'
    number = 42
    array = [1, 1, 2, 3, 5, 8, 13]
    obj = { name:'Marii', info: {age: 25, job: 'frontend and backend'} }

    //створюю методи
getInfo(): string {
    return 'This is my info'
}

// заблокувати кнопку
disabled = false

//створюю картинку
imgUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png'
//міняю картинку через setTimeout
ngOnInit() {
    setTimeout( () => {
this.imgUrl = 'https://w7.pngwing.com/pngs/854/555/png-transparent-vue-js-hd-logo-thumbnail.png'
 this.disabled = true
    }, 3000)
}

//міняю назву title при нажиманні на кнопку
changeTitle() {
    this.card.title = 'Title has been changed on click'
}

//змінюю title за допомогою input
inputHandler(event: any) {
const value = event.target.value
this.title = value
}

changeTitleHandler() {
    console.log(this.title)
}

textColor = 'string'

 }











// -------------or--------------------
// import { Component } from "@angular/core";

// @Component({
//     selector: 'app-card',
//     template: `
//     <div class="card">
// <h2>Card Component</h2>
// <p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque omnis voluptates similique rerum adipisci nesciunt maiores odit dolor, ea quae veritatis minima cumque sint animi neque suscipit reiciendis. Dolorem, omnis?
// </p>
// </div>
//     `, 
//     styles: [`
//     .card {
//         padding: .5rem 1rem;
//         border: 1px dashed #ccc;
//         margin-bottom: .1rem;
//     }
//     h2 {
//         margin-bottom: .5rem;
//     }
//     `]
// })

// export class CardComponent { }