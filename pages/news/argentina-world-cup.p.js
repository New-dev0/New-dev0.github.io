import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Argentina World Cup</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Argentina World Cup"/>
        <meta name="description" content="Trending News about Argentina World Cup" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Argentina World Cup</h1>
            <Image width={800} height={500} src="https://static01.nyt.com/images/2022/12/03/multimedia/03wc-messi-goal-1st-1-8f1d/03wc-messi-goal-1st-1-8f1d-facebookJumbo.jpg" alt="Argentina World Cup"/>
            <h3>Recent News</h3>
            <a href='https://www.nytimes.com/2022/12/03/sports/soccer/messi-argentina-world-cup.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi&#39;s Score Sets Tone for Argentina in World Cup Win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSXeXyjOSPSRY3b3fZ2I0b9F--2fWBUCeY3Nin-v7AAHRBEniHCTp_IxhiFmR31WczBK2DafFlz" alt="Messi&#39;s Score Sets Tone for Argentina in World Cup Win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Messi smiling on the pitch with arms outstretched as his Argentine teammates run up to join. Lionel Messi scored through the legs of an Australia defender in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/fifa-world-cup/story/4823434/2022-world-cup-messi-argentina-reach-quarterfinals-despite-late-australia-surge'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 World Cup: Argentina beat Australia to reach into QFs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ-tlbaY94pKqX2PiiZ4N3Hi6Zn1YNzy37GfdJAcD3r4JDZG0L4NjWyE1B0BWNqjERpLO1ZmY3f" alt="2022 World Cup: Argentina beat Australia to reach into QFs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina have settled on their midfield trio but the nervy win over Australia showed that Lionel Messi could have used some help in the attack.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/12/03/football/lionel-messi-argentina-australia-2022-world-cup-spt-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi scores in 1000th career game as Argentina reaches ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ_qtTCkyFmAxM6mWOZlQOkpJk-vzpdZ78f7EjeNCOGGTmKbqAJD8CJf3JiB3PrNQfAtMxx0cYA" alt="Lionel Messi scores in 1000th career game as Argentina reaches ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi scored in what was the 1000th game of his storied career as Argentina beat Australia 2-1 to advance to the World Cup quarterfinals.</p></div>
            </div>
        </a><a href='https://www.si.com/soccer/2022/12/03/messi-argentina-australia-world-cup-milestone-goal-1000-games'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi and His Milestones Sustain Argentina&#39;s World Cup Title Dream</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ8ojIKtRXn_neCA_OYRRIwcpsbEzga9LEjv9irCvKkHnabFH_vvw4LIK3iU62zLQKLK6iMS-f_" alt="Messi and His Milestones Sustain Argentina&#39;s World Cup Title Dream" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The aging superstar did just enough to send his side to the quarterfinal—and reach more historic marks in a legendary career.</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/sports/2022/12/03/argentina-australia-world-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Highlights from Argentina&#39;s 2-1 win over Australia in the World Cup&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSuvVA-jvXVHLNff12TwIAA5onlG1AGFuE2gfD3lBaMal6ZzDX-xNvyou1FxENJtQBPo-08q-6R" alt="Highlights from Argentina&#39;s 2-1 win over Australia in the World Cup&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi and Argentina beat Australia, 2-1, in the round of 16 to set up a quarterfinal matchup with the Netherlands.</p></div>
            </div>
        </a><a href='https://www.reuters.com/lifestyle/sports/messi-helps-argentina-past-australia-into-world-cup-quarter-finals-2022-12-03/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi helps Argentina past Australia into World Cup quarter-finals</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR9O0EOWhJXudLDm_usGh8FuxmGxOG0_B93ghwBgafPPMTNrTf8Tjf2cdItHgAb0na0gub-c-ef" alt="Messi helps Argentina past Australia into World Cup quarter-finals" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi scored on his 1000th career appearance in Argentina&#39;s 2-1 win over Australia at the World Cup on Saturday to surpass his great predecessor&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}