import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pagenot-found',
  templateUrl: './pagenot-found.component.html',
  styleUrls: ['./pagenot-found.component.css']
})
export class PagenotFoundComponent implements OnInit{

  images =[
    {itemImageSrc:"https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg",thumbnailImageSrc:"https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg"},
    {itemImageSrc:"https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg",thumbnailImageSrc:"https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg"},
    {itemImageSrc:"https://primefaces.org/cdn/primeng/images/galleria/galleria7.jpg",thumbnailImageSrc:"https://primefaces.org/cdn/primeng/images/galleria/galleria7s.jpg"},
    {itemImageSrc:"https://primefaces.org/cdn/primeng/images/galleria/galleria9.jpg",thumbnailImageSrc:"https://primefaces.org/cdn/primeng/images/galleria/galleria9s.jpg"},
  ];
  responsiveOptions=[
    {
      breakpoint: '1024px',
      numVisible: 5
    },
{
  breakpoint: '768px',
  numVisible: 3
},
{
  breakpoint: '560px',
    numVisible: 1
}
];

  ngOnInit() {

  }
}
