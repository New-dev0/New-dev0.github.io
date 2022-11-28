import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>27 ноября праздник</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,27 ноября праздник"/>
        <meta name="description" content="Trending News about 27 ноября праздник" /></Head><Template>
            <h1 style={{fontSize: "30"}}>27 ноября праздник</h1>
            <Image width={800} height={500} src="https://images.unian.net/photos/2022_11/thumb_files/620_324_1669042837-9366.jpg?1" alt="27 ноября праздник"/>
            <h3>Recent News</h3>
            <a href='https://www.unian.net/lite/holidays/narodnyy-prazdnik-27-noyabrya-2022-obychai-primety-chto-nelzya-delat-12056550.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>27 ноября: народный праздник, приметы погоды, что нельзя ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQex_tNkXJjazAQS8-UC9Z6qry2XKd945_igfo6sB9RAsaB85ParICi9RCXy7oKQkVT8puGWm8E" alt="27 ноября: народный праздник, приметы погоды, что нельзя ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>27 ноября 2022 года отмечается народный праздник Филиппов день. Узнайте, какие обряды проводятся в этот день, что нельзя делать и какие приметы погоды.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/styler/tserkovne-svyato-27-listopada-k-provesti-1669489616.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Церковный праздник 27 ноября: как провести канун ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ781Sold79ykrrG3Pybppvxys6CLG9L_2qIesxwv3sbU5FA8rmRBBshDn-4vivsKaV4aAyHvcP" alt="Церковный праздник 27 ноября: как провести канун ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>27 ноября - это последний день перед Рождественским постом. Что нужно обязательно сделать сегодня?</p></div>
            </div>
        </a><a href='https://glavcom.ua/ru/news/27-nojabrja-kakoj-sehodnja-prazdnik-primety-i-zaprety-891656.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>27 ноября: какой сегодня праздник, приметы и запреты</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcROybvj4X9QoUV6mtneOMgwgmAMukrD8GT6SIa9eaizhY-qqEckS7dv2Gi1t3WzCWcyQb9kfMrS" alt="27 ноября: какой сегодня праздник, приметы и запреты" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В это воскресенье не рекомендуется много работать, брать на себя подработку.</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/ukrayina/cerkovnyy-prazdnik-27-noyabrya-komu-molyatsya-veruyuschie-primety-dnya-2208793.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Церковный праздник 27 ноября – кому молятся верующие ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTNRMNWCKrKpXpeWCeCU1cyanGxuiSSsYdh9FBhp5NAUx15bUPFqxIm7VjgOzOZFsAI4YF2_2P7" alt="Церковный праздник 27 ноября – кому молятся верующие ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Какой праздник в церковном календаре? 27 ноября в православном календаре день памяти святого апостола Филиппа.</p></div>
            </div>
        </a><a href='https://dni.ru/society/2022/11/27/513459.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Филипповка и Куделица: что нельзя делать в праздник 27 ноября</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQwvWix-mU1SMOacodAl6dZBLWcDIqvnWFMm7iQE5BZqpBfxgcvqToQwvg2WXb0vrOqKNwc6mCp" alt="Филипповка и Куделица: что нельзя делать в праздник 27 ноября" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>27 ноября 2022 года по народному календарю отмечаются Филипповка и Куделица.</p></div>
            </div>
        </a><a href='https://tvsamara.ru/news/narodnye-primety-na-27-noyabrya-ne-delaite-etogo-na-filippovki-esli-ne-khotite-lishitsya/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Народные приметы: 27 ноября. Не делайте этого на Филипповки ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRPdCI7G3wDcudceGEehRpcaSf6zwx7m6XAR7lVV_kzIWzljfgpUXQVg1Ei6xuYlv22ESqAoAIN" alt="Народные приметы: 27 ноября. Не делайте этого на Филипповки ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Узнайте главные новости на официальном сайте ГТРК Самара - Народные приметы: 27 ноября. Не делайте этого на Филипповки, чтобы не лишиться здоровья и&nbsp;...</p></div>
            </div>
        </a><a href='https://novy.tv/ru/g-space/layfhaki/2022/11/27/yake-sogodni-svyato-shho-mozhna-i-ne-mozhna-robyty-27-lystopada/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Какой сегодня праздник? Что можно и нельзя делать 27 ноября</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRiRd3QSDXPFFZEbgAHEwQP32NLH0a01aet1kmbow7IayR3axl3mwDSVSN-93XflQN4hjC1nXnp" alt="Какой сегодня праздник? Что можно и нельзя делать 27 ноября" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Какой сегодня праздник? 27 ноября празднуется несколько событий. Читай какой церковный праздник празднуют сегодня, 27 ноября 2022.</p></div>
            </div>
        </a>
        </Template></>;
}