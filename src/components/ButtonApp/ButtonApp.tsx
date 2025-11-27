import styles from './styles.module.css';

type ButtonAppProps = {
    src: string
} & React.ComponentProps<'img'>;
export default function ButtonApp(props: ButtonAppProps){
    return (
        <a className={styles.buttonAppLink} href='!#'>
            <img {...props} className={styles.buttonAppimg}/>
        </a>
        
    )
}