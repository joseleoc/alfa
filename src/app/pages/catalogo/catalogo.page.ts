import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {


  slideOpts = {
    initialSlide: 1,
    speed: 400,
  }

  constructor() { }

  ngOnInit() {
  }


}
