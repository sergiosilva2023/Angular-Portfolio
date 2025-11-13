import { Component, signal } from '@angular/core';

// Interfaces
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]> ([
    {
      summary: {
        strong: "Estágio Profissional, Trigénius - Lisboa",
        p: "Estágio em contexto real de trabalho 2025"
      },
      text: "Criação e ligação de ambiente de trabalho remoto com Windows, virtualização de servidores Windows e SQL-SERVER. Apresentação da estrutura de base de dados SQL PRIDEMO do ERP Primavera, introdução à linguagem SQL e criação de queries para extração de dados. Instalação da IDE Microsoft Visual Studio Community 2022 e introdução à linguagem C# com desenvolvimento de extensões para O ERP Primavera utilizando o SDK Primavera Extensibility. Criação de aplicações de consola e GUI, windows forms para consultas via webapi. Configuração e gestão de servidores web IIS (Internet Information Services). Testes e validações de todas as soluções desenvolvidas."
    },
    {
      summary: {
        strong: "Programador Full Stack",
        p: "Curso de Web Development completo - 2024 / 2025 Master-D"
      },
      text: "Nota de 20 valores, 100% aproveitamento com acesso a uma distinção por parte da Master-D!. Desenvolvimento de projetos práticos com tecnologias como HTML, CSS, JavaScript, TypeScript, PHP, Angular, Node.js, Express, MongoDB, Mysql e SQL. Criação de aplicações web completas, desde o front-end até o back-end, com foco em boas práticas de desenvolvimento e experiência do usuário."
    },
    {
      summary: {
        strong: "Desenvolvimento Web",
        p: "Compacto e completo 2025 Udemy"
      },
      text: "HTML5, CSS3, JS, Bootstrap5, PHP8, MySQL, APIs, AJAX, GIT, NodeJS, CodeIgniter4, Laravel10, Hospedagem e Exercícios práticos. Uso de frameworks como Laravel e Wordpress, o que me permitiu desenvolver soluções web robustas e escaláveis e me permitem contribuir de forma eficaz para os desafios diários de uma empresa moderna e orientada para obter resultado."
    }
  ])
}