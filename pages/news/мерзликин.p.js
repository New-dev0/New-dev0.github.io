import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Мерзликин</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Мерзликин"/>
        <meta name="description" content="Trending News about Мерзликин" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Мерзликин</h1>
            <Image width={800} height={500} src="https://img.championat.com/news2/social/0/e7/4913125.jpg" alt="Мерзликин"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/hockey/news-4913125-kolambus-vyveli-lajne-i-merzlikina-iz-spiska-travmirovannyh-tarasov-otpravlen-v-ahl.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Коламбус» вывел Лайне и Мерзликина из списка ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcReUQBEUPsXDC86C-O8Eqz3P3od8dIixb0H4gOWGWQ-C0OG8W_TjKw5P46R28wKFP5ed-Z66Emn" alt="«Коламбус» вывел Лайне и Мерзликина из списка ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Коламбус Блю Джекетс» на своём сайте объявил о том, что нападающий клуба Патрик Лайне и голкипер Элвис Мерзликин выведены из списка травмированных.</p></div>
            </div>
        </a><a href='https://allhockey.ru/news/show/462216-Kolambus_vyvel_Lajne_i_Merzlikina_iz_spiska_travmirovannyh_Tarasov_otbyl_v_AHL'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Коламбус&quot; вывел Лайне и Мерзликина из списка ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="&quot;Коламбус&quot; вывел Лайне и Мерзликина из списка ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Коламбус&quot; вывел Лайне и Мерзликина из списка травмированных,Тарасов отбыл в АХЛ | Allhockey.ru - главный хоккейный информационный сайт России,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}