import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World Cup</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World Cup"/>
        <meta name="description" content="Trending News about World Cup" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World Cup</h1>
            <Image width={800} height={500} src="" alt="World Cup"/>
            <h3>Recent News</h3>
            <a href='https://www.vanguardngr.com/2022/11/moment-of-truth-here-for-qatar-as-fifa-world-cup-begins/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Moment of truth here for Qatar as FIFA World Cup begins</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcStoLI9XToJ6HMezg8mvw1pec74Jj35VUsORMTl-59gotisu3AFeuqaEezy52iUi2xt48QCa9um" alt="Moment of truth here for Qatar as FIFA World Cup begins" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The moment of truth for Qatar&#39;s ability to organise the FIFA World Cup after years of failed overtures and criticism over labour rights and strict laws has&nbsp;...</p></div>
            </div>
        </a><a href='https://www.marca.com/en/world-cup/2022/11/19/637959b0ca4741ce028b458e.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karim Benzema to miss 2022 FIFA World Cup in Qatar with injury ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSeObCjpze6X8t8t23YwhbvRarLJeDB0HH0s0-AkQdJjdUZ-QxEk6xylx7cjuHXF2Vvy_k4uMGV" alt="Karim Benzema to miss 2022 FIFA World Cup in Qatar with injury ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>France national team striker Karim Benzema has officially pulled out of the 2022 FIFA World Cup in Qatar due to a thigh injury. Benzema, 34, withdrew from&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vanguardngr.com/2022/11/world-cup-infantino-slams-europes-hypocrisy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup: Infantino slams Europe&#39;s &#39;hypocrisy&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRwsHnxr0ZgcOD3pB_L3JMVap70AzR0YTAs_TdIgtGJSHHm3XZ-_tio7xKEJos4LFC_NAgPG2sG" alt="World Cup: Infantino slams Europe&#39;s &#39;hypocrisy&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA president Gianni Infantino has accused the Western countries of “hypocrisy” and slammed the criticism towards World Cup hosts Qatar during his opening&nbsp;...</p></div>
            </div>
        </a><a href='https://www.premiumtimesng.com/sports/football/566371-2022-world-cup-oliseh-to-work-with-wenger-others-in-qatar.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 World Cup: Oliseh to work with Wenger, others in Qatar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQrBx1ys6eR5wcxE1p96_fGg7BeUobKRoTdqfxtzx41Rw4UZKoarQ9pwSvf6lFM2ZuIjj6LYqDp" alt="2022 World Cup: Oliseh to work with Wenger, others in Qatar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A member of Nigeria&#39;s first World Cup team to the USA in 1994, Oliseh was also a part of the Super Eagles&#39; France 1998 World Cup squad.</p></div>
            </div>
        </a><a href='https://www.channelstv.com/2022/11/19/fifa-chief-blasts-hypocrisy-of-western-nations-on-eve-of-world-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA Chief Blasts &#39;Hypocrisy&#39; Of Western Nations On Eve Of World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQpc5HpXrgaT3LHxzdETGRE9_IVEAo7rM98lI3thE-3qJc-yHjE51qMgC2XzvaNHmGS7SgCr_1O" alt="FIFA Chief Blasts &#39;Hypocrisy&#39; Of Western Nations On Eve Of World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA president Gianni Infantino blasted the “hypocrisy” of Western critics of Qatar&#39;s human rights record on Saturday, making a passionate defence of the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vanguardngr.com/2022/11/the-oldest-player-at-world-cup-2022-in-qatar%EF%BF%BC/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The oldest player at World Cup 2022 in Qatar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQAsXYmgubpZsjjHKFCYo7-VjKbgTEIeRlFM0n8Xd9xrMP7Zz4TMpc7c3T1JKHETi2BH_aoC-l1" alt="The oldest player at World Cup 2022 in Qatar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The goalkeeper of the Mexico national team, Alfredo Talavera, is the oldest player who is likely. to participate in the Qatar 2022 World Cup.</p></div>
            </div>
        </a><a href='https://www.marca.com/en/world-cup/2022/11/19/63792c8ce2704ee9378b45b6.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Akon doesn&#39;t agree with boycotting the Qatar 2022 World Cup: &#39;Life ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRpU6jR-ho57jUlc2W3OqadBTyNjK_8Y1wKsfRpdd6wHqjeqSa1LoJmq55U77uYKyNyvARlSsVI" alt="Akon doesn&#39;t agree with boycotting the Qatar 2022 World Cup: &#39;Life ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Akon is the latest celebrity to speak about the human rights violations allegations surrounding Qatar in the wake of the 2022 FIFA World Cup,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.skysports.com/football/news/12098/12751403/karim-benzema-france-striker-ruled-out-of-2022-world-cup-in-qatar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karim Benzema: France striker ruled out of 2022 World Cup in Qatar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSeSgxD8KiS0JjIcv8P1Wfi7ztFQiv9wkLQ3c1vU9p2RhxjGljhftjX9QnsWkktUFdweAJywcIQ" alt="Karim Benzema: France striker ruled out of 2022 World Cup in Qatar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>France striker Karim Benzema ruled out of 2022 World Cup with quadricep injury in huge blow for reigning champions on eve of tournament; Real Madrid forward&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/france-fra/story/4806724/world-cup-france-karim-benzema-suffers-injury-in-training'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karim Benzema ruled out of World Cup with injury</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSTNkk0tyv5DqxyvWFN11TNzw8ynD5IU3wEgWXlXLMNuKxeoZBHh65-N3jB6z6Lcq45kATpMaRTqQ" alt="Karim Benzema ruled out of World Cup with injury" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>France striker Karim Benzema has been ruled out of the World Cup after suffering an injury to his left thigh during training on Saturday in Doha.</p></div>
            </div>
        </a><a href='https://www.eurosport.co.uk/football/world-cup/2022/karim-benzema-ruled-out-of-the-world-cup-after-confirmation-of-injury-from-the-french-football-feder_sto9235146/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karim Benzema ruled out of World Cup after confirmation of injury ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFk-sil9YLwxIymzNJRgOHTfO5KV5xPy2_vuVQoAjKOhP2oGCdoKfozWhyHd6sjaeIv-eOtlf1wg" alt="Karim Benzema ruled out of World Cup after confirmation of injury ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>He joins an already lengthy list of Les Bleus absentees, with Paul Pogba, N&#39;Golo Kante, Presnel Kimpembe, Christopher Nkunku and goalkeeper Mike Maignan already&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}