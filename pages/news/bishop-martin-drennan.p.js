import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bishop Martin Drennan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bishop Martin Drennan"/>
        <meta name="description" content="Trending News about Bishop Martin Drennan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bishop Martin Drennan</h1>
            <Image width={800} height={500} src="https://media.galwaydaily.com/wp-content/uploads/2022/11/26173917/Martin-Drennan.jpg" alt="Bishop Martin Drennan"/>
            <h3>Recent News</h3>
            <a href='https://www.galwaydaily.com/news/former-bishop-of-galway-martin-drennan-passes-away/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Former Bishop of Galway Martin Drennan passes away - Galway Daily</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcThy4K71LY20CDFXVkLRKQjS23W6M9wDjbExA2ixpYlDEnyje_ik1wMFr9WRfYJqh1MsFTEhwvk" alt="Former Bishop of Galway Martin Drennan passes away - Galway Daily" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former Bishop of Galway, Kilmacduagh and Kilfenora Martin Drennan has passed away this weekend at the age of 78.</p></div>
            </div>
        </a><a href='https://galwaybayfm.ie/galway-bay-fm-news-desk/funeral-details-for-the-late-bishop-martin-drennan-are-released/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Funeral details for the late Bishop Martin Drennan are released ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ3s0XnMoTy4yIdK9PZ5Jzu42Nt9teJlfgJjBbPoHHoRA8k-mgGVEq_GGnwM-VqWsbxSISVbVXC" alt="Funeral details for the late Bishop Martin Drennan are released ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bishop Drennan was bishop of Galway and Kilmacduagh and Apostolic Administrator of Kilfenora and retired in 2016. Bishop Michael Duignan offered his sympathy to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rte.ie/news/regional/2022/1126/1338495-martin-drennan/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Former Bishop Martin Drennan dies aged 78</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSJgD-hbmAHqOzpoPbA_gzhTCVSQZvKSld-29Ol8DTpdRv0bMEpsVFBHYBlOgz_pfDb-hu_8Dg0" alt="Former Bishop Martin Drennan dies aged 78" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>He continued his studies in Rome where he was awarded a licentiate in both sacred theology and sacred scripture. Bishop Drennan was a spiritual director at the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.clare.fm/news/former-bishop-martin-drennan-passed-away/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bishop Emeritus Martin Drennan Passes Away - Clare FM</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQfq23w0WR9LHnlzoRCYu6uPBYisxkDM5OVrBlgZmGQVzQVSg2Ix4Jz9NVNlmmGB1cof6uaUrMl" alt="Bishop Emeritus Martin Drennan Passes Away - Clare FM" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Bishop of Galway and Kilmacduagh and Apostolic Administrator of Kilfenora Emeritus has passed away. Dr Martin Drennan retired in 2016 on grounds of ill&nbsp;...</p></div>
            </div>
        </a><a href='https://connachttribune.ie/death-announced-of-former-bishop-of-galway-454/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Death announced of former Bishop of Galway</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSdr5Hi8fTiKbpq9MopSKXMJNP317La_wgNNJf_fXMtKXdUCsvcLCrf98qpFSSLYX2G5kEFPS4J" alt="Death announced of former Bishop of Galway" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The death has occurred of the former Bishop of Galway, Kilmacduagh and Kilfenora Martin Drennan, six years after he announced his retirement on health&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}