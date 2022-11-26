import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Prince</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Prince"/>
        <meta name="description" content="Trending News about Prince" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Prince</h1>
            <Image width={800} height={500} src="https://d2e1hu1ktur9ur.cloudfront.net/wp-content/uploads/2022/10/prince-3.jpg" alt="Prince"/>
            <h3>Recent News</h3>
            <a href='https://www.ntnews.com/cinema/sivakarthikeyan-prince-streaming-another-two-languages-854487'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prince | థియేటర్లలో ఇంప్రెస్ చేయకున్నా.. అదనంగా మరో 2 భాషల్లో ప్రిన్స్</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSco2lTGa1Nxl7nuzMMBGEj2VHBAVYiPouyisp9-TZdq_StBf-67qzP7sa2mIw767jMBmpm2ps7" alt="Prince | థియేటర్లలో ఇంప్రెస్ చేయకున్నా.. అదనంగా మరో 2 భాషల్లో ప్రిన్స్" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>జాతిర‌త్నాలు ఫేం అనుదీప్ కేవీ (Anudeep KV) డైరెక్ట్ చేసిన ప్రిన్స్ (Prince) చిత్రం బాక్సాఫీస్‌&nbsp;...</p></div>
            </div>
        </a><a href='https://tv9telugu.com/entertainment/ott/siva-kartikeyan-starrer-ott-streaming-on-disney-plus-hotstar-from-today-au76-828974.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prince OTT: ఓటీటీలోకి అడుగుపెట్టిన ప్రిన్స్‌..శివ కార్తికేయన్‌ సినిమాను ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTZuOikC2PWC9LeigzyIGMrIqAu7vrrwDEMzO8BYxI_8k5spw8STLwrpBFu9trub_L21KUBEyNS" alt="Prince OTT: ఓటీటీలోకి అడుగుపెట్టిన ప్రిన్స్‌..శివ కార్తికేయన్‌ సినిమాను ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>థియేటర్లలో ఓ మోస్తరు కలెక్షన్లతో సరిపెట్టుకున్న ప్రిన్స్‌ ఇప్పుడు డిజిటల్‌&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}