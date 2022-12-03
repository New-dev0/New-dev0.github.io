import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ワールドカップ日本対スペイン</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ワールドカップ日本対スペイン"/>
        <meta name="description" content="Trending News about ワールドカップ日本対スペイン" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ワールドカップ日本対スペイン</h1>
            <Image width={800} height={500} src="https://cdn-1.motorsport.com/images/amp/YBeg4B82/s6/carlos-sainz-jr-mclaren-plays-.jpg" alt="ワールドカップ日本対スペイン"/>
            <h3>Recent News</h3>
            <a href='https://jp.motorsport.com/f1/news/f1-motogp-2022-marquez-sainz-world-cup/10407171/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>マルク・マルケスとカルロス・サインツJr.がワールドカップ日本vs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR3QSppkYug-9USJRKCeOG1_KYsw9eZGlEeSU5EmbKDptJ5dWFDZ5XOOqjOhhtOEeIV4i_dgdTE" alt="マルク・マルケスとカルロス・サインツJr.がワールドカップ日本vs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカーのワールドカップで日本代表がスペイン代表を撃破したことで、日本中が沸きに沸いている。この試合を、マルク・マルケスとカルロス・サインツJr.が揃って観戦&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}