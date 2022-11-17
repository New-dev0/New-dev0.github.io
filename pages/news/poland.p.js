import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Poland</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Poland"/>
        <meta name="description" content="Trending News about Poland" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Poland</h1>
            <Image width={800} height={500} src="" alt="Poland"/>
            <h3>Recent News</h3>
            <a href='https://www.arise.tv/poland-nato-say-missile-strike-wasnt-a-russian-attack/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Poland, NATO Say Missile Strike Wasn&#39;t a Russian Attack - Arise News</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTvap-r_OBFHhIcUbMDh_E7XUtV5M7IrnOKsWICpo5NAKseCeLsiLz9kcrnn_pfBSSAfKLNU-HJ" alt="Poland, NATO Say Missile Strike Wasn&#39;t a Russian Attack - Arise News" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stoltenberg and others laid overall but not specific blame on Russian President Vladimir Putin&#39;s war. NATO member Poland and the head of the military&nbsp;...</p></div>
            </div>
        </a><a href='https://guardian.ng/news/poland-says-blast-likely-caused-by-ukraine-missile-in-accident/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Poland says blast likely caused by Ukraine missile in accident</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT18v9gsiVd-EzYYMIg_KEwobCRlcu7qKTYH-2qsm3P22j3HgZcXyPPg6570nsuB3HLOWwgVhi-" alt="Poland says blast likely caused by Ukraine missile in accident" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Western leaders played down fears Wednesday that a deadly missile blast in eastern Poland could herald a dangerous escalation in the war Russia launched&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/world/2022/nov/16/poland-president-missile-strike-probably-ukrainian-stray'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Missile that hit Poland likely came from Ukraine defences, say ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBl9DTNbofv5OWWF0CpErzNwdv9uxCLJVUmqkjF20-0B20i6VSTa8Yg1utvnCES7_2i3fbztdg" alt="Missile that hit Poland likely came from Ukraine defences, say ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ukraine&#39;s air defence was probably responsible for a blast that killed two people in south-eastern Poland, the Polish president has said, while Nato said Russia&nbsp;...</p></div>
            </div>
        </a><a href='https://www.politico.com/news/2022/11/16/top-army-general-strike-poland-00067550'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Top Army general: Important to &#39;remain calm&#39; following strike in Poland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQjB722vgmtg9Esw9wgNQgmwuX9YYIbaJA-UheOpi2xLsxeSyAdKyeCitnTQkdQRLT5Kx-ZohvG" alt="Top Army general: Important to &#39;remain calm&#39; following strike in Poland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ukrainian officials initially blamed Russia, but top Polish leaders say missile likely fired by Ukraine.</p></div>
            </div>
        </a><a href='https://www.nato.int/cps/en/natohq/news_209104.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NATO Allies address the explosion in the east of Poland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS4GDw54aOqWBm--CAsLxDQ06di4m7r-pxJ_iz7ASHjTXzX5020yqb9HBM4LLYy4AUYIs4Yew1t" alt="NATO Allies address the explosion in the east of Poland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NATO ambassadors met on Wednesday (16 November 2022) to address the explosion yesterday in the east of Poland on the border with Ukraine, which took place&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vanguardngr.com/2022/11/tension-uncertainty-as-russian-missiles-kill-2-in-poland/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tension, uncertainty as Russian missiles kill 2 in Poland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSXvY1uDG-U5BqDZcWCLyMPyp9vx2HGnEj2N2aoMq4faZvGKbWN1VxsEJlx3kp_3SRS3xYxseBg" alt="Tension, uncertainty as Russian missiles kill 2 in Poland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Two people have been killed in Poland after dozens of missiles were launched at targets across Ukraine, unconfirmed reports say.</p></div>
            </div>
        </a>
        </Template></>;
}