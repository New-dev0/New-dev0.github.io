import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sucker Punch</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sucker Punch"/>
        <meta name="description" content="Trending News about Sucker Punch" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sucker Punch</h1>
            <Image width={800} height={500} src="https://static.kino.de/de/c5/c5/459225b1af6562573336239099_A2Q1NDJiZjY3MzM5_sucker-punch-6-rcm1024x0u.jpg" alt="Sucker Punch"/>
            <h3>Recent News</h3>
            <a href='https://www.kino.de/artikel/heute-im-tv--7vpv34jrmr'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Heute im TV: Abgedrehtes Fantasy-Action-Spektakel im TV, das im ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRTKCDWX9pRqTG_t6TcF4AZnzIgKipVNWtLuh7cXwB3NrjvsHjMtjlcgT-4wqAIsTC3cdSke0ng" alt="Heute im TV: Abgedrehtes Fantasy-Action-Spektakel im TV, das im ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit einer außergewöhnlichen Mischung aus Fantasy und Action konnte dieser Film zwar an den Kinokassen nicht überzeugen, – er lohnt sich aber trotzdem.</p></div>
            </div>
        </a><a href='https://www.filmstarts.de/nachrichten/1000003436.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Heute im TV: Super-stylische Fantasy-Action vom &quot;300 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRHSlb7HAkiT7Y0-SiSPHgVK0ccHW6O4eIHEPc-10I2M26ivr_F3C6l8J4x57HOLRATQ1V92lJw" alt="Heute im TV: Super-stylische Fantasy-Action vom &quot;300 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wer Zack Snyders „Sucker Punch“ noch nicht kennen sollte, sollte ihn heute nachholen. Erfahrt hier, welches unerwartete Vorbild dem Regisseur für seinen&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}