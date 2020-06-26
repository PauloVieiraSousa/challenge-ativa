import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'repo-challenge-angular';

  constructor(){
  }
  
  list = [
    {
      activated: true, 
      router: 'home', 
      name: 'Perfumaria'
    },
    {
      activated: false, 
      router: 'home', 
      name: 'Máquiagem'
    },
    {
      activated: false, 
      router: 'home', 
      name: 'Cabelos'
    },
    {
      activated: false, 
      router: 'home', 
      name: 'Infantil'
    }
  ];

  addLibary(){
    
  }

}
