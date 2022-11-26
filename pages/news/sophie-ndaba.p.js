import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sophie Ndaba</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sophie Ndaba"/>
        <meta name="description" content="Trending News about Sophie Ndaba" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sophie Ndaba</h1>
            <Image width={800} height={500} src="" alt="Sophie Ndaba"/>
            <h3>Recent News</h3>
            <a href='https://www.iol.co.za/lifestyle/health/sophie-ndaba-educates-her-followers-on-what-its-like-to-live-with-diabetes-247-cf65d2ba-1c99-4cf8-940f-d35e0ecd7e2f'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sophie Ndaba educates her followers on what it&#39;s like to live with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQh6gVddlhymu3cGnKpUjimEb-cESQrhxDqqdqsU5cAoSzJ6XgKKY-qZA5GJ_pu8dDkQlfpUU1P" alt="Sophie Ndaba educates her followers on what it&#39;s like to live with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>When diabetes goes unmanaged, hyperglycaemia occurs. It is referred to as high blood sugar or even elevated blood glucose. Over time, it can cause serious&nbsp;...</p></div>
            </div>
        </a><a href='https://www.news24.com/drum/celebs/news/sophie-ndaba-on-living-with-diabetes-its-not-something-you-would-wish-on-an-enemy-20221115'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sophie Ndaba on living with diabetes – &#39;It&#39;s not something you would ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRGP8J5TCzSJ1d-OHbuUdhMzelCKiL7CSoZnWaJ9zByKBK3xx-ai_xwNfCxiYCtOkkmEsTb1xRC" alt="Sophie Ndaba on living with diabetes – &#39;It&#39;s not something you would ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In that time, she&#39;s been mocked, teased, declared dead a few times and has had to educate fans and followers about the disease. Actress and businesswoman Sophie&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ecr.co.za/news/entertainment/sophie-ndaba-opens-about-living-diabetes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sophie Ndaba opens up about living with diabetes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRiTcnsORpz-qgvyq8wwzZcWgyjlEvoXYiYjXRzOdn__sy9x1P2tnNuYrN4m61XcoNy1vJVAyWP" alt="Sophie Ndaba opens up about living with diabetes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Living with this deadly disease DIABETES for almost a decade has taught me not to take life for granted,&quot; the 50-year-old wrote. Sophie&#39;s diabetes condition&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}