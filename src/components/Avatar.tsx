import styles from './Avatar.module.scss'

interface AvatarProps{
    hasBorder?: boolean;
    src: string;
    alt?: string;
}

export function Avatar({hasBorder = true,src, alt}: AvatarProps){


    return( 
        <img className={styles.avatar}
         src={src} 
         alt={ alt }
         />
    )
}