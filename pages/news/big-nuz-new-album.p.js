import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Big Nuz new album</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Big Nuz new album"/>
        <meta name="description" content="Trending News about Big Nuz new album" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Big Nuz new album</h1>
            <Image width={800} height={500} src="https://netstorage-briefly.akamaized.net/images/5fa48e6d9a9dd8c9.jpg" alt="Big Nuz new album"/>
            <h3>Recent News</h3>
            <a href='https://briefly.co.za/entertainment/music/147056-big-nuz-a-comeback-legendary-kwaito-group-drop-album-honour-late-member-r-mashesha/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Big Nuz Make a Comeback, Legendary Kwaito Group to Drop New ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTKhulLLfcTg8in1huOqCXGHZ316XDrZ0ibZPSw3wokMYBCm3llLj8vZiidwpIqVswxsrQHkjWq" alt="Big Nuz Make a Comeback, Legendary Kwaito Group to Drop New ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Big Nuz is making a music comeback. The legendary Kwaito group is expected to drop a new album on Frida, 25 November in honour of its late member R&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}