import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nigeria Security and Civil Defence Corps</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nigeria Security and Civil Defence Corps"/>
        <meta name="description" content="Trending News about Nigeria Security and Civil Defence Corps" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nigeria Security and Civil Defence Corps</h1>
            <Image width={800} height={500} src="https://sunnewsonline.com/wp-content/uploads/2022/12/IMG-20221209-WA0073.jpg" alt="Nigeria Security and Civil Defence Corps"/>
            <h3>Recent News</h3>
            <a href='https://www.sunnewsonline.com/nscdc-tasks-private-guard-companies-on-information-gathering/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NSCDC tasks private guard companies on information gathering ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTtJUxUIJfQQqUJAkhw01UChF5doGoefa-e-jbeqncYiK4lkr8A_gn92M3g3fVhoFekboJqP6y6" alt="NSCDC tasks private guard companies on information gathering ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Nigeria Security and Civil Defence Corps (NSCDC) in Cross River, has charged the Association of Licensed Private Security Practitioners of Nigeria on&nbsp;...</p></div>
            </div>
        </a><a href='https://radionigeria.gov.ng/2022/12/09/nscdc-intercepts-2-trucks-with-rail-slippers-in-niger/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NSCDC intercepts 2 trucks with Rail Slippers in Niger - FRCN HQ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRdkoETYIuBdKiYqoIJHuEngRiqBrP_LgVnwU_gJblVskTDdI6L-LTNtwFeiKxT1GqrmVDkWtlw" alt="NSCDC intercepts 2 trucks with Rail Slippers in Niger - FRCN HQ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Niger State Command of the Nigeria Security And Civil Defence Corps NSCDC has arrested two trucks loaded with vandalised railway slippers in two local&nbsp;...</p></div>
            </div>
        </a><a href='https://dailypost.ng/2022/12/09/niger-nscdc-intercepts-two-truckloads-of-vandalised-railway-slippers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Niger NSCDC intercepts two truckloads of vandalised railway slippers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQvkYS5LpQUE7uiNfjmYF0qOQDtNI2jyE_QWxjTJ4_UQkywsZMDwmfvP1Kri8hpolmlD6Y2_bkm" alt="Niger NSCDC intercepts two truckloads of vandalised railway slippers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Niger State Command of the Nigeria Security And Civil Defence Corps, NSCDC, has intercepted two trucks loaded with vandalized railway slippers from Bosso.</p></div>
            </div>
        </a><a href='https://gazettengr.com/civil-defence-chief-tasks-private-security-companies-on-intelligence-gathering/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Civil Defence chief tasks private security companies on intelligence ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTsATAIvi1iF3Dwm6KCfY_PCkToDqtzMgT_LPpf28lwt1Cv2uzM5O7iRdA2t2ap-fk_XeewDyIU" alt="Civil Defence chief tasks private security companies on intelligence ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>He said that the private security companies had a role to play in combating security challenges by gathering and sending out timely information to security&nbsp;...</p></div>
            </div>
        </a><a href='https://gazettengr.com/civil-defence-intercepts-railway-sleepers-vandals-in-niger/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Civil Defence intercepts railway sleepers vandals in Niger</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRiMf5D93wkrTCk1CRFOwAc7zAecjx24qgM3d7O-xPj4CP9JCHOLRRAT2suWDUfPfb-4ZOq7BVn" alt="Civil Defence intercepts railway sleepers vandals in Niger" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One of the vehicles was intercepted by the command&#39;s anti-vandals squad on Paiko-Minna road, following a tip off.</p></div>
            </div>
        </a>
        </Template></>;
}