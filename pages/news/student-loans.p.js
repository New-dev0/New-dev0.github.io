import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Student loans</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Student loans"/>
        <meta name="description" content="Trending News about Student loans" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Student loans</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221122151808-college-graduates-file-051718.jpg?c=16x9&q=w_800,c_fill" alt="Student loans"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/11/22/politics/student-loan-repayment-freeze-extended/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biden extends student loan repayment freeze as forgiveness ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS8nzp5Af6qOK0bmrXVo8oj4pRyzynIXmK4DZGxkEW_sx3XrvP06lKL43HdlhIyP5qAwYllwiEf" alt="Biden extends student loan repayment freeze as forgiveness ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Biden administration is yet again extending the pause on federal student loan payments, a benefit that began in March 2020 to help people who were&nbsp;...</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/22/1138724532/with-student-loan-relief-tied-up-in-court-biden-extends-repayments-a-few-months'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>With student loan relief tied up in court, Biden extends repayment ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSv0ghApNlfM9aXUfIE2wJF_JFODb29UvEZkCyJQFq9RU23CTG0w4jCFd7pYPIJ32Sz6CP7bYvG" alt="With student loan relief tied up in court, Biden extends repayment ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The president has extended the student loan repayment pause into 2023. Biden said he wants to give lawsuits against debt cancellation time to play out,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ed.gov/news/press-releases/biden-harris-administration-continues-fight-student-debt-relief-millions-borrowers-extends-student-loan-repayment-pause'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biden-Harris Administration Continues Fight for Student Debt Relief ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Biden-Harris Administration Continues Fight for Student Debt Relief ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Today, the U.S. Department of Education announced an extension of the pause on student loan repayment, interest, and collections.</p></div>
            </div>
        </a><a href='https://www.cnbc.com/2022/11/22/biden-administration-will-extend-student-loan-debt-repayment-holiday-to-june-reports-say.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biden administration to extend payment pause on student loans until ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQUwnum7jfKzmFAwrI4Fj2XDbco4u6KowbB8hN0UUmvHFwxDAvGKpbFyyu00nnQ97aAyfgyMUzh" alt="Biden administration to extend payment pause on student loans until ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Biden administration announced that it will extend the payment pause on federal student loans while its forgiveness plan remains blocked in the courts.</p></div>
            </div>
        </a><a href='https://abcnews.go.com/Politics/president-biden-extends-moratorium-student-loan-payments/story?id=93815609'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>President Biden extends moratorium on student loan payments</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTZ6fm6Fk0ZHlzEPeyll9NSiSfOxXxO1uTCGw_48e-SIYbXY4CiSg8Wpsz8os3ePcUsRg_kSEb8" alt="President Biden extends moratorium on student loan payments" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;It isn&#39;t fair to ask tens of millions of borrowers eligible for relief to resume their student debt payments while the courts consider the lawsuits. For that&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/education/2022/11/22/student-loan-payment-pause-extension/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Student loan-payment freeze extended as courts weigh debt relief</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ0tO3HbF2YKiD2vC1YMI2S7e4t1kvlrW5Sj5nYFMP3QqDEI2Pcls38AmSR5mRuJB48pTuDZd6o" alt="Student loan-payment freeze extended as courts weigh debt relief" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Biden administration announced Tuesday that it will expend a pandemic-era pause on federal student loan payments again as courts weigh the fate of its&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}