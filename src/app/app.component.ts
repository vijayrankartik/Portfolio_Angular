import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [
  //   trigger('bgAnimation', [
  //     transition('* => *',[
  //       animate('2s', style({opacity: 0})),
  //       animate('2s', style({opacity: 1}))
  //     ])
  //   ])
  // ]
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  scroll(el: any) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  ngOnInit(): void {
      this.animateBg()
  }
  backgroundColor: {col1: string, col2: string}

  animateBg(){
    setInterval(() => {
      this.backgroundColor = this.getColor()
      // console.log(this.backgroundColor);
    }, 1000)
  }

  getColor(){
    const allColors = [{col1: "#57D131", col2: "#B9E937"},
      {col1: "#827397", col2: "#D8B9C3"},
      {col1: "#D0F5BE", col2: "#FBFFDC"},
      {col1: "#64CCC5", col2: "#99DBF5"},
      {col1: "#99DBF5", col2: "#A7ECEE"},
      {col1: "#97DEFF", col2: "#C9EEFF"},
      {col1: "#8CC0DE", col2: "#CCEEBC"},
    ]
    const ind = Math.floor(Math.random() * allColors.length)
    return allColors[ind]
  }
}
