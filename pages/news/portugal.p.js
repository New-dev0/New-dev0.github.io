import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Portugal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Portugal"/>
        <meta name="description" content="Trending News about Portugal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Portugal</h1>
            <Image width={800} height={500} src="https://resources.world.rugby/photo-resources/worldrugby/photo/2022/11/18/33fc433a-f818-4d32-9dd4-cfa56e76e50c/1442568640.jpg?width=550&height=367" alt="Portugal"/>
            <h3>Recent News</h3>
            <a href='https://www.rugbyworldcup.com/2023/news/777606/rugby-world-cup-2023-final-qualification-tournament-match-day-three-recap'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Samuel Marques kicks Portugal to Rugby World Cup 2023 ｜ Rugby ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQGY2LRMyARjETN9cLQI6qTOWJaXETEmWHwVfnSzSD0s5MGFFYCuFenHXqoC3vS9J0cR5I3D81O" alt="Samuel Marques kicks Portugal to Rugby World Cup 2023 ｜ Rugby ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os Lobos became the 20th team to secure their place at Rugby World Cup 2023 following a nail-biting 16-16 draw in the deciding match of the Final&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rugbypass.com/news/portugal-through-to-rugby-world-cup-as-usa-dumped-out/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal through to Rugby World Cup as USA dumped out</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSzjVLaOEH71c4yLtUC3Re5-kkSG72j6M9eb036Qbcuj0fAn0Wf7J8RUvqDjpkhr4IOot-23sWh" alt="Portugal through to Rugby World Cup as USA dumped out" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal have qualified for the 2023 Rugby World Cup in France after drawing with the USA in their crunch match in Dubai with...</p></div>
            </div>
        </a><a href='https://www.sarugbymag.co.za/portugal-stun-usa-qualify-for-world-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal stun USA, qualify for World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR44R5NPQV7TPoUi61_18s4Rh9xChnoEiE7W_8uKK7a5Z-GbW73-5pqpcYFVACaLOi65ZL_2UBh" alt="Portugal stun USA, qualify for World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal held the USA to a nail-biting draw in Dubai on Friday night to become the 20th team to book their place at the 2023 Rugby World Cup.</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/economy/2022/11/18/portugals-public-sector-workers-strike-over-pay-amid-inflation'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal&#39;s public sector workers strike over pay amid inflation</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSyH6f6NARQ_Hwx2cyuh1y2wncIRUgRwV4IDdgC37t9Hlp0WVER4BG30eFf5XbyFQ-zf-f5ZS6h" alt="Portugal&#39;s public sector workers strike over pay amid inflation" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The industrial action due to mounting cost of living comes a week before a final vote on the 2023 budget.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/sport/2022/nov/18/us-eagles-portugal-rugby-world-cup-place-france'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal down USA to book final Rugby World Cup place in France</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcThusGeIBfQ1VF4XUW5Kk66SaeH3K1DxKeKZnwEdOsL6mXLl9-8UdR0m2y0Iui18qGkj7HB8_Q-" alt="Portugal down USA to book final Rugby World Cup place in France" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Last kick of the game gives Os Lobos a 16-16 draw, enough to book place in Pool C with Australia, Wales, Fiji and Georgia.</p></div>
            </div>
        </a><a href='https://apnews.com/article/sports-middle-east-united-states-dubai-arab-emirates-d2a2d0f7d71e6148cbd57d44cc8f980e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal is last qualifier for 2023 Rugby World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Portugal is last qualifier for 2023 Rugby World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DUBAI, United Arab Emirates (AP) — Portugal has grabbed the last qualifying spot in the 2023 Rugby World Cup in dramatic style. Samuel Marques&#39; long-range&nbsp;...</p></div>
            </div>
        </a><a href='https://supersport.com/rugby/rugby-world-cup/news/d0b6f802-b0df-4fb4-ac27-a084aa5222db/portugal-sink-usa-to-claim-final-place-at-2023-world-cup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal sink USA to claim final place at 2023 World Cup | SuperSport</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRjVa2TPS2wXou9KfrdrvM9S7jpPJSje_1yU45eASCum06mmC0uejkz_1amIdxCG-QnzwjpS6Fl" alt="Portugal sink USA to claim final place at 2023 World Cup | SuperSport" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former Toulouse scrum-half Samuel Marques nailed a last minute penalty to secure a 16-16 draw with the USA on Friday which handed Portugal the 20th and last&nbsp;...</p></div>
            </div>
        </a><a href='https://www.portugalresident.com/public-sector-strike-closes-schools-across-portugal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Public sector strike closes schools across Portugal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTkrUR4RsiO8-pWbB9mEjgmcbnYazohUiZMQkOtHDA7ajVSMKn7jkKmtyUz8mIo0ogrxUzULiS-" alt="Public sector strike closes schools across Portugal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Several schools have closed or have been seriously affected by a public sector strike which is also affecting other public services.</p></div>
            </div>
        </a><a href='https://www.thenationalnews.com/fifa-world-cup-2022/2022/11/18/portugal-ratings-v-nigeria-fernandes-9-joao-felix-8-dias-7/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal ratings v Nigeria: Fernandes 9, Joao Felix 8, Dias 7</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR6mZkAEzikmPMdP8_QZ1M4XGVtJu8JV1GxJiowIAH2pi3THA1F0hD0SR_q0oK30zgDjw7B88dE" alt="Portugal ratings v Nigeria: Fernandes 9, Joao Felix 8, Dias 7" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Missing Cristiano Ronaldo due to a stomach bug, his Manchester United teammate Fernandes led team to a 4-0 friendly win before they travel to Doha on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.euronews.com/travel/2022/11/18/flight-free-travel-around-portugal-is-about-to-get-easier-thanks-to-high-speed-rail-routes'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Flight-free travel around Portugal is about to get easier thanks to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSda0gCeJ7pzpmHb1d3JMK5HiH0caLYZtTHvdNyd6YffSLKFg3eC9tgsSaofZJA39bJcFE7miPP" alt="Flight-free travel around Portugal is about to get easier thanks to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal is the latest European country to update its rail system. The government has announced new high speed trains which could halve journey times.</p></div>
            </div>
        </a>
        </Template></>;
}