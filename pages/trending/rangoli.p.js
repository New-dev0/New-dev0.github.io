import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rangoli</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rangoli"/>
        <meta name="description" content="Trending News about Rangoli" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rangoli</h1>
            <Image width={800} height={500} src="https://www.jagranimages.com/webstories/3619/diwali-1666627787.jpeg" alt="Rangoli"/>
            <h3>Recent News</h3>
            <a href='https://www.jagran.com/web-stories/diwali-2022-hina-khan-shares-diwali-pictures-while-making-rangoli-for-diwali-see-here-3619.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Diwali 2022: हिना खान ने रंगोली बनाते हुई शेयर कीं दिवाली की तस्वीरें</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQG20J0fB5OCtBooQnklcm4FzsiT_IhK3ISOCyD6AyGge5_9buuebC5z5gUmhUmASg4bICNhB11" alt="Diwali 2022: हिना खान ने रंगोली बनाते हुई शेयर कीं दिवाली की तस्वीरें" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Diwali 2022: हिना खान ने रंगोली बनाते हुई शेयर कीं दिवाली की तस्वीरें ...</p></div>
            </div>
        </a>
        </Template></>;
}