import styles from './styles.module.css';

type ButtonAppProps = {
    src: string
} & React.ComponentProps<'img'>;
export default function ButtonApp(props: ButtonAppProps){
    return (
        <img {...props} className={styles.buttonApp}/>
    )
}