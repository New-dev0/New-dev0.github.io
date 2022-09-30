import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pro Kabaddi League</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pro Kabaddi League"/>
        <meta name="description" content="Trending News about Pro Kabaddi League" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pro Kabaddi League</h1>
            <Image width={800} height={500} src="https://staticg.sportskeeda.com/editor/2022/09/40967-16644629882255-1920.jpg" alt="Pro Kabaddi League"/>
            <h3>Recent News</h3>
            <a href='https://hindi.sportskeeda.com/kabaddi/pro-kabaddi-league-bengaluru-bulls-announced-captain-vice-captain-pkl-9-hindi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pro Kabaddi League के 9वें सीजन के लिए बेंगलुरु बुल्स ने अपने कप्तान ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTawvU7kTKMKZiN0Qu2v_V7TfRPPri9LEv2el5H-4-Uy3nINRlWtndMghUY_yIF0oy-IWkQSmvv" alt="Pro Kabaddi League के 9वें सीजन के लिए बेंगलुरु बुल्स ने अपने कप्तान ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PKL 9: प्रो कबड्डी लीग (Pro Kabaddi League, PKL) के 9वें सीजन के लिए बेंगलुरु बुल्स (Bengaluru Bulls) ने अपने&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}