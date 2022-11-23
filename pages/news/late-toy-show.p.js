import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Late Toy Show</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Late Toy Show"/>
        <meta name="description" content="Trending News about Late Toy Show" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Late Toy Show</h1>
            <Image width={800} height={500} src="https://i2-prod.buzz.ie/incoming/article28306363.ece/ALTERNATES/s1200/2_90444444.jpg" alt="Late Toy Show"/>
            <h3>Recent News</h3>
            <a href='https://www.buzz.ie/tv/late-late-toy-show-information-28552780'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Late Late Toy Show on RTÉ: Everything you need to know ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZebIhsombM-zV5XNdRTNETO-GZ6LSNZ3OYVOQI9cYltm7fxQnlHHxl3wcdeoZauKbX34MQAn2" alt="The Late Late Toy Show on RTÉ: Everything you need to know ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Late Late Toy Show returns this Friday and presenter Ryan Tubridy has been dropping hints about what to expect this time round. In interviews this week,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishmirror.ie/showbiz/ryan-tubridy-teases-late-late-28555842'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ryan Tubridy teases Late Late Toy Show is &#39;best I&#39;ve ever seen&#39; as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRuKAH9BRID2K5cHkL3_xOwqeQL8xFviUV22MX52Rn0_341iYB_q-ElzmZWMCXnpS0agTly8_GJ" alt="Ryan Tubridy teases Late Late Toy Show is &#39;best I&#39;ve ever seen&#39; as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The countdown is on and the big night is just days away, with host Tubridy and the crew involved in full swing of final preparations this week. Teasing what to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rsvplive.ie/news/tv-film/late-late-toy-show-date-28557063'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Late Late Toy Show date and time, how to watch it outside Ireland ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRuKAH9BRID2K5cHkL3_xOwqeQL8xFviUV22MX52Rn0_341iYB_q-ElzmZWMCXnpS0agTly8_GJ" alt="Late Late Toy Show date and time, how to watch it outside Ireland ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>If you are abroad but don&#39;t want to miss out on the fun, you should also able to watch it live on the RTE Player - and RTE has shared a handy list of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kilkennypeople.ie/news/home/970919/kilkenny-lego-whizz-crafts-amazing-ryan-tubridy-portrait-as-late-late-toy-showapproaches.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kilkenny Lego whizz crafts amazing Ryan Tubridy portrait as Late ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT7E8XD4Tpfe4xNzky5QZq070tQMbCtAS2Vd2UD3Zyd1X3oK18mdDw7_AtG65IAIq39WYcurXFt" alt="Kilkenny Lego whizz crafts amazing Ryan Tubridy portrait as Late ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sean Butler from Thomastown in Kilkenny has crafted an amazingly lifelike portrait of Late Late Show host Ryan Tubridy in Lego, as the Toy Show gets ready&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}