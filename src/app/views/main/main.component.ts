import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public screenWidth: any;
  public screenHeight: any;

  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])

  onResize(event: any) {
    //event.target.innerWidth
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  calculateStyles() {
    return { 'max-width': 'auto',  'max-height': `${this.screenHeight}px` };
  }
}
