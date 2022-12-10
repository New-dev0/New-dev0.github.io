import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Miami Heat</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Miami Heat"/>
        <meta name="description" content="Trending News about Miami Heat" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Miami Heat</h1>
            <Image width={800} height={500} src="https://www.si.com/.image/t_share/MTk0MzI4MTA1NDYzMDY0MDY5/usatsi_19584598_168389536_lowres.jpg" alt="Miami Heat"/>
            <h3>Recent News</h3>
            <a href='https://www.si.com/nba/heat/miami-news/miami-heats-bam-adebayo-comfortable-with-jimmy-butler-taking-over-in-clutch-situations'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Miami Heat&#39;s Bam Adebayo Comfortable With Jimmy Butler Taking ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSdwxpz64PFAgHU7tKkwsskjv0V_-HcNstJDAPxRoESmtrI0rRfcIa21PndqI22w_TCB7b-yaXz" alt="Miami Heat&#39;s Bam Adebayo Comfortable With Jimmy Butler Taking ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Miami Heat center Bam Adebayo is playing the best basketball of his career, especially on the offensive end. He is averaging 26.8 points in his last seven&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nbcmiami.com/news/sports/adebayo-butler-lift-heat-past-kawhi-less-clippers-115-110/2926266/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adebayo, Butler Lift Heat Past Kawhi-Less Clippers 115-110</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS4zfFLXKF1d9Fh_ukGMkszGBxbNNDh-NCStyjasr0_D7G5kOoovB69rYviSk6n6qHbHbI1coEp" alt="Adebayo, Butler Lift Heat Past Kawhi-Less Clippers 115-110" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bam Adebayo had 31 points and 10 rebounds, Jimmy Butler added 26 points and the Miami Heat held off the Los Angeles Clippers 115-110 on Thursday night.</p></div>
            </div>
        </a><a href='https://www.nba.com/game/lac-vs-mia-0022200374?watch'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LA Clippers vs Miami Heat Dec 8, 2022 Game - Scores, Stats ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ60VMl74UWHS2fENONipEbFarrdKwNCTm2-dL6Q93AGWLdLUg7DKJhlLaXVTOl3eoPdwfLbz5w" alt="LA Clippers vs Miami Heat Dec 8, 2022 Game - Scores, Stats ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MIAMI (AP) Bam Adebayo knows the Miami Heat have some work to do to climb up the standings. Thursday was, he hopes, a good start.</p></div>
            </div>
        </a><a href='https://sportsbookwire.usatoday.com/2022/12/08/los-angeles-clippers-at-miami-heat-odds-picks-and-predictions-2/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Los Angeles Clippers at Miami Heat odds, picks and predictions</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQYg-T_oPfaegma2wSFC0TwN_ZKNGzOiF_-fNCMUXLRq9xBTzCJEnUPB1JTcmHsCwkdFaapr3wT" alt="Los Angeles Clippers at Miami Heat odds, picks and predictions" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Analyzing Thursday&#39;s Los Angeles Clippers at Miami Heat odds and lines, with NBA expert picks, predictions and best bets.</p></div>
            </div>
        </a><a href='https://heatnation.com/rumors/miami-heat-insider-indicates-team-wouldve-had-to-send-bam-adebayo-to-utah-jazz-to-land-donovan-mitchell/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Miami Heat insider indicates team would&#39;ve had to send Bam ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRxuDUmV_DjfNSoAYus-KvguS8AV8MQVFuBMIK4MLx0zLWC3KdVFJ24RA8wRrfEa4JPGPQIiBoP" alt="Miami Heat insider indicates team would&#39;ve had to send Bam ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Utah Jazz wanted Miami Heat star Bam Adebayo in a swap for Donovan Mitchell this past offseason, according to a team insider.</p></div>
            </div>
        </a><a href='https://www.latimes.com/sports/clippers/story/2022-12-08/clippers-heat-jimmy-butler-paul-george-recap'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jimmy Butler&#39;s late surge powers Heat to win over Clippers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ4-RkmiX4Gh1Z8_LPv3bancC2X60XOCHyMDWYqKgXLJWABoT9jDOxPjwmCfLaJUrRR1NdRREC_" alt="Jimmy Butler&#39;s late surge powers Heat to win over Clippers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jimmy Butler surges in crunch time, scoring the Miami Heat&#39;s final eight points in a 115-110 win over a Clippers team that has struggled defensively.</p></div>
            </div>
        </a><a href='https://allucanheat.com/2022/12/08/miami-heat-purposeful-group-effort/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Miami Heat beat Clippers behind purposeful group effort, 115-110</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQx94vdE9xCllBQQ8-xrSmRC7wWAGeq4-NZRRDYmgRPo-53oI-X8gswpjhUPFNaxsEO-zq73NzK" alt="Miami Heat beat Clippers behind purposeful group effort, 115-110" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Miami Heat needed a win badly on Thursday night and got one. What was impressive is that all of their top guys shined along the way.</p></div>
            </div>
        </a>
        </Template></>;
}