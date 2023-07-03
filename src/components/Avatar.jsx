import styles from './Avatar.module.scss'

export function Avatar(props){


    return( 
        <img className={styles.avatar} src={props.src} />
    )
}