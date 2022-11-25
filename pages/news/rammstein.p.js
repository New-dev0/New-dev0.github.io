import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rammstein</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rammstein"/>
        <meta name="description" content="Trending News about Rammstein" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rammstein</h1>
            <Image width={800} height={500} src="https://utopia.de/app/uploads/2022/11/rammstein-us-maeva-vigier-20221124-1280x720-1.jpg" alt="Rammstein"/>
            <h3>Recent News</h3>
            <a href='https://utopia.de/news/das-war-doch-krank-rammstein-musiker-ueberrascht-mit-umwelt-video/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Das war doch krank“: Rammstein-Musiker überrascht mit Umwelt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR_aGp5POrHRySqk0YBTR7Xsu4ozTuYO7-Jt4sBWX7UKjCHCoPdT1EFNUrMRCCfeI0nFgaCgz_e" alt="„Das war doch krank“: Rammstein-Musiker überrascht mit Umwelt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Rammstein-Musiker Christian &quot;Flake&quot; Lorenz zeichnet in einem neuen Video ein düsteres Zukunftsszenario mit dunklen Bunker inmitten einer zerstörten Welt&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}