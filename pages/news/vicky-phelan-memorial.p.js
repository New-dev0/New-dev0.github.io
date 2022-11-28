import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Vicky Phelan memorial</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Vicky Phelan memorial"/>
        <meta name="description" content="Trending News about Vicky Phelan memorial" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Vicky Phelan memorial</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/001ce522-1600.jpg" alt="Vicky Phelan memorial"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/news/2022/1126/1338504-vicky-phelan/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;A nation got to love Vicky as much as we did&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_tgd1HKU-KUC37dXfNfbvPpKMEpFyQ98zL37Ensx_bjc28KmhqzXVODFLTdrA0ngotw_DjZCs" alt="&#39;A nation got to love Vicky as much as we did&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ms Phelan died at Milford Hospice in Limerick on Monday 14 November at the age of 48, after being diagnosed with cervical cancer in 2014. She was laid to rest&nbsp;...</p></div>
            </div>
        </a><a href='https://www.breakingnews.ie/ireland/live-vicky-phelan-memorial-service-takes-place-in-co-kilkenny-1397830.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vicky Phelan memorial service takes place in Co Kilkenny</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRkJnzTQjfwrFSlmBWQo1yDaVaMz11dTdkV6C_vnNBAiQVgj-GRGFQD_OmhZ5J9cF80cPzj5WEF" alt="Vicky Phelan memorial service takes place in Co Kilkenny" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Those attending got their chance to say goodbye to the cervical cancer campaigner in her home village of Mooncoin. The local parish priest, Father Martin Tobin,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.independent.ie/irish-news/well-never-see-her-like-again-friends-and-public-gather-to-remember-vicky-phelan-42177405.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vicky Phelan memorial: &#39;We&#39;ll never see her like again&#39; - Friends and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSl9ixgu0OCU4SLuUXTMKN240bUZiO-cmTKl1ONKkugob-MqoR0Io0tKdioZMMj7SglLAdOHjbK" alt="Vicky Phelan memorial: &#39;We&#39;ll never see her like again&#39; - Friends and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Thousands of people gathered in Mooncoin, Kilkenny, today to remember CervicalCheck campaigner Vicky Phelan.</p></div>
            </div>
        </a><a href='https://www.offalyexpress.ie/news/home/974159/offaly-artist-reads-heartfelt-prayer-at-vicky-phelan-s-memorial-service.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Offaly artist reads heartfelt prayer at Vicky Phelan&#39;s memorial service</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSDLyTRZU_uvWq-dLe-BQmPFm-mOplit8rZip126hvqAH5Ju8comMbsKbfRNZ4fBemOaeO1Tq6w" alt="Offaly artist reads heartfelt prayer at Vicky Phelan&#39;s memorial service" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>THE Offaly artist friend of Vicky Phelan praised her commitment to others when he read a prayer at the cervical cancer campaigner&#39;s memorial service on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishmirror.ie/news/irish-news/how-watch-vicky-phelan-memorial-28594031'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to watch Vicky Phelan memorial service today as family extend ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQwIwqD2NfMiP-9_uIwzUa9HEQxlHW5VHKHWAb5eC65Zd0oGeHuEyvg_zh7UoNJpszkAjWR0APc" alt="How to watch Vicky Phelan memorial service today as family extend ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gardai have put in place a traffic management plan ahead of the gathering to celebrate the life of the CervicalCheck campaigner, who died almost two weeks ago&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishtimes.com/ireland/2022/11/27/vicky-phelan-she-fought-so-hard-because-she-fought-for-you/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;She made every minute matter&#39;: Vicky Phelan memorial remembers ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSAzKUt-lSdSLsxgTv55EKqscf3FNo6oU5OzQow40dBiunzEJEYf7aAj2-eXycy9XbtzGiimD6P" alt="&#39;She made every minute matter&#39;: Vicky Phelan memorial remembers ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Campaigner was a fearless warrior who got the most out of every minute, community gathered at memorial service in Mooncoin hears.</p></div>
            </div>
        </a>
        </Template></>;
}