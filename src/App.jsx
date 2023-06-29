import { Header } from "./components/Header"
import {Post} from "./post"


import styles from './App.module.scss';

import'./global.css'
import { Siderbar } from "./components/siderbar";

export function App() {


  return (
    <div>

    <Header/>

   <div className={styles.wrapper}>
     
      <Siderbar></Siderbar>
      
      <main>

      <Post
     author="biel"
     content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officia, amet explicabo voluptate debitis, nemo maiores deleniti cupiditate neque, adipisci       
     voluptatibus blanditiis laborum. Debitis iste numquam tempora fugit, culpa cupiditate?" />
    
      </main>
   </div>
   </div>
  )
}


