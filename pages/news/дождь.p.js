import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Дождь</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Дождь"/>
        <meta name="description" content="Trending News about Дождь" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Дождь</h1>
            <Image width={800} height={500} src="https://iv.kommersant.ru/SocialPics/5708114_26_2303992_1417482896" alt="Дождь"/>
            <h3>Recent News</h3>
            <a href='https://www.kommersant.ru/doc/5708114'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Дождь» не будет возвращать на работу уволенного ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQT4ZmhinbSoKY9Ocgubdcno1Qyhconb6VREyk3KxbOXHu5CPR_SWuG07R-xkp9kWF9PyQFo6Aq" alt="«Дождь» не будет возвращать на работу уволенного ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Главный редактор телеканала «Дождь» (признан иностранным агентом) Тихон Дзядко (признан иностранным агентом) заявил, что журналиста Алексея Коростелева,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/russian/news-63870476'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Латвия аннулирует лицензию на вещание телеканала &quot;Дождь ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSqXIIoq-dcl5UGn98llUeIrMX_JLxMFo5_jnt1ocaR96Q8FFAQk9Xc7PCMt2HEpR4em3RrC8I7" alt="Латвия аннулирует лицензию на вещание телеканала &quot;Дождь ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Лицензия на вещание телеканала &quot;Дождь&quot; (внесен в реестр &quot;иноагентов&quot; в России) в Латвии будет аннулирована, постановил местный Национальный совет по&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vedomosti.ru/media/news/2022/12/07/954085-veschanie-telekanala-dozhd-budet-prekrascheno-v-litve'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Литва вслед за Латвией прекратит вещание телеканала «Дождь»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSxzhKCqMjDCsAXcfGiyQhDDXSZCHP8bZ4PyHucPVRfKMutTtKM_GXZdsE5UFNXNcfZLGg7ZoCW" alt="Литва вслед за Латвией прекратит вещание телеканала «Дождь»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вещание телеканала «Дождь» (признан в РФ СМИ-иноагентом) будет прекращено в Литве, сообщила Литовская комиссия по радио и телевидению (ЛКРТВ).</p></div>
            </div>
        </a><a href='https://rt-online.ru/litva-vsled-za-latviej-reshila-zapretit-veshhanie-telekanala-dozhd/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Литва вслед за Латвией решила запретить вещание телеканала ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Литва вслед за Латвией решила запретить вещание телеканала ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Проблемы у телеканала &quot;Дождь&quot; в Латвии начались вскоре после того, как ведущий Алексей Коростелев рассказал о помощи российским военнослужащим.</p></div>
            </div>
        </a><a href='https://thebell.io/kak-vlasti-latvii-obyasnili-zakrytie-dozhdya'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Как власти Латвии объяснили закрытие «Дождя»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcThywYADre7aJHkxKORIbFB1hNfPVAK4G22z2CwbpC0DFmPhcZU8h9j-mhzm6aEg1rkqMpmR_2N" alt="Как власти Латвии объяснили закрытие «Дождя»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Крупнейший скандал вокруг российской независимой журналистики с момента начала войны — власти Латвии отозвали лицензию на вещание у телеканала «Дождь» после&nbsp;...</p></div>
            </div>
        </a><a href='https://meduza.io/feature/2022/12/06/my-ne-pytalis-ni-s-kem-dogovarivatsya'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Мы не пытались ни с кем договариваться» Латвия ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTc5E4jMlcyD1TqyKJCOpdcG99P9MJuvrEPzmN7kT2JCMdlvjGc6h-pA_EUNqn9LaDmEi2CYNgN" alt="«Мы не пытались ни с кем договариваться» Латвия ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Утром 6 декабря латвийские власти отозвали лицензию канала «Дождь» на вещание. Национальный совет по электронным СМИ заявил, что телеканал представляет&nbsp;...</p></div>
            </div>
        </a><a href='https://octagon.media/istorii/sovladelica_dozhdya_stala_britankoj.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Совладелица «Дождя»* стала британкой</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Совладелица «Дождя»* стала британкой" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Одна из основательниц телеканала «Дождь»* (внесён в реестр СМИ-иноагентов) Вера Кричевская, возможно, стала подданной Великобритании или по меньшей мере&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}