import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatExpansionModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-2201681068';

  //Инфо за Борко
  personalInfo = {
    name: "Борко Борев",
    age: 21,
    profession: "Software Developer"
  };

  //Хобита
  hobbies = ["Дискотеки", "Фитнес", "Наргиле Барове"];

  //Линк
  favoriteCreatorLink = 'https://example.com';

  //Инфо за канала на Борко
  channelInfo = {
    name: "Borko Mafia",
    mission: "Споделяне на съвременни житейски мъдрости",
    expectation: "Очаквайте курсове, туториали и дискусии за достигането на статус TOP G."
  };

  //Остойностяване
  servicePricing = 'Цените на Discord курсовете ми започват от 150 лв. на месец, а може също да си закупите книгата ми за 29.99 лв.';
}
