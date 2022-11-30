import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Iran vs USA</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Iran vs USA"/>
        <meta name="description" content="Trending News about Iran vs USA" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Iran vs USA</h1>
            <Image width={800} height={500} src="https://www.zdf.de/assets/iran-usa-in-game-100~1280x720?cb=1669751400567" alt="Iran vs USA"/>
            <h3>Recent News</h3>
            <a href='https://www.zdf.de/sport/fussball-wm/2022-katar-iran-usa-in-game-highlights-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Highlights Iran vs. USA - Fußball WM 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTLpK-pRcyoXZ8Qdbg-tFdyy_H-kE6S_S7v453Mc3p58-rEQnO5OUg4dKj9zSFDdxWCGe91Nilz" alt="Highlights Iran vs. USA - Fußball WM 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Höhepunkte des Spiels Iran gegen USA bei der Fußball WM 2022 in Katar.</p></div>
            </div>
        </a>
        </Template></>;
}