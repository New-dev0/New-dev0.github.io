import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Recharge Lake Chad</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Recharge Lake Chad"/>
        <meta name="description" content="Trending News about Recharge Lake Chad" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Recharge Lake Chad</h1>
            <Image width={800} height={500} src="" alt="Recharge Lake Chad"/>
            <h3>Recent News</h3>
            <a href='https://www.vanguardngr.com/2022/11/2023-tinubu-to-recharge-lake-chad-as-bauchi-gov-declares-for-buhari/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tinubu promises to recharge Lake Chad, as Bauchi gov declares for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTmpqhMozeBNoWhnNmTxIixxXSV9oqpOOxpaCTz8iYVcycM-H0g9ihqDlA1Z9v2vQskEh7qlkwd" alt="Tinubu promises to recharge Lake Chad, as Bauchi gov declares for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>By Obas Esiedesa, Abuja. The candidate of the All Progressive Congress, APC, Asiwaju Bola Tinubu has promised to &#39;recharge&#39; Lake Chad if elected president&nbsp;...</p></div>
            </div>
        </a><a href='https://www.channelstv.com/2022/11/22/i-will-recharge-lake-chad-if-elected-president-tinubu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I Will &#39;Recharge&#39; Lake Chad If Elected President – Tinubu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-Fdz2ENcnPqM1C17myynSG3Y1eqILzfNEohEef1hNAGBuNIo__AxRLxVLv1T4iZwMA9hVO7PN" alt="I Will &#39;Recharge&#39; Lake Chad If Elected President – Tinubu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Presidential candidate of the All Progressives Congress, Asiwaju Bola Tinubu, on Tuesday assured President Muhammadu Buhari that he would tackle issues&nbsp;...</p></div>
            </div>
        </a><a href='https://punchng.com/i-will-recharge-lake-chad-if-elected-tinubu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I will &#39;recharge&#39; Lake Chad if elected - Tinubu - Punch Newspapers</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="I will &#39;recharge&#39; Lake Chad if elected - Tinubu - Punch Newspapers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The presidential candidate of the All Progressives Congress, Bola Tinubu, has vowed to &#39;recharge&#39; the Lake Chad if elected president come 2023.</p></div>
            </div>
        </a><a href='https://www.zikoko.com/citizen/bola-tinubu-lake-chad-recharge/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What Does It Mean to Recharge Lake Chad?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTsOEEUp4GFSrLn8YsToih57TmSEU1WMB1MxlRh_aTw5iV2e-_NnDLAh7LBg0pjnN9LdJichyhZ" alt="What Does It Mean to Recharge Lake Chad?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>But the campaigns for the 2023 elections have shown us Nigerians are no longer gullible and are willing to ask questions. This is why Bola Tinubu, the&nbsp;...</p></div>
            </div>
        </a><a href='https://thenationonlineng.net/ill-recharge-lake-chad-tinubu-pledges/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I&#39;ll recharge Lake Chad, Tinubu pledges The Nation Newspaper</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTGEVjiBoe51Me02a5ImkTxW1oAd6uJKq8AxWCL6W4V7mBdh2-R9NqnQeojeyTYUO9rA9HHWPHd" alt="I&#39;ll recharge Lake Chad, Tinubu pledges The Nation Newspaper" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The presidential candidate of the ruling All Progressives Congress (APC) Asiwaju Bola Tinubu has promised to continue the exploration works in all frontier.</p></div>
            </div>
        </a><a href='https://dailytrust.com/tinubu-ill-recharge-lake-chad-if-elected/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tinubu: I&#39;ll recharge Lake Chad if elected</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRBzZarSMrZQcs-zpBnVY33J3Kk8NrgvODYlGT4_qCbOaRf74-bLGmhRv8lySd4DF-jjBu5b3yx" alt="Tinubu: I&#39;ll recharge Lake Chad if elected" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The presidential candidate of the All Progressives Congress (APC), Bola Ahmed Tinubu, has promised to continue oil search in...</p></div>
            </div>
        </a>
        </Template></>;
}