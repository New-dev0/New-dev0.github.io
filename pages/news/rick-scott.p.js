import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rick Scott</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rick Scott"/>
        <meta name="description" content="Trending News about Rick Scott" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rick Scott</h1>
            <Image width={800} height={500} src="https://static.politico.com/28/73/1e8939754b97b15fe67e7b718098/2022-1115-rick-scott-3200-1-edit.jpg" alt="Rick Scott"/>
            <h3>Recent News</h3>
            <a href='https://www.politico.com/news/2022/11/15/mcconnell-leadership-challenges-midterms-2022-00066984'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>McConnell faces leadership challenge from Rick Scott as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT0pRvua0g5xhVnGEcPaIwkulbd6emLVRTArkEhkjIgYnb4z2tRH-a78aNBbILljTRbfZPyqZ67" alt="McConnell faces leadership challenge from Rick Scott as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Senate GOP campaign chief mounted his opposition, expected to fall short, after Republicans&#39; disappointing midterm performance provoked a tremendous&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/15/politics/rick-scott-challenges-mitch-mcconnell/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rick Scott will challenge Mitch McConnell for Senate Republican ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQdSDEvTWmcX5MwdsvChE_MW0p3A207qPl3EH5DLfhzcznm5SzpXVidhppLhSlAWr5wWdkyuT5d" alt="Rick Scott will challenge Mitch McConnell for Senate Republican ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sen. Rick Scott of Florida will challenge Senate Minority Leader Mitch McConnell for his powerful post after the Republicans failed to win back the majority&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nbcnews.com/politics/congress/sen-rick-scott-will-challenge-mcconnell-top-senate-leadership-post-rcna57312'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sen. Rick Scott will challenge McConnell for top Senate GOP ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR9sOx01umt5Sxnq248mQyXJsGuJZf9U7UkO07cZMHF_OlV1XyPWHLM9F_KKeuAqg0TMQLpHz-_" alt="Sen. Rick Scott will challenge McConnell for top Senate GOP ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sen. Rick Scott announced a challenge to Sen. Mitch McConnell for the top Senate Republican leadership job.</p></div>
            </div>
        </a><a href='https://www.pbs.org/newshour/politics/gop-sen-rick-scott-mounts-long-shot-bid-to-unseat-mitch-mcconnell'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>GOP Sen. Rick Scott mounts long-shot bid to unseat Mitch McConnell</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRCZLiTAIg2gnhZmshZr-SajuIUQOoz7t7BZYTQ9bLMe6l-_DcxWssQPzxTyw6x92fFN-FaXY05" alt="GOP Sen. Rick Scott mounts long-shot bid to unseat Mitch McConnell" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Florida Sen. Rick Scott is mounting a long-shot bid to unseat Senate Republican leader Mitch McConnell, a rare challenge for the longtime GOP stalwart after&nbsp;...</p></div>
            </div>
        </a><a href='https://www.axios.com/2022/11/15/senate-gop-leader-mitch-mcconnell-rick-scott'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rick Scott to challenge Mitch McConnell for Senate GOP leader</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTs-rnXBZToPmSrIWO4NQZPtTKSxbO8C6Okrn9arqUucX7XxgP5qnllAh3EC0EfGomhTGCv9a_A" alt="Rick Scott to challenge Mitch McConnell for Senate GOP leader" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The challenge comes as Senate Republicans are examining their mistakes in the lead-up to the midterm elections.</p></div>
            </div>
        </a><a href='https://www.cnbc.com/2022/11/15/sen-rick-scott-will-challenge-mcconnell-for-top-senate-leadership-post.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sen. Rick Scott will challenge McConnell for top Senate leadership ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ8FoZra9TRqqxWqgAyQ4ZaIelEk-siClNPvg6iqzsd-FjOTJqq1Ndmp3MCHN376s4yMHG19Wq-" alt="Sen. Rick Scott will challenge McConnell for top Senate leadership ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>McConnell faced discontent from his members after Democrats held control of the Senate in last week&#39;s election.</p></div>
            </div>
        </a>
        </Template></>;
}