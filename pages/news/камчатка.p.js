import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>КАМЧАТКА</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,КАМЧАТКА"/>
        <meta name="description" content="Trending News about КАМЧАТКА" /></Head><Template>
            <h1 style={{fontSize: "30"}}>КАМЧАТКА</h1>
            <Image width={800} height={500} src="" alt="КАМЧАТКА"/>
            <h3>Recent News</h3>
            <a href='https://kamchatinfo.com/news/elements/detail/53060/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Землетрясение магнитудой 3,8 произошло на Камчатке ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Землетрясение магнитудой 3,8 произошло на Камчатке ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В ночь на понедельник сейсмологи зарегистрировали землетрясение магнитудой 3,8 на восточном побережье Камчатки, передает РАИ «КАМЧАТКА-ИНФОРМ» со ссылкой на&nbsp;...</p></div>
            </div>
        </a><a href='https://kamchatinfo.com/news/economics_and_business/detail/53067/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Объявлен конкурс на выбор застройщика для возведения ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Объявлен конкурс на выбор застройщика для возведения ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Конкурсный отбор, объявленный во исполнение поручений Владимира Путина Корпорацией развития Дальнего Востока и Арктики, позволит определить инвестора для&nbsp;...</p></div>
            </div>
        </a><a href='https://kamchatinfo.com/news/ecology/detail/53063/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В заказнике на Камчатке задержали браконьеров с пятью ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="В заказнике на Камчатке задержали браконьеров с пятью ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Усть-Большерецком районе полицейские совместно с инспекторами Кроноцкого заповедника задержали браконьеров на территории Южно-Камчатского государственного&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}