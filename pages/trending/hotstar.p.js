import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hotstar</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hotstar"/>
        <meta name="description" content="Trending News about Hotstar" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hotstar</h1>
            <Image width={800} height={500} src="" alt="Hotstar"/>
            <h3>Recent News</h3>
            <a href='https://www.livehindustan.com/gadgets/story-free-disney-plus-hotstar-plans-by-jio-airtel-and-vodafone-idea-to-watch-t20-world-cup-7259334.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>फ्री में चाहिए Disney+ Hotstar का सब्सक्रिप्शन? इन प्लान्स से रीचार्ज ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQlN_LWgAcbGy-icHJ0opYu7NMwKgZUzwvD8cqjtUq0wva2f5iFK7gZdGit33RrRipYxCf-Lt0u" alt="फ्री में चाहिए Disney+ Hotstar का सब्सक्रिप्शन? इन प्लान्स से रीचार्ज ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>T20 विश्वकप के मैच देखना चाहते हैं और इसके लिए Disney+ Hotstar का Free सब्सक्रिप्शन चाहिए तो&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/industry/media/disney-hotstar-announces-new-original-jhansi-11666509153409.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Disney+ Hotstar announces new original &#39;Jhansi&#39; | Mint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSbwQ78TC2SaMPVWzvUvnlfzBSzqaeouY9btGo49fYkoosMEFImC592V196FpUZDqJEumpfkitz" alt="Disney+ Hotstar announces new original &#39;Jhansi&#39; | Mint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Disney+ Hotstar led the viewership of Hindi language OTT originals in India in the first half of 2022.</p></div>
            </div>
        </a>
        </Template></>;
}