import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Фигурное катание</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Фигурное катание"/>
        <meta name="description" content="Trending News about Фигурное катание" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Фигурное катание</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/userfiles/materials/184/1845507/large.jpg" alt="Фигурное катание"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/figure-skating/reviews/figurnoe-katanie-final-gran-pri-isu-kto-takaya-deanna-stellato-dudek-i-na-chto-ona-pretenduet-2009579/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Каталась в 1990-е и уходила из спорта на 16 лет! А теперь ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQJH8KhJEDIhjc6lTtTynwfpajBE_RwJYDPkM2CdiUPuD3Ho7pATdIBX33LHin5Bhv7EPEUF-8J" alt="Каталась в 1990-е и уходила из спорта на 16 лет! А теперь ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В этом сезона дорога к большим медалям открылась в фигурном катании для тех, кто раньше об этом мог только мечтать. Особенно пострадало парное катание,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}