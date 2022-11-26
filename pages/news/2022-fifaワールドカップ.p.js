import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>2022 FIFAワールドカップ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,2022 FIFAワールドカップ"/>
        <meta name="description" content="Trending News about 2022 FIFAワールドカップ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>2022 FIFAワールドカップ</h1>
            <Image width={800} height={500} src="https://prtimes.jp/i/71303/26/ogp/d71303-26-5df45bf6872842eea523-0.png" alt="2022 FIFAワールドカップ"/>
            <h3>Recent News</h3>
            <a href='https://prtimes.jp/main/html/rd/p/000000026.000071303.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ノバキッド、FIFAワールドカップ2022開催に合わせて「Football ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQnTDF1LGT3mIGRNmKm0gLj2rruI-TcaPI1KPUyu5bxXsdFYKzXCTfLDHyl6gTVVKwQecJXnKDf" alt="ノバキッド、FIFAワールドカップ2022開催に合わせて「Football ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novakid Inc.のプレスリリース（2022年11月25日 13時30分）ノバキッド、FIFAワールドカップ2022開催に合わせて[Football Fans Academy]をローンチ.</p></div>
            </div>
        </a>
        </Template></>;
}