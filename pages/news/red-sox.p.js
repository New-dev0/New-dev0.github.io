import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Red Sox</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Red Sox"/>
        <meta name="description" content="Trending News about Red Sox" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Red Sox</h1>
            <Image width={800} height={500} src="https://img.mlbstatic.com/mlb-images/image/upload/t_2x1/t_w1536/mlb/i6ktaqhtauqp8ooqzgpu.jpg" alt="Red Sox"/>
            <h3>Recent News</h3>
            <a href='https://www.mlb.com/news/red-sox-s-options-after-xander-bogaerts-departs'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What&#39;s next for Sox after Bogaerts&#39; departure</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ3-RlWPFk3UcRIs6fMbW7nKRMRUmHsAoqCOiTEVvO7Uw-IK1t2HUOqpiZ7Cldc-Bc6dH8JaJbX" alt="What&#39;s next for Sox after Bogaerts&#39; departure" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The news of Xander Bogaerts agreeing to terms with the Padres on an 11-year, $280 million contract hit Red Sox Nation hard, and with good reason.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/mlb/news/red-soxs-offseason-hits-new-low-as-boston-fails-to-re-sign-xander-bogaerts-with-unserious-offer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Red Sox&#39;s offseason hits new low as Boston fails to re-sign Xander ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSEJKgu3yEiq-VI5cZghmcLTT_R9h8dhtji7v8_Wtd9V5i_aLUGoLyEEpqndAnENH1kfx7Z6rrG" alt="Red Sox&#39;s offseason hits new low as Boston fails to re-sign Xander ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Red Sox were said to be in talks with Bogaerts as recently as Wednesday afternoon, though their offer was nowhere close to what the Padres put on the table.</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/boston/red-sox/rafael-devers-could-be-next-red-sox-chopping-block-offseason-disaster'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rafael Devers could be next on Red Sox chopping block in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQd1U9thjAYa6lroAjs2_Dlh11_lp2N-VwT_EvaYhkSNDBw-4I-6u4KEPxkmJSqRj5NirbWjM2V" alt="Rafael Devers could be next on Red Sox chopping block in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>What does Xander Bogaerts&#39; exit mean for Rafael Devers&#39; future in Boston? As our John Tomase explains, the Red Sox are in serious danger of losing another&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/red-sox-replace-xander-bogaerts-202500166.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How will Red Sox replace Xander Bogaerts? Here are five options</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQXiIOFHE4rUmMh2ClTDFdrwrlAixwXO38Jc4DUW8R8vongxivMaEjfG3IQr5LdKW-mjZAdSCLm" alt="How will Red Sox replace Xander Bogaerts? Here are five options" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Boston Red Sox failed to re-sign star shortstop Xander Bogaerts in free agency, leaving a significant void on the left side of their infield.</p></div>
            </div>
        </a><a href='https://www.mlb.com/press-release/press-release-red-sox-agree-to-two-year-contract-with-rhp-chris-martin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Red Sox agree to two-year contract with right-handed pitcher Chris ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Red Sox agree to two-year contract with right-handed pitcher Chris ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BOSTON, MA—The Boston Red Sox today signed right-handed pitcher Chris Martin to a two-year contract through the 2024 season. The Red Sox&#39; 40-man roster is&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/mlb/insider/story/_/id/35211926/mlb-free-agency-masataka-yoshida-red-sox-contract'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MLB insiders on Masataka Yoshida&#39;s contract with Red Sox</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQjaZiPLgP6KAEZWsrd6r7ry4XYPtEgSQeFPx7QoNdVms5COv1K5_ek19FHsosXhA-yD9fkrdJ1" alt="MLB insiders on Masataka Yoshida&#39;s contract with Red Sox" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Boston&#39;s hefty contract for a star Japanese outfielder sent shockwaves through baseball circles. We break down the surprising splurge.</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/red-sox-masataka-yoshida-signing-215700369.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Red Sox&#39; Masataka Yoshida signing has MLB evaluators perplexed</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRbjj3VhPaPvYI6lXp2d3f9TIitGQ_hbR7OFX26cvsh31XhTJsfHkCgyp1ZJ5XIe9bd09Dbhs2p" alt="Red Sox&#39; Masataka Yoshida signing has MLB evaluators perplexed" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Boston Red Sox&#39; signing of Japanese outfielder Masataka Yoshida to a lucrative five-year contract had some MLB evaluators at a loss for words,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.masslive.com/redsox/2022/12/with-xander-bogaerts-gone-who-will-be-the-red-sox-shortstop-in-2023.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>After Xander Bogaerts signed with the Padres, who will be the Red ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQgsFrncJNlTU6deVYKVZ0jReS0pwl7UggaMp_eaCCLqAK3u-j80JGrc_c9k0v3Wezjhhy9GmN5" alt="After Xander Bogaerts signed with the Padres, who will be the Red ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Published: Dec. 08, 2022, 11:04 a.m.. Boston Red Sox&#39;s Trevor Story plays against the New York Yankees during the seventh inning of a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/fannation/mlb/fastball/news/red-sox-2023-projected-starting-lineup-after-xander-bogaerts-departure'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Red Sox&#39; 2023 Projected Starting Lineup After Xander Bogaerts ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTiu-DVtIbVJp3SsFcfQtgu2B40LtJ4JR2wope4AIfIXERGgALR1KxwU1P9f_8gPkVf9gm-4tAJ" alt="Red Sox&#39; 2023 Projected Starting Lineup After Xander Bogaerts ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The San Diego Padres signed free agent shortstop Xander Bogaerts to an 11-year, $280 million contract Wednesday night. Earlier in the day, the Boston Red&nbsp;...</p></div>
            </div>
        </a><a href='https://www.boston.com/sports/boston-red-sox/2022/12/08/red-sox-sign-rhp-reliever-chris-martin-to-2-year-deal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Red Sox sign reliever Chris Martin to $17.5M, 2-year deal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTPG59WzLpHALmd50wVM7wK8udI_iOsvN80iunfB4qndzP_zTrbW0_AGBL_cRm-Po-PcxDBbaSp" alt="Red Sox sign reliever Chris Martin to $17.5M, 2-year deal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Right-handed reliever Chris Martin and the Boston Red Sox finalized a $17.5 million, two-year contract on Thursday.</p></div>
            </div>
        </a>
        </Template></>;
}