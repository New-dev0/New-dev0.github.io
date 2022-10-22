import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>The Peripheral</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,The Peripheral"/>
        <meta name="description" content="Trending News about The Peripheral" /></Head><Template>
            <h1 style={{fontSize: "30"}}>The Peripheral</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-95018402,width-1070,height-580,imgsize-24916,overlay-economictimes/photo.jpg" alt="The Peripheral"/>
            <h3>Recent News</h3>
            <a href='https://economictimes.indiatimes.com/news/international/us/what-happened-in-the-peripheral-episode-1-and-2/articleshow/95018403.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What happened in The Peripheral episode 1 and 2</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT5szwrALjxsn2ac0eGbnassm8xti_DyDLoXvIfZJY4uhczztZUqWiU89s1zqfhx7i5VFAdFeJ6" alt="What happened in The Peripheral episode 1 and 2" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The first two episodes of the sci-fi show &quot;The Peripheral&quot; are now streaming. The show is related to the concept of VR (virtual reality) and time travel.</p></div>
            </div>
        </a><a href='https://www.ign.com/articles/the-peripheral-season-1-review-episodes-1-6'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Peripheral Season 1 Review - Episodes 1-6 - IGN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT-PxpaWnuh7HmvoPM_srVF96xkuHwfhXvES7nIEbn7CDx3SL8O5IonpHvCqON5iXCWmlBf2Gh-" alt="The Peripheral Season 1 Review - Episodes 1-6 - IGN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The makers of HBO&#39;s Westworld adapt William Gibson&#39;s vision of the future into a slick, if cluttered, tech-centric series.</p></div>
            </div>
        </a><a href='https://stylecaster.com/the-peripheral/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;The Peripheral&#39; Is a Cautionary Tale About Technology—&#39;If We&#39;re ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQPyKHG3c7sao9mxb8CYnT66vRN_w0OyjAOmm3rss1Hc0jagnKRhMgMipUgRaTAqnC8dVDs5pLi" alt="&#39;The Peripheral&#39; Is a Cautionary Tale About Technology—&#39;If We&#39;re ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;The Peripheral&quot; star T&#39;Nia Miller talks about Amazon Prime Video&#39;s Chloe Grace Moretz-led show and why it&#39;s a warning about society and technology.</p></div>
            </div>
        </a><a href='https://dmtalkies.com/the-peripheral-episodes-1-2-recap-ending-explained-2022-amazon-series/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;The Peripheral&#39; Episodes 1 &amp; 2: Recap &amp; Ending, Explained - How ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTbpmAmF_e8iKm7IKSg6O8ix05sZCziXInnM_2rlU5y1KFEbwrkqVVnHZlA9TN8heAqdR8gP6Oz" alt="&#39;The Peripheral&#39; Episodes 1 &amp; 2: Recap &amp; Ending, Explained - How ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The show opens in London, 2099, where an adult Wilf Netherton has a cryptic conversation with a young Aelita West about saving the world and keeping vows.</p></div>
            </div>
        </a><a href='https://www.wicz.com/story/47536011/the-peripheral-travels-into-two-different-futures-and-still-isnt-worth-your-time'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;The Peripheral&#39; travels into two different futures and still isn&#39;t worth ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQY4nRSWw6sPfS1MpbC9DUe3NgcIBxVtj4i2JNpM4fl2c2a181gR6XnfLIjaVK3iBi-d1HLQspm" alt="&#39;The Peripheral&#39; travels into two different futures and still isn&#39;t worth ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Review by Brian Lowry, CNN. In terms of Nolan brothers productions, &quot;The Peripheral&quot; appears to have been made for people who think &quot;Tenet&quot; and the fourth&nbsp;...</p></div>
            </div>
        </a><a href='https://gizmodo.com/prime-video-the-peripheral-showrunner-interview-1849683458'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How The Peripheral Hopes to Find the Human Heart of High-Tech ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTyFI3TGMVNNrWbQdCXXdYwB16WZi0O-GQAwzgG5WyQIHkL09GicETYztrZZ5wqLMPH5UE3_1Eg" alt="How The Peripheral Hopes to Find the Human Heart of High-Tech ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Creator Scott Smith talks to io9 about his William Gibson adaptation, the first episode of which is now streaming on Prime Video.</p></div>
            </div>
        </a><a href='https://stylecaster.com/the-peripheral-amber-rose-revah/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Peripheral&#39;s Amber Rose Revah Reveals What She Would Do If ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRd2NewMKPyOxFpWWsxIoEDxFzdVrw24W441BuenoKA4yFheQbHnPAGVniTk_8Zq0gHmlICefWU" alt="The Peripheral&#39;s Amber Rose Revah Reveals What She Would Do If ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;The Peripheral&quot; stars Amber Rose Revah speak to StyleCaster about Amazon Prime Video&#39;s new show and the dangers of technology.</p></div>
            </div>
        </a>
        </Template></>;
}