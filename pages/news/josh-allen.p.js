import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Josh Allen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Josh Allen"/>
        <meta name="description" content="Trending News about Josh Allen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Josh Allen</h1>
            <Image width={800} height={500} src="https://www.si.com/.image/t_share/MTk0MTY0Mjk1NDEwMzk0NjI5/josh-allen.jpg" alt="Josh Allen"/>
            <h3>Recent News</h3>
            <a href='https://www.si.com/extra-mustard/2022/12/02/josh-allen-meets-jay-z-buffalo-bills-nfl'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Josh Allen Makes Wild Claim About Jay Z</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_EhQtEEmRL2Och4MpRtxvPq3wLgKQlFCTI6nFyUXxeFk0FkRVSH3iYzd9y84OXdrRP3w2mCfn" alt="Josh Allen Makes Wild Claim About Jay Z" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The quarterback met the rapper after the Bills beat the Patriots on &#39;Thursday Night Football.&#39;</p></div>
            </div>
        </a><a href='https://www.buffalobills.com/news/bills-today-josh-allen-gets-wrapped-up-in-the-usa-s-run-during-the-fifa-world-cu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bills Today | Josh Allen gets wrapped up in the USA&#39;s run during the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRIuJPsc1st1RuF-pcDpTlH5p2c0woo1KFGAfNhwlS5ZT3Z08HxVwz3pVqKJiDOCLkcAjwOQafR" alt="Bills Today | Josh Allen gets wrapped up in the USA&#39;s run during the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bills QB Josh Allen hopped on Kyle Brandt&#39;s podcast to talk about USA&#39;s victory in the World Cup.</p></div>
            </div>
        </a><a href='https://billswire.usatoday.com/2022/12/02/buffalo-bills-josh-allen-trolls-patriots-win-gillette-stadium/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bills&#39; Josh Allen trolls the Patriots after another win at Gillette Stadium</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQXJKTPA-uQt_cDZYAHEtXZwvd5mW2HBtv8r-SbwbqFThm56caLaDHMdjL5FcMZmlIEywFzHdWl" alt="Bills&#39; Josh Allen trolls the Patriots after another win at Gillette Stadium" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following their 24-10 win against the New England Patriots on Thursday, the Buffalo Bills moved to 9-3 and took back over first place in the AFC East.</p></div>
            </div>
        </a><a href='https://www.syracuse.com/buffalo-bills/2022/12/an-unshaven-josh-allen-admits-he-took-deal-with-gillette-in-part-to-troll-patriots.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>An unshaven Josh Allen admits he took deal with Gillette in part to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS_9nxd_Ekh-iOVwC4aZemTUYGtrLS1VOUHW37IbLID-OPVPEykGF4anRkLASv3HVIUlvB02IjE" alt="An unshaven Josh Allen admits he took deal with Gillette in part to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After the Buffalo Bills wrapped things up at Gillette Stadium with a 24-10 victory over the New England Patriots, quarterback Josh Allen broke some news on&nbsp;...</p></div>
            </div>
        </a><a href='https://profootballtalk.nbcsports.com/2022/12/02/josh-allen-on-jumping-td-pass-to-gabe-davis-well-take-them-how-we-can-get-them/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Josh Allen on jumping TD pass to Gabe Davis: We&#39;ll take them how ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ5ECTVnmjkG6BtdTYrW11T6g_6i1Gu5KjRyRikG8JkLe87U0th4MgSd_w3WTorUFlj2IEAI5KS" alt="Josh Allen on jumping TD pass to Gabe Davis: We&#39;ll take them how ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Bills did a lot of strong work on the ground during Thursday night&#39;s game against the Patriots and they wound up with 132 yards on the ground for the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wkbw.com/sports/buffalo-bills/bills-qb-josh-allen-gains-attention-beyond-the-716'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Buffalo Bills QB Josh Allen gains attention beyond the 716</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTUlj7mBHJqQu8xfF9r_E4lL0vZuS3tIK9ci97mb0wEWDl8Xp8WKm2ONJ1PqQ3Dqx8F2AZ2xnZx" alt="Buffalo Bills QB Josh Allen gains attention beyond the 716" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Through commercials, jersey sales, and acts of kindness; QB Josh Allen gains more notoriety every day.</p></div>
            </div>
        </a>
        </Template></>;
}