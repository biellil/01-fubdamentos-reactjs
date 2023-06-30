import { Comments } from './Comments';
import style from './Post.module.scss';


export function Post() {


    return (
      <article className={style.Post}>
        <header>
            <div className={style.author}>
            <img src="https://github.com/biellil.png" />
            <div>
                <strong>José gabriel</strong>
                <span>Web DeveLoper</span>
            </div>
            </div>


            <time title='2023-06-30' dateTime='2023-06-30 17:29:00'>Publicado há 1h</time>
        </header>

        <div className={style.content}>
            <p>Fala galeraa {' '}👋</p> 
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p> <a href="#">  jane.design/doctorcare</a></p>
            <p><a href="#">#novoprojeto</a><a href="#">#nlw</a> <a href=""> #rocketseat</a></p>
           
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