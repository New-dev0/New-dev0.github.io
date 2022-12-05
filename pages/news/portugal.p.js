import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Portugal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Portugal"/>
        <meta name="description" content="Trending News about Portugal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Portugal</h1>
            <Image width={800} height={500} src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/12/03/c4dfd25d246c8ba2e574358b46f0a2a31670090255706426_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628" alt="Portugal"/>
            <h3>Recent News</h3>
            <a href='https://www.abplive.com/news/world/india-and-portugal-hold-bilateral-dialogue-on-facilitating-safe-orderly-and-regular-labour-migration-2273597'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India- Portugal: भारत और पुर्तगाल ने की द्विपक्षीय वार्ता, मजदूर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSX2wLw43MNBURx9mjba0bqIzfep9Ot4sX7I5ANnVpWCUJ_OBhDAYHUqcvpyBZrJUQzy54EUQR7" alt="India- Portugal: भारत और पुर्तगाल ने की द्विपक्षीय वार्ता, मजदूर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India Portugal On Labour Migration: भारत और पुर्तगाल के बीच माइग्रेशन को लेकर द्विपक्षीय बातचीत हुई&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}