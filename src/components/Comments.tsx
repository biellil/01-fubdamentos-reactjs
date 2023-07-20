import { ThumbsUp , Trash } from "phosphor-react";
import styles from './Comments.module.scss'
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps{
content: string;
onDeletComment:(comment:string)=>void;
}

export function Comments({content ,  onDeletComment}: CommentProps){

    const [likeCount, setLikeCount] = useState(0);

    function handLeLikeComment(){

    setLikeCount((state)=>{
     return state+1
    })
    }

   function  handLeDeLeteComment(){
    onDeletComment(content);
   };
    return(
        <div className={styles.Comments}>

             <Avatar src="https://github.com/biellil.png" alt="" />

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
                    <button onClick={handLeLikeComment}>
                    <ThumbsUp size={20} /> 
                        Aplaudir<span>{likeCount}</span>

                    </button>
               
                </footer>
             </div>


        </div>
    );
}
