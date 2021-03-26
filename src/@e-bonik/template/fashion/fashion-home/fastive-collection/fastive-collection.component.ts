import { Component, OnInit } from '@angular/core';
import {Image} from '../../../../models/fasion-model/image';

@Component({
  selector: 'app-fastive-collection',
  templateUrl: './fastive-collection.component.html',
  styleUrls: ['./fastive-collection.component.scss']
})
export class FastiveCollectionComponent implements OnInit {
  public images: Image[] = [
    {id: '1', imgSrc: 'assets/cat-carousel/cat-carousel2.jpg', width: 275, imgAlt: 'idk', title: 'exclusive'},
    {id: '2', imgSrc: 'assets/cat-carousel/cat-carousel2.jpg', width: 275, imgAlt: 'idk', title: 'exclusive'},
    {id: '3', imgSrc: 'assets/cat-carousel/cat-carousel2.jpg', width: 275, imgAlt: 'idk', title: 'exclusive'},
    // {id: '4', imgSrc: 'assets/cat-carousel/cat-carousel4.jpg', width: 275, imgAlt: 'idk', title: 'exclusive'},
    // {id: '5', imgSrc: 'assets/cat-carousel/cat-carousel5.jpg', width: 275, imgAlt: 'idk', title: 'exclusive'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
