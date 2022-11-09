import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Where to vote</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Where to vote"/>
        <meta name="description" content="Trending News about Where to vote" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Where to vote</h1>
            <Image width={800} height={500} src="https://www.aljazeera.com/wp-content/uploads/2022/11/AP22312506300815.jpg?resize=1920%2C1440" alt="Where to vote"/>
            <h3>Recent News</h3>
            <a href='https://www.aljazeera.com/gallery/2022/11/8/photos-americans-vote-in-laundromats-schools-and-libraries'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Photos: Americans vote in laundromats, schools and libraries</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQJMYHn-MX0FfDOI43Nv4qS-W51UvK4RRGvkrehP1uQ5KvbajQJNkLoWZXBADX9W8cS3aJbFWhx" alt="Photos: Americans vote in laundromats, schools and libraries" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Inflation, abortion and the future of democracy weigh heavily on voters&#39; minds in key US midterm elections.</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/politics/2022/11/08/voting-ballots-election-lawsuits/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Voting was relatively smooth. Now comes the counting.</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQdqgIpNX_j98fKdCQRr_y8cUGPJo9ockuqH-L8Dg7NDgWqv_bu7upx3N1hdBxS35rXFnvKjb94" alt="Voting was relatively smooth. Now comes the counting." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Election officials and voting advocates expressed cautious optimism as night fell Tuesday that the day&#39;s voting had felt remarkably normal.</p></div>
            </div>
        </a><a href='https://www.nbcnews.com/politics/2022-election/live-blog/elections-2022-live-updates-rcna55757'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Midterm elections live updates: Pennsylvania races, New ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSmJr8opOoVQdypuBeVHbBc6BAjC4uRX24qjTTeBNQLx4LuLhqerdnoqRYpuL2RoIkwnB7Ln1G_" alt="Midterm elections live updates: Pennsylvania races, New ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Midterm elections 2022 are underway. Get live updates, the latest coverage and find out what times polls close on Election Day as voters determine whether&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/08/politics/voting-election-day-lawsuits-2022/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Voting going mostly smoothly on Election Day though some try to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQbuMVytqm9kJXVQWgap0gpf2KnjKJjscMbEipGoa09oKfr3ba1kzwk5naUiGpdy4KbSmizwUXv" alt="Voting going mostly smoothly on Election Day though some try to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Voting rights advocates in key US states said Tuesday&#39;s voting in the midterm elections appeared to be going smoothly so far, with a few isolated problems&nbsp;...</p></div>
            </div>
        </a><a href='https://www.npr.org/live-updates/midterm-election-results-2022-11-08'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Live: Polls start to close in the 2022 midterms elections</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQrBgOvWs_rEqM2LsDL6BapUbJeK9WDMJJ-aSXlq6TNZ6EV7guchI1UmedOU-DAh_wdO3Y4Otmx" alt="Live: Polls start to close in the 2022 midterms elections" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Today is the final voting day of the 2022 election. Key Senate, House and gubernatorial races are on the line. Follow NPR&#39;s live coverage and results as&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nbcnews.com/politics/2022-election/vote-machine-glitch-roils-arizonas-maricopa-county-fuels-false-stateme-rcna56261'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vote machine glitch roils Arizona&#39;s Maricopa County and fuels false ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSkqpKF3dFh_Vpn8EYoDBlpbzRKyuFpUMDlu-XZ7wgVlz7WcTHuraJgKRkTtbXGy8awTXpCDMx0" alt="Vote machine glitch roils Arizona&#39;s Maricopa County and fuels false ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Technicians were dispatched to polling sites across Arizona&#39;s largest county on Election Day to fix dozens of malfunctioning vote tabulation machines,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnbc.com/2022/11/08/midterm-elections-2022-live-updates.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Live updates — Midterm elections: Florida&#39;s DeSantis, Rubio win ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSaj7A6OIqbHWOXDe9QfQxWA0bJ2HHtnYJCX5J-KuKnC84qXtG93iGAqpLg0PacD_KOH_vq_yL7" alt="Live updates — Midterm elections: Florida&#39;s DeSantis, Rubio win ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The midterm elections will determine whether Democrats keep their congressional majorities. The outcome could have an impact on President Joe Biden&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kalw.org/2022-11-08/what-to-watch-as-voting-becomes-vote-counting'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What to watch as voting becomes vote counting</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="What to watch as voting becomes vote counting" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Voters wrap up casting ballots this election season. Here&#39;s what to watch as voting moves to vote counting.</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/politics/2022/11/08/problems-with-voting-machines-arizonas-maricopa-county-trigger-unfounded-fraud-claims/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Problems with voting machines in Arizona&#39;s Maricopa County trigger ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTxvGNs14mk9eMe_9ACS64s-pyvcSJG_tNdAUo-60TwEY3E6pIV8mZN2cwrhZWcTeuSbx_m9Inu" alt="Problems with voting machines in Arizona&#39;s Maricopa County trigger ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PHOENIX — Problems with vote-counting machines at some polling locations in Maricopa County, home to more than half of Arizona&#39;s voters, became grist for&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wsj.com/livecoverage/election-midterms-2022/card/voting-machine-problems-arise-in-arizona-s-maricopa-county-HtzdafVJdspR2jyU39Dc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Election Results 2022 Live Updates: Latest News on Midterm ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ9-BFhFXFbcxEVA3jBTLHekWMPz74oBVU9HunUjFMT2Fg1pRg5vqOjeWW37fWq80_1Ly9prPva" alt="Election Results 2022 Live Updates: Latest News on Midterm ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vote tabulation machines in about 20% of 223 voting centers in Arizona&#39;s Maricopa County were malfunctioning and not accepting some completed ballots as&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}