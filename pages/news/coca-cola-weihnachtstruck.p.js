import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Coca-Cola Weihnachtstruck</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Coca-Cola Weihnachtstruck"/>
        <meta name="description" content="Trending News about Coca-Cola Weihnachtstruck" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Coca-Cola Weihnachtstruck</h1>
            <Image width={800} height={500} src="https://heute-at-prod-images.imgix.net/2022/12/02/e1244874-6a7b-4556-985c-41682667163a.jpeg?rect=0%2C75%2C1200%2C600&w=1280&auto=format" alt="Coca-Cola Weihnachtstruck"/>
            <h3>Recent News</h3>
            <a href='https://www.heute.at/s/coca-cola-weihnachtstruck-geht-in-flammen-auf-100242021'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coca-Cola-Weihnachtstruck geht auf Straße in Flammen auf</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS1O-NOmzyIIDtut7HEH3Xbm1JTKbDtbVT21S-BqwzgMW8giKigMYgBMD_KUt7Q_pgxWuLafCeD" alt="Coca-Cola-Weihnachtstruck geht auf Straße in Flammen auf" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Magische Momente sollen die leuchtenden Weihnachtstrucks von Coca-Cola den Menschen bescheren – in Bukarest wurde daraus ein loderndes Flammeninferno.</p></div>
            </div>
        </a>
        </Template></>;
}