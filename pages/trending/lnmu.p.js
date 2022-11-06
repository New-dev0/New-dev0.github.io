import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>LNMU</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,LNMU"/>
        <meta name="description" content="Trending News about LNMU" /></Head><Template>
            <h1 style={{fontSize: "30"}}>LNMU</h1>
            <Image width={800} height={500} src="https://gumlet.assettype.com/Prabhatkhabar%2F2022-08%2F7b211964-b587-40f4-958e-7e3bec78668e%2FLNMU.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true" alt="LNMU"/>
            <h3>Recent News</h3>
            <a href='https://www.prabhatkhabar.com/state/bihar/lnmu-support-of-demands-employees-stopped-work-of-university-mdn'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LNMU: मांगों के समर्थन में कर्मचारियों ने विश्वविद्यालय का कामकाज किया ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRCdwfSZTqU4eAPvy0hrI1lZseSuwLCCouwLcozargRP7Ic6j5ADlBL6UKn7YElR4hFmy-dciyQ" alt="LNMU: मांगों के समर्थन में कर्मचारियों ने विश्वविद्यालय का कामकाज किया ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LNMU: कर्मचारी महासंघ के आह्वान पर 16 सूत्री मांगों को लेकर शनिवार को कर्मचारी संघ के&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}