import { ThumbsUp , Trash } from "phosphor-react";
import styles from './Comments.module.scss'
import { Avatar } from "./Avatar";

export function Comments({content ,  onDeletComment}){


   function  handLeDeLeteComment(){
    onDeletComment(content);
   };
    return(
        <div className={styles.Comments}>

             <Avatar src="https://github.com/biellil.png" />

             <div className={styles.CommentsBox}>
                <div className={styles.CommentsCommets}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong> José Gabriel</strong>         
            <time title='2023-06-30' dateTime='2023-06-30 17:29:00'>Publicado há 1h</time>
                    </div>
                    <button onClick={handLeDeLeteComment} title="delete">
                        <Trash size={24} />
                    </button>
                </header>
                <p>{content}</p>
                </div>
                
                <footer>
                    <button>
                    <ThumbsUp size={20} /> 
                        Aplaudir<span>20</span>

                    </button>
               
                </footer>
             </div>


        </div>
    );
}
