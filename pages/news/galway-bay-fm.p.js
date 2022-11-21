import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Galway Bay FM</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Galway Bay FM"/>
        <meta name="description" content="Trending News about Galway Bay FM" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Galway Bay FM</h1>
            <Image width={800} height={500} src="https://galwaybayfm.ie/wp-content/uploads/2022/11/KERRANE-v-LEO.png" alt="Galway Bay FM"/>
            <h3>Recent News</h3>
            <a href='https://galwaybayfm.ie/galway-bay-fm-news-desk/dail-told-that-contracted-staff-at-portiuncula-hospital-in-ballinasloe-still-waiting-for-covid-recognition-payment/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dáil told that contracted staff at Portiuncula Hospital in Ballinasloe ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTG0PMWtAbVbRXj7OnpE9ycNHer6DuBNkiYxP0lKTsMcB3I1tMcvhfZsLNBUUB2Gn4F5nRWkLNy" alt="Dáil told that contracted staff at Portiuncula Hospital in Ballinasloe ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Dáil has been told by Sinn Féin TD for Roscommon/Galway Claire Kerrane that Contract Cleaners, Catering staff and Security Personnel working at&nbsp;...</p></div>
            </div>
        </a><a href='https://galwaybayfm.ie/galway-bay-fm-news-desk/the-deep-sea-seadevil-is-voted-one-of-the-ugliest-fish-in-the-sea/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Deep-sea Seadevil is voted one of the &#39;ugliest&#39; fish in the sea ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR734N6RFsAeYuKo82uhX6CELWK-ApUybz9qaAPsp1qbRCNgjteI1MOzH0aQH4Bbi28Ot6pG9H1" alt="The Deep-sea Seadevil is voted one of the &#39;ugliest&#39; fish in the sea ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Seadevil angler fish was voted as “one of the ugliest deep-sea fish species” during the launch of the new Explorers educational book and resources&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}