import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Shubman gill</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Shubman gill"/>
        <meta name="description" content="Trending News about Shubman gill" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Shubman gill</h1>
            <Image width={800} height={500} src="https://telugu.samayam.com/photo/msid-94792879,imgsize-30828/pic.jpg" alt="Shubman gill"/>
            <h3>Recent News</h3>
            <a href='https://telugu.samayam.com/sports/cricket/news/opener-shubman-gill-says-hes-quite-disappointed-by-the-way-he-got-out/articleshow/94792830.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shubman Gill హాఫ్ సెంచరీ ముంగిట ఔట్.. ఓపెనర్ నిరాశ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQrJpu2_bzoeYwEUvQnd019uD9BBnPbrsEHmND1J882NKuss3GPcabPe59l8_IfqQxblOrglhgw" alt="Shubman Gill హాఫ్ సెంచరీ ముంగిట ఔట్.. ఓపెనర్ నిరాశ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>newsIND vs SA మూడో వన్డేలో గిల్ 49 పరుగుల వద్ద పేలవంగా వికెట్ చేజార్చుకున్నాడు.</p></div>
            </div>
        </a>
        </Template></>;
}