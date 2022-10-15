import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>DRDO</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,DRDO"/>
        <meta name="description" content="Trending News about DRDO" /></Head><Template>
            <h1 style={{fontSize: "30"}}>DRDO</h1>
            <Image width={800} height={500} src="" alt="DRDO"/>
            <h3>Recent News</h3>
            <a href='https://www.livehindustan.com/national/story-electromagnetic-railgun-drdo-indian-army-air-force-navy-defence-news-7221645.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>बगैर बारूद दागेगी गोला, 200 किमी तक करेगी मार; DRDO बना रहा घातक रेलगन</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT64ySxINIDLWLu3IISRz_UCcNUMdsHqrFTjELUu1a8gTO3EFqKmq2D_F_0IajZMnU8_c5lxBEj" alt="बगैर बारूद दागेगी गोला, 200 किमी तक करेगी मार; DRDO बना रहा घातक रेलगन" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>इलेक्ट्रिक करंट के जरिये इलेक्ट्रो मैग्नेटिक फील्ड तैयार किया जाता है।</p></div>
            </div>
        </a>
        </Template></>;
}