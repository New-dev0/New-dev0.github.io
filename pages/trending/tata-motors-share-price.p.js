import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tata motors share price</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tata motors share price"/>
        <meta name="description" content="Trending News about Tata motors share price" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tata motors share price</h1>
            <Image width={800} height={500} src="" alt="Tata motors share price"/>
            <h3>Recent News</h3>
            <a href='https://in.investing.com/analysis/tata-motors-ltd-shifting-from-reverse-to-first-gear-200547784'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tata Motors Ltd. Shifting from Reverse to First Gear</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT1XmS7Yz_e3IeytQsjyK8VMxBr-awEbK8kuRgMSlFgep1MbSo0ouAlPLdgBqh4NpaICcBPSvYp" alt="Tata Motors Ltd. Shifting from Reverse to First Gear" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tata Motors (NS: TAMO ) shares are a top medium-term stock pick based on technical analysis, and the auto stock is expected to rise by more than 12% in the near&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}