import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tic Tac Toe</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tic Tac Toe"/>
        <meta name="description" content="Trending News about Tic Tac Toe" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tic Tac Toe</h1>
            <Image width={800} height={500} src="https://i.ds.at/UImrOw/rs:fill:1200:600/plain/2022/11/18/ttt.jpg" alt="Tic Tac Toe"/>
            <h3>Recent News</h3>
            <a href='https://www.derstandard.at/story/2000140982822/tic-tac-toe-zickenkrieg-statt-street-credibility'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tic Tac Toe: Zickenkrieg statt Street-Credibility</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQzLHfs20tl6Iz1zGQv2ayxsm7kubJCicGREDB2kEZrqeN4Nu0GOxP81e4LDC8lhCsvwOeGKRZHmQ" alt="Tic Tac Toe: Zickenkrieg statt Street-Credibility" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Band ging ausgerechnet mit einem &quot;Zickenkrieg&quot; auf einer Pressekonferenz in die Geschichte ein. Dabei haben die Rapperinnen Mädchen und junge Frauen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.n-tv.de/leute/Was-wurde-nur-aus-Tic-Tac-Toe--article23732333.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;So richtig scheiße&quot;: Was wurde nur aus Tic Tac Toe?!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTYgkF5Iv2YFhhxHAH2CsPPhlArkBlRlvtQInIXf693m0BX-gmFGw2bb_k-6CmIAesbfVIyMSon" alt="&quot;So richtig scheiße&quot;: Was wurde nur aus Tic Tac Toe?!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der 21. November 1997 ist ein denkwürdiger Tag. Und das nicht etwa, weil da die Mauer gefallen oder der Weltfrieden verkündet worden wäre.</p></div>
            </div>
        </a><a href='https://www.t-online.de/unterhaltung/stars/id_100083540/tic-tac-toe-wie-sich-das-trio-vor-25-jahren-selbst-zerstoerte.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tic Tac Toe: Wie sich das Trio vor 25 Jahren selbst zerstörte</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRlGZJreQVAKKb1Zc3Jryl5kTQnz570JEK33e8ZjIKplwh-wyvK6d_LYuAt7Sc-roCvM9V-Mqp3" alt="Tic Tac Toe: Wie sich das Trio vor 25 Jahren selbst zerstörte" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Als die Karriere von Tic Tac Toe ins Schlingern gerät, versucht das Trio Einigkeit zu demonstrieren. Der Versuch geht schief. Spektakulär schief.</p></div>
            </div>
        </a><a href='https://www.musikexpress.de/tic-tac-toe-pressekonferenz-1997-video-jazzy-lee-ricky-1157549/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Never Forget: Vor 25 Jahren fand die legendäre Pressekonferenz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ3uW__StrLripzoMKjKZ2NPylHgyJqX5y6GHhf2BubiL5gw-toGq8nhvWSMewLO5zqIMXG6OAZ" alt="Never Forget: Vor 25 Jahren fand die legendäre Pressekonferenz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am 21. November 1997 wollte die deutsche Girlgroup Tic Tac Toe in einer Pressekonferenz Einigkeit beweisen, geriet sich dabei furchtbar in die Haare – und&nbsp;...</p></div>
            </div>
        </a><a href='https://www.desired.de/artikel/25-jahre-nach-der-legendaeren-pressekonferenz-was-machen-tic-tac-toe-heute--292ch2m6p6'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>25 Jahre nach der legendären Pressekonferenz: Was machen Tic ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR948_oCSisEwLsnv7LZAh8dXmjywlf_26NMYd7SkAHnx-cM2BcXPPTo8hOxuG4520Q7rudQqYh" alt="25 Jahre nach der legendären Pressekonferenz: Was machen Tic ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die 90er-Band Tic Tac Toe war ihrer Zeit voraus. Wir sagen dir, was Lee, Ricky und Jazzy heute machen und ob ein Comeback geplant ist.</p></div>
            </div>
        </a>
        </Template></>;
}