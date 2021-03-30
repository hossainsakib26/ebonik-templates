import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-technology-top-bar',
  templateUrl: './technology-top-bar.component.html',
  styleUrls: ['./technology-top-bar.component.scss']
})
export class TechnologyTopBarComponent implements OnInit {

  public openOverlay: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
