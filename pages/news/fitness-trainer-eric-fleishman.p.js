import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fitness trainer Eric Fleishman</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fitness trainer Eric Fleishman"/>
        <meta name="description" content="Trending News about Fitness trainer Eric Fleishman" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fitness trainer Eric Fleishman</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221129121356-eric-fleishman-file-022214.jpg?c=16x9&q=w_800,c_fill" alt="Fitness trainer Eric Fleishman"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/11/29/entertainment/eric-the-trainer-dead-intl-scli/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eric Fleishman, celebrity fitness trainer, dead at 53</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS13dUWi1PU0YpBalCQWvCHhAvpcdM2T3NgUStbagBpxN-4TjL3fi-hy_1A62NaXXY2r2-H37zZ" alt="Eric Fleishman, celebrity fitness trainer, dead at 53" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Celebrity personal trainer Eric Fleishman has died at the age of 53. The fitness personality, known as “Eric the Trainer,” died suddenly at his home in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tvinsider.com/1071680/eric-fleishman-dies-celebrity-sweat-host-personal-trainer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eric Fleishman Dies: &#39;Celebrity Sweat&#39; Host &amp; Personal Trainer to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSaxXnYrbeg5iksIgX2TZMINZu1J6x-GpousCBNE43YKMZtM1hnslZ-5-IhiwuC00ZU9iWXmeMG" alt="Eric Fleishman Dies: &#39;Celebrity Sweat&#39; Host &amp; Personal Trainer to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to People, Fleishman, who was better known as “Eric the Trainer,” passed away on Thanksgiving at his home in Glendale, California. A cause of death&nbsp;...</p></div>
            </div>
        </a><a href='https://www.distractify.com/p/eric-fleishman-cause-of-death'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What Was Eric Fleishman&#39;s Cause of Death? Trainer Died at 53</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSnqP7dUCZtuWt4Cc3NvG8LLpuehzuKvFfHrLl9b40FRi7q7A8rPI33hjoS3svzvGqEUkIVKwNz" alt="What Was Eric Fleishman&#39;s Cause of Death? Trainer Died at 53" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Celebrity personal trainer Eric Fleishman, known as &quot;Eric the Trainer,&quot; has died suddenly at 53. What was his cause of death? Here&#39;s what we know.</p></div>
            </div>
        </a><a href='https://www.fox28spokane.com/celebrity-fitness-trainer-eric-fleishman-dead-at-53/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Celebrity fitness trainer Eric Fleishman dead at 53 | FOX 28 Spokane</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQr_3rWBZgIuIZB4_ZreV2OU3n6ibDpV17H0wG26lEwjXW1aNDL2paNrXP3IZ6XdRVb0KG3Y26V" alt="Celebrity fitness trainer Eric Fleishman dead at 53 | FOX 28 Spokane" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eric Fleishman has died at the age of 53. The celebrity fitness trainer and TV star - who was known as Eric the Trainer and had worked with the likes of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eonline.com/news/1356202/celeb-trainer-eric-fleishman-dead-at-53-james-maslow-jay-cutler-michelle-branch-and-more-pay-tribute'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Celeb Trainer Eric Fleishman Dead at 53: James Maslow, Jay Cutler ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRSLYVOuoU2Z4utBKry8rZ1Q1B_u1PXtRF_J4dtOOHT9hcmPTqk2qDC52IhKgBqLLQiqTyZGNIB" alt="Celeb Trainer Eric Fleishman Dead at 53: James Maslow, Jay Cutler ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eric Fleishman, a celebrity fitness coach, died at his Glendale, Calif., home on Nov. 24. Read on for the touching tributes from James Maslow, Jay Cutler,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}