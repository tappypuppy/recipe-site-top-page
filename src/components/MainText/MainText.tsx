import styles from "./MainText.module.css";

function MainText() {
  return (
    <div className={styles.inner}>
      <h1 className={styles.title}>Recipe Diary</h1>
      <p className={styles.description}>
        日々の料理レシピをまとめています。<br />
        和食や洋食、中華、お菓子までいろいろな料理レシピをアップしていますので、<br />
        みなさんの献立にお役立てくださいね！
      </p>
    </div>
  );
}

export default MainText;
