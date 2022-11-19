import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Хабиб</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Хабиб"/>
        <meta name="description" content="Trending News about Хабиб" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Хабиб</h1>
            <Image width={800} height={500} src="https://img.championat.com/news2/social/b/1d/4896063.jpg" alt="Хабиб"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/boxing/news-4896063-habib-ne-poluchil-vizu-v-ssha-i-propustit-titulnyj-boj-brata-na-bellator-288.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Хабиб не получил визу в США и пропустит титульный бой брата ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSpCi4gvupcJ0mfScDl2Utv21K5JYdXRoJ5rJats4TPdNfLwZZaEf_DpIi55_ifnaijF75CNUI7" alt="Хабиб не получил визу в США и пропустит титульный бой брата ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бывший чемпион UFC в лёгком весе, россиянин Хабиб Нурмагомедов разместил новый пост в своих социальных сетях, рассказав, что не будет присутствовать в&nbsp;...</p></div>
            </div>
        </a><a href='https://sportrbc.ru/news/6377999a9a7947bb6b42100c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Хабиб Нурмагомедов пропустит титульный бой двоюродного ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRnq_a6H29VDFt8FbQLaFaIhqOj0jZOiYXvxKd-Wm6u9SeNQtrtkTkBcBy8Kqek_QVDLNXHQRHN" alt="Хабиб Нурмагомедов пропустит титульный бой двоюродного ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Хабиб не успел вовремя получить американскую визу. Усману Нурмагомедову предстоит бой с чемпионом Bellator в легком весе бразильцем Патрики Фрейре.</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/martial/mma/news/habib-nurmagomedov-propustit-chempionskiy-boy-svoego-dvoyurodnogo-brata-usmana-nurmagomedova-v-bellator-1999828/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Хабиб Нурмагомедов пропустит чемпионский бой своего ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQlvTehId88ZhSU3z_CtnAGAS08hYSCwwFLiEp5fpYo5nNWI7X_hdSzbuUPCU-0YTIzM5dL3j4M" alt="Хабиб Нурмагомедов пропустит чемпионский бой своего ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Усман Нурмагомедов подерется за титул чемпиона Bellator в легком весе против Патрики Фрейре (24-10) 18 ноября на Bellator 288 в Чикаго, США. В активе 24-летнего&nbsp;...</p></div>
            </div>
        </a><a href='https://mma.metaratings.ru/news/na-etot-raz-menya-ryadom-ne-budet-xabib-propustit-titulnyi-boi-usmana-nurmagomedova-na-bellator-288-54286/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«На этот раз меня рядом не будет». Хабиб пропустит титульный ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQv2v1g5qvOwSy7xEO1BS80ScR3SoSGn2-sqJKopP_6oGxKNLbPlNL7RmGO1urFqO5yol0LpQ81" alt="«На этот раз меня рядом не будет». Хабиб пропустит титульный ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бывший чемпион UFC Хабиб Нурмагомедов не сможет присутствовать на бое Усмана Нурмагомедова против чемпиона Bellator в легком весе Патрики Фрейре.</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/edinoborstva/spbnews_NI1725798_Jesli_by_ne_problema_s_vizoj_SShA_Khabib_obazatelno_prijehal_na_titulnyj_boj_brata__Umar_Nurmagomedov'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Если бы не проблема с визой США, Хабиб обязательно ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSNEb08yNkvZOVZuNHi1dR37pNwF-eQup9nlTYLY_pAaWVgcbcFVRcW2o4u4waWKvYE4dPZiu2L" alt="«Если бы не проблема с визой США, Хабиб обязательно ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российский боец Умар Нурмагомедов рассказал, почему Хабиб Нурмагомедов не сможет присутствовать на титульном поединке их брата Усмана, который пройдет в&nbsp;...</p></div>
            </div>
        </a><a href='https://sport24.ru/news/mma/2022-11-18-umar-nurmagomedov-khabib-zhdet-vizu-yesliby-ne-eto-onby-obyazatelno-byl-na-samom-vazhnom-boyu-v-karyere-usmana'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Умар Нурмагомедов: «Хабиб ждет визу. Если бы не это, он бы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQSXFFT12GhFs5Ezt4n2ioNXla-nZxKl9qn-wepKLh16yB50sCZPnnBztIx1TEwBN5F-1afAqir" alt="Умар Нурмагомедов: «Хабиб ждет визу. Если бы не это, он бы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В ночь с 19 на 20 ноября в Лас-Вегасе в спорткомплексе Apex пройдет турнир UFC Fight Night 215, главным событием которого станет бой тяжеловесов Деррик Льюис —&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}