import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tax Audit Date Extension</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tax Audit Date Extension"/>
        <meta name="description" content="Trending News about Tax Audit Date Extension" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tax Audit Date Extension</h1>
            <Image width={800} height={500} src="https://english.cdn.zeenews.com/sites/default/files/2022/09/30/1097034-income-tax-pixabay.jpg" alt="Tax Audit Date Extension"/>
            <h3>Recent News</h3>
            <a href='https://zeenews.india.com/personal-finance/income-tax-audit-due-date-extension-for-ay-2022-23-latest-news-taxpayers-cas-demand-last-date-extension-tax-department-responds-2516305.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tax Audit Due Date for AY2022-23: Taxpayers, CAs demand last ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTkd_9N_FzjOSyiqhe6EDqdL0SN8Kz5JVdjBRcPvwjceevYGT-U0cGNwWyLUOODpuVqojDeDg09" alt="Tax Audit Due Date for AY2022-23: Taxpayers, CAs demand last ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tax Audit Date Extension: The CBDT has extended tax audit last date by a week.</p></div>
            </div>
        </a><a href='https://www.business-standard.com/article/current-affairs/i-t-department-extends-deadline-for-filing-tax-audit-report-till-oct-7-122093001467_1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I-T dept extends deadline for filing of tax audit report to Oct 7</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSJUYNYvaDXwkmGVi3_vYz9XTXEB5XgiFrGppO1CQcC2jsVcW6TDCT_B9gTlAgVWuCBKHENMJol" alt="I-T dept extends deadline for filing of tax audit report to Oct 7" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The income tax department on Friday extended the due date for filing tax audit reports for fiscal 2021-22 by 7 days till October 30.</p></div>
            </div>
        </a><a href='https://studycafe.in/tax-audit-due-date-for-ay-2022-2023-extended-by-cbdt-164023.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tax Audit Due Date for AY 2022-2023 Extended by CBDT</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTsjGcDq3VS2WUDQKnldiVF_3nLPWvJnu1AYzYfhT-SIupJDefYOB06SteNB4B9FYbtKqF8pg4n" alt="Tax Audit Due Date for AY 2022-2023 Extended by CBDT" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Central Board of Direct Taxes (CBDT) extends the due date for filing of various reports of audit for the Assessment Year 2022-23 under the Income-tax Act,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.taxscan.in/cbdt-extends-due-date-of-income-tax-audit-reports%EF%BF%BC/208844/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CBDT extends due date of Income Tax Audit Reports</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTWhCqFLuCwTqCveUtt18vXD2XbbNi5kOTzKuTpUPKNs9T4vklA96A1frUrnE5yTAFiH6ALy-Bo" alt="CBDT extends due date of Income Tax Audit Reports" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Central Board of Direct Taxes ( CBDT ) has extended the due date for filing of various reports of Income Tax Audit Reports.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/india/cbdt-extends-due-date-for-filing-audit-for-ay-22-23-to-oct-7/articleshow/94571784.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CBDT extends due date for filing audit for AY 22-23 to Oct 7</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQFXy0wLnrZj_LNI8CLIn29_yTCd7K2JxC1jAeHY9uePn5XmpJ6fFGpfgHcN3JDxSBYwruNMcd8" alt="CBDT extends due date for filing audit for AY 22-23 to Oct 7" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CBDT said it has the extension was given considering the difficulties being faced by the taxpayers and other stakeholders in filing the various reports of&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}