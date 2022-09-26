import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>T20 World Cup 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,T20 World Cup 2022"/>
        <meta name="description" content="Trending News about T20 World Cup 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>T20 World Cup 2022</h1>
            <Image width={800} height={500} src="https://hindi.insidesport.in/wp-content/uploads/2022/09/871e0e78-cffd-4329-ba62-d46a71e2def3.jpg" alt="T20 World Cup 2022"/>
            <h3>Recent News</h3>
            <a href='https://hindi.insidesport.in/latest/t20-world-cup-2022-preparations-in-full-swing-at-the-historic-ground-mcg-the-first-match-between-india-and-pakistan-to-be-held-here-on-23-october-see-pics-501882/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 World Cup 2022: ऐतिहासिक मैदान MCG में तैयारियां जोरों पर, यहां ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSSsfUs3LokJd1Tcdc36w5Wl8Htm1qQqgX-WCkOQVYYrvo_w-d9tdlURzRauRCRMuNjS4Sm_ZOZ" alt="T20 World Cup 2022: ऐतिहासिक मैदान MCG में तैयारियां जोरों पर, यहां ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>वहीं मेलबर्न क्रिकेट ग्राउंड (MCG) पर भी तैयारियां चल रही हैं, जिसपर 23 अक्टूबर को भारत बनाम&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}