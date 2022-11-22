import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Муратов</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Муратов"/>
        <meta name="description" content="Trending News about Муратов" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Муратов</h1>
            <Image width={800} height={500} src="https://oblast45.ru/uploads/publications/images/51531/big/33e0e8242dd8a2137b66b23d91e6cbdbed43bee5.jpg" alt="Муратов"/>
            <h3>Recent News</h3>
            <a href='https://oblast45.ru/publication/51531'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сенатор Сергей Муратов поздравил курганскую гимназию с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRNRhs3w-x1YS84pV7Tp9HpDIslCpqqQaRjZmpZWAcpGtZRQIbPvRd5wu1pPBGVwatosX9sz6zt" alt="Сенатор Сергей Муратов поздравил курганскую гимназию с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Курганская гимназия №32 отметила юбилей. В этом году учебному заведению исполнилось 65 лет. Поздравить директора и педагогов лично приехал сенатор России&nbsp;...</p></div>
            </div>
        </a><a href='https://spektr.press/news/2022/11/21/muratov-v-intervyu-dudyu-rasskazal-o-dele-politkovskoj-problemah-pravosudiya-v-rossii-i-vojne-v-ukraine/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Муратов в интервью Дудю рассказал о деле Политковской ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQZuIQDtHZhho0pqFoG0UtuKGcQ9ev21-K5dmjQmRx9JXQmN-_VYzl7-ebimHdpFOeqg618zPKB" alt="Муратов в интервью Дудю рассказал о деле Политковской ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Главный редактор «Новой газеты» и лауреат Нобелевской премии мира 2021 года Дмитрий Муратов дал интервью журналисту и блогеру Юрию Дудю. В интервью они.</p></div>
            </div>
        </a>
        </Template></>;
}