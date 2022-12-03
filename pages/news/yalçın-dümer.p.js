import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Yalçın Dümer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Yalçın Dümer"/>
        <meta name="description" content="Trending News about Yalçın Dümer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Yalçın Dümer</h1>
            <Image width={800} height={500} src="https://static.daktilo.com/sites/1191/uploads/2022/12/02/yalcin-dumer1-1669990318.jpg" alt="Yalçın Dümer"/>
            <h3>Recent News</h3>
            <a href='https://www.gidahatti.com/haber/12812459/yalcin-dumer-kimdir-yalcin-dumer-hayati'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Yalçın Dümer kimdir? Yalçın Dümer hayatı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTXg5c9FYlSLQfCPL5hVwojdC9ZUHC6ejkscqOap6JUX0aXM7GzSylJqkfgrusIyOcTLsHONQaZ" alt="Yalçın Dümer kimdir? Yalçın Dümer hayatı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1998&#39;de &quot;Yaşama Hakkı&quot; adındaki sinema filminde Erol Taş, Filiz Taçbaş, Fikret Hakan ile başrolleri paylaşan Yalçın Dümer, ilk evliliğini tiyatro sanatçısı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mynet.com/yalcin-dumer-kimdir-kac-yasinda-nereli-serpil-cakmali-nin-ardindan-esra-balamir-ile-evlenmisti-2-sayfa-konugu-yalcin-dumer-in-hayati-433082-mymagazin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Yalçın Dümer kimdir, kaç yaşında, nereli? Serpil Çakmalı&#39;nın ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ6cu-aA7H09PUPSUl4_1Uk0QoMQqojwvE7_XbsNPKxoCVOUB8b6gsv_xkoGs3gDtyU6rcEHdh0" alt="Yalçın Dümer kimdir, kaç yaşında, nereli? Serpil Çakmalı&#39;nın ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yalçın Dümer, 2 Aralık 2022 Cuma günü 2. Sayfa magazin programının konuğu oldu. Ünlü isim, Serpil Çakmaklı ile olan evliliğinin ardından ünlü şarkıcı Esra&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}