import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pete Taylor</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pete Taylor"/>
        <meta name="description" content="Trending News about Pete Taylor" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pete Taylor</h1>
            <Image width={800} height={500} src="https://i2-prod.irishmirror.ie/incoming/article28497784.ece/ALTERNATES/s1200/1_JS283528459.png" alt="Pete Taylor"/>
            <h3>Recent News</h3>
            <a href='https://www.irishmirror.ie/sport/other-sport/boxing/pete-taylor-pictured-both-legs-28497584'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pete Taylor pictured with both legs in casts - after chasing &#39;thief&#39; in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ2_bRRgkUv61WatKsBSnUWs16Z8aswk4vjdY412RONoeLdSt05r4jhdWnw5ZwxR01ca46jYNux" alt="Pete Taylor pictured with both legs in casts - after chasing &#39;thief&#39; in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pete, the father of Olympic boxing legend Katie Taylor, posted pictures on his social media today of himself in a hospital bed, with bandages on both of his&nbsp;...</p></div>
            </div>
        </a><a href='https://www.buzz.ie/sport/pete-taylor-legs-chasing-thief-28499920'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pete Taylor left with both legs in casts after &#39;freak injury&#39; while ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ2_bRRgkUv61WatKsBSnUWs16Z8aswk4vjdY412RONoeLdSt05r4jhdWnw5ZwxR01ca46jYNux" alt="Pete Taylor left with both legs in casts after &#39;freak injury&#39; while ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pete Taylor, the father of Irish boxing icon Katie, has revealed that he suffered serious injuries to both legs.</p></div>
            </div>
        </a><a href='https://www.dublinlive.ie/sport/boxing/pete-taylor-learning-walk-again-25524123'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pete Taylor learning to walk again after &#39;freak injury&#39; suffered while ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQAgoTlw3AijBQl4zJAGJALbvXOCfPdDghV1Bd1gfSzY6Qr-dLqNQBzjbU2334dhnpPDyRE5ud9" alt="Pete Taylor learning to walk again after &#39;freak injury&#39; suffered while ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pete previously recovered from a horrific injury he suffered after being shot at Bray Boxing Club in 2018.</p></div>
            </div>
        </a><a href='https://www.thesun.ie/sport/boxing/9737101/pete-taylor-freak-accident-while-chasing-thief-in-barcelona/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Katie Taylor&#39;s dad Pete pictured with both legs in casts after freak ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ8QhteprscZnr3Tl6_z5VJifGO4ZWSma593728MTpjd_IKa9uurY8JabQ36vV1g7s61tMYTFn7" alt="Katie Taylor&#39;s dad Pete pictured with both legs in casts after freak ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BOXING trainer Pete Taylor suffered serious leg injuries while &#39;chasing a thief&#39; while in Barcelona.The coach who is father of Irish Olympic legend Ka.</p></div>
            </div>
        </a><a href='https://worldakkam.com/katie-taylors-father-pete-pictured-with-both-feet-in-cast-after-freak-accident-while-chasing-thieves-in-barcelona/1036554/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Katie Taylor&#39;s father Pete pictured with both feet in cast after freak ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ8QhteprscZnr3Tl6_z5VJifGO4ZWSma593728MTpjd_IKa9uurY8JabQ36vV1g7s61tMYTFn7" alt="Katie Taylor&#39;s father Pete pictured with both feet in cast after freak ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Boxing trainer Pete Taylor suffered a serious leg injury while &#39;chasing a thief&#39; during his stay in Barcelona. The coach, father of Irish Olympic legend&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}