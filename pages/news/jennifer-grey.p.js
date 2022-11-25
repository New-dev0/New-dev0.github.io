import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jennifer Grey</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jennifer Grey"/>
        <meta name="description" content="Trending News about Jennifer Grey" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jennifer Grey</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/2863947/va51f1e/og_image.jpg" alt="Jennifer Grey"/>
            <h3>Recent News</h3>
            <a href='https://www.krone.at/2863995'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kaum zu erkennen - „Dirty Dancing“-Star Jennifer Grey irre verändert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTsRtGfl7XhTPm10fbUX0I5wK6K_0eOnLwzMzTEVohR1Fpcc9v6BsaydJLQAzx1p2IJGbMrhoAS" alt="Kaum zu erkennen - „Dirty Dancing“-Star Jennifer Grey irre verändert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Baby“ aus „Dirty Dancing“ ist Jennifer Grey schon lange nicht mehr. Doch ihre neueste Veränderung ist erstaunlich. Die 62-Jährige ist kaum ...</p></div>
            </div>
        </a>
        </Template></>;
}