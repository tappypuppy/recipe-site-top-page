import styles from './Mainvisual.module.css';
import Image from 'next/image';

function Mainvisual() {
    return (
        <div className={styles.img_box}>
            <Image
                src="/mainvisual.png"
                alt="mainvisual"
                width={1200}
                height={800}
                className={styles.img}
                />
        </div>
    );
}

export default Mainvisual;