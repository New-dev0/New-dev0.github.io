import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Qatar</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Qatar"/>
        <meta name="description" content="Trending News about Qatar" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Qatar</h1>
            <Image width={800} height={500} src="https://i.guim.co.uk/img/media/577476a72b2fb6a74e8316897aaa9d8fbbb9f0a6/0_400_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=48d7adf929f213cd4c3d89c163b40d23" alt="Qatar"/>
            <h3>Recent News</h3>
            <a href='https://www.theguardian.com/football/2022/nov/18/multiple-world-cup-sponsors-concerned-over-contracts-after-qatars-alcohol-ban'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Multiple World Cup sponsors concerned over contracts after Qatar&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRk1mmWiqUR03GLGKHB_GY54RMmzZ3JVFQQiUUYcIAdccZmawLIzmAiaf-YWNSCyPaCJPRKKCff" alt="Multiple World Cup sponsors concerned over contracts after Qatar&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Qatar&#39;s late U-turn on selling beer could affect the £63m Budweiser contract, while another major sponsor said partners feel &#39;let down by Fifa&#39;</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/18/sports/soccer/world-cup-beer-qatar.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qatar Bans Beer Sales at World Cup Stadiums</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTu7aKUKCOeTluN6Pn32Q7BkZ3HxM1f5SYzeTB6KktOhyF82u1J0NxdZJ7T8pkRcEZkVdRoC2AE" alt="Qatar Bans Beer Sales at World Cup Stadiums" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Qatar&#39;s about-face on alcohol signaled that FIFA, soccer&#39;s governing body, may no longer be in full control of its showcase championship.</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/charlesrtaylor/2022/11/18/why-qatars-about-face-on-beer-sales-at-the-world-cup-is-problematic/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why Qatar&#39;s About Face On Beer Sales At The World Cup Is ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRIkwbc95SxkU7mVdt5055sV8KvqJVt2V5X1oARDheValXUhTzKVzmTll0tmzgLH68rFcQPgkX4" alt="Why Qatar&#39;s About Face On Beer Sales At The World Cup Is ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The implications of Qatar&#39;s decision to ban most alcohol sales at World Cup 2022 matches and its impact on Budweiser as analyzed.</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/18/1137204271/qatar-world-cup-controversies'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why Qatar is a controversial host for the World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR_DP3rujLAp-owEaZvRmWQ6_f0djNwUiBJ3-kPTIRUHtX_Aed7cJfKQRTMenDouSYwUATH4BtZ" alt="Why Qatar is a controversial host for the World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA&#39;s choice of Qatar to host the World Cup has long been marred by criticism over human rights abuses, the safety of migrant workers and the logistics of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/18/1137612672/beer-ban-world-cup-qatar-fifa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA bans beer sales at Qatar&#39;s World Cup stadiums in a last-minute ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSZHuB3wwPVk63SPUlp9nuCVy1hSduXr9WaoUNmXkJOOXCOcTdnrSbMpfGvsH40RfWHSvDy-sIZ" alt="FIFA bans beer sales at Qatar&#39;s World Cup stadiums in a last-minute ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Just two days before the World Cup is set to kick off, FIFA announced that only non-alcoholic beer will be sold at the 64 matches in Qatar.</p></div>
            </div>
        </a><a href='https://www.rte.ie/news/2022/1118/1336889-world-cup-beer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA: Beer will not be sold at Qatar World Cup stadiums</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQwwposyWqMyntI0-4y_gACRaXVTHNNoetLjjfFBkkkGzjdff4kDZPKLEI-SFZw_YaQllsfm5RK" alt="FIFA: Beer will not be sold at Qatar World Cup stadiums" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The sale of alcohol to fans at World Cup stadiums in Qatar has been banned with just two days to go until the tournament kicks off, but those in hospitality&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/sports/2022/11/18/qatar-world-cup-beer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qatar, in reversal, bans alcohol sales at World Cup stadiums</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRwaUNQho_TrOQNNBP_Nynp1a8NT8G-4OBLHQaXgvuef4qsqRyFjg2X-ApD5ONaeLmYje7wHChE" alt="Qatar, in reversal, bans alcohol sales at World Cup stadiums" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Qatar strictly limits the sale of alcohol and bans its consumption in public places. It has rolled back exceptions for the World Cup.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/football/2022/nov/18/fans-paid-to-attend-world-cup-by-qatar-have-daily-allowance-cancelled'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fans paid to attend World Cup by Qatar have daily allowance ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ8E6FZHYTR_I7jrkhzEGKGfPJwfzobntmuKdltAJCS9LDO_EWRnAZaiiyVcnBi2PCcd57T3Buj" alt="Fans paid to attend World Cup by Qatar have daily allowance ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fans who have travelled to Qatar as part of a controversial paid-for supporters programme have been told by Qatari authorities that their cash has been cut.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/18/sports/soccer/qatar-world-cup-activities.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Besides Soccer, Qatar Is Packed With Activities Around the World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSCBinLeVJp61StkMPBumA75nPRR6rA3uG6V7FXFmR00vFBwIWJS95wTsZ_PMdOgZTzeNw1K8fm" alt="Besides Soccer, Qatar Is Packed With Activities Around the World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DOHA, Qatar — All eyes are on this tiny Gulf nation as the soccer-obsessed start descending this month on the eight stadiums for the FIFA World Cup,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.reuters.com/world/middle-east/world-cup-puts-spotlight-qatars-wealth-foreign-policy-2022-11-18/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Factbox: World Cup puts spotlight on Qatar&#39;s wealth and foreign policy</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQCMqTjoEOZc2n97gEY25hLev1lvmFwqG5McrkScuWyoaHJIUXuJcqBh1nljYIu6KhpLR5BpvHK" alt="Factbox: World Cup puts spotlight on Qatar&#39;s wealth and foreign policy" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DOHA, Nov 18 (Reuters) - World Cup host Qatar, an energy, investment and media powerhouse which also wields influence as a diplomatic power-broker,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}