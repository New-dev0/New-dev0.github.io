import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>This morning today</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,This morning today"/>
        <meta name="description" content="Trending News about This morning today" /></Head><Template>
            <h1 style={{fontSize: "30"}}>This morning today</h1>
            <Image width={800} height={500} src="https://www.irishexaminer.com/cms_media/module_img/6612/3306020_15_seoimageog_dan_20harp_204.jpg" alt="This morning today"/>
            <h3>Recent News</h3>
            <a href='https://www.irishexaminer.com/news/munster/arid-41013857.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No incidents reported as college Christmas over for another year</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQLclxEtcf8ROB9X0B1rSsxksP4CoReaQm2618N7BCYx2MTpaQmFeu11tg63N6MhnBghj3J4uaB" alt="No incidents reported as college Christmas over for another year" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The bar on Pouladuff Road will be playing techno, house, dance and disco music from 10:30am this morning.</p></div>
            </div>
        </a><a href='https://www.corkbeo.ie/news/local-news/hundreds-students-line-up-outside-25592935'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hundreds of students line up outside Cork city pubs from 6am for a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTT8wEpa8QqNerefgRfVmt4K5pwgpFYwyncW854jJ817Rcs-q62Y4kJMMbj331o1Lw6OvrlN-2Q" alt="Hundreds of students line up outside Cork city pubs from 6am for a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One pub that&#39;s seen serious crowds is the Harp Bar on Ballyphehane, which today hosts the &#39;Harp Bar takeover.&#39; And while the festivities - including music -&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}