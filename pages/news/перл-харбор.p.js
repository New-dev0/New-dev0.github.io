import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Перл-Харбор</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Перл-Харбор"/>
        <meta name="description" content="Trending News about Перл-Харбор" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Перл-Харбор</h1>
            <Image width={800} height={500} src="" alt="Перл-Харбор"/>
            <h3>Recent News</h3>
            <a href='https://news.ru/world/perl-harbor-samyj-tyazhelyj-den-ameriki/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Перл-Харбор: самый тяжелый день Америки</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQZ_xTzYxJx4V0KDije4rwaS0irmxDoILPK79j3By682nEiPApBPnYK9I8zSLDmPARU_veQwgJO" alt="Перл-Харбор: самый тяжелый день Америки" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>26 ноября 1941 года ударные силы японского флота под командованием адмиралов Ямамото и Нагумо вышли в поход. Военные корабли следовали, соблюдая полное&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}