import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Сериал Уэнсдей Аддамс</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Сериал Уэнсдей Аддамс"/>
        <meta name="description" content="Trending News about Сериал Уэнсдей Аддамс" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Сериал Уэнсдей Аддамс</h1>
            <Image width={800} height={500} src="https://www.film.ru/sites/default/files/styles/thumb_og_800x420_rate_7/public/filefield_paths/krsssl.jpg" alt="Сериал Уэнсдей Аддамс"/>
            <h3>Recent News</h3>
            <a href='https://www.film.ru/articles/recenziya-na-serial-uensdey-tim-berton-snyal-istoriyu-o-docheri-semeyki-addams'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Рецензия на сериал «Уэнсдэй»: Тим Бертон снял историю о ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQVPhQBfLf1a8v21RdLhIwAGdU72GxtIaayOfYnhMQHCy9Gmihh-34Rv6859nj78CS1vzqKr2hn" alt="Рецензия на сериал «Уэнсдэй»: Тим Бертон снял историю о ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Любопытный подростковый детектив — правда, не похожий ни на фильмы Бертона, ни на «Семейку Аддамс». Рецензии. 7 film.ru. Найти с кем пойти в кино&nbsp;...</p></div>
            </div>
        </a><a href='https://www.soyuz.ru/articles/3073'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>​«Уэнсдэй»: Семейка Аддамс в Ривердейле</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="​«Уэнсдэй»: Семейка Аддамс в Ривердейле" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Королева черного юмора отправляется в уморительно жуткое приключение от Тима Бертона. Сегодня 0. Кадр из&nbsp;...</p></div>
            </div>
        </a><a href='https://pluggedin.ru/open/pesni-iz-seriala-uensdey-vesy-saundtrek-40992'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Песни из сериала «Уэнсдэй». Весь саундтрек</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRTPrDIKxjBP6iqOMzPz6CIPfu_prjqa4EWR3btMJrKXJEyECfjvmMfgyHfZWUigGzCcWKSjVEe" alt="Песни из сериала «Уэнсдэй». Весь саундтрек" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;In My Dreams&#39; – Roy Orbison ( &middot; &#39;Can&#39;t Stop&#39; – Rhythmking ( &middot; &#39;La Llorona&#39; – Chavela Vargas ( &middot; &#39;Paint It Black&#39; – Wednesday on violin, originally by The Rolling&nbsp;...</p></div>
            </div>
        </a><a href='https://itc.ua/articles/retsenzyya-na-seryal-uensdej-wednesday/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Рецензия на сериал «Уэнсдэй» / Wednesday - ITC.ua</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRYAbxUWlNKXyY27hytzAp8B1qiXJR89Dzp3z1AkuBGTaltTELwel7fFS6Ib_JpHiNuTMqKvZep" alt="Рецензия на сериал «Уэнсдэй» / Wednesday - ITC.ua" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>23 ноября культовая семейка Аддамсов вернулась на экраны: Netflix представил новый сериал про Уэнсдэй Аддамс. В кадре также фигурируют и другие члены.</p></div>
            </div>
        </a><a href='https://peopletalk.ru/article/stolknovenie-pokolenij-dzhenna-ortega-ne-sovetovalas-s-kristinoj-richchi-na-semkah-seriala-uensdej/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Столкновение поколений: Дженна Ортега не советовалась с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRl-qb7Wy1cNG1rXL-hMaxkHptSolQwWLYH2FwvO9hx8Uikrlm0LaEDYKMNZIE3zy4tQhSnpWI2" alt="Столкновение поколений: Дженна Ортега не советовалась с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Звезда нового сериала «Уэнсдэй» от Netflix Дженна Ортега не искала духовного руководства у своей предшественницы и коллеги Кристины Риччи.</p></div>
            </div>
        </a><a href='https://www.championat.com/cybersport/article-4906347-obzor-uensdej-ot-tima-byortona-shikarnyj-serial-dlya-fanatov-hogvartsa.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сериал «Уэнсдэй» — это новый «Гарри Поттер» с шикарной ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-eDQzcT7wDGxLpKmpi5S9Gg5FC33r4UZ9syM57-nbs4rxm5Q2eh7ynDL1N5McbruWFdi-adx2" alt="Сериал «Уэнсдэй» — это новый «Гарри Поттер» с шикарной ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>И дайте главной актрисе «Оскар»! «Уэнсдей» очень ждали. В центре сюжета знакомые персонажи из «Семейки Аддамс», в главной роли Дженна Ортега, а половину&nbsp;...</p></div>
            </div>
        </a><a href='https://novostivl.ru/news/20221127/106436/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Актриса Дженна Ортега не советовалась с Кристиной Риччи во ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQwPJ1CuuV4kpHjXdfe__gLoRJTIZr-CWq7imrBlmySpmukigX3NMqj_VFZiVpOj6A21u4hK2Ll" alt="Актриса Дженна Ортега не советовалась с Кристиной Риччи во ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ортега считает, что сможет самостоятельно показать весь эмоциональный диапазон девочки, который не был раскрыт в фильме 1991 года. Россия. NVL. main-n@novostivl&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}