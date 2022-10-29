import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pope Francis</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pope Francis"/>
        <meta name="description" content="Trending News about Pope Francis" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pope Francis</h1>
            <Image width={800} height={500} src="https://thecatholicspirit.com/wp-content/uploads/2021/08/ABH2a.jpg" alt="Pope Francis"/>
            <h3>Recent News</h3>
            <a href='https://thecatholicspirit.com/faith/focus-on-faith/practicing-catholic/unplanned-group-members-involved-with-planning-archdiocesan-synod-meet-pope-francis-during-pilgrimage/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Unplanned: Group members involved with planning Archdiocesan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQQ5Nwm02kCiuZFEbe51VBVhnf7iWt-ZCc3Xaz6jtLp1LSO3U6QAfWpetNc2fZlhDu3P7HCvEMV" alt="Unplanned: Group members involved with planning Archdiocesan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It wasn&#39;t planned, but some of the planners for the Archdiocesan Synod met Pope Francis during their recent pilgrimage to Rome. Some were on the Synod&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ncregister.com/cna/pope-francis-highlights-the-courage-of-argentine-dwarf-soccer-players'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pope Francis Highlights the Courage of Argentine Dwarf Soccer ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR31HMXzjgYTh1ih4Y-n-LDbCEl7pScjxeUByFoUMzAvKm86VjAp5XneuiaTIygwVf5iKgqYaIw" alt="Pope Francis Highlights the Courage of Argentine Dwarf Soccer ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The soccer players explained to the Holy Father all the efforts made for the inclusion of dwarves in society through sports.</p></div>
            </div>
        </a>
        </Template></>;
}