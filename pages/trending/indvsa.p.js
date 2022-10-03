import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>INDvSA</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,INDvSA"/>
        <meta name="description" content="Trending News about INDvSA" /></Head><Template>
            <h1 style={{fontSize: "30"}}>INDvSA</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/10/IND-SA-25.jpg" alt="INDvSA"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/sports/cricket/ind-vs-sa-2nd-t20-live-score-updates-8185840/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs SA 2nd T20 Highlights: India beat South Africa by 16 runs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTi8SLefKVk_bB8WHCkrVGIZJRzzP9UFIJP_j1m-ZgZaU9-L9gsrR3tJYlVSDZnM-rg_LiVwy9V" alt="IND vs SA 2nd T20 Highlights: India beat South Africa by 16 runs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs SA 2nd T20 Highlights, India vs South Africa 2nd T20I Match Ball-by-Ball Commentary: Sent in to bat, India posted a massive 237 for three,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/sport/cricket/india-vs-south-africa-second-t20-match-guwahati-october-2-2022-report/article65962987.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ind vs SA, 2nd T20 | Suryakumar and Rahul lead India&#39;s charge for a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSjiyT8vAwBMlUJtC5Nt8iDTS8SJUCcLHc287FDCuxxHxMvjgtCak-KgbtqWhr5rFeyQUjO4mQE" alt="Ind vs SA, 2nd T20 | Suryakumar and Rahul lead India&#39;s charge for a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A powerpacked batting display gave India a 16-run win over South Africa in the second T20I here on Sunday. The home side wrapped up the three match series&nbsp;...</p></div>
            </div>
        </a><a href='https://www.business-standard.com/article/sports/ind-vs-sa-2nd-t20i-live-score-india-aim-series-win-proteas-survival-122100200545_1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ind vs SA, 2nd T20I Highlights: Miller-Surya dominate as India win ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT7deB3ksI2o85Zu6rErkxuZofyuekx6VeIClvrOwmhCR4OcZYKBB4Gh1EdKMNKNPUJKRHcwop1" alt="Ind vs SA, 2nd T20I Highlights: Miller-Surya dominate as India win ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ind vs SA, 2nd T20I Highlights: It was a run-fest at the ACA Stadium in Guwahati as South Africa scored 221-3 chasing 238 and lost the game by just 16 runs.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cricket/india-vs-south-africa-live-score-2nd-t20-2022-ind-vs-sa-t20-today-cricket-match-latest-scorecard-at-guwahati-101664709411787.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs SA 2nd T20 Highlights: India beat South Africa by 16 runs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTHAN_qYAvGboCeHL9tjV21_ET3EmA__uFPniUrQfWYWAjVQmbqbfKhge0WseuSxyEhpYe7IDWP" alt="IND vs SA 2nd T20 Highlights: India beat South Africa by 16 runs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India vs South Africa 2nd T20 Highlights: David Miller slammed an unbeaten 106(47) as South Africa lost by 16 runs. Catch the Highlights of IND vs SA 2nd&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/sports/cricket/story/india-vs-south-africa-2nd-t20i-live-score-ind-sa-updates-guwahati-2007476-2022-10-02'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs SA, 2nd T20I highlights: India seal 2-0 series lead in Guwahati</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRFqO6f1YIeyZyW4ETjbigrwInQBmi_Hhfjrx0ErKbuWb_ELxFVB4xuXVLIIWcVb_RF104mDxdv" alt="IND vs SA, 2nd T20I highlights: India seal 2-0 series lead in Guwahati" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India (IND) vs South Africa (SA) 2nd T20I highlights from Guwahati: David Miller&#39;s century goes in vain as India win the match by 16 runs.</p></div>
            </div>
        </a><a href='https://odishatv.in/news/sports/ind-v-sa-2nd-t20i-suryakumar-rahul-steal-the-show-propelling-india-to-237-3-against-sa-186948'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND v SA, 2nd T20I: Suryakumar, Rahul steal the show propelling ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSJ8fGdA0mAMx_FML_fLuCv0Lb5EQ0BGaVGWO41ho2kTT5VpaV9NORVIJWvdPPHSEceAp-c8YOJ" alt="IND v SA, 2nd T20I: Suryakumar, Rahul steal the show propelling ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In front of a jam packed crowd at the Barsapara Cricket Stadium Rahul sizzled with an eye pleasing 57 of 28 balls before Suryakumar brought out full carnage&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.ndtv.com/india-vs-south-africa-2022-23/ind-vs-sa-live-cricket-score-2nd-t20-match-india-vs-south-africa-live-score-updates-3397151'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs SA, 2nd T20I Highlights: India Beat South Africa In Run-Fest ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ7iV8ViCbxQO432zxKG0uIWGRCHgY7deP5etsRrAVnrsUxfVTB4ob4o4EoJi0RO5X90wsFRcK7" alt="IND vs SA, 2nd T20I Highlights: India Beat South Africa In Run-Fest ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs SA T20 Match: FOUR! A four from David Miller towards point region to Arshdeep Singh. South Africa need 49 more in 9 balls. This game might well be over&nbsp;...</p></div>
            </div>
        </a><a href='https://scroll.in/field/1034143/india-vs-south-africa-2nd-t20i-live-score-updates-stats-reactions-and-more'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs SA, 2nd T20I as it happened: Miller scores stunning century ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRlSK69oDf3rf1fELDzSOaiYsnr8UT1bdv9MkHL92TgS4i2CO7_s7mJnvqF95m34R_UAATsboKh" alt="IND vs SA, 2nd T20I as it happened: Miller scores stunning century ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Recap of the second T20 International between India and South Africa in Guwahati.</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/live-updates/sports/india-vs-south-africa-2nd-t20i-live-cricket-scores-and-updates-guwahati--227281'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND Vs SA, 2nd T20I: India Beat South Africa Despite David Miller ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQUyxBA01OXmX4kFDhb_9iD5wboTpB-6MtcSuBuamw7ACVVCNXGDJROQqBN1TykND1B2_5vDZRa" alt="IND Vs SA, 2nd T20I: India Beat South Africa Despite David Miller ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chasing India&#39;s 237/3, South Africa managed 221/3 in 20 overs to fall short by 16 runs in Guwahati on Sunday. David Miller remained unbeaten on 106 off 47&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/cricket/ind-vs-sa-live-score-2nd-t20i-india-south-africa-scorecard-updates-highlights-guwahati/article65962462.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs SA Highlights 2nd T20I: India beats South Africa by 16 runs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSO6AVXw87P6VSfzy_zsG4KoW8LHaQBBFOQvSmvGurxpAGIptL5_MnS72l3Yjgm9droehGfjSPE" alt="IND vs SA Highlights 2nd T20I: India beats South Africa by 16 runs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India vs South Africa Highlights: Get all the updates, commentary and highlights from the second T20I at the Barsapara Cricket Stadium in Guwahati on&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}