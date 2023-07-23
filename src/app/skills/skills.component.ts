import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillSet1 = [
    { name: "Angular" }, { name: "HTML" }, { name: "CSS" }
  ]
  skillSet2 =[ 
    { name: "C++" }, { name: "Express" }, { name: "Mongoose" }
  ]
}
