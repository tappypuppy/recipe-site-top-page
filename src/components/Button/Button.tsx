import styles from './Button.module.css';

function Button() {
    return (
        <div className={styles.inner}>
            <button>レシピ一覧を見る</button>
        </div>
    );
}

export default Button;