import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Theranos CEO Elizabeth Holmes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Theranos CEO Elizabeth Holmes"/>
        <meta name="description" content="Trending News about Theranos CEO Elizabeth Holmes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Theranos CEO Elizabeth Holmes</h1>
            <Image width={800} height={500} src="https://www.gannett-cdn.com/presto/2022/01/04/USAT/3cbd8368-3a58-45ae-b8e5-199d80a3c1a1-GTY_1359364109.jpg?auto=webp&crop=4164,2342,x0,y140&format=pjpg&width=1200" alt="Theranos CEO Elizabeth Holmes"/>
            <h3>Recent News</h3>
            <a href='https://www.usatoday.com/story/tech/2022/11/17/elizabeth-holmes-theranos-ceo-sentencing/10718626002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Theranos CEO Elizabeth Holmes faces sentencing for investor fraud ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQMbawxeXTvJxkAgzRZAVb9orEIrtyys6ozT5eCF9ReqNRfdDJkarGSIxweDAZwYAnB6ULE81rd" alt="Theranos CEO Elizabeth Holmes faces sentencing for investor fraud ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The federal government wants the 38-year-old Elizabeth Holmes to be sentenced to 15 years in prison. Holmes&#39; lawyers are seeking much less.</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/news/elizabeth-holmes-sentencing-friday-theranos-trial/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Former Theranos CEO Elizabeth Holmes set to be sentenced</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSYu3YSEz74aLchyYbkaFR2fq49HKxDn3KUuwhbPf7NUADBQpYxdiju_qwH63-TqJXqdTRGXn9w" alt="Former Theranos CEO Elizabeth Holmes set to be sentenced" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prosecutors have called for the disgraced executive to serve 15 years, while her lawyers say she doesn&#39;t belong behind bars.</p></div>
            </div>
        </a><a href='https://www.wsj.com/articles/elizabeth-holmes-theranos-fraud-sentencing-11668652617'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Convicted Theranos Founder Elizabeth Holmes to Be Sentenced ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQQjuLkOOna6Rw-KxR0fnc25QshFTOsKPVueyLStJnpa4VWsfzb41_i8az5jGILPuNVcaZcQenL" alt="Convicted Theranos Founder Elizabeth Holmes to Be Sentenced ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Judge who oversaw criminal-fraud trial has broad legal discretion amid lawyer recommendations, precedent.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/17/technology/elizabeth-holmes-sentencing-theranos.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elizabeth Holmes to be Sentenced in Fraud Trial</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTgsSs8OJcWiYZ7tciWbYHffOCPDLHq-DoYZ6hECl3rFkVzpVY0rmEEOpzW-UmsFUnO7YrNPi7L" alt="Elizabeth Holmes to be Sentenced in Fraud Trial" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ms. Holmes, founder of the failed blood testing start-up Theranos, is scheduled to learn her fate on Friday. She faces a maximum of 20 years in prison.</p></div>
            </div>
        </a><a href='https://finance.yahoo.com/news/elizabeth-holmes-sentencing-theranos-222120101.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elizabeth Holmes sentencing: Theranos founder faces up to 20 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT_lQkdq1z9__OB0JSLJyVyrOew_QMJD0cwKJAaRtHB7Aeafjx813Vqi2Wpzs8oh586RuEB97bV" alt="Elizabeth Holmes sentencing: Theranos founder faces up to 20 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elizabeth Holmes is scheduled to appear in court in San Jose on Friday for a sentencing hearing.</p></div>
            </div>
        </a><a href='https://www.newsweek.com/how-much-prison-time-elizabeth-holmes-facing-theranos-fraud-1760462'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How Much Prison Time Is Elizabeth Holmes Facing for Theranos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSVl0JqcbMQLQdvELs8zAATgc5U1S7AWSzFdj6ZaEww7IzlHb1LMo0Vqh92NYvsB_JTyLclxkUH" alt="How Much Prison Time Is Elizabeth Holmes Facing for Theranos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The disgraced former CEO will be sentenced this week after being convicted of fraud and conspiracy earlier this year.</p></div>
            </div>
        </a>
        </Template></>;
}