import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cyber Monday 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cyber Monday 2022"/>
        <meta name="description" content="Trending News about Cyber Monday 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cyber Monday 2022</h1>
            <Image width={800} height={500} src="https://media.self.com/photos/63813a4f96b3879e9f3e487f/2:1/w_1280,c_limit/Cyber%20Monday%202022%20(3).png" alt="Cyber Monday 2022"/>
            <h3>Recent News</h3>
            <a href='https://www.self.com/story/best-cyber-monday-treadmill-deals-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>49 Best Cyber Monday Treadmill Deals 2022: ProForm, Amazon ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQroNdJHfqAcwXSdU1V59Q2U60pqtHWIsA9mpzjReeXu5XJju0GQBaHV-3sL73KuIv-7fXpmmka" alt="49 Best Cyber Monday Treadmill Deals 2022: ProForm, Amazon ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Browse the best Cyber Monday treadmill deals in 2022, including discounts on NordicTrack and ProForm models at retailers like Target, Best Buy, and Amazon.</p></div>
            </div>
        </a>
        </Template></>;
}