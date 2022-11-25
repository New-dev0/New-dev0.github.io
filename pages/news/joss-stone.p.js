import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Joss Stone</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Joss Stone"/>
        <meta name="description" content="Trending News about Joss Stone" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Joss Stone</h1>
            <Image width={800} height={500} src="https://i.dailymail.co.uk/1s/2022/11/24/18/64912701-0-image-a-86_1669315193619.jpg" alt="Joss Stone"/>
            <h3>Recent News</h3>
            <a href='https://www.dailymail.co.uk/tvshowbiz/article-11466849/Macys-Thanksgiving-Day-Parade-Joss-Stone-months-welcoming-second-child.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Macy&#39;s Thanksgiving Day Parade: Joss Stone months after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQW_UprT7C5aE5KmtyYIXXcvqunG1esIydpxRsVhG6rPh1GuLKPuXXpWTkkIpeCaxDD_HJkZzaB" alt="Macy&#39;s Thanksgiving Day Parade: Joss Stone months after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Joss Stone looked ready for winter atop a float at the 96th annual Macy&#39;s Day Parade in New York City. The 35-year-old singer-songwriter donned a fur coat&nbsp;...</p></div>
            </div>
        </a><a href='https://okmagazine.com/p/joss-stone-challenges-christmas-album-pregnant/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Joss Stone Dishes On Recording Christmas Album While Pregnant</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQPAxZ87uQlzSgg4L8ifc-uFaIZuiXIFWC7DRRK1J9cGHDWWueOuB-uJbo8DIZGmv-0qtObGSLz" alt="Joss Stone Dishes On Recording Christmas Album While Pregnant" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Joss Stone discussed her creative process for creating the album &#39;Merry Christmas, Love.&#39;</p></div>
            </div>
        </a><a href='https://www.mirror.co.uk/3am/us-celebrity-news/joss-stone-wows-macys-parade-28579041'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Joss Stone wows at Macy&#39;s Parade just months after &#39;scary birth&#39; of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSX3h5YtglqRrFRkcVkZQMbK_vQ9m6lRkMKQin_z97lsCSVTLL83Mjh6tznjY5bI72-j3tkDHYu" alt="Joss Stone wows at Macy&#39;s Parade just months after &#39;scary birth&#39; of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Singer Joss Stone appeared winter ready as she was spotted at the Macy&#39;s Thanksgiving Day Parade just one month after the &#39;scary&#39; birth of her second child.</p></div>
            </div>
        </a>
        </Template></>;
}