import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tyler Adams</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tyler Adams"/>
        <meta name="description" content="Trending News about Tyler Adams" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tyler Adams</h1>
            <Image width={800} height={500} src="https://www.yorkshireeveningpost.co.uk/jpim-static/image/2022/11/25/14/newFile-18.jpg?width=1200&enable=upscale" alt="Tyler Adams"/>
            <h3>Recent News</h3>
            <a href='https://www.yorkshireeveningpost.co.uk/sport/leeds-united-wags-fifa-world-cup-2022-3932018'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who are the Leeds United WAGs? As Tyler Adams dates Sarah ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSp8U-1QDUQQeVPouy8frpesOuuW9Nh8IJ4-8TOaorIFMeIoHA-uKMVwiPLhYJBywyMM8tUGic1" alt="Who are the Leeds United WAGs? As Tyler Adams dates Sarah ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Milana D&#39;Ambra &amp; Brenden Aaronson &middot; Frederikke Beck Knygle &amp; Rasmus Kristensen &middot; Sarah Schmidt &amp; Tyler Adams &middot; Read More &middot; Ines Malcoste &amp; Illan Meslier &middot; Poppy&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}