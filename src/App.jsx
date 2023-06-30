import { Header } from "./components/Header"
import { Post } from "./components/post";
import { Siderbar } from "./components/siderbar";


import styles from './App.module.scss';


import'./global.css'




export function App() {


  return (
    <div>

    <Header/>

   <div className={styles.wrapper}>
     
      <Siderbar></Siderbar>
      
      <main>

     <Post></Post>
     <Post/>
    
   
      </main>
   </div>
   </div>
  )
}


