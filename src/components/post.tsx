import { format ,formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar';
import { Comments } from './Comments';
import style from './Post.module.scss';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author{
  name?:string;
  role:string;
  avatarUrl:string;
}

interface  Content{
  type:'paragraph' | 'link' | 'links' ;
  content:string;
  rede:string;
}
interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}



export function Post({author,  publishedAt ,content}:PostProps) {

  const [comments , setComments] = useState(['Boa!!']);

  const [newCommentText , setNewCommentText] = useState('');

  const pubçisheDateFormatted = format(publishedAt, "d 'de' LLLL 'de' y 'ás' HH':'mm'h' a ",
     {locale : ptBR,
    } 
         );
  const pubçisheDateRelativeToNow = formatDistanceToNow(publishedAt, {
     
        locale:ptBR,
        addSuffix:true,
    }
        );
   

  function hamdleCreateNewComment(event:FormEvent) {
     event.preventDefault()

    setComments([...comments, newCommentText ]);
    setNewCommentText('');

   }


  function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>){
    setNewCommentText(event.target.value);

     }
  function deletComment(commentToDelete:string){
    const commntWithoutDeletedOne = comments.filter(comment =>{
     return comment != commentToDelete;
    })
  setComments(commntWithoutDeletedOne);
  } 

  function handleNewCommentInvaLid(event: InvalidEvent<HTMLTextAreaElement>){
    
    event.target.setCustomValidity('Esse compo é obrigatorio!');
  }

    return (
      <article className={style.Post}>
        <header>
            <div className={style.author}>
            <Avatar src={author.avatarUrl} />
            <div>
                <strong>{author.name}</strong>
                <span>{author.role}</span>
            </div>
            </div>
              

            <time title= {pubçisheDateFormatted} dateTime= {publishedAt.toISOString()}>
                {pubçisheDateRelativeToNow}
                </time>
        </header>

        <div className={style.content}>

                  {content.map((line) => {
            if (line.type === 'paragraph') {
              return( 
              <p key={line.content}>
                {line.content}
                </p>
              );
            } else if (line.type === 'link') {
              return (
                <p key={line.content}>
                  <a href={line.content}>{line.rede}</a>
                </p>
              );
            } else if (line.type === 'links') {
              if (Array.isArray(line.content)) { // Check if line.content is an array
                return line.content.map((item) => (
                  <a key={item}>{item}{' '}</a>
                ));
              }
            }
          })}
            </div>

             <form onSubmit={hamdleCreateNewComment} className={style.contentForm}>
                <strong>Deixe seus Comentários</strong>

                <textarea 
                 name="comment" 
                 placeholder='Deixe um comentário...'
                 value={newCommentText}
                 onChange={handleNewCommentChange}
                 onInvalid={handleNewCommentInvaLid}
                 required
               

                />
                <footer>
                    <button type='submit' disabled={newCommentText.length == 0}>Publicar</button>
                    </footer>
             </form>
                <div className={style.commentsList}>
      {comments.map((comment) => {
        return <Comments key={comment}  content={comment}  onDeletComment={ deletComment} />;
      })}
    </div>

      </article>
    )
    
}