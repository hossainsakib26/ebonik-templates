import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fashion-nav',
  templateUrl: './fashion-nav.component.html',
  styleUrls: ['./fashion-nav.component.scss']
})
export class FashionNavComponent implements OnInit {

  public navigationMenu: any[] = [];
  constructor() { }
  ngOnInit(): void {
    this.navigationMenu = [
      {id: 1, name: 'Boisakh', link: '#'},
      {id: 2, name: 'Spring/Summer', link: '#'},
      {id: 3, name: 'Men', link: '#'},
      {id: 4, name: 'Women', link: '#'},
      {id: 5, name: 'Kids', link: '#'},
      {id: 6, name: 'Life Style', link: '#'},
      {id: 7, name: 'Offers', link: '#'},
    ];
  }

}
