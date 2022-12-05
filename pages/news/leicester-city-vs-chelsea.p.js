import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Leicester City vs Chelsea</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Leicester City vs Chelsea"/>
        <meta name="description" content="Trending News about Leicester City vs Chelsea" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Leicester City vs Chelsea</h1>
            <Image width={800} height={500} src="https://cdn.vox-cdn.com/thumbor/XNUj3-V9hNeQAezN-zTfYzcTxSI=/0x612:4314x2871/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24259621/1446469540.jpg" alt="Leicester City vs Chelsea"/>
            <h3>Recent News</h3>
            <a href='https://weaintgotnohistory.sbnation.com/2022/12/3/23491201/leicester-city-wfc-vs-chelsea-fcw-womens-super-league-confirmed-lineups-how-to-watch'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leicester WFC vs. Chelsea FCW, WSL: Confirmed lineups, how to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRM2AwsFJDtOo6do_uW55wS2ggYM1wHFgQZ0wOS-7noAhOPtG3MqEbXgefRMh1rLlBwIA58kZz_" alt="Leicester WFC vs. Chelsea FCW, WSL: Confirmed lineups, how to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chelsea Women are back on the pitch this weekend, this time facing Leicester City at King Power Stadium. The Foxes sit dead last in the league table with&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/football/63765142'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leaders Chelsea hit eight at bottom club Leicester</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTW76S_MY0fQ-Ckntof4vhLX5tOZBt1ozsjjhC3hMI0hkDPmRYlQLCgsCBoWlKPI6W8Zd6SkWwB" alt="Leaders Chelsea hit eight at bottom club Leicester" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chelsea make light work of bottom side Leicester to maintain their impressive Women&#39;s Super League title defence at the King Power Stadium.</p></div>
            </div>
        </a><a href='https://www.football.london/womens-football/chelsea-leicester-city-fran-kirby-25668456'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fran Kirby hails &#39;rewarding&#39; Chelsea performance against Leicester ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ_pQZsx2wzDh210niO2gA-fGoRQP7A3Hml_3dP1IwPO_rCPobKnjqrZLm0zlxCjEnKtb2wkHH9" alt="Fran Kirby hails &#39;rewarding&#39; Chelsea performance against Leicester ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chelsea Women returned to the top of the Women&#39;s Super League table with an 8-0 demolition of Leicester City.</p></div>
            </div>
        </a><a href='https://www.msn.com/en-gb/sport/football/leicester-city-wfc-vs-chelsea-live-women-s-super-league-result-final-score-and-reaction/ar-AA14Rr4G'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leicester City WFC vs Chelsea LIVE: Women&#39;s Super League result ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSKIg9Mc2PLsIJ9v2ENa7S3uM8b6OG-6EJBinYfRJbKpq_N7g-JuUWcI9zQd5bt-Q5vcMV3lfgs" alt="Leicester City WFC vs Chelsea LIVE: Women&#39;s Super League result ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The WSL is the top tier of English women&#39;s football with international players from all over the world plying their trade in one of the most competitive and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.chelseafc.com/en/news/article/report-leicester-0-chelsea-women-8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Report: Leicester 0 Chelsea Women 8</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS_Wy2Il55IObrpc0xnfWMIjbtT1ppQyndFzY6tduyICwpkn-jBNqAhz3plQDV2jtogYyLedZW7" alt="Report: Leicester 0 Chelsea Women 8" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A goal and four assists for Guro Reiten helped Chelsea Women return to the top of the Women&#39;s Super League table after a convincing victory at Leicester&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leicestermercury.co.uk/sport/football/football-news/leicester-city-chelsea-player-ratings-7892149'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leicester City Women player ratings as several poor in 8-0 defeat to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRpnkz6VO7nrZElxBSpCWDpQfrxo61g8CnPrA1wxjareNlaeLFSuZ251RFiC3J9tA3WOOXlRTow" alt="Leicester City Women player ratings as several poor in 8-0 defeat to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Leicester City Women were comfortably beaten 8-0 by Chelsea on Saturday afternoon in the Barclays Women&#39;s Super League.</p></div>
            </div>
        </a>
        </Template></>;
}