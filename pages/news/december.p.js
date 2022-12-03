import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>December</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,December"/>
        <meta name="description" content="Trending News about December" /></Head><Template>
            <h1 style={{fontSize: "30"}}>December</h1>
            <Image width={800} height={500} src="https://guardian.ng/wp-content/uploads/2022/11/afp.com-20221118-partners-075-fiuza-portugal221117_npwo5-Preview_W.jpg" alt="December"/>
            <h3>Recent News</h3>
            <a href='https://guardian.ng/opinion/letters/december-2022-insurance-advisory-avoid-any-own-goal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>December 2022 insurance advisory: Avoid any own goal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTiY7Ogd8DucZXZAG9dT30pSYL5Rd9xcT6rAj-0jp75E7SlWjRs9y5Drwumo4ryBG4YDa__09Eu" alt="December 2022 insurance advisory: Avoid any own goal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Football followers very well understand what “own goals” mean and what they can do to generations of footballers, fans, citizens and an entire country.</p></div>
            </div>
        </a><a href='https://www.saskatchewan.ca/government/news-and-media/2022/december/01/2022-winter-weights-begin-on-december-2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 Winter Weights Begin on December 2 | News and Media ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="2022 Winter Weights Begin on December 2 | News and Media ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Winter weights allow shippers to increase the weight of their loads on secondary highways to primary weight. This supports our export-based economy by&nbsp;...</p></div>
            </div>
        </a><a href='https://nigeriahealthwatch.com/latest-health-jobs-in-nigeria-published-on-1st-december-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Latest Health Jobs In Nigeria Published On 1st <b>December</b> 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSuuJ3Ylv-bXzUtN1a9w-eLbsmJrwdMDGy_Zibs31gK0tRPnrdzYcJwetNGitOHcWatQ5OL6Y0T" alt="Latest Health Jobs In Nigeria Published On 1st <b>December</b> 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Psycho-Social Support (PSS) Worker, Premiere Urgence Internationale (PUI), Borno, Deadline <b>December</b> 6, 2022. Apply; Director, Policy &amp; Public Affairs, Accord for a Healthier World, Pfizer. Apply; Mental Health and Psychosocial Support Assistant,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}