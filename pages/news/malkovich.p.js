import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Malkovich</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Malkovich"/>
        <meta name="description" content="Trending News about Malkovich" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Malkovich</h1>
            <Image width={800} height={500} src="https://img.promipool.de/www-promipool-de/image/upload/c_fit,h_1200,w_1200,c_fill,g_faces,w_1200,h_630,q_auto:eco,f_webp/john_malkovich_affaere_getty_h89jne3ldx" alt="Malkovich"/>
            <h3>Recent News</h3>
            <a href='https://www.promipool.de/stars/john-malkovich-er-hatte-eine-affaere-mit-dieser-hollywood-schoenheit'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>John Malkovich: Er hatte eine Affäre mit DIESER Hollywood-Schönheit</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQBvNmmh8OIPCo2KUh6k9MFHRx-K-7YCdC5r5COOQdCMABAqnO185ym96XN735VrRunitdpsre8" alt="John Malkovich: Er hatte eine Affäre mit DIESER Hollywood-Schönheit" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>John Malkovich ist ein bekannter Schauspieler und Filmproduzent. Mit DIESER Hollywood-Schönheit hatte er damals eine Affäre.</p></div>
            </div>
        </a>
        </Template></>;
}