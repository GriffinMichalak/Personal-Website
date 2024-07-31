import { Component } from '@angular/core';
import { Project } from '../../models/project'; 

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent {
  solo: Project[] = [
    new Project (
      "MA All-State 2022", 
      "https://plus.unsplash.com/premium_photo-1694475434235-12413ec38b3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://youtu.be/3bSo3_MyCNQ"
    ),
    
    new Project (
      "Central Districts 2022", 
      "https://plus.unsplash.com/premium_photo-1694475434235-12413ec38b3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://youtu.be/nmKP_xA9XFo"
    ),
    
    new Project (
      "Central Districts 2021 (1/2)", 
      "https://plus.unsplash.com/premium_photo-1694475434235-12413ec38b3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://youtu.be/mDmiYOz1Dpw"
    ),
    
    new Project (
      "Central Districts 2021 (2/2)", 
      "https://plus.unsplash.com/premium_photo-1694475434235-12413ec38b3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://youtu.be/qQHLmlvAMlo"
    )
  ]; 

  group: Project[] = [
    new Project (
      "WPI Sax Quartet", 
      "https://plus.unsplash.com/premium_photo-1694475434235-12413ec38b3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://youtu.be/blz2QVhJFBQ"
    ),

    new Project (
      "Merry-Go-Round of Life", 
      "https://plus.unsplash.com/premium_photo-1694475434235-12413ec38b3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://youtu.be/7RLkhUtXNGc"
    ),
    
    new Project (
      "Cowboy Bebop", 
      "https://plus.unsplash.com/premium_photo-1694475434235-12413ec38b3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://youtu.be/kPfNMhfZCBk"
    )

  ]
}
