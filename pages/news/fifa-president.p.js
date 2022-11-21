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
            <Image width={800} height={500} src="" alt="FIFA President"/>
            <h3>Recent News</h3>
            <a href='https://www.vanguardngr.com/2022/11/amnesty-international-reacts-over-fifa-president-infantinos-bomshell/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amnesty International reacts over FIFA president Infantino&#39;s bomshell</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT1VROfAtXSyVROTKqCQ7As0ydqzf4R7VVEKUzv7cOip5UHuw9TCSQaWYZtn-cjr-DRwPwoZ33O" alt="Amnesty International reacts over FIFA president Infantino&#39;s bomshell" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amnesty stated, “Gianni Infantino is dismissing the enormous price paid by migrant workers to make his flagship tournament possible – as well as FIFA&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.skysports.com/football/news/11095/12751851/gary-neville-fifa-president-gianni-infantino-the-worst-face-for-the-2022-qatar-world-cup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gary Neville: FIFA president Gianni Infantino &#39;the worst face&#39; for the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSsChumTG5kzYHFtBBnnZxxBV3JmZFDx30KYrVoDdidlrGiOubu6w_EqRJFR58t3pS7_n3nG1AZ" alt="Gary Neville: FIFA president Gianni Infantino &#39;the worst face&#39; for the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sky Sports News senior reporter Melissa Reddy in Qatar on Infantino&#39;s press conference: &quot;What absurd, offensive, misleading thing did he not say?</p></div>
            </div>
        </a><a href='https://www.eurosport.com/football/world-cup/2018/gary-neville-hits-out-at-fifa-president-gianni-infantino-as-world-cup-begins-a-terrible-face-for-foo_sto9237481/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022: Gary Neville hits out at FIFA president Gianni ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR_krd5xhVbSFrqeYYuZsJXCkirv_He196tCEfrMif17k6d1xDXocSDR66pGj9-TrerzuqiCJM4" alt="World Cup 2022: Gary Neville hits out at FIFA president Gianni ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gary Neville has slammed Gianni Infantino as &quot;the worst face&quot; to represent the Qatar World Cup following the FIFA president&#39;s controversial monologue.</p></div>
            </div>
        </a><a href='https://english.elpais.com/sports/2022-11-20/fifa-president-defends-qatar-world-cup-slams-western-hypocrisy.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA president defends Qatar World Cup, slams Western &#39;hypocrisy&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSsrpwnrPsLqC6oqMTr4a3MdRUQljWOLHeFQONU_2ygpsjH2g4NuebAmdOq7Rs3TOyr9rAi2uLE" alt="FIFA president defends Qatar World Cup, slams Western &#39;hypocrisy&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In response to complaints about the host nation&#39;s human rights record, Gianni Infantino says that Europeans &#39;should be apologizing for the next 3000 years&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/19/football/gianni-infantino-press-conference-qatar-2022-world-cup-spt-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Explosive tirade from FIFA boss threatens to overshadow World Cup ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTDMjeWj7nyxPb7ZTI40YvhNZJVxcfYiRW1NnYmw3k0x1rUZJ6r4i5BsApMpn-9WtmrAn5ge5-p" alt="Explosive tirade from FIFA boss threatens to overshadow World Cup ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The World Cup finally gets underway on Sunday after 12 years of questions and criticisms of the tournament being held in Qatar. But though kickoff for the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.manchestereveningnews.co.uk/sport/football/football-news/gary-neville-infantino-world-cup-25563534'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manchester United icon Gary Neville likens FIFA president Gianni ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRY59NBpTCJSXMzJECAtT0rQRGL39oWu81EsPSNscUixR7IBLJ7uYgZSnR99zJmzq0uukuu83iZ" alt="Manchester United icon Gary Neville likens FIFA president Gianni ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The former Manchester United defender did not hold back with his criticism of the head of FIFA.</p></div>
            </div>
        </a>
        </Template></>;
}