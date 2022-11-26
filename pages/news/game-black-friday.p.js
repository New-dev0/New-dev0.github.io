import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Game Black Friday</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Game Black Friday"/>
        <meta name="description" content="Trending News about Game Black Friday" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Game Black Friday</h1>
            <Image width={800} height={500} src="https://frontofficesports.com/wp-content/uploads/2022/11/FOS-PM-22-11.1-Sony-Playstation.jpg" alt="Game Black Friday"/>
            <h3>Recent News</h3>
            <a href='https://frontofficesports.com/black-friday-video-game-sales-2/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Can Black Friday Bring Video Game Sales Back to Life?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcROSeZ8VQZX-qyQjy3IUjJa5Hy_Grnwwbhqw0MmVdw5_kOUgixxVszjrJySO-luIY70AZ_naON_" alt="Can Black Friday Bring Video Game Sales Back to Life?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Electronic Arts, publisher of Madden NFL and FIFA games, estimates net bookings in FY2023 to range between $7.65 billion and $7.85 billion, down from a previous&nbsp;...</p></div>
            </div>
        </a><a href='https://gamerant.com/guardians-of-the-galaxy-game-black-friday-sale/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Guardians of the Galaxy Game Gets Massive 75% Discount for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSurVjalV3vluNb41ENig4aFfng4SctpP52HMgiUoSsGUydIHRKZlDqM7xcJ509Rw3p7vN_Dyq9" alt="Guardians of the Galaxy Game Gets Massive 75% Discount for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon&#39;s Black Friday deals include a massive 75% discount on 2021&#39;s action-adventure title Marvel&#39;s Guardians of the Galaxy.</p></div>
            </div>
        </a>
        </Template></>;
}