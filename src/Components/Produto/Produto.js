import styles from './Produto.module.css';

function Produto({nome, preco, img}){
    return(
        <div className={styles.Container}>
            <div className={styles.Image}>
                <img src={img} alt="" height={150} width={150} />
            </div>
            <div className={styles.Image}>
                <h1>{nome}</h1>
            </div>
            <div className={styles.Preco}>
                <p>Preço: R$ {preco}</p>
            </div>

        </div>
    );
}

export default Produto;