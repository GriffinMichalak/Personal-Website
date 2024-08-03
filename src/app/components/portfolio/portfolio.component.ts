import { Component } from '@angular/core';
import { Project } from '../../models/project'; 

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projects: Project[] = [
    new Project("FindDairyFree", "assets/png/finddairyfree.jpeg", "https://github.com/GriffinMichalak/FindDairyFree"),
    new Project("Connections Clone", "assets/png/connections.png", "https://nyt-connections-nine.vercel.app/"),
    new Project("Wordle Clone", "assets/png/wordle.png", "https://wwordle.vercel.app/"),
    new Project("Snake Game", "assets/png/snake.png", "https://snak3.vercel.app/"),
    new Project("This Website", "assets/png/personalwebsite.png", "https://griffinmichalak.vercel.app"),
  ]

}
