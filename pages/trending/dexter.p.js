import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dexter</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dexter"/>
        <meta name="description" content="Trending News about Dexter" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dexter</h1>
            <Image width={800} height={500} src="https://img.onmanorama.com/content/dam/mm/en/news/india/images/2022/11/14/dexter-poonawala.jpg" alt="Dexter"/>
            <h3>Recent News</h3>
            <a href='https://www.onmanorama.com/news/india/2022/11/14/delhi-live-in-partner-chopped-aaftab-poonawala-inspired-crime-drama-dexter.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man who dismembered live-in partner in Delhi was inspired by ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR2B7VoZ-jF8oEjwdYGbtCkrGVzVWuy_z1dlQLCJII82YNBxkAEIO2-yKR0ZpRaD16mWW9utztE" alt="Man who dismembered live-in partner in Delhi was inspired by ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dexter is a popular crime drama about a serial killer by the same name. In the series, Dexter killed most of his victims by strangulation before dismembering&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tribuneindia.com/news/nation/mehrauli-murder-inspired-by-american-crime-show-dexter-trained-chef-was-adept-at-using-knife-bought-big-fridge-to-store-body-pieces-450930'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Delhi horror: Inspired by American crime show &#39;Dexter&#39;, trained chef ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTD8KgKzCzeZhTxBtv02sQ6jipw4xGL6AYCvob5P7IVwURjXbFH6fuklJJFrx4CzytmuY_SPdBo" alt="Delhi horror: Inspired by American crime show &#39;Dexter&#39;, trained chef ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aftab Ameen Poonawalla, who murdered his live-in partner in the Mehrauli area of the national capital and chopped the body into 35 pieces before dumping&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dnaindia.com/explainer/report-delhi-man-kills-live-in-partner-inspired-by-tv-show-dexter-how-the-indian-predator-hid-the-murder-for-6-months-3002165'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Delhi man kills live-in partner: Inspired by TV show &#39;Dexter&#39;, how the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRAPzP5ZODXXeb7TzKjlVwOLb5VYNBbh8SlH40G7XimSz0-tQw_nSDXlEjvEaV9s7vBeC2JMVU_" alt="Delhi man kills live-in partner: Inspired by TV show &#39;Dexter&#39;, how the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to the police, the woman was not in proper talking terms with her family due to their differences over her relationship with Poonawala.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/india-news/in-brutal-delhi-murder-accused-aftab-poonawalla-inspired-by-crime-show-dexter-police-101668427273197.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>In brutal Delhi murder, accused inspired by crime show &#39;Dexter&#39;: Police</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTfKwC4xY9xsMPF41nDpGyuRKSWJQfCoVpNvVtfacY7J4CfKbHvXJIAaCZ1BVZoqL9iuhwX1OrQ" alt="In brutal Delhi murder, accused inspired by crime show &#39;Dexter&#39;: Police" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Delhi Police solved a six-month-old blind murder case, and arrested a man for allegedly killing his 28-year-old live-in partner. | Latest News India.</p></div>
            </div>
        </a><a href='https://www.india.com/news/delhi/shradha-murder-case-in-delhi-aftab-ameen-poonawala-arrested-american-show-dexter-mehrauli-gory-details-emerge-5742379/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>300-Litre Fridge, American Show &#39;Dexter&#39;: Gory Details Emerge in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTaRwo8bFGjFdyOu0NolfL3OXsz-1S_IH5lq9K_Umu5KkqtyqDGmdJVxIcPv0UMZviEvd07BUfr" alt="300-Litre Fridge, American Show &#39;Dexter&#39;: Gory Details Emerge in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shradha Murder Case: Aftab Poonawalla strangled his live-in partner Shradha on May 18. Reports have claimed that he chopped her body into 35 pieces and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ndtv.com/india-news/delhi-murder-live-in-partner-body-chopped-new-fridge-for-body-parts-agarbatti-to-kill-stench-how-delhi-man-hid-girlfriends-murder-3518117'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New Fridge, Agarbatti, And TV Show &#39;Dexter&#39; In Sensational Delhi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQiovKYDUHj6hel2ZZSgl64eY81nyCuSC3WE_NIg7b2tnJ-oZqbpBFqmz6ZARuK5C5uA1GrydYY" alt="New Fridge, Agarbatti, And TV Show &#39;Dexter&#39; In Sensational Delhi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>28-year-old man killed live-in partner in May, chopped body into 35 parts; case came to light after her estranged father finally went to cops.</p></div>
            </div>
        </a>
        </Template></>;
}