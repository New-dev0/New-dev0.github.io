import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nadja Tiller</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nadja Tiller"/>
        <meta name="description" content="Trending News about Nadja Tiller" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nadja Tiller</h1>
            <Image width={800} height={500} src="https://media.diepresse.com/social_diepresse_magazin/images/uploads_1200/1/9/b/6214043/EDFF19D7-AF84-4922-8C92-9E334C977FC6_v0_l.jpg" alt="Nadja Tiller"/>
            <h3>Recent News</h3>
            <a href='https://www.diepresse.com/6214043/mit-nadja-tiller-im-sessellift'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mit Nadja Tiller im Sessellift</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcROrgyn-lzkgrFDp9F2MQtGTLiilECQX5pAzjM2KneBOdnEe7h5wWiiJjx38R2Sr7kUjZobNW4G" alt="Mit Nadja Tiller im Sessellift" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stadtseilbahnen als Massenverkehrsmittel begannen sich vor allem in südamerikanischen Großstädten zu verbreiten, doch allmählich kommt die Idee zurück nach&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}