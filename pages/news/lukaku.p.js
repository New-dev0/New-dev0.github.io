import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lukaku</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lukaku"/>
        <meta name="description" content="Trending News about Lukaku" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lukaku</h1>
            <Image width={800} height={500} src="" alt="Lukaku"/>
            <h3>Recent News</h3>
            <a href='https://football-italia.net/inter-striker-lukaku-back-in-training-with-belgium-at-world-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Inter striker Lukaku back in training with Belgium at World Cup ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTKj_ydgCK_E0tqFgC7govWOFIK6nHZuVHusLanJPPHkAqltJkHeJIQtHwxwD_Mxjj5tzEmZYJw" alt="Inter striker Lukaku back in training with Belgium at World Cup ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Belgium manager Roberto Martinez confirms Romelu Lukaku is back training with the full squad, but won&#39;t say yet whether the Inter striker can start against.</p></div>
            </div>
        </a><a href='https://www.beinsports.com/au/2022-fifa-world-cup/news/lukaku-back-in-belgium-training/1993084'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lukaku back in Belgium training</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR1TXpaRQ2Li7s4HQYhoLXX-P5px9qSqAvZlmVxtfF-SWhnoJCK2bmGPRbE-_a3_US0SwpoElj_" alt="Lukaku back in Belgium training" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Romelu Lukaku is unlikely to start Belgium&#39;s second World Cup fixture against Morocco despite making his return to team training, according to head coach&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moroccoworldnews.com/2022/11/352565/belgiums-romelu-lukaku-may-be-ready-to-play-against-morocco'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Belgium&#39;s Romelu Lukaku &#39;May Be Ready&#39; to Play Against Morocco</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTi6rx02iI4-jhNvSio-lpPeN9Ovpi4LsXUaSohuiXZ_otitiixEhTaMYaVXu0tKiX6fPqE-dKC" alt="Belgium&#39;s Romelu Lukaku &#39;May Be Ready&#39; to Play Against Morocco" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lukaku suffered an injury to his left thigh on October 31, just three weeks ahead of the World Cup during a match with his Italian club Inter Milan. Credit:&nbsp;...</p></div>
            </div>
        </a><a href='https://sempreinter.com/2022/11/24/belgium-coach-roberto-martinez-inters-romelu-lukaku-back-training-with-the-group-dont-think-hell-start-against-morocco/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Belgium Coach Roberto Martinez: &quot;Inter&#39;s Romelu Lukaku Back ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQSXWKzIdyGa5vmpWLVsKi4dyf4NPh_JliSZ3LaPgqR_vZPVsbVEyWzDro2zz2il6iD5uZXktS_" alt="Belgium Coach Roberto Martinez: &quot;Inter&#39;s Romelu Lukaku Back ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Belgian national team head coach Roberto Martinez does not expect Inter striker Romelu Lukaku to start for the Red Devils against Morocco on Sunday,</p></div>
            </div>
        </a><a href='https://www.yardbarker.com/soccer/articles/belgium_optimistic_inter_striker_romelu_lukaku_fit_for_fifa_world_cup_group_stage_clash_with_morocco_italian_media_report/s1_17130_38164436'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Belgium Optimistic Inter Striker Romelu Lukaku Fit For FIFA World ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Belgium Optimistic Inter Striker Romelu Lukaku Fit For FIFA World ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Belgian national team are optimistic that Inter striker Romelu Lukaku will be fit to be part of the squad for the team&#39;s second group stage match&nbsp;...</p></div>
            </div>
        </a><a href='https://latestnews.fresherslive.com/articles/what-happened-to-lukaku-is-lukaku-leaving-chelsea-romelu-lukaku-height-weight-age-family-biography-injury-1106387'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What Happened To Lukaku? Is Lukaku Leaving Chelsea? Romelu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQccxw44mD0MSb2AWgeK9Xdsf8oYrn8srjesHjyCHpJUw5s0d5HFgOJmy48Kq9CrEZ23QjpFLam" alt="What Happened To Lukaku? Is Lukaku Leaving Chelsea? Romelu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>What Happened To Lukaku: Romelu Lukaku Bolingoli is a Belgian professional footballer who was born May 13, 1993, and plays as a striker for Serie A club&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}