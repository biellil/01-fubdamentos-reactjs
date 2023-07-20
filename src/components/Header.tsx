import styles from './Header.module.scss'

import IgniteLogo from '../assets/Ignite simbol.svg'

export function Header(){
    return(
        <div className={styles.Header}>
           <img src={IgniteLogo} alt="IgniteLog" />
        </div>
    );
}