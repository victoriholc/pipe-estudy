import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe-estudy';

  nome = 'Victor';
  dataAniversario = new Date(1993, 10, 4);
  preco = 123123.4343444;
  troco = 0.24214;
}
