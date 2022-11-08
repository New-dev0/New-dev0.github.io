import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>SBI Share Price</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,SBI Share Price"/>
        <meta name="description" content="Trending News about SBI Share Price" /></Head><Template>
            <h1 style={{fontSize: "30"}}>SBI Share Price</h1>
            <Image width={800} height={500} src="https://telugu.samayam.com/photo/msid-95349612,imgsize-49592/pic.jpg" alt="SBI Share Price"/>
            <h3>Recent News</h3>
            <a href='https://telugu.samayam.com/business/share-market/stocks-with-price-volume-breakout-britannia-industries-jumps-9-percent-sbi-share-prices-hits-600-mark/articleshow/95349501.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SBI Share Price: ఎస్‌బీఐ దూకుడు.. మంచి డిమాండ్‌తో వారికి భారీ లాభాలు ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ0kIAROKL4KAdabX9XlEThApb_dq1c72q9Rh8OvtyUWwByx5E9VII4ojOmAa459gUM7pDsQkTf" alt="SBI Share Price: ఎస్‌బీఐ దూకుడు.. మంచి డిమాండ్‌తో వారికి భారీ లాభాలు ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>share marketSBI Share Price: దేశీయ స్టాక్ మార్కెట్ సూచీలు ఫ్లాట్‌గా ట్రేడవుతున్నాయి.</p></div>
            </div>
        </a>
        </Template></>;
}