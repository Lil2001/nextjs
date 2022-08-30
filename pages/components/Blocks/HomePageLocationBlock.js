import TextBlock from "./TextBlock";
import styles from './LocationBlock.module.scss'
import Image from 'next/image'



export default function HomePageLocationBlock() {
    return (
        <div className={styles.locationBlock}>
            <div style={{ width: '100%' }} className={styles.locationBlock__firstDiv}>
                <TextBlock
                    header={'Расположение'}
                    textFirst={'Микрорайон М - это комфортное место для жизни: тут есть зоны спорта и отдыха, детские площадки, видеонаблюдение, строиться школа, детский садик.'}
                    textSecond={'В шаговой доступности всё необходимое для удобного и комфортного проживания: детский сад, школа, гипермаркеты, аптеки, парикмахерские, кафе, пиццерии и прочее.'}
                />
                <div className={styles.locationBlock__firstDiv__imageDiv}>
                    <p>Концепция «город в городе»</p>
                    <Image
                        className={styles.image}
                        src='/../public/images/image10.png'
                        width='360px'
                        height='200px'
                        layout='fixed'
                    />
                </div>

            </div>
        </div>
    )
}