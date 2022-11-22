import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>FIFA President</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,FIFA President"/>
        <meta name="description" content="Trending News about FIFA President" /></Head><Template>
            <h1 style={{fontSize: "30"}}>FIFA President</h1>
            <Image width={800} height={500} src="https://www.hrw.org/sites/default/files/styles/opengraph/public/media_2022/11/202211mena_qatar_fifa_gianni_infantino_world_cup_conference.jpg?h=19216e0f&itok=rhJPDp63" alt="FIFA President"/>
            <h3>Recent News</h3>
            <a href='https://www.hrw.org/news/2022/11/21/fifa-presidents-i-feel-migrant-worker-speech-misleading'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA President&#39;s &#39;I Feel Like a Migrant Worker&#39; Speech Misleading</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS1SeEKdqq5AcBRwRUqNfr-YD7E9wD5vVY3p-szrasvZoOtUP9b_E742Ue9dk7Xf7sDSjRuYZTK" alt="FIFA President&#39;s &#39;I Feel Like a Migrant Worker&#39; Speech Misleading" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>At a November 19 press conference, on the eve of the 2022 World Cup, FIFA President Gianni Infantino delivered a diatribe rife with “whataboutism” meant to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vanguardngr.com/2022/11/amnesty-international-reacts-over-fifa-president-infantinos-bomshell/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amnesty International reacts over FIFA president Infantino&#39;s bomshell</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT1VROfAtXSyVROTKqCQ7As0ydqzf4R7VVEKUzv7cOip5UHuw9TCSQaWYZtn-cjr-DRwPwoZ33O" alt="Amnesty International reacts over FIFA president Infantino&#39;s bomshell" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amnesty International has reacted to the FIFA president Gianni Infantino&#39;s comments, lambasting the Western critics of Qatar&#39;s human rights record over what&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurosport.com/football/world-cup/2018/gary-neville-hits-out-at-fifa-president-gianni-infantino-as-world-cup-begins-a-terrible-face-for-foo_sto9237481/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022: Gary Neville hits out at FIFA president Gianni ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTWhDCsW7cIaMRd-P3N4EfvkWfUjiqJftA8800WaF2lQsfMF6sl_XujzwVBZjGYCUiHQE1vRWOW" alt="World Cup 2022: Gary Neville hits out at FIFA president Gianni ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gary Neville has slammed Gianni Infantino as &quot;the worst face&quot; to represent the Qatar World Cup following the FIFA president&#39;s controversial monologue.</p></div>
            </div>
        </a><a href='https://www.skysports.com/football/news/11095/12751851/gary-neville-fifa-president-gianni-infantino-the-worst-face-for-the-2022-qatar-world-cup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gary Neville: FIFA president Gianni Infantino &#39;the worst face&#39; for the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSsChumTG5kzYHFtBBnnZxxBV3JmZFDx30KYrVoDdidlrGiOubu6w_EqRJFR58t3pS7_n3nG1AZ" alt="Gary Neville: FIFA president Gianni Infantino &#39;the worst face&#39; for the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sky Sports News senior reporter Melissa Reddy in Qatar on Infantino&#39;s press conference: &quot;What absurd, offensive, misleading thing did he not say?</p></div>
            </div>
        </a><a href='https://www.wionews.com/sports/the-western-hypocrisy-instances-which-prove-fifa-president-gianni-infantino-right-536121'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Western hypocrisy? Glaring instances which might prove FIFA ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTAEDtdtaWbPjtHTcXXdLSpxjmF6nENx-8_ig7p-uDJo4OoWzSvGPLcjtsEe0hi4D_QMbYysdDA" alt="The Western hypocrisy? Glaring instances which might prove FIFA ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The FIFA World Cup 2022 edition finally kicked off in Qatar on November 20. While the mega event was eagerly awaited, a lot of things have made the&nbsp;...</p></div>
            </div>
        </a><a href='https://english.elpais.com/sports/2022-11-20/fifa-president-defends-qatar-world-cup-slams-western-hypocrisy.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA president defends Qatar World Cup, slams Western &#39;hypocrisy&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSsrpwnrPsLqC6oqMTr4a3MdRUQljWOLHeFQONU_2ygpsjH2g4NuebAmdOq7Rs3TOyr9rAi2uLE" alt="FIFA president defends Qatar World Cup, slams Western &#39;hypocrisy&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In response to complaints about the host nation&#39;s human rights record, Gianni Infantino says that Europeans &#39;should be apologizing for the next 3000 years&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}