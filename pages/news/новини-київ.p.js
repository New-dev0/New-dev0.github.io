import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Новини київ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Новини київ"/>
        <meta name="description" content="Trending News about Новини київ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Новини київ</h1>
            <Image width={800} height={500} src="https://zn.ua/img/article/5188/15_main-v1668520794.jpg" alt="Новини київ"/>
            <h3>Recent News</h3>
            <a href='https://zn.ua/ukr/UKRAINE/v-kijevi-raketi-vluchili-v-dva-zhitlovi-budinki.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Києві ракети влучили в три житлові будинки</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRm4GoCxp04W95F4LFFUxwFsZqCvahI1oWRrmC8qjZlzC_lVVUzbjMSFUjV4AXuoWRgXY8Eidjk" alt="В Києві ракети влучили в три житлові будинки" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Внаслідок ворожої ракетної атаки у Києві зафіксовано два влучання, ще чотири ракети вдалось збити, повідомила Київська міська військова адміністрації.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/11/15/7376453/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ракети влучили у житлові будинки в центрі Києва, є загибла</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQQSCwp4OXcBRA0BoZcT7BJhGYzLLFkbNEdVggG_3drJIOsSDlde8B99GSj9xLDERcsHY-68qlH" alt="Ракети влучили у житлові будинки в центрі Києва, є загибла" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Росія вдарила ракетами по центру Києва: є влучання у житлові будинки у Печерському районі, 4 ракети збила ППО.</p></div>
            </div>
        </a><a href='https://kyiv.tsn.ua/rosiya-vdarila-raketami-po-kiyevu-prolunali-vibuhi-2202337.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Росія вдарила ракетами по Києву: над містом піднявся стовп диму</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcScaG99iSt9eh4rdspm5yIj_5-QD4cdAgU671OlYDxYud_xeCEd_XO0ZTEGWLTsSXlJ_lkJJfdj" alt="Росія вдарила ракетами по Києву: над містом піднявся стовп диму" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У Києві та Київській області вдень 15 листопада пролунали вибухи. В одному з районів Києва після вибуху піднявся стовп диму.</p></div>
            </div>
        </a><a href='https://www.unn.com.ua/uk/news/2003140-u-kiyevi-chutno-zvuki-vibukhiv-ofitsiynoyi-informatsiyi-nemaye'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Києві чутно звуки вибухів: офіційної інформації немає</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQlwAl-Ypfl_KorrBkZ71ppqytai8h-JHDmZS7HTXdunecLbJk2bUDOQlYCs3dPEQ7WQBfLs37y" alt="У Києві чутно звуки вибухів: офіційної інформації немає" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Інформаційне агентство Українські Національні Новини. У Києві чутно звуки вибухів: офіційної інформації немає. 15 листопада 2022, 15:12.</p></div>
            </div>
        </a><a href='https://espreso.tv/u-kievi-prolunali-vibukhi-6373962278e18'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Києві зафіксовано вибухи, попередньо, є влучання у 3 житлові ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTk81u7_ngf9MnT9HmGi7Keb12O_vKLWTzRI3YNN6v3Y7PuXcy7kBPHf1PE_10EjeGQuSzJqJlA" alt="У Києві зафіксовано вибухи, попередньо, є влучання у 3 житлові ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У Києві у вівторок, 15 листопада, пролунали вибухи, унаслідок чого пошкоджено три житлові будинки, загинула людина. Детальніше читайте в новині.</p></div>
            </div>
        </a><a href='https://nv.ua/ukr/ukraine/events/v-kieve-zafiksirovali-eshche-odin-prilet-rakety-po-pecherskomu-rayonu-klichko-50284245.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Києві зафіксували ще один «приліт» ракети по Печерському ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQSIJoXTkV8XWKsLGHt4kVkvaMw8c53R8UsFgnxZd90JK9L8lCvIPlj-uUmwtKUM6Lur4GgK1ZI" alt="У Києві зафіксували ще один «приліт» ракети по Печерському ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Про це повідомив мер Києва Віталій Кличко. Інших подробиць він не розповів. Проте раніше Telegram-канали повідомляли про повторні звуки вибухів у столиці.</p></div>
            </div>
        </a>
        </Template></>;
}