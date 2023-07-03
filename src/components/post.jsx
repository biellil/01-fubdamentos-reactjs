import { format ,formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar';
import { Comments } from './Comments';
import style from './Post.module.scss';


export function Post({author,  publishedAt ,content}) {

    const pubçisheDateFormatted = format(publishedAt, "d 'de' LLLL 'de' y 'ás' HH':'mm'h' a ",
     {locale : ptBR,
    } 
         );
     const pubçisheDateRelativeToNow = formatDistanceToNow(publishedAt, {
     
        locale:ptBR,
        addSuffix:true,
    }
        );
   

    return (
      <article className={style.Post}>
        <header>
            <div className={style.author}>
            <Avatar src={author.avatarUrl} />
            <div>
                <strong>{author.nome}</strong>
                <span>{author.role}</span>
            </div>
            </div>
              

            <time title= {pubçisheDateFormatted} dateTime= {publishedAt.toISOString()}>
                {pubçisheDateRelativeToNow}
                </time>
        </header>

        <div className={style.content}>

        {content.map(line =>{
            if (line.type === 'paragraph') {

                return(
                <p>
                    {line.content}
                    </p>);
            } else if(line.type === 'link') {

                return(
                <p>
                    <a href={line.content}>
                        {line.rede}
                        </a>
                    </p>);
            }else if (line.type === 'links') {
                return (
                  <>
                    {line.content.map((item, index) => (
                      <a key={index}>{item}{' '}</a>
                    ))}
                  </>
                );
              }
        })}
            </div>

             <form className={style.contentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea placeholder='Escreva um comentário...'/>
                <footer>
                    <button type='submit'>Publicar</button>
                    </footer>
             </form>
             <div className={style.CommentsList}>
             <Comments/>
             <Comments/>
             <Comments/>
             </div>
      </article>
    )
    
}