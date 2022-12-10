import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Рада національної безпеки і оборони України</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Рада національної безпеки і оборони України"/>
        <meta name="description" content="Trending News about Рада національної безпеки і оборони України" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Рада національної безпеки і оборони України</h1>
            <Image width={800} height={500} src="" alt="Рада національної безпеки і оборони України"/>
            <h3>Recent News</h3>
            <a href='https://www.kmu.gov.ua/news/yuliia-laputina-zustrilasia-z-veteranskoiu-spilnotoiu-odeshchyny'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кабінет Міністрів України - Юлія Лапутіна зустрілася з ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Кабінет Міністрів України - Юлія Лапутіна зустрілася з ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Захід відбувся у Veterans HUB ODESA. Міністр обговорила з учасниками зустрічі питання соціальних гарантій для ветеранів, членів їхніх родин і сімей полеглих&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kmu.gov.ua/news/na-shliakhu-do-staloho-upravlinnia-vodnymy-resursamy-uriad-skhvalyv-vodnu-stratehiiu-ukrainy-do-2050-roku'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кабінет Міністрів України - На шляху до сталого управління ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Кабінет Міністрів України - На шляху до сталого управління ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Кабінет Міністрів України на своєму засіданні схвалив Водну стратегію України до 2050 року та операційний план з її реалізації до 2024 року.</p></div>
            </div>
        </a>
        </Template></>;
}