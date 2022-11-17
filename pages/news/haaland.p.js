import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Haaland</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Haaland"/>
        <meta name="description" content="Trending News about Haaland" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Haaland</h1>
            <Image width={800} height={500} src="https://www.thesun.co.uk/wp-content/uploads/2022/11/erling-haaland-manchester-city-action-775184806.jpg?strip=all&quality=100&w=1920&h=1080&crop=1" alt="Haaland"/>
            <h3>Recent News</h3>
            <a href='https://www.thesun.co.uk/sport/20446524/erling-haaland-england-world-cup-favourites-man-city/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Erling Haaland names England as his favourites to win World Cup ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTwDyO4M4XQI5dHPhi7PpNjzbZGGAkJAi8TI_HKpXhu41TDnUzo09RkJPUXPdNeuaYZ3G1r6QNr" alt="Erling Haaland names England as his favourites to win World Cup ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ERLING HAALAND has named England as favourites to win the World Cup.But Manchester City&#39;s latest cult hero reckons three other giants are also in th.</p></div>
            </div>
        </a><a href='https://unofficialnetworks.com/2022/11/16/erling-haaland-ski/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH: If Manchester City&#39;s Erling Haaland Skied</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS3CFrAfll1hPKp0IA1g0E0O_cIDuK7aNvKNL17yqBxajsdSbvfOWDh2h9459uMWkyPtuABup78" alt="WATCH: If Manchester City&#39;s Erling Haaland Skied" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Haaland is just 22-years-old, but the young Norwegian has absolutely lit up the British Premier League since joining perennial juggernaut Manchester City. The&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurosport.com/football/world-cup/2022/england-aren-t-terrible-at-football-then-according-to-lionel-messi-and-erling-haaland-the-warm-up_sto9228437/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England aren&#39;t terrible at football then, according to Lionel Messi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcROIHm0Y0qf5rOS925KZkIgpTrgSQOk9VS7Kh54gY6iIgrYMpANMl809eteUFRTdFlq2trJj3dY" alt="England aren&#39;t terrible at football then, according to Lionel Messi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi and Erling Haaland have talked up England&#39;s chances at the World Cup. This comes despite England&#39;s decidedly patchy form after the Euros.</p></div>
            </div>
        </a><a href='https://www.thesun.ie/sport/football/9741247/manchester-city-erling-haaland-2022-world-cup-norway/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why isn&#39;t Manchester City&#39;s Erling Haaland at the 2022 World Cup?...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTXvCd_lpdNxYiixjaPnJOgaVCFTN8D34fgRdmM8j1ERMC0NUko0Wb-ejzF9l4AJGU_9-xYFHUb" alt="Why isn&#39;t Manchester City&#39;s Erling Haaland at the 2022 World Cup?..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>THE biggest tournament in football is upon us where 32 countries will battle it out for World Cup glory, yet some household names won&#39;t feature in Qat.</p></div>
            </div>
        </a>
        </Template></>;
}