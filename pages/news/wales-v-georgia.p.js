import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Wales v Georgia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Wales v Georgia"/>
        <meta name="description" content="Trending News about Wales v Georgia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Wales v Georgia</h1>
            <Image width={800} height={500} src="https://i.guim.co.uk/img/media/6bd3f7f69d1319614f5f2e6cbb1d754887b21f06/0_147_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=3e2b2196e1367ff7dddf3b6403f31e4d" alt="Wales v Georgia"/>
            <h3>Recent News</h3>
            <a href='https://www.theguardian.com/sport/2022/nov/19/wales-georgia-autumn-nations-series-rugby-union-match-report'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Georgia create seismic rugby shock as Matkava&#39;s late penalty stuns ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTVMzk7mVcwL3NFbRqlc7Fq6Y1yhpKfnWnVNLu2qF4Sr1PxhRLrfneqrgPN6eaFmRfgZ8XJYoYJ" alt="Georgia create seismic rugby shock as Matkava&#39;s late penalty stuns ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wales suffered an embarrassing defeat as unfancied Georgia claimed a famous 13-12 Autumn Nations Series victory at the Principality Stadium.</p></div>
            </div>
        </a><a href='https://www.rugbypass.com/news/wales-player-ratings-vs-georgia-autumn-nations-series/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wales player ratings vs Georgia | Autumn Nations Series</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSSswmrGHtzvtZGpqBlhrrZSopZZtXwkmFGKqWlAgGAn8XwNz3zNwER_b5l-tW24YiGrQlJH57Z" alt="Wales player ratings vs Georgia | Autumn Nations Series" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wales player ratings: On the back of a heavy loss to New Zealand and a comfortable victory over Argentina, Wales moved on to Georgia...</p></div>
            </div>
        </a><a href='https://www.walesonline.co.uk/sport/rugby/rugby-news/shambolic-wales-humiliated-georgia-wayne-25558377'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shambolic Wales humiliated by Georgia as Wayne Pivac&#39;s reign ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSb4nGhWn-kcPHCajOfYs4ttTlZn14HzH_RwsGQQ8zyHQE2QHrpIiYDMdsqVMpebVPgqdZLJxGD" alt="Shambolic Wales humiliated by Georgia as Wayne Pivac&#39;s reign ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On a dark day for Welsh rugby, Wales lost 13-12 to Georgia for the first time in history.</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/rugby-union/63687627'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Georgia shock Wales with victory in Cardiff</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTyvdnIDIPh7XLM3cj9AToEBD7fFfUTy7XiEgelyf6rwk_TAobXV0sr9kLyFBQk4sPinTxd0LHA" alt="Georgia shock Wales with victory in Cardiff" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Georgia produce the finest day of their history with a shock win over woeful Wales in Cardiff.</p></div>
            </div>
        </a><a href='https://www.telegraph.co.uk/rugby-union/2022/11/19/wales-v-georgia-live-score-autumn-internationals-2022-latest/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wayne Pivac on the brink after Georgia stun Wales in Cardiff</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT-TJg1EJImAEcXCjOO0FHelL2GNv_96oLwn1RO8jWYZB8Y9IY61mMwxZivDf6MmVLciUWzSbee" alt="Wayne Pivac on the brink after Georgia stun Wales in Cardiff" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pivac&#39;s contract runs out at the conclusion of the World Cup but it would be a surprise if Welsh Rugby Union chief executive Steve Phillips is not looking to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wru.wales/report/georgia-stun-wales-with-historic-victory/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Georgia stun Wales with historic victory - Welsh Rugby Union</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRelr99jOtwpb0mgup5aouCIdp9HfsjgI3ujhp2EGT833C9Hp5bKGL_8dSS7uU2tmq8XPi1uMsD" alt="Georgia stun Wales with historic victory - Welsh Rugby Union" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A late Luka Matkava penalty resulted in Wales losing their first ever Test match against Georgia at Principality Stadium.</p></div>
            </div>
        </a>
        </Template></>;
}