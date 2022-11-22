import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Benzema</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Benzema"/>
        <meta name="description" content="Trending News about Benzema" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Benzema</h1>
            <Image width={800} height={500} src="https://cdn.punchng.com/wp-content/uploads/2022/01/24152223/Karim-Benzema.jpg" alt="Benzema"/>
            <h3>Recent News</h3>
            <a href='https://punchng.com/world-cup-no-replacement-for-injured-benzema-coach/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup: No replacement for injured Benzema – Coach</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQb964CNSeL0bbsvj27k4M3FCyFxg8DgDDLvbjyyi-4sc-p4kCjxQ_9CNTxF9ACVfD0DOupK_ix" alt="World Cup: No replacement for injured Benzema – Coach" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Defending champions France will not replace the injured Karim Benzema in their World Cup squad, coach Didier Deschamps said on Sunday.</p></div>
            </div>
        </a><a href='https://www.vanguardngr.com/2022/11/deschamps-confirms-there-will-be-no-replacement-for-benzema/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deschamps confirms no replacement for Benzema</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTf9ZQ_-RtoOfrfegPMIvapfREn3_v-FLs-Yv3YJeXAswOT08UoC6M_Xe6SdtRrmNUbtZqZ25mK" alt="Deschamps confirms no replacement for Benzema" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>France manager Didier Deschamps has said that there will be no replacement for injured Real Madrid striker Karim Benzema who was ruled out of the World Cup&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en/news/karim-benzema-reacts-ruled-out-world-cup-france-injury/blt873ad0b90470cdfe'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karim Benzema reacts to being ruled out of World Cup for France ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS1yJLuD3qjug0NsMkGj0FUO_LC6kd7Rif0Cnahh4VLGLMQ5QBYeND0dpX8bpevhhuTBlykxdGC" alt="Karim Benzema reacts to being ruled out of World Cup for France ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The striker was participating in his first session in Qatar and sustained a thigh injury before scans revealed the extent of the damage. He has now reacted to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/france-fra/story/4806724/world-cup-france-karim-benzema-suffers-injury-in-training'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karim Benzema ruled out of World Cup with injury</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSTNkk0tyv5DqxyvWFN11TNzw8ynD5IU3wEgWXlXLMNuKxeoZBHh65-N3jB6z6Lcq45kATpMaRTqQ" alt="Karim Benzema ruled out of World Cup with injury" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>France striker Karim Benzema has been ruled out of the World Cup after suffering an injury to his left thigh during training on Saturday in Doha.</p></div>
            </div>
        </a><a href='https://www.marca.com/en/world-cup/2022/11/20/6379bf0546163f28908b457e.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karim Benzema misses his third FIFA World Cup amid controversies ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTaqtT1OcI_Ohej11iJg-25jpEK6dw5bOitO6cp_u9mqKxtU-24U9OFJDJ28Slv67_iqcRO-W2_" alt="Karim Benzema misses his third FIFA World Cup amid controversies ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Three days prior to the France national team making its debut in the 2022 FIFA World Cup in Qatar, current Ballon d&#39;Or winner, Karim Benzema, pulled out of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thecable.ng/big-blow-for-france-as-benzema-gets-injured-on-eve-of-world-cup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Big blow for France as Benzema gets injured on eve of World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSrJdaNQrBN1PrpnR6Tsjm03r-4PIrVpHEwx6OfvALeuw8IXtrJsBiznmcCCuWraU8uhdX4XAfZ" alt="Big blow for France as Benzema gets injured on eve of World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Karim Benzema, France&#39;s top striker, has been ruled out of the 2022 FIFA World Cup due to a thigh injury.</p></div>
            </div>
        </a><a href='https://www.marca.com/en/football/real-madrid/2022/11/20/637a8c49e2704e349a8b460b.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Real Madrid won&#39;t make any new signings in January despite ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS5PfWfq_9u54zN1OQQBYd3JE5IPytm_anh0ats3Ql48ZNOCjirdPjBRzXqWiiDISlm3GIOsZuU" alt="Real Madrid won&#39;t make any new signings in January despite ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Real Madrid have been keeping a close eye on what&#39;s been going on with Karim Benzema in Doha. The directors have been by the Real Madrid captain&#39;s side at&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/soccer-transfers/story/4806927/transfer-talk-real-madrid-want-rafael-leao-replace-benzema'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Transfer Talk: Real Madrid want Rafael Leao to replace Benzema</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTGS40hMoHRO4YDo832qjzGP8Yz5zlL4UA_b5oUxlYOvZW4b2d_RPdK5pWVfhtcx8PwDUSpZ-gI" alt="Transfer Talk: Real Madrid want Rafael Leao to replace Benzema" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Real Madrid are two points behind Barcelona in LaLiga and need attacking reinforcements. Transfer Talk has the latest.</p></div>
            </div>
        </a><a href='https://www.bbc.com/hausa/articles/c51xw1nn92eo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qatar 2022: Benzema ba zai buga gasar Kofin Duniya ba - BBC ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSOu3WsZfgYAvYtLyrCh-DznMWrIJSPsZyE9Cr-c3NrZwbcZQGtxOi2wWH2v4pYuhB9H1XqpN8k" alt="Qatar 2022: Benzema ba zai buga gasar Kofin Duniya ba - BBC ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ɗan wasan gaba na Faransa kuma gwarzon ɗan ƙwallon duniya na bana, Karim Benzema, ba zai buga gasar Kofin Duniya da ake shirin farawa ba a yau a Qatar.</p></div>
            </div>
        </a><a href='https://www.besoccer.com/new/madrid-could-be-left-without-compensation-for-benzema-injury-1204454'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Madrid could be left without compensation for Benzema injury</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ5A4Tboms6-5IoNKOfAeOQeOnp2_N5IEYD3xdn8IIc943UFKLb1s-z23kbHmb_0I7fdivJPNbJ" alt="Madrid could be left without compensation for Benzema injury" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to &#39;Sport&#39;, the compensation paid by FIFA to the clubs of players who have suffered injuries with their national teams takes a period of absence&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}