import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bade Achhe Lagte Hain</title>
        <meta name="description" content="Trending News about Bade Achhe Lagte Hain" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bade Achhe Lagte Hain</h1>
            <Image width={800} height={500} src="https://www.tellychakkar.com/sites/www.tellychakkar.com/files/images/story/2022/09/24/manya_singh.jpg" alt="Bade Achhe Lagte Hain"/>
            <h3>Recent News</h3>
            <a href='https://www.tellychakkar.com/tv/tv-news/exclusive-maanya-singh-aka-sandy-of-bade-achhe-lagte-hain-2-opens-her-starstruck-moment'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EXCLUSIVE! Maanya Singh aka Sandy of Bade Achhe Lagte Hain 2 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTb-7dvjL7pZqLEWoAeBRl86c29yuK1xZoyNMhMtN3Z-JKv4gtPlUpSnZohbh9cs2Hq1EaifKdK" alt="EXCLUSIVE! Maanya Singh aka Sandy of Bade Achhe Lagte Hain 2 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MUMBAI: Maanya Singh who is seen in Sony TV&#39;s show Bade Achhe Lagte Hain 2, is impressing everyone with her fine acting chops. The actress plays the role of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.timesnowhindi.com/entertainment/television/article/bade-achhe-lagte-hain-2-makers-initiate-big-budget-cuts-of-due-to-falling-trp/444027'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>बड़े अच्छे लगते हैं 2 के मेकर्स ने बजट में की कटौती, गिरती TRP के कारण ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQFPoABkFeQTTFpVM72OJv6Oc41Qvlodkv-w44mADM6QymP_fUmlVnaU9WltCNCzcuqF3i0IvxF" alt="बड़े अच्छे लगते हैं 2 के मेकर्स ने बजट में की कटौती, गिरती TRP के कारण ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>बड़े अच्छे लगते हैं 2 के मेकर्स ने बजट में की कटौती, गिरती TRP के कारण कई सितारों पर गिरी&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}