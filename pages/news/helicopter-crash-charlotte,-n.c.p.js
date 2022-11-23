import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Helicopter crash CHARLOTTE, N.C</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Helicopter crash CHARLOTTE, N.C"/>
        <meta name="description" content="Trending News about Helicopter crash CHARLOTTE, N.C" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Helicopter crash CHARLOTTE, N.C</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221122135131-chip-tayag-and-jason-myers.jpg?c=16x9&q=w_800,c_fill" alt="Helicopter crash CHARLOTTE, N.C"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/11/22/us/charlotte-north-carolina-helicopter-crash/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Helicopter crash leaves TV meteorologist and pilot dead in Charlotte ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSv5hYeqEJjkxQ2zcilCswvTAu9zki9cYkK40h8PXEFi9KQ45qrB9njEPysTpaz1lQcfV6c1tP7" alt="Helicopter crash leaves TV meteorologist and pilot dead in Charlotte ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WBTV meteorologist Jason Myers and pilot Chip Tayag were identified as the victims in the crash.</p></div>
            </div>
        </a><a href='https://www.wsaz.com/2022/11/22/2-dead-helicopter-crash-interstate-charlotte/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LIVE: Meteorologist and pilot killed in helicopter crash in Charlotte ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRkhFYAeQnyL0ugUPfTEum54nCC6jfa7PIG3FWFoLcXe2ig_BQ0os3Bb4p3fr0vbajLVsMtVq7X" alt="LIVE: Meteorologist and pilot killed in helicopter crash in Charlotte ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meteorologist Jason Myers and pilot Chip Tayag, who worked for Charlotte television station WBTV, were killed in a helicopter crash early Tuesday afternoon.</p></div>
            </div>
        </a><a href='https://www.wbtv.com/2022/11/22/crews-scene-helicopter-crash-i-77-south-south-charlotte/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WBTV helicopter crashes on I-77 South, two killed</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT32KNxqLd9S59iHXb7fTSMvX__tY2J7KlKphHgXmUCj_Xp_THdZQvNMVaebANZCFpxvfo3ytXq" alt="WBTV helicopter crashes on I-77 South, two killed" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CHARLOTTE, N.C. (WBTV) – WBTV Meteorologist Jason Myers and Sky3 pilot Chip Tayag were killed in a helicopter crash in the southbound lanes of Interstate 77&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/news/charlotte-north-carolina-helicopter-crash-deaths/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Local meteorologist and pilot killed in North Carolina helicopter crash</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcREnVapyM_q4lGtK2r4O2grkVPDlBHwYsABghz5x6bapbjQjWYBlPgC5hlbkh2ZJLZu_TsLDSn4" alt="Local meteorologist and pilot killed in North Carolina helicopter crash" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CBS Charlotte affiliate WBTV​ identified the two people killed as Jason Myers, a meteorologist at the station, and Chip Tayag, the helicopter&#39;s pilot.</p></div>
            </div>
        </a><a href='https://www.wcnc.com/article/news/local/helicopter-crash-interstate-77-charlotte-north-carolina/275-516aeaad-01d0-4227-a87c-9523e5ace28a'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2 dead in TV news helicopter crash near I-77: Medic</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQUtwD8nMJebfrMHq24UZ2stLK3BeDmgjLumAh5e0w-vsjzqB-s7dRlCY_R4No771DAbs87aj8P" alt="2 dead in TV news helicopter crash near I-77: Medic" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Two people were killed when a Robinson R44 chopper belonging to WBTV News crashed near I-77 in Charlotte Tuesday. The FAA &amp; NTSB are investigating.</p></div>
            </div>
        </a>
        </Template></>;
}