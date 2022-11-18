import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Google jobs</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Google jobs"/>
        <meta name="description" content="Trending News about Google jobs" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Google jobs</h1>
            <Image width={800} height={500} src="https://i.insider.com/63766b1d4b77250011994c7f?width=1200&format=jpeg" alt="Google jobs"/>
            <h3>Recent News</h3>
            <a href='https://www.businessinsider.com/google-layoffs-performance-rating-jobs-2022-11'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>10000 Google jobs may be at risk through performance rating system</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSeW-KIj6c9o28v0LREwXhkWvznxngVmblPvQmI88_RnkVyNezvkJRsEGeRPwqt38KqfhgaZFUk" alt="10000 Google jobs may be at risk through performance rating system" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Google&#39;s new performance rating system would give more employees the lowest scores, potentially giving the company an excuse to show them the door.</p></div>
            </div>
        </a><a href='https://www.theinformation.com/articles/10-000-google-employees-could-be-rated-as-low-performers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>10000 Google Employees Could Be Rated as Low Performers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ2_Vly_XfP1o2P0qW8MKfuXqbFMBLiP1jJnCeFa-ZcOLJJA9Nxbtg2ikUEBSBpge1C4hixhqBO" alt="10000 Google Employees Could Be Rated as Low Performers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>But as outside pressure builds on the company to improve the productivity of its workers, a new performance management system could help managers push out&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}