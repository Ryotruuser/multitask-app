import styles from './styles.module.css';

type BodyAppProps = {
  children: React.ReactNode;
};
export default function BodyApp({children}: BodyAppProps){
    return (
        <div className={styles.bodyApp}>
            {children}
        </div>
    )
}