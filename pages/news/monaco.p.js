import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Monaco</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Monaco"/>
        <meta name="description" content="Trending News about Monaco" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Monaco</h1>
            <Image width={800} height={500} src="https://www.monaco-tribune.com/wp-content/uploads/2022/11/ste-ruche-maripan-8-min.jpg" alt="Monaco"/>
            <h3>Recent News</h3>
            <a href='https://www.monaco-tribune.com/en/2022/11/guillermo-maripan-and-terrae-de-monaco-inaugurate-first-red-white-hive/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Guillermo Maripan and Terrae de Monaco inaugurate first &quot;Red ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTn3-vvNjpdnCyuz-N9BHj57URzZ_8riSTSD2xkzsNIuXHdFESAL210R3gRKj_sdiWIrljbeFXw" alt="Guillermo Maripan and Terrae de Monaco inaugurate first &quot;Red ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AS Monaco is launching the &quot;Les Ruches Rouges &amp; Blanches&quot; (Red &amp; White Hives) programme, in line with its corporate social responsibility (CSR)</p></div>
            </div>
        </a>
        </Template></>;
}