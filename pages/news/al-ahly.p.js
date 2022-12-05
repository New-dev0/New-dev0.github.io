import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Al Ahly</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Al Ahly"/>
        <meta name="description" content="Trending News about Al Ahly" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Al Ahly</h1>
            <Image width={800} height={500} src="https://www.kingfut.com/wp-content/uploads/2021/10/IMG_2624-1000x600.jpg" alt="Al Ahly"/>
            <h3>Recent News</h3>
            <a href='https://www.kingfut.com/2022/12/02/bank-al-ahly-helmy-toulan/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>OFFICIAL: Bank Al Ahly appoint Helmy Toulan as head coach</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSx439Ln4wDfw-DkSjQPnA7VHWggEhddoKMVZZ-HlD9c8o5NI-lSZ2ZgyhuFq5gb5gTP_nqwwW7" alt="OFFICIAL: Bank Al Ahly appoint Helmy Toulan as head coach" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Toulan has been coaching in the Egyptian Premier League for more than two decades, leading a number of clubs including Zamalek, Smouha, Ittihad of Alexandria,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}