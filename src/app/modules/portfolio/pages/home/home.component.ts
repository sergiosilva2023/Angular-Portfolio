import { Component } from '@angular/core';

// component Header
import { HeaderComponent } from '../../components/header/header.component';
// component Knowledge
import { KnowledgeComponent } from '../../components/knowledge/knowledge.component';
// component Experiences
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
// component Projects
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, KnowledgeComponent, ExperiencesComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
