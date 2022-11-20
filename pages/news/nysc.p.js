import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>NYSC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,NYSC"/>
        <meta name="description" content="Trending News about NYSC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>NYSC</h1>
            <Image width={800} height={500} src="https://149520306.v2.pressablecdn.com/wp-content/uploads/2022/02/rice-mill-.png" alt="NYSC"/>
            <h3>Recent News</h3>
            <a href='https://businessday.ng/news/article/nysc-american-firm-to-establish-mega-rice-mill-in-bayelsa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NYSC, American firm to establish mega rice mill in Bayelsa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRkjpDIcoCkLX5aCS6Gd3z_GPTJ2wJpZ1eMdfRGwbaQS4UMCgIe8tkGl2NdE-JTmKoE5jweQqCz" alt="NYSC, American firm to establish mega rice mill in Bayelsa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NYSC, in a bid to boost food products and improve its, revenue base has partnered with Hudson Consulting Company, an American based...</p></div>
            </div>
        </a>
        </Template></>;
}