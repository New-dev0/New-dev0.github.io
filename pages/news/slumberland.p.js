import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Slumberland</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Slumberland"/>
        <meta name="description" content="Trending News about Slumberland" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Slumberland</h1>
            <Image width={800} height={500} src="" alt="Slumberland"/>
            <h3>Recent News</h3>
            <a href='https://collider.com/slumberland-francis-lawrence-interview/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Slumberland&#39; Director Francis Lawrence Explains Why He Chose ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT9SXzdXjxlKQr2xc_C7R-vAuxFcU4W8YZeGz89ybvozLiYoDfC0DDXBOIzA9vLlgzBZAhuKxXt" alt="&#39;Slumberland&#39; Director Francis Lawrence Explains Why He Chose ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Director Francis Lawrence explains why he chose Jason Momoa for Netflix&#39;s Slumberland &amp; details how they designed the dream world.</p></div>
            </div>
        </a><a href='https://www.rogerebert.com/reviews/slumberland-movie-review-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Slumberland movie review &amp; film summary (2022) | Roger Ebert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTROllYZyG4r3wLfywfdYvU0nHtoZDD1hX2pvvizcWaysGWy7K8SKAmsSA5BFJrZyEjN_ro_qdE" alt="Slumberland movie review &amp; film summary (2022) | Roger Ebert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Herald and His Moving Comics,” was a live-action/animation hybrid that depicted him producing 4,000 drawings of Nemo, a young boy whose adventures in the world&nbsp;...</p></div>
            </div>
        </a><a href='https://screenrant.com/slumberland-2022-movie-reviews/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Slumberland Review: Jason Momoa Shines In Dull Family-Friendly ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR-FTNOJlgJBEJU8POraqufJsTMxxfosXYJRhYyOCJ60yI2LAcP0t9L1OwKVxgxftmDG4a4NUVA" alt="Slumberland Review: Jason Momoa Shines In Dull Family-Friendly ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>While director Francis Lawrence&#39;s Slumberland takes inspiration from the comic, it fails to capture the whimsy and delight of its origins.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/18/entertainment/slumberland-review/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Slumberland&#39; strands Jason Momoa in a nightmare of a movie</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcREtX8A3MRw2Ma3mwsNwAp_5msNItKc44SdYUtO_BRIo0Mmi2Kurf-G-RApI5wweCw7052Zh3B3" alt="&#39;Slumberland&#39; strands Jason Momoa in a nightmare of a movie" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A movie about dreams becomes the stuff of nightmares in Netflix&#39;s utterly misguided &quot;Slumberland,&quot; an attempt to build a sprawling fantasy adventure from&nbsp;...</p></div>
            </div>
        </a><a href='https://thespool.net/reviews/film-review-slumberland-netfilx/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Slumberland Review: Another Netflix CGI Snoozefest - The Spool</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT2INNkmWJPI0j3PYocmyAK1Ewn9o2z_s7xCoOXY_tqkZkox6KEofVb9TJFt6bTGu4bDI2J5i4S" alt="Slumberland Review: Another Netflix CGI Snoozefest - The Spool" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Little Nemo is a property rife for play. The dream world of Slumberland is vast, its rules deliberately obtuse — it&#39;s a wonderland full of slippery dream logic&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}