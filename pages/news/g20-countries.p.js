import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>G20 countries</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,G20 countries"/>
        <meta name="description" content="Trending News about G20 countries" /></Head><Template>
            <h1 style={{fontSize: "30"}}>G20 countries</h1>
            <Image width={800} height={500} src="https://media.philstar.com/photos/2022/11/16/protect-vip2022-05-0217-13-47gallery_2022-11-16_10-20-32.jpg" alt="G20 countries"/>
            <h3>Recent News</h3>
            <a href='https://www.philstar.com/headlines/climate-and-environment/2022/11/16/2224232/finance-g20-countries-steers-gas-expansion-southeast-asia-think-tank'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Finance from G20 countries steers gas expansion in Southeast Asia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTKCyQCVh0sOTjCXgeXM36Tlm548PKS9Ny0sGjwIMxNd507CxojpSqopthbcd2Jhc74x-X5Z75m" alt="Finance from G20 countries steers gas expansion in Southeast Asia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CEED deputy executive director Avril de Torres said that countries attending the G20 summit in Bali must recommit and realign their investment activities&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/pidgin/articles/c97q1wn72l0o'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>G20 countries list: Di world leaders wey dey Bali for di 2022 summit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSuc51iWAQYJVflfS9vyaY9EzuMDaNFfe2e0_mGVZhos4PAAXUQETm9W8TkpCfjgcl_w7oE7_tZ" alt="G20 countries list: Di world leaders wey dey Bali for di 2022 summit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ukrainian President Volodymyr Zelensky don call for Russia &quot;destructive war&quot; to end. &quot;I dey convinced now na di time wen di Russian destructive war must and&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}