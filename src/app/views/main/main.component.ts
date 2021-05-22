import { Component, OnInit, HostListener } from '@angular/core';
import { Data } from '../../shared/data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public screenWidth: any;
  public screenHeight: any;

  defaulImg: any;
  defaulDetail: any;

  data: any;
  product: any;

  constructor() { }

  ngOnInit(): void {
    this.data = new Data;
    this.product = this.data.allData[0]

    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    this.defaulImg = './../../../assets/Sennheiser1.png';
    this.defaulDetail = this.product.details[0].descripcion;
  }

  @HostListener('window:resize', ['$event'])

  onResize(event: any) {
    //event.target.innerWidth
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  changePic(img: any) {
    this.defaulImg = img;
  }

  changeDet(descripcion: any) {
    this.defaulDetail = descripcion;

    this.product.details.filter((asd: any) => {
      if (asd.descripcion === descripcion) {
        asd.diff = true
      } else {
        asd.diff = false
      }
    })

  }

  changeDet1(descripcion: any) {
    this.product.types.filter((asd: any) => {
      if (asd.descripcion === descripcion) {
        asd.diff = true
      } else {
        asd.diff = false
      }
    })

  }

  changeDet2(descripcion: any) {
    this.product.warranty.filter((asd: any) => {
      if (asd.descripcion === descripcion) {
        asd.diff = true
      } else {
        asd.diff = false
      }
    })

  }

  changeDet3(titulo: any) {
    this.product.features.filter((asd: any) => {
      if (asd.titulo === titulo) {
        asd.diff = true
      } else {
        asd.diff = false
      }
    })

  }


  calculateStyles() {
    return { 'max-width': 'auto', 'max-height': `${this.screenHeight}px` };
  }
}
