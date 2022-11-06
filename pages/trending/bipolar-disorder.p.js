import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bipolar disorder</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bipolar disorder"/>
        <meta name="description" content="Trending News about Bipolar disorder" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bipolar disorder</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/11/selena-gomez.jpg" alt="Bipolar disorder"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/lifestyle/health-specials/selena-gomez-pregnancy-bipolar-disorder-8251502/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why neither Selena Gomez nor you should worry about having a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcThF410z5OoXzGPsRMfiVpLg4XxHwH66ypXrqbfG0JhO_FzWubx2IJZnLY1vM2Y5QjDja1bNb-h" alt="Why neither Selena Gomez nor you should worry about having a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There&#39;s a misconception that medication related to the condition is harmful for the baby or can result in infertility. The mother on bipolar disorder drugs&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}