import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bruce Lee</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bruce Lee"/>
        <meta name="description" content="Trending News about Bruce Lee" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bruce Lee</h1>
            <Image width={800} height={500} src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202211/16690150323630-sixteen_nine.jpg" alt="Bruce Lee"/>
            <h3>Recent News</h3>
            <a href='https://www.businesstoday.in/lifestyle/health/story/bruce-lee-had-a-sudden-death-at-age-32-due-to-drinking-too-much-water-suggests-new-study-353804-2022-11-22'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruce Lee had a sudden death at age 32 due to drinking too much ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRGpmI6lKvhTiOYz7309q4zQOpgB6FSqEtnPMNCvB0rSpQGKCwWJiDTYZFqYBSaZLyyiu39c_0f" alt="Bruce Lee had a sudden death at age 32 due to drinking too much ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In the study, published in the Clinical Kidney Journal, a group of researchers said that the martial artist died suddenly at a young age because his kidneys&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/lifestyle/health/bruce-lee-death-drinking-too-much-water-overhydration-harmful-effects-health-8282699/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruce Lee may have died from drinking too much water, new study ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS8_ZuzZJLXSUB3i_KPg4BlyofEDrc8UHNMrSq45No2lQa11dwpmy0Y_9BEUrqDkZ-E49-8w_vj" alt="Bruce Lee may have died from drinking too much water, new study ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;In other words, we propose that the kidney&#39;s inability to excrete excess water killed Bruce Lee,&quot; they wrote, adding that Lee possessed “multiple risk&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/magazines/panache/drinking-too-much-water-may-have-led-to-bruce-lees-sudden-death-at-age-32-shows-new-study/articleshow/95683485.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Drinking too much water may have led to Bruce Lee&#39;s sudden death ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTssV1qERNzw4xT-Mhiy_cx-mVpSbOex0f3EOhpBur8PWYVQhIS7sfiqytbOWjKIQoVOLYlKhYN" alt="Drinking too much water may have led to Bruce Lee&#39;s sudden death ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The actor&#39;s death has been a matter of interest for many years as Lee died under mysterious circumstances.</p></div>
            </div>
        </a><a href='https://www.koimoi.com/hollywood-news/did-bruce-lee-die-from-drinking-too-much-water-a-recent-research-reviewed-the-evidence-concluded-the-cause-of-actors-death/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Did Bruce Lee Die From Drinking Too Much Water? A Recent ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTZ1fn0cT-pjM2jhywNk-9qlguSjmo4pERsThe3uxa89nNzdmzS-ULPL9N2K3ki9LERUEsrI1wL" alt="Did Bruce Lee Die From Drinking Too Much Water? A Recent ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Martial art legend and actor Bruce Lee may have died from drinking too much water, a research claims. Read on.</p></div>
            </div>
        </a><a href='https://www.vanityfair.com/hollywood/2022/11/bruce-lee-cause-of-death-drinking-too-much-water'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruce Lee May Have Died From Drinking Too Much Water, New ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRW6NSfiRIg7nCKWUmuNg2GmUhUKEYopgVxnVqsyZMz412acbeYJHWBPXwof3531DaT4VRnR7xJ" alt="Bruce Lee May Have Died From Drinking Too Much Water, New ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Researchers proposed that Lee&#39;s previously reported brain swelling was caused by his “kidney&#39;s inability to excrete excess water.”</p></div>
            </div>
        </a><a href='https://www.avclub.com/new-research-claims-that-drinking-too-much-water-killed-1849811086'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New research claims that drinking too much water killed Bruce Lee</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQSwYwb-1sLJaqlvmfL9iwGmAZg0peGQYZRRdNOGK_CoRHiIMSQEAu9MSattn2BeD_bgyaoYSUj" alt="New research claims that drinking too much water killed Bruce Lee" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The paper proposes that Lee&#39;s kidneys failed to excrete water quickly and efficiently enough.</p></div>
            </div>
        </a><a href='https://www.indiatimes.com/trending/wtf/study-claims-bruce-lee-died-from-drinking-too-much-water-585450.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Martial Arts Legend Bruce Lee May Have Passed Away From ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQAPQrPZVCzEL1PfJ28qHDEGKHjswYsnOBe0hgkvjMINodbTMH9Gd-W2xku6fXzpL56aMXNuzNj" alt="Martial Arts Legend Bruce Lee May Have Passed Away From ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Martial arts became immensely popular in the west after the actor and martial artist from Hong Kong displayed his moves on the big screen.</p></div>
            </div>
        </a>
        </Template></>;
}