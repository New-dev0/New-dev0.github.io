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
            <Image width={800} height={500} src="https://cdn.siasat.com/wp-content/uploads/2022/11/IMG_20221121_162423_1200_x_900_pixel.jpg" alt="G20 countries"/>
            <h3>Recent News</h3>
            <a href='https://www.siasat.com/saudi-arabia-outperforms-g20-countries-to-top-list-in-labour-force-growth-rate-2462290/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Saudi Arabia outperforms G20 countries to top list in labour force ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQB-IgpHxw-Lup3lOONWsEk4GF7rmmC70Soh-EGD1O-YLSWdJxPoW40kaqK1z635hF7h9g1dfME" alt="Saudi Arabia outperforms G20 countries to top list in labour force ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Riyadh: The Kingdom of Saudi Arabia (KSA) ranked first in the labor force growth rate, outperforming the G20 countries.</p></div>
            </div>
        </a>
        </Template></>;
}