import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Wales vs Georgia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Wales vs Georgia"/>
        <meta name="description" content="Trending News about Wales vs Georgia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Wales vs Georgia</h1>
            <Image width={800} height={500} src="https://eu-cdn.rugbypass.com/wp/wp-content/uploads/2022/11/GettyImages-1442778417-1200x630.jpg?id=261287" alt="Wales vs Georgia"/>
            <h3>Recent News</h3>
            <a href='https://www.rugbypass.com/news/wales-player-ratings-vs-georgia-autumn-nations-series/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wales player ratings vs Georgia | Autumn Nations Series</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSSswmrGHtzvtZGpqBlhrrZSopZZtXwkmFGKqWlAgGAn8XwNz3zNwER_b5l-tW24YiGrQlJH57Z" alt="Wales player ratings vs Georgia | Autumn Nations Series" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wales player ratings: On the back of a heavy loss to New Zealand and a comfortable victory over Argentina, Wales moved on to Georgia...</p></div>
            </div>
        </a><a href='https://www.walesonline.co.uk/sport/rugby/rugby-news/disastrous-wales-player-ratings-teams-25558522'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The disastrous Wales player ratings on team&#39;s darkest day against ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRfJT8QnU3Gu6OkB6b4DrClakCVjQQHyhdur2sijJRiG1xd2ZpjsK8lhWcGy7RZZwDYsOGPGUNI" alt="The disastrous Wales player ratings on team&#39;s darkest day against ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wales suffered one of their biggest rugby humiliations as they crashed at home to Georgia in Cardiff on Saturday afteroon. A 78th-minute penalty from Luke&nbsp;...</p></div>
            </div>
        </a><a href='https://www.telegraph.co.uk/rugby-union/2022/11/19/wales-v-georgia-live-score-autumn-internationals-2022-latest/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wayne Pivac on the brink after Georgia stun Wales in Cardiff</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT-TJg1EJImAEcXCjOO0FHelL2GNv_96oLwn1RO8jWYZB8Y9IY61mMwxZivDf6MmVLciUWzSbee" alt="Wayne Pivac on the brink after Georgia stun Wales in Cardiff" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pivac&#39;s contract runs out at the conclusion of the World Cup but it would be a surprise if Welsh Rugby Union chief executive Steve Phillips is not looking to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.independent.co.uk/sport/rugby/rugby-union/wales-georgia-tv-channel-time-b2227481.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Is Wales vs Georgia on TV today? Kick-off time and how to watch ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRtY8mgrfCGTnSl8fQYEifNgZ3EuIUJOYLoncylcboBxyVnMZmhWoMLhnA21vEM_YVhC7QrH9Gl" alt="Is Wales vs Georgia on TV today? Kick-off time and how to watch ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Independent&#39;s journalism is supported by our readers. When you purchase through links on our site, we may earn commission. SportRugbyRugby Union. Is Wales&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/sport/2022/nov/19/wales-georgia-autumn-nations-series-rugby-union-match-report'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Georgia create seismic rugby shock as Matkava&#39;s late penalty stuns ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTVMzk7mVcwL3NFbRqlc7Fq6Y1yhpKfnWnVNLu2qF4Sr1PxhRLrfneqrgPN6eaFmRfgZ8XJYoYJ" alt="Georgia create seismic rugby shock as Matkava&#39;s late penalty stuns ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wales suffered an embarrassing defeat as unfancied Georgia claimed a famous 13-12 Autumn Nations Series victory at the Principality Stadium.</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/rugby-union/63687627'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Georgia shock Wales with victory in Cardiff</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTyvdnIDIPh7XLM3cj9AToEBD7fFfUTy7XiEgelyf6rwk_TAobXV0sr9kLyFBQk4sPinTxd0LHA" alt="Georgia shock Wales with victory in Cardiff" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Georgia produce the finest day of their history with a shock win over woeful Wales in Cardiff.</p></div>
            </div>
        </a>
        </Template></>;
}