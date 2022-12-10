import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Матч ТВ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Матч ТВ"/>
        <meta name="description" content="Trending News about Матч ТВ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Матч ТВ</h1>
            <Image width={800} height={500} src="https://s-cdn.sportbox.ru/images/shares_matchtv/1200x630/article/1739034/4a40b1651d415032b67ba56dc7d61be8.jpg" alt="Матч ТВ"/>
            <h3>Recent News</h3>
            <a href='https://matchtv.ru/football/chempionat_mira/matchtvnews_NI1739034_Ochen_interesnyj_turnir_s_udovolstvijem_smotru_jego_na_Match_TV_Roman_Rotenberg__o_ChM_2022_v_Katare'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Очень интересный турнир, с удовольствием смотрю его на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT1onVWtLuOSucXjodAWXmorp3KIw09xqBAEd2TmT5zIT6DhtBtNavN-18VyxjNjrNaGrPogSC2" alt="«Очень интересный турнир, с удовольствием смотрю его на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Главный тренер сборной дивизиона Боброва на Матче звезд КХЛ Роман Ротенберг в разговоре с корреспондентом «Матч ТВ» выразил сожаление, что в полуфинале&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sports.ru/hockey/1114095402-roman-rotenberg-o-chm-po-futbolu-s-udovolstviem-posmotrel-by-polufinal.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Роман Ротенберг о ЧМ по футболу: «С удовольствием ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQJCwMt6qs2SavD0wTpVNtYhvNg_op7_EWXQsserorqO_d-fXkMpNfaidCYdNL8dxAHk7Q7Of7M" alt="Роман Ротенберг о ЧМ по футболу: «С удовольствием ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>– Любимые песни? – Ну он же поет, этот рэпер ST, с кем вы будете тренировать сборную дивизиона Боброва. – А, в этом смысле. У него есть неплохая коллаборация с&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}