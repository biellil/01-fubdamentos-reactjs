import { Header } from "./components/Header"
import { Post } from "./components/post";
import { Siderbar } from "./components/siderbar";


import styles from './App.module.scss';


import'./global.css'

const posts = [

  {
    id:1,
    author:{
     avatarUrl:'https://github.com/biellil.png',
     nome:'josé Gabriel',
     role: 'desenvolvedor Front-End'
    },

    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
     {type:'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
     {type:'link',
      content:'https://www.instagram.com/biel.lil/',
      rede:'instagram',
    },
     {type:'links', content: ['#novoprojeto', '#nlw', '#rocketseat']},
     
    ],

    publishedAt: new Date('2001-10-11 13:13:00')
  },

  {
    id: 2,
    author: {
    avatarUrl: 'https://github.com/fagnersro.png',
    nome: 'Fagner Henrique',
    role: 'desenvolvedor Front-End'
    },
    content: [
    { type: 'paragraph', content: 'Olá pessoal! 👋' },
    { type: 'paragraph', content: 'Estou animada para compartilhar o meu mais recente projeto de design. Ele se chama "EcoHub" e é uma plataforma online que conecta pessoas interessadas em práticas sustentáveis.' },
    { type: 'link', content: 'https://github.com/fagnersro' ,
      rede:'github'
  },
    { type: 'links', content:[ '#projetosustentavel', '#design', '#meioambiente' ] },
    ],
    publishedAt: new Date('2023-07-03 18:30:00')
    },

    {
      id: 3,
      author:{
      avatarUrl:'https://github.com/ana.png',
      nome:'Ana Silva',
      role: 'UI/UX Designer'
      },
      
      content: [
        {type: 'paragraph', content: 'Olá pessoal!'},
       {type:'paragraph', content: 'Estou muito animada em compartilhar meu novo projeto de design com vocês. É um aplicativo de viagens chamado Wanderlust ✈️'},
       {type:'link', content:'https://github.com/ana',
       rede: 'github'
      
      },
       {type:'links', content: ['#novoprojeto', '#design', '#rocketseat']},
       
      ],
      
      publishedAt: new Date('2020-05-03 09:30:00')
      },

      {
        id: 4,
        author:{
        avatarUrl:'https://cdn.discordapp.com/attachments/1108146000901713972/1125535180094980176/Captura_de_tela_2023-07-03_181210.jpg',
        nome: 'Nicole Alana',
        role: 'docente de química'
        },
        content: [
          {type: 'paragraph', content: 'Olá pessoal! 👋 , Sou Nicole'},
         {type:'paragraph', content: 'Estou muito empolgada em compartilhar com vocês algumas das minhas aventuras em São Paulo. Sim, viajar é uma das minhas paixões!'},
         {type:'link', content:'https://www.instagram.com/nic_alana16/',
         rede:'instagram',
        },
         {type:'links', content: ['#aventuras', '#viagens', '#São Paulo']},
         
        ],
        
        publishedAt: new Date('2003-12-16 09:30:00')
       
      },
];


export function App() {


  return (
    <div>

    <Header/>

   <div className={styles.wrapper}>
     
      <Siderbar/>      
      <main>

     {posts.map(post=>{
      return (
      <Post
       
       author={post.author}
       content={post.content}
       publishedAt={post.publishedAt}


       />
      
      )
     })}
   
      </main>
   </div>
   </div>
  )
}


