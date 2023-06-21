import styles from './style.module.css';

function CenteredCard( { children } ){
    
    return (
        <div className={styles.CardCentered}>
            <span className={styles.CardRow}>{children}</span>
        </div>
    )
}

export default CenteredCard