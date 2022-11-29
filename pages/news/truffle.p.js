import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Truffle</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Truffle"/>
        <meta name="description" content="Trending News about Truffle" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Truffle</h1>
            <Image width={800} height={500} src="https://sneakernews.com/wp-content/uploads/2022/11/new-balance-9060-truffle-u9060bcg-3.jpg" alt="Truffle"/>
            <h3>Recent News</h3>
            <a href='https://sneakernews.com/2022/11/28/new-balance-9060-truffle-u9060bcg/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New Balance 9060 &quot;Truffle&quot; U9060BCG | SneakerNews.com</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFoQQpqZC1iL_11JAxjsby0-BCgPeW63a6UusKGCsheBDkqcsJZRfcFm4_LMbhMM69tUitZjzI" alt="New Balance 9060 &quot;Truffle&quot; U9060BCG | SneakerNews.com" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aesthetically driven to match the neutral-toned outfits of the oncoming climate, the heel&#39;s pigskin suede overlays work in tandem with the dark grey shading of&nbsp;...</p></div>
            </div>
        </a><a href='https://hypebeast.com/2022/11/new-balance-9060-ivory-cream-release-info-u9060wcg'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New Balance Readies the 9060 in &quot;Ivory Cream&quot; and &quot;Truffle&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTkn08lOokH6C8AyhXohBgIKB-GZN3kXz1n2bOY3XENwAsVfqA8pUPZ-dTVtOhsAkzwy3NsNjKG" alt="New Balance Readies the 9060 in &quot;Ivory Cream&quot; and &quot;Truffle&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New Balance Readies the 9060 in &quot;Ivory Cream&quot; and &quot;Truffle&quot;: Starring in a campaign fronted by Jack Harlow.</p></div>
            </div>
        </a>
        </Template></>;
}