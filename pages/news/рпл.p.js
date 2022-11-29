import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>РПЛ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,РПЛ"/>
        <meta name="description" content="Trending News about РПЛ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>РПЛ</h1>
            <Image width={800} height={500} src="https://s-cdn.sportbox.ru/images/shares/1200x600/node/71/1732260.jpg" alt="РПЛ"/>
            <h3>Recent News</h3>
            <a href='https://news.sportbox.ru/Vidy_sporta/Futbol/Russia/premier_league/spbnews_NI1732260_Vratar_Krasnodara_zajavil_chto_v_RPL_klub_zanimajet_ne_svoje_mesto'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Вратарь «Краснодара» заявил, что в РПЛ клуб занимает не свое ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTI2Ew1EK_Z9CzhcXVQWKOCwTRqRzdZsVzGe6xiZAzmWbFwalbKsnVmyJbXNxzyPVi5m8OAN90lPg" alt="Вратарь «Краснодара» заявил, что в РПЛ клуб занимает не свое ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вратарь ФК «Краснодар» Станислав Агкацев рассказал Metaratings.ru, как команда отреагировала на поражение от «Оренбурга» 1:5 в матче 17‑го тура МИР РПЛ.</p></div>
            </div>
        </a>
        </Template></>;
}