import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Trevor Noah</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Trevor Noah"/>
        <meta name="description" content="Trending News about Trevor Noah" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Trevor Noah</h1>
            <Image width={800} height={500} src="https://turntable.kagiso.io/images/Screenshot_2022-10-14_132402.width-400.jpg" alt="Trevor Noah"/>
            <h3>Recent News</h3>
            <a href='https://www.jacarandafm.com/shows/drive/trevor-noah-responds-his-beef-kanye-west/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trevor Noah responds to his “beef” with Kanye West</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSsd-SDWd31vHoZRDsX5SU_5zy2G4-bMNGbuA4bqU-AcvQPnHOrVREqvtpi4Xeks4cdHrUn8teT" alt="Trevor Noah responds to his “beef” with Kanye West" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;The Daily Show&#39; host responded to a question by a member of the audience and gave a great answer.</p></div>
            </div>
        </a><a href='https://www.news24.com/channel/celebrities/daily-show-director-david-paul-meyer-calls-trevor-noah-one-of-the-greats-after-15-year-friendship-20221123'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Daily Show director David Paul Meyer calls Trevor Noah &#39;one of the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQyoGstG-ugBgdC7JJBsDvUVic16PJDYonFVBz-wI7smNVuR9Bjj3kyD1DGHNGEPYM21Q9y9bXt" alt="Daily Show director David Paul Meyer calls Trevor Noah &#39;one of the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>American director David Paul Meyer has shared more details on his special friendship with Trevor Noah. &quot;The first paid directing gig I ever had was Trevor&#39;s&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}