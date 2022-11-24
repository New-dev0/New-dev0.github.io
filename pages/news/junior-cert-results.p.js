import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Junior Cert results</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Junior Cert results"/>
        <meta name="description" content="Trending News about Junior Cert results" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Junior Cert results</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/001cdf43-1600.jpg" alt="Junior Cert results"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/news/2022/1122/1337716-junior-cycle/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Over 67000 students receive Junior Cycle results</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT2SLad3FwmNalA6kK0hTWkL9WlkIJdjxazMMVVvKEFBzBpylXn7oyMQdFIK9p3l_6KUqooS8GO" alt="Over 67000 students receive Junior Cycle results" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>More than 67000 students have received the long-awaited results of their Junior Cycle exams today, five months after they sat the tests.</p></div>
            </div>
        </a><a href='https://www.nenaghguardian.ie/2022/11/23/students-receive-junior-cert-results/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Students receive Junior Cert results | Nenagh Guardian</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQGoGuxGccNsPFYSgm0n7Ss5WurtD_R6sotrd-yI75jg9tY_r9NZeOK6HKMP40x9UsdM-j8u_1C" alt="Students receive Junior Cert results | Nenagh Guardian" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The State Examinations Commission (SEC) congratulates the candidates who sat the Junior Cycle examination in 2022 and whose results issued today.</p></div>
            </div>
        </a><a href='https://www.independent.ie/irish-news/education/long-wait-is-over-for-67130-junior-cycle-students-as-results-out-today-42166135.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Junior Cert results 2022 Ireland: Long wait is over for 67130 Junior ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRAOGhMjI9E5A7B1aVuSsaymMRFJdlaiv3U99YIMO4GAkQXNXcb5Q8LqLacOKxDQO9eWUAovAwd" alt="Junior Cert results 2022 Ireland: Long wait is over for 67130 Junior ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The State Examinations Commission (SEC) has posted the results to principals, and students can also access them online at 4pm, but that is not intended to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishexaminer.com/news/arid-41012498.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Long-awaited Junior Cert results to be released today</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQGD-DdmMPZR7-AQOpByjEneY_EWWTVowZWHSkMthybMeLt2XsHcHLlu1ycBW-GN2nd6-3KD9xk" alt="Long-awaited Junior Cert results to be released today" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The State Examinations Commission (SEC) said further contingency arrangements were necessary in some subjects to complete the marking in recent weeks. The&nbsp;...</p></div>
            </div>
        </a><a href='https://www.breakingnews.ie/ireland/junior-cert-results-to-be-released-after-two-month-delay-1396050.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Junior Cert results to be released after two-month delay</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRr7ai1tRk3xy__haRL7GjTCQv_TFoONkzanaNmbmpEZo4g0upRDU71TICl0rJBzU7FSz5gIHMu" alt="Junior Cert results to be released after two-month delay" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>They were also the first to sit the full exams since 2019 after they were cancelled during the Covid pandemic. The delayed results were caused by the late&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishexaminer.com/news/munster/arid-41012567.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Junior Cert results disco in Cork cancelled</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQqxObOkUOfl7s20gSBESegSDTWgBJ8a-ESz4JvkG3EaVETHJOm2d6jGuU0fNR59qoay45qhKAO" alt="Junior Cert results disco in Cork cancelled" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Parents who bought tickets for the Mint alcohol-free teenage disco in City Hall this Wednesday night were informed by email late on Sunday night that the €35-a-&nbsp;...</p></div>
            </div>
        </a><a href='https://www.newstalk.com/news/junior-cert-results-out-today-2-1404581'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Junior Cert results out today</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTqbwF5oW6XVp9YMZrhab7ksKe95CldjQoSY_hur9Zsf5sTwpZxOTyoN77juPd5OBvlVw6pUfMk" alt="Junior Cert results out today" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>67,000 students will receive their Junior Cert results at 4pm today. Speaking to Newstalk, Minister for Education Norma Foley said it was a “positive” day&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}