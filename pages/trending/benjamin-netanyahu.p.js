import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Benjamin Netanyahu</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Benjamin Netanyahu"/>
        <meta name="description" content="Trending News about Benjamin Netanyahu" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Benjamin Netanyahu</h1>
            <Image width={800} height={500} src="https://th-i.thgim.com/public/incoming/5uubfw/article66096546.ece/alternates/FREE_1200/IMG_FILE_PHOTO__General__2_1_QEAFITN2.jpg" alt="Benjamin Netanyahu"/>
            <h3>Recent News</h3>
            <a href='https://www.thehindu.com/news/international/benjamin-netanyahu-led-coalition-to-form-new-govt-after-securing-impressive-win-in-israels-election/article66096403.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benjamin Netanyahu-led coalition to form new government after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQxKzmVzW9pluSK5xw7ISJYgXwn10qZAlEWOe6Zyfz_9LNIDtTmS59K44u8hQrS8-dxlbdkm-h1" alt="Benjamin Netanyahu-led coalition to form new government after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The outcome of the election, the fifth in less than four years, also ends an unprecedented period of political deadlock that began in 2019.</p></div>
            </div>
        </a><a href='https://www.thequint.com/news/world/israel-election-benjamin-netanyahu-right-wing-coalition-wins-what-it-means-for-palestine'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benjamin Netanyahu Wins Israel Polls: Brutal Crackdown on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSRWGs5HpSNRXt0TheX0HtG8CvuwFDPtCQx60K5Hvaa1VGzm-NhbNxEZbs_frFQRMNjOsTu1UB-" alt="Benjamin Netanyahu Wins Israel Polls: Brutal Crackdown on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Benjamin Netanyahu Wins Israel Polls: Brutal Crackdown on Palestinians Imminent? The right-wing coalition, comprising Likud, Religious Zionism, Shas and UTJ,&nbsp;...</p></div>
            </div>
        </a><a href='https://pragativadi.com/benjamin-netanyahu-set-to-form-government-in-israel/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benjamin Netanyahu set to form government in Israel</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQuFW5o88cpXoLv-l9z_Fi49-TwJ5tTIx-zxJFdUwr2yWTpeD7BkbttLT_5hzj4Z-55MSAdvLWV" alt="Benjamin Netanyahu set to form government in Israel" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former Prime Minister Benjamin Netanyahu led right-wing bloc has secured an emphatic victory in Israel&#39;s general elections by claiming 64 out of the 120&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wionews.com/world/analysis-what-netanyahus-comeback-in-israel-means-for-india-531268'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What Netanyahus comeback in Israel means for India</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQanZ6a0aBb7q-BgVLyEWfvx7DUC9kdqI1gIoOOL8uSoW5XQe5R79K39VJmV7mD3Vw2GSVeEfFE" alt="What Netanyahus comeback in Israel means for India" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Benjamin Netanyahu has made a stunning comeback to Jerusalem&#39;s power corridors. &#39;The King of Israel&#39;, as his loyal supporters call him, led his Likud Party&nbsp;...</p></div>
            </div>
        </a><a href='https://kathmandupost.com/national/2022/11/04/pm-deuba-congratulates-benjamin-netanyahu-on-election-victory'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PM Deuba congratulates Benjamin Netanyahu on election victory</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQC5oIKjbofBvgycO37SNm_11iDOAYAgar-OV0J7WtFOVzewyumAOhr0b2xoWSgo2sZqP03LIZD" alt="PM Deuba congratulates Benjamin Netanyahu on election victory" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In the fifth election held in the nation in the past four years, Netanyahu won a majority of seats in the legislature.</p></div>
            </div>
        </a>
        </Template></>;
}