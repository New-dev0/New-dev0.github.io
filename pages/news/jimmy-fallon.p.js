import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jimmy Fallon</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jimmy Fallon"/>
        <meta name="description" content="Trending News about Jimmy Fallon" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jimmy Fallon</h1>
            <Image width={800} height={500} src="https://www.rnd.de/resizer/ElI2Z-qbZnriynhaxMaUXKvnb_g=/1200x675/filters:quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/madsack/II2NOBRJ7FHULJ6ZTRRBQES4MY.jpg" alt="Jimmy Fallon"/>
            <h3>Recent News</h3>
            <a href='https://www.rnd.de/medien/twitter-fake-news-jimmy-fallon-wendet-sich-an-elon-musk-nach-todes-geruecht-BQRZCKTAL5F6VM6SC5HVNGHRDQ.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter-Fake-News: Jimmy Fallon wendet sich an Elon Musk nach ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRXTK-yAAaSvKP--6uYHEJp9qzV_APucvYM1bD61yaDdee4nUT0Cek0FwYLeN-a-0LLJ0SrIjtG" alt="Twitter-Fake-News: Jimmy Fallon wendet sich an Elon Musk nach ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein weiteres Beispiel für die zunehmende Desinformation auf Twitter, ist der Hashtag #RIPJimmyFallon, der am Dienstag trendete. Der populäre US-Talker lebt&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}