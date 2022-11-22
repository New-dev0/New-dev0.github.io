import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>DJ Cuppy engaged</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,DJ Cuppy engaged"/>
        <meta name="description" content="Trending News about DJ Cuppy engaged" /></Head><Template>
            <h1 style={{fontSize: "30"}}>DJ Cuppy engaged</h1>
            <Image width={800} height={500} src="" alt="DJ Cuppy engaged"/>
            <h3>Recent News</h3>
            <a href='https://www.vanguardngr.com/2022/11/video-dj-cuppy-engaged-to-british-boxer-taylor/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>[Video] DJ Cuppy engaged to British Boxer, Taylor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSkcW4GKDP9PcUK-hy4XkH01AVpuXWglknKJO-nQ4kycLwq4tzmC71ob8DfTWUYnX-IpFB75dyu" alt="[Video] DJ Cuppy engaged to British Boxer, Taylor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Award-winning female disc jockey, Florence Otedola, professionally known as DJ Cuppy, is reportedly engaged.</p></div>
            </div>
        </a><a href='https://dailypost.ng/2022/11/20/dj-cuppy-gets-engaged-to-british-boxer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DJ Cuppy gets engaged to British boxer</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTNE-J7GX3JSWHM4b1f5FGhhRYLJWa41eAtncM_5V9uPQ1RfihMiM29MlSqQwPP3BOhF5XbMH71Zw" alt="DJ Cuppy gets engaged to British boxer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Famous Nigerian disc jockey and producer, Florence Ifeoluwa Otedola, popularly known as DJ Cuppy, has been engaged to her British boyfriend and.</p></div>
            </div>
        </a><a href='https://radionigeria.gov.ng/2022/11/20/dj-cuppy-engaged-to-british-boxer-taylor/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DJ Cuppy engaged to British Boxer, Taylor - FRCN HQ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTDyygZwyQkZbLWdqiDnwsEzNRRcpTJjpRYBcmadczHLLHdZXoDpFqm2t-sh-DSpkAhDosNgi0G" alt="DJ Cuppy engaged to British Boxer, Taylor - FRCN HQ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Florence Ifeoluwa Otedola, better known as DJ Cuppy, is engaged to be married. The DJ was at a Gumball award last night in Abu Dhabi when Ryan Taylor,&nbsp;...</p></div>
            </div>
        </a><a href='https://tribuneonlineng.com/dj-cuppy-now-engaged-to-british-boxer-ryan-taylor/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DJ Cuppy now engaged to British Boxer, Ryan Taylor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT6fEO4p3GGDRIrV766Ku3Rc3UNy2ucBKnD9akZxBKyef0zdNaKxjmr05zYBSBN21ni2fxwmdST" alt="DJ Cuppy now engaged to British Boxer, Ryan Taylor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Popular Nigerian disk jockey, Florence Otedola, known professionally as DJ Cuppy is officially off the market after saying yes to the marriage proposal of.</p></div>
            </div>
        </a><a href='https://pmnewsnigeria.com/2022/11/20/anthony-joshua-trends-amid-reports-dj-cuppy-engaged-to-uk-boxer-taylor/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anthony Joshua trends amid reports DJ Cuppy engaged to UK ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSRn0JclwJ8HdrYJ2BYftSk3UmitHxw5jQI8PLXa2DYHD3s1qdkSFKd8QFu7zZPl0CL9drAynq8" alt="Anthony Joshua trends amid reports DJ Cuppy engaged to UK ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Opinions about Anthony Joshua and DJ Cuppy&#39;s relationship dominated Twitter after reports emerged Cuppy is now engaged to Ryan Taylor.</p></div>
            </div>
        </a><a href='https://dailytrust.com/tweeps-react-as-dj-cuppy-gets-engaged-to-british-boxer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tweeps react as DJ Cuppy gets engaged to british boxer</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQPIJY46FQcTGmNR3z9rVXGe3lebiyfoV5o2IDM6NWCAreEv5zzzCuAjI6aHHqwaoOodrLImdYr" alt="Tweeps react as DJ Cuppy gets engaged to british boxer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Popular Nigerian disc jockey, Florence Otedola, has set the Nigerian Twitter space agog as a viral video has shown the entertainer being proposed to in.</p></div>
            </div>
        </a>
        </Template></>;
}