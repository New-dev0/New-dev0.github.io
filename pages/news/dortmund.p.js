import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dortmund</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dortmund"/>
        <meta name="description" content="Trending News about Dortmund" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dortmund</h1>
            <Image width={800} height={500} src="https://www.thisisanfield.com/wp-content/uploads/2KDTK8G-copy.jpg" alt="Dortmund"/>
            <h3>Recent News</h3>
            <a href='https://www.thisisanfield.com/2022/11/ex-dortmund-chief-scout-emerges-as-liverpool-sporting-director-candidate/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-Dortmund chief scout emerges as LFC sporting director candidate</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSOONEu1b1l9I29qf5AfngHB9S6nCtrS9oNF2K-SB9bEAUs2vH470WRBxNu-zKD04IVoU99jLyN" alt="Ex-Dortmund chief scout emerges as LFC sporting director candidate" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With Julian Ward set to leave his role as Liverpool sporting director at the end of the season, the first name to be credibly linked as a possible&nbsp;...</p></div>
            </div>
        </a><a href='https://www.empireofthekop.com/2022/11/30/florian-plettenberg-liverpool-julian-ward/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liverpool have Klopp&#39;s ex-Dortmund colleague as candidate to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTqq_CC_rbhIcuGaZw4HAsduknjCu-5IKfNnE5sOOnGswkZF55-88alO_B9pFHYRfscOn_iMR6q" alt="Liverpool have Klopp&#39;s ex-Dortmund colleague as candidate to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Liverpool have reportedly added Sven Mislintat possible candidate to the list to replace Julian Ward as sporting director in May.</p></div>
            </div>
        </a><a href='https://www.sportskeeda.com/football/news-ex-arsenal-borussia-dortmund-man-among-candidates-appointed-liverpool-s-next-sporting-director-reports'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-Arsenal and Borussia Dortmund man among candidates to be ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTpbbxH9wKFZOPTH1I7ieR_5kRQvJmyHwjTA-bUL0u3sqUT28l_z1dHDOGvKWbnCurIXs-1DvHd" alt="Ex-Arsenal and Borussia Dortmund man among candidates to be ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Liverpool are currently exploring options to appoint their new sporting director amid the imminent departure of their current director Julian Ward.</p></div>
            </div>
        </a><a href='https://www.sportsunfold.com/borussia-dortmund-reportedly-show-interest-in-us-internationals-weston-mckennie-and-christian-pulisic/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Borussia Dortmund reportedly show interest in US Internationals ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQSAUKp1uVzS9A63lvAqrC94z4-BPH4-ArpPpMrLfct4YSZZ1z44ydlZYHrr2tA-FLEwK6GEuKx" alt="Borussia Dortmund reportedly show interest in US Internationals ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The move would likely come after the 2022/23 season runs its course, as Chelsea seem like they would be willing to let the player go before his contract is&nbsp;...</p></div>
            </div>
        </a><a href='https://www.101greatgoals.com/news/who-is-sven-mislintat-dortmunds-diamond-eye-linked-with-liverpools-sporting-director-role/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who is Sven Mislintat? Dortmund&#39;s &#39;Diamond Eye&#39; linked with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTYa4CH0Gw8oYQvgPWROyTGh2qH-ukAk44yJOZ5rzLol7s1kPIas_Eqi943Ck8OExm9D4THrO9F" alt="Who is Sven Mislintat? Dortmund&#39;s &#39;Diamond Eye&#39; linked with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Liverpool have been left rocked by the quickfire double departure of Michael Edwards and successor Julian Ward from the club hierarchy in what has been a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fearthewall.com/2022/11/30/23485203/bvb-alumni-spotlight-maximilian-philipp-borussia-dortmund-bundesliga'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BVB Alumni Spotlight: Maximilian Philipp</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS_9D5wSoAxZNZ8zWjNXGxMJN1Py3kU_VZzUryX1uBxT1VgPqWx0hxQ72LBLjVnVtoGUifqciYy" alt="BVB Alumni Spotlight: Maximilian Philipp" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>I&#39;m sure you have all been keeping plenty occupied with the ongoing FIFA World Cup and the many exciting matches it has already provided us. Still, I have found&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/sport/football/article-11486595/Former-Arsenal-sporting-director-Sven-Mislintat-wanted-Liverpool-replace-Julian-Ward.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Former Arsenal sporting director Sven Mislintat &#39;is wanted by ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSPKPtxxeuRhG9fYC5zj1Vil_zwEHEpliAGpzW9hM_A8uaoUoaF6FP5Uzq4cT-6dAIa9vNN7D1N" alt="Former Arsenal sporting director Sven Mislintat &#39;is wanted by ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The former Dortmund chief scout is currently with fellow Bundesliga outfit Stuttgart as their sporting director, but reports from Sky&#39;s Florian Plettenberg&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hitc.com/en-gb/2022/11/30/liverpool-sven-mislintat-arsenal-dortmund-stuttgart/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Reporter who broke Mane exit says &#39;diamond eye&#39; could rejoin ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSshadWFq9nEmkT90SDPoOPPMwb-c_3nt68OuhXhTpFu_qJO45Fxznb_zYsgjO0GG3a4sty4n7K" alt="Reporter who broke Mane exit says &#39;diamond eye&#39; could rejoin ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sven Mislintat is a major candidate to replace Julian Ward as Liverpool&#39;s sporting director amid a strong relationship with Jurgen Klopp.</p></div>
            </div>
        </a>
        </Template></>;
}