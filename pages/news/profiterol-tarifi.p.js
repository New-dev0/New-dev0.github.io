import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Profiterol tarifi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Profiterol tarifi"/>
        <meta name="description" content="Trending News about Profiterol tarifi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Profiterol tarifi</h1>
            <Image width={800} height={500} src="https://cdn.yeniakit.com.tr/images/news/625/krokan-bush-nedir-krokan-bush-tarifi-nasil-yapilir-profiterol-patasu-tarifi-patasu-hamuruyla-yapilan-croquembouche-nedir-h1670096889-3c1c30.jpg" alt="Profiterol tarifi"/>
            <h3>Recent News</h3>
            <a href='https://www.yeniakit.com.tr/haber/krokan-bush-nedir-krokan-bush-tarifi-nasil-yapilir-profiterol-patasu-tarifi-patasu-hamuruyla-yapilan-croquembouche-nedir-1712947.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Krokan bush nedir, krokan bush tarifi nasıl yapılır? Profiterol (Pataşu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTv10DSG0LhTYp_68Qu2R_bt3G4L03nZg4xWIh-4sNo3yc-jLxNvDHXR_33ak4hD3KAAFcqVcjk" alt="Krokan bush nedir, krokan bush tarifi nasıl yapılır? Profiterol (Pataşu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ekler, profiterol ve tulumba tatlısı yapımında pataşu hamuru kullanılır. Pate a choux (pataşu hamuru) ilk olarak Fransız pasta şefleri tarafından bulunmuş ve&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}