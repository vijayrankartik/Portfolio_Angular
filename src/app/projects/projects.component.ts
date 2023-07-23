import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      name: "The Football Center",
      desc:"It is an API based website which provides us with the highights from every league around the world at on place. It also displays the information about our favorite player and Teams.",
      ref: "https://the-football-center.netlify.com/",
      img: "https://raw.githubusercontent.com/vijayrankartik/portfolio/main/images/background.jpg"
    },
    {
      name: "Game of Codes",
      desc: "It is a tool developed by our team for competitive programmers. I contributed towards various sections of the web app.",
      ref: "https://gameofcodes.herokuapp.com/",
      img: "https://raw.githubusercontent.com/abhi-824/Game-of-CODES/master/publicis/resources/logo/logo_dark.png"
    }
  ]
}
