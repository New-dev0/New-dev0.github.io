import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Vikings</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Vikings"/>
        <meta name="description" content="Trending News about Vikings" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Vikings</h1>
            <Image width={800} height={500} src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/jets/eb1l8uumdj4ovwrim3ee" alt="Vikings"/>
            <h3>Recent News</h3>
            <a href='https://www.newyorkjets.com/news/jets-vikings-game-recap-jets-rally-late-but-not-enough-fall-to-vikings-27-22'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jets-Vikings Game Recap | Jets Rally Late but Not Enough, Fall to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT0arB9_ArUy1_2Pl1nMX1XB1jrC1TbPqWXwhyguqFC_WwzDSDBvDgTCQQuwLErGIazAtJWkauE" alt="Jets-Vikings Game Recap | Jets Rally Late but Not Enough, Fall to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mike White, Offense Score 1st TD with 6:45 Left, Can&#39;t Punch In 2nd TD in 2 RZ Drives in Final 2 Minutes.</p></div>
            </div>
        </a><a href='https://www.vikings.com/news/vikings-vs-jets-week-13-inactives'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vikings vs. Jets Week 13 Inactives</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTgXB-4e77jX5o2ynNVDVhGU8v1qYIPwKohhoq5Qpaq5-BBaplBjbD0BTC_5Amz8dGxn_Ce-C0z" alt="Vikings vs. Jets Week 13 Inactives" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Minnesota Vikings (9-2) on Sunday announced the following players will be inactive against the New York Jets (7-4) in Week 13:.</p></div>
            </div>
        </a><a href='https://www.fox9.com/sports/minnesota-vikings-vs-new-york-jets-week-13-game-post'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vikings hold off Jets 27-22 to improve to 10-2, clinch share of NFC ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQWqIJFiBRqv6BOOsbjLFoYOKYPPecNL19eXlVYeUUwsPHkZlK6znUeukyJUrBP-36AgfOYF7Je" alt="Vikings hold off Jets 27-22 to improve to 10-2, clinch share of NFC ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It&#39;s never easy for the Minnesota Vikings, but they&#39;re 10-2 after a 27-22 win over the New York Jets on Sunday in yet another one-score game at U.S. Bank&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/fannation/bringmethesports/vikings/5-things-that-stood-out-in-the-vikings-win-over-the-jets'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>5 things that stood out in the Vikings&#39; win over the Jets</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRmT_1LwhoFWqoabqJBZHAsCOYE0jOtSXkCUH1c0x6dAy0yxruZ71IQU9-mh0P61ZvDEVtA_w2V" alt="5 things that stood out in the Vikings&#39; win over the Jets" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Vikings are a win next week in Detroit from clinching the NFC North.</p></div>
            </div>
        </a><a href='https://jetswire.usatoday.com/2022/12/04/red-zone-woes-doom-jets-in-27-22-loss-to-vikings/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Red-zone woes doom Jets in 27-22 loss to Vikings</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTqzGcplfMG36rPFq7JkRFsUIVSmG5TRxazO9ORjzKjESNJ5LSVEpeO7Pac4nODNr6eDdO2ipB_" alt="Red-zone woes doom Jets in 27-22 loss to Vikings" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The New York Jets went 1/6 in the red zone in their 27-22 Week 13 loss to the Minnesota Vikings.</p></div>
            </div>
        </a><a href='https://www.espn.com/nfl/recap/_/gameId/401437879'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jets vs. Vikings - Game Recap - December 4, 2022 - ESPN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSroj9TZpusXCEGK_auF4HfyUyO0LBKrq2eAUt-yIi4RoyeONO5P5Q1hNdO98OpEImbc02fzpAH" alt="Jets vs. Vikings - Game Recap - December 4, 2022 - ESPN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MINNEAPOLIS -- — Justin Jefferson&#39;s touchdown catch with 8:33 left gave the Minnesota Vikings enough of a lead to hang on for a 27-22 victory despite a&nbsp;...</p></div>
            </div>
        </a><a href='https://vikingswire.usatoday.com/2022/12/04/vikings-akayleb-evans-sent-off-by-officials-after-hard-collision/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vikings&#39; Akayleb Evans sent off by officials after hard collision</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRfhH3bl0Hp6qoyP1Ex_z4jwpI2mu4giaVnqwvP7oTymiS_j0K6PzyMEoEhQTA4Pcc0pBSIS8Cb" alt="Vikings&#39; Akayleb Evans sent off by officials after hard collision" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In his first game back from suffering a concussion against the Buffalo Bills back on November 13th, things didn&#39;t quite go as planned for Akayleb Evans.</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/vikings/news/vikings-akayleb-evans-ok-after-leaving-game-concussion-symptoms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vikings&#39; Akayleb Evans Says He&#39;s OK After Leaving Game With ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSY4oMl9XpW4WOmVzOMm86C1FUIbICP-dZG9aLG1N1bJlTlZBusW3hfE5yDttEp5gVHxMfJ_8OW" alt="Vikings&#39; Akayleb Evans Says He&#39;s OK After Leaving Game With ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vikings rookie cornerback Akayleb Evans made his second career start on Sunday, returning from missing the last two games with a concussion.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/fantasy/football/news/vikings-akayleb-evans-evaluated-for-concussion-sunday/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vikings&#39; Akayleb Evans: Evaluated for concussion Sunday</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Vikings&#39; Akayleb Evans: Evaluated for concussion Sunday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Evans was evaluated for a concussion during Sunday&#39;s 27-22 win over the Jets, Alec Lewis of The Athletic reports. Evans was making his return from a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}