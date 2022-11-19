import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Софи Лорен</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Софи Лорен"/>
        <meta name="description" content="Trending News about Софи Лорен" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Софи Лорен</h1>
            <Image width={800} height={500} src="https://tvmag.ru/upload/iblock/634/234.jpg" alt="Софи Лорен"/>
            <h3>Recent News</h3>
            <a href='https://tvmag.ru/article/canals/2022-11-18-na-1tv-premera-filma-sofi-loren-nesravnennaya-i-kino-grafinya-iz-gonkonga/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Первом канале – премьера фильма «Софи Лорен ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRd8c8vr5gxnXW8hlR5CzNeBvZ95o_EnioT_67ZneC69N8FEUoYsUoovuGADU3b4U2_GK-Y23xy" alt="На Первом канале – премьера фильма «Софи Лорен ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Документальную биографическую ленту «Софи Лорен. Несравненная» (Sophia Loren, une destinée particulière) выпустила режиссер и автор сценария Джулия Брахер. Она&nbsp;...</p></div>
            </div>
        </a><a href='https://24smi.org/article/321282-brak-ne-priznannyi-italianskim-pravitelstvom-istor.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Брак, не признанный итальянским правительством: история ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS-yLj32iOJBAyPsXzvXzIE4uS_eIaKbrgozAvGPrQqIxViAOwyH-6eiHGyNFbDJxeWIaPYnLCT" alt="Брак, не признанный итальянским правительством: история ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Статья об истории любви актрисы Софи Лорен и ее мужа Карло Понти. Вы прочитаете о том, как складывались их отношения, об истории знакомства и свадьбе,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}