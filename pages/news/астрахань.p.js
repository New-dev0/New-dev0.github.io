import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Астрахань</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Астрахань"/>
        <meta name="description" content="Trending News about Астрахань" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Астрахань</h1>
            <Image width={800} height={500} src="https://punkt-a.info/upload/iblock/c4b/c4b293258ded16a3886c3a2c86edd042.jpg" alt="Астрахань"/>
            <h3>Recent News</h3>
            <a href='https://punkt-a.info/news/glavnoe/inostrannye-rabochie-priezzhayushchie-v-astrakhan-vpervye-stali-zarabatyvat-bolshe-30-tysyach'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Иностранные рабочие, приезжающие в Астрахань, впервые ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ7Ewcc32O-auu_Jc7KzIHBNjhBayYf-Gp2cqciFXdRsikl8-x-GLMbNiv6EXg3m3SrIN7ga2_Y" alt="Иностранные рабочие, приезжающие в Астрахань, впервые ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На пленарном заседании во вторник, 15 ноября, депутаты Думы Астраханской области под председательством Игоря Мартынова рассмотрели законопроект о ставке&nbsp;...</p></div>
            </div>
        </a><a href='https://portnews.ru/news/338585/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В границы морского порта Астрахань внесены изменения</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSwt0tgqZurcbo7VdXgWOlk0mt_c7TNglkDUlmTHPoikCuD070INYcfjUFwY8Ae5-V3z5xRgAKl" alt="В границы морского порта Астрахань внесены изменения" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В границы морского порта Астрахань внесены изменения в соответствии с распоряжением правительства России от 31 октября 2022 года №3264-р, сообщает пресс-служба&nbsp;...</p></div>
            </div>
        </a><a href='http://www.morvesti.ru/news/1679/99213/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Участки морского порта Астрахань № 11 и № 14 объединили ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRxlr3L5Quj4jlLb5vT_Xc_wQGtJ90WyuYvtfm7LUkE6H7p43vkHyvuouosETGfcKW8f1FtkhVz" alt="Участки морского порта Астрахань № 11 и № 14 объединили ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>15.11.2022. Лента новостей. Распоряжением Правительства России от 31.10.2022 № 3264-р внесены изменения в границы морского порта Астрахань. Об этом сообщила&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}