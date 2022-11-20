import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Peter Kraus</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Peter Kraus"/>
        <meta name="description" content="Trending News about Peter Kraus" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Peter Kraus</h1>
            <Image width={800} height={500} src="https://image.saechsische.de/1200x675/4/m/4mrgvazgztnaihidj6a2lyqfort1f1sy.jpg" alt="Peter Kraus"/>
            <h3>Recent News</h3>
            <a href='https://www.saechsische.de/dresden/kultur/peter-kraus-ich-will-keine-mitklatsch-party-5782328.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dresden: Peter Kraus - „Ich will keine Mitklatsch-Party“</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT4R2h2J0tMnnMGVU_KFLGi5N9QghClebDFoE_QpnxXnIynPy3a6hHdm7ugInRwhOKZRqzHQV6c" alt="Dresden: Peter Kraus - „Ich will keine Mitklatsch-Party“" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erneut ist Rock-&#39;n&#39;-Roll-Star Peter Kraus auf Abschiedstour. Er präsentiert in Dresden ein neues Album und hat klare Vorstellungen, wie die Shows ablaufen&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}