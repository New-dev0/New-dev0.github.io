import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Samosa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Samosa"/>
        <meta name="description" content="Trending News about Samosa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Samosa</h1>
            <Image width={800} height={500} src="https://www.jagranimages.com/images/newimg/25112022/25_11_2022-samosa-history-1_23227130_151844882.jpg" alt="Samosa"/>
            <h3>Recent News</h3>
            <a href='https://www.jagran.com/lifestyle/miscellaneous-interesting-and-unique-facts-about-samosa-that-you-did-not-know-23227130.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Samosa Interesting Facts: बेहद दिलचस्प है समोसे का इतिहास, क्या आप ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTm8A3XgaURpucHyceJFEwlC-rjhO9s_lbYL6mxzrLQ8r9rnL0ogAcA0Ov3RnG60ao9mpjXmFHs" alt="Samosa Interesting Facts: बेहद दिलचस्प है समोसे का इतिहास, क्या आप ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Samosa Interesting Facts समोसा एक ऐसा स्वादिष्ट स्नैक है जिसका मज़ा शायद ही किसी ने न लिया हो।</p></div>
            </div>
        </a>
        </Template></>;
}