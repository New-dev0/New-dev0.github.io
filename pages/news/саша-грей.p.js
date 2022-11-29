import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Саша Грей</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Саша Грей"/>
        <meta name="description" content="Trending News about Саша Грей" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Саша Грей</h1>
            <Image width={800} height={500} src="https://images.unian.net/photos/2022_11/thumb_files/620_324_1669627384-1964.jpg?1" alt="Саша Грей"/>
            <h3>Recent News</h3>
            <a href='https://www.unian.net/russianworld/v-rf-zamanivayut-pushechnoe-myaso-pornoaktrisoy-sashey-grey-foto-12059469.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В РФ заманивают &quot;пушечное мясо&quot; порноактрисой Сашей Грей ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQflXAqbwJSILWcl0JRETwpMi-XiL9G79JizWTP2hhaFzoLqLdupcT4kgXicbbDTYahZPWBi7-Y" alt="В РФ заманивают &quot;пушечное мясо&quot; порноактрисой Сашей Грей ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Кроме того, роспропаганда сделала из звезды фильмов для взрослых жертву &quot;украинских карателей&quot;.</p></div>
            </div>
        </a><a href='https://news.uaportal.com/section-news/news-rossiyane-propagandiruyut-mobilizatsiyu-izobrazheniyami-izvestnoj-amerikanskoj-pornoaktrisyi-foto-28-11-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фотографии порноактриса Саши Грей на россии использовали ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ2PSxXqBYoe-L9lhdQKTsr_GUPW3xzsK8Bkuk6jAp5P1NIyw4u1PtNB9B8D2RwjFHsKdges4EzhQ" alt="Фотографии порноактриса Саши Грей на россии использовали ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>российские пропагандисты использовали фотографию известной американской порно-актрисы Саши Грей, чтобы привлечь к мобилизации больше россиян.</p></div>
            </div>
        </a>
        </Template></>;
}