import { Component, inject, signal } from '@angular/core';
// interface IProjects
import { IProjects } from '../../interface/IProjects.interface';
// dialog module
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
// enum eDialogPanelClass
import { eDialogPanelClass } from '../../enum/eDialogPanelClass.enum';
// dialog component
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/todo.jpeg',
      alt: 'Todo App',
      title: 'Todo App',
      width: '250px',
      height: '120px',
      description:
        '<p>Aplicação para gestão de tarefas com funcionalidades de adicionar, editar, excluir e marcar como concluídas.</p>',
      links: [
        {
          name: 'Todo App',
          href: 'https://www.devssilva.com/todo/',
        },
      ],
    },
    {
      src: 'assets/img/projects/comments.jpeg',
      alt: 'Comentários',
      title: 'Comentários',
      width: '200px',
      height: '100px',
      description: '<p>Aplicação de comentários em ReactJs.</p>',
      links: [
        {
          name: 'Comentários',
          href: 'https://www.devssilva.com/comments/',
        },
      ],
    },
    {
      src: 'assets/img/projects/jogo-galo.jpeg',
      alt: 'Jogo do Galo',
      title: 'Jogo do Galo',
      width: '200px',
      height: '100px',
      description: '<p>Projeto em Html, Css e Javascript.</p>',
      links: [
        {
          name: 'Jogo do Galo',
          href: 'https://www.devssilva.com/jogo-do-galo/',
        },
      ],
    },
    {
      src: 'assets/img/projects/lista-tarefas.jpeg',
      alt: 'Lista de tarefas',
      title: 'Lista de tarefas',
      width: '200px',
      height: '100px',
      description: '<p>Projeto em Html, Css e Javascript.</p>',
      links: [
        {
          name: 'Lista de tarefas',
          href: 'https://www.devssilva.com/lista-tarefas/',
        },
      ],
    },
    {
      src: 'assets/img/projects/o-ninho.jpeg',
      alt: 'Site O Ninho',
      title: 'Site O Ninho',
      width: '200px',
      height: '100px',
      description: '<p>Projeto em Html, Css e Javascript.</p>',
      links: [
        {
          name: 'Restaurante O Ninho',
          href: 'https://www.restauranteoninho.net/',
        },
      ],
    },
    {
      src: 'assets/img/projects/ospinheirinhos.jpeg',
      alt: 'Pastelaria Os Pinheirinhos',
      title: 'Pastelaria Os Pinheirinhos',
      width: '200px',
      height: '100px',
      description: '<p>Projeto em Html e Css.</p>',
      links: [
        {
          name: 'Pastelaria Os Pinheirinhos',
          href: 'https://www.ospinheirinhos.pt/',
        },
      ],
    },
    {
      src: 'assets/img/projects/encurtar-links.jpeg',
      alt: 'Encurtar Links',
      title: 'Encurtar Links',
      width: '200px',
      height: '100px',
      description: '<p>Projeto em Html e Css.</p>',
      links: [
        {
          name: 'Encurtar Links',
          href: 'https://meulink-omega.vercel.app/',
        },
      ],
    },
        {
      src: 'assets/img/projects/novo-portfolio.jpeg',
      alt: 'Novo Portfolio',
      title: 'Novo Portfolio',
      width: '200px',
      height: '100px',
      description: '<p>Projeto em Angular e Sass.</p>',
      links: [
        {
          name: 'Novo Portfolio',
          href: 'https://www.devssilva.com/angular-portfolio/',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: eDialogPanelClass.PROJECTS,
    });
  }
}
