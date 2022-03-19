import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Character } from '../../interfaces/';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  
 characters: Character[] = [];

  constructor(private dataService: DataService, private popoverCtrl: PopoverController) { }

  ngOnInit() {
    this.dataService.getCharacters()
    .subscribe( character => { 
      let characterValue = Object.entries(character);
      this.characters = [...characterValue[1][1]];
    });
    
  };




}
