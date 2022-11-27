import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Тина Кароль</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Тина Кароль"/>
        <meta name="description" content="Trending News about Тина Кароль" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Тина Кароль</h1>
            <Image width={800} height={500} src="https://showbiz.24tv.ua/resources/photos/news/202211/2205645.jpg?v=1669447787000&w=1200&h=675" alt="Тина Кароль"/>
            <h3>Recent News</h3>
            <a href='https://showbiz.24tv.ua/ru/nacotbor-evrovidenie-2023-dzhamala-o-zhjuri-tine-karol-showbiz_n2205645'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Всех уважаю, – Джамала о скандале с Тиной Кароль на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSYfKbwTYlX3r74x5pXvtRsFPYt92FwYj4qSbTr3jKZY8AL5DFsPGsp8JYUGuzcQzApLGJA_d_y" alt="Всех уважаю, – Джамала о скандале с Тиной Кароль на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Джамала будет в жюри Нацотбора на Евровидение-2023. Она призналась, как отреагировала на это и критику от Тины Кароль. Обо всем читайте на Showbiz.</p></div>
            </div>
        </a><a href='https://www.unian.net/lite/stars/nacotbor-na-evrovidenie-2023-dzhamala-otreagirovala-na-isteriku-tiny-karol-12057939.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Нацотбор на Евровидение-2023: Джамала отреагировала на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSKK-EIGX3ctp0y5UPaDlR9Mr3AvKMgyiPukjpCpmdvigfTQUh3Mac_ufnITYuBUGfHy-AKaSL1" alt="Нацотбор на Евровидение-2023: Джамала отреагировала на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Украинская певица и член жюри Нацотбора на Евровидение-2023 Джамала прокомментировала скандал с Тиной Кароль, которой не хватило несколько голосов,&nbsp;...</p></div>
            </div>
        </a><a href='https://life.fakty.com.ua/ru/showbiz/naczvidbir-yevrobachennya-2023-dzhamala-prokomentuvala-skandal-iz-tinoyu-karol/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Нацотбор Евровидения 2023: Джамала прокомментировала ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTgB9pSiG_qFVJmm4XpUGfL01RTdYfkqAYzxYIVxUfwDJE0SbmJe3HuaPS_Ry_udOlD6efstXvk" alt="Нацотбор Евровидения 2023: Джамала прокомментировала ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Джамала прокомментировала скандал с исполнительницей Тиной Кароль из-за судейского кресла в жюри Нацотбора Евровидения 2023. Джамала о судейском кресле для&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}