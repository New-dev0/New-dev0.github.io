import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tinubu Jos rally</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tinubu Jos rally"/>
        <meta name="description" content="Trending News about Tinubu Jos rally" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tinubu Jos rally</h1>
            <Image width={800} height={500} src="https://cdn.punchng.com/wp-content/uploads/2022/05/27141507/Bola-Ahmed-Tinubu-e1653653706419.jpg" alt="Tinubu Jos rally"/>
            <h3>Recent News</h3>
            <a href='https://punchng.com/heavy-security-as-tinubu-begins-rally-in-jos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Heavy security as Tinubu begins rally in Jos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTShg94n2A5iDKYNHQRmqQFskh9u-Lzpu2t44GX3P1DjA8B3YDWqcjJquLvMcdj2O02gZEUGr_c" alt="Heavy security as Tinubu begins rally in Jos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There was heavy presence of security at Rwang Pam Township Stadium, venue of Tuesday&#39;s rally for the presidential candidate of All Progressives Congress,&nbsp;...</p></div>
            </div>
        </a><a href='https://thewhistler.ng/tinubu-may-have-violated-electoral-act-at-jos-rally-by-calling-opposition-parties-jackals-dead-fish-termites/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tinubu May Have Violated Electoral Act At Jos Rally By Calling ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR6I8s3F1m4hAGw7c5Cj0ghwFPwIcbtzOioQNtPYANUw2R5l3-c4P19lkhZLwXc0MbFQg09-b0f" alt="Tinubu May Have Violated Electoral Act At Jos Rally By Calling ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Presidential Candidate of the All Progressives Congress, APC, Bola Tinubu, may have violated provisions of the 2022 Electoral Act which bar candidates.</p></div>
            </div>
        </a><a href='https://www.channelstv.com/2022/11/15/photos-tight-security-as-tinubu-begins-rally-in-plateau/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PHOTOS: Tight Security As Tinubu Begins Rally In Plateau</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRryEOkRVUkZYe067jZuF8HdCT89NFwUYxqTh9CCBesVNoARgKhCwXIx9MDaiJn70BRE4ob_1mG" alt="PHOTOS: Tight Security As Tinubu Begins Rally In Plateau" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There was tight security on Tuesday at the Rwang Pam Township Stadium in Jos, the Plateau State capital as the presidential candidate of the All&nbsp;...</p></div>
            </div>
        </a><a href='https://dailypost.ng/2022/11/15/2023-hope-has-arrived-tinubu-at-apc-jos-campaign-rally/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2023: &#39;Hope has arrived&#39; – Tinubu at APC Jos campaign rally</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT9Z0trTu5RdgkiSjWP3vS48zj9iPlEnDRcKH8K1phy60f57cNqnbVPA8f5g07MHHXddxnB75cn" alt="2023: &#39;Hope has arrived&#39; – Tinubu at APC Jos campaign rally" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The presidential flagbearer of the All Progressives Congress, APC, Bola Tinubu has expressed optimism that the country&#39;s challenges would soon come to an.</p></div>
            </div>
        </a><a href='https://www.thisdaylive.com/index.php/2022/11/15/tinubu-flags-off-presidential-campaign-in-jos-describes-2023-election-as-fight-for-soul-of-nigeria/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tinubu Flags off Presidential Campaign in Jos, Describes 2023 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS1c5lkyj3-WSX-GlRX6XEnoNrfT4bhR6EzQeKdtWMHQoQg2FMwe6VbWumv4HJbKq2XfivzanAc" alt="Tinubu Flags off Presidential Campaign in Jos, Describes 2023 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Presidential candidate of the All Progressives Congress (APC), Asiwaju Bola Tinubu has described next year&#39;s presidential election scheduled to hold on&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}