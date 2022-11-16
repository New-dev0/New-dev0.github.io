import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Конотоп</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Конотоп"/>
        <meta name="description" content="Trending News about Конотоп" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Конотоп</h1>
            <Image width={800} height={500} src="https://cdn.abo.media/upload/article/o_1ght7j9v410kr1et7qnbl29g6s1k.jpg" alt="Конотоп"/>
            <h3>Recent News</h3>
            <a href='https://konotop.city/articles/249801/analiz-prodazhiv-vidi-ta-etapi-proceduri'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Аналіз продажів: види та етапи процедури</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQfkzplWZDw1QgDGNU7VFXS8usVG7jzzOz5Fd74ukGapI1pG3RZzWQz65ptjxxGJbj-2RO7WABP" alt="Аналіз продажів: види та етапи процедури" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Під аналізом продажів мається на увазі один із методів маркетингових досліджень. Його метою є з&#39;ясування ефективності бізнесу та попиту на товари&nbsp;...</p></div>
            </div>
        </a><a href='https://konotop.city/articles/249826/nabori-klyuchiv-dlya-avto-scho-treba-dlya-yakisnogo-obslugovuvannya'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Набори ключів для авто: що треба для якісного обслуговування</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcShcXgj8Ks6v5pWbXw1WmZje9DIYmywZ5t3iSW0yJ53QhF2is6dDRolc3Ggl1Sw6ILGgiVUBOqH" alt="Набори ключів для авто: що треба для якісного обслуговування" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Обслуговування автомобілів включає в себе багато процесів. Це і проста заміна мастила, й обслуговування ходової частини, і багато всього іншого.</p></div>
            </div>
        </a><a href='https://konotop.city/articles/249817/cikave-pro-zvichajnu-gitaru'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Цікаве про звичайну гітару</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRA_TGyXpnaobcjlEYmnqaNq_Fhs9ZQZ1tcz12AJpknhSSkXopNw5jsildwaIKp6jSh6jEw6jvL" alt="Цікаве про звичайну гітару" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Акустичну гітару з металевими струнами часто називають естрадною, але її використовують не лише в класичній естраді, а майже в усіх музичних напрямках.</p></div>
            </div>
        </a>
        </Template></>;
}