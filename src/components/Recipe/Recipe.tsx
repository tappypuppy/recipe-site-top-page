import Image from "next/image";
import styles from "./Recipe.module.css";

function Recipe() {
  return (
    <div className={styles.inner}>
      <Image
        className={styles.recipe}
        src="/recipe1.png"
        alt="recipe"
        width={400}
        height={500}
      />
      <Image
        className={styles.recipe}
        src="/recipe2.png"
        alt="recipe"
        width={400}
        height={500}
      />
      <Image
        className={styles.recipe}
        src="/recipe3.png"
        alt="recipe"
        width={400}
        height={500}
      />
    </div>
  );
}

export default Recipe;
