import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Steelers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Steelers"/>
        <meta name="description" content="Trending News about Steelers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Steelers</h1>
            <Image width={800} height={500} src="https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/izo8q7olex6hbcxibz4g" alt="Steelers"/>
            <h3>Recent News</h3>
            <a href='https://www.nfl.com/news/steelers-qb-kenny-pickett-earns-first-fourth-quarter-comeback-win-of-career-no-o'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steelers QB Kenny Pickett earns first fourth-quarter comeback win of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQwyF8QfxqvZ9tGGVs6o2UoYbPK24xDieyZ--TlDV6S9SrH8z2yF2T_o4Wiag83cGdk7OQGWPcS" alt="Steelers QB Kenny Pickett earns first fourth-quarter comeback win of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Pittsburgh Steelers saw a halftime lead quickly wiped away for the second consecutive week. This time, Kenny Pickett turned things back around,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.steelers.com/news/from-the-press-room-steelers-at-colts'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>From the Press Room: Steelers at Colts</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTF8nvtxYbgXvQDF6DVhRDIFZxy_08kzfOrmQCaCQbzE9PlaJGyMzcjVA3uwLsvF4sB57JD7m13" alt="From the Press Room: Steelers at Colts" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Coach Mike Tomlin, quarterback Kenny Pickett and linebacker Alex Highsmith talk about the win over the Colts on Monday Night Football.</p></div>
            </div>
        </a><a href='https://www.espn.com/nfl/story/_/id/35133861/kenny-pickett-steelers-squander-lead-close-colts'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kenny Pickett, Steelers squander lead but close out Colts</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQw-Dgi--H0RitWIgJh7XkabVD8wMRfY0-Si9i592HUVd3GxyubgMyfDm8KIFyKlGJpiucbsraE" alt="Kenny Pickett, Steelers squander lead but close out Colts" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pittsburgh&#39;s rookie quarterback turned in his best game while Indy&#39;s offense continued to struggle, and fell short at the end.</p></div>
            </div>
        </a><a href='https://www.stampedeblue.com/2022/11/29/23483522/colts-steelers-loss-second-half-offensive-resurgence-falls-short'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Colts lose to Steelers: Second-half offensive resurgence falls short ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ2JKkxslx0S7Uw8vNmPzUWWe8_p22tZp84cljvwF5n2-ShMkr25IWpCCJx3xB6Qzeu5ku97HjQ" alt="Colts lose to Steelers: Second-half offensive resurgence falls short ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For a second straight week, the Indianapolis Colts came up short, losing to the Pittsburgh Steelers 24-17.</p></div>
            </div>
        </a><a href='https://www.indystar.com/story/sports/nfl/colts/2022/11/28/colts-vs-steelers-score-updates-highlights-on-monday-night-football-matt-ryan-kenny-pickett/69682284007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LIVE: Steelers beat Colts on &#39;Monday Night Football&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSqDtnUCE_7MAepTZ93I4obykVY-zP430Kl1zwpPHOTZ6BJB3Jyhfk_2yCisznmvhmHq1TraTOv" alt="LIVE: Steelers beat Colts on &#39;Monday Night Football&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Colts are trying to work their way into playoff contention. The Steelers are trying to prevent coach Mike Tomlin from suffering a sub-.500 season.</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/djsiddiqi/2022/11/29/pittsburgh-steelers-kenny-pickett-is-starting-to-show-hes-a-franchise-quarterback/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pittsburgh Steelers: Kenny Pickett Is Starting To Show He&#39;s A ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT_qvHm5LB6KLIsTiwkKwGrB4fUVenl720sraJroGX0mGNur-z1xyG07HHyELzpzxVMAjdVdfXm" alt="Pittsburgh Steelers: Kenny Pickett Is Starting To Show He&#39;s A ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 24-year-old&#39;s stat line wasn&#39;t overly impressive in the Steelers&#39; 24-17 win over the Indianapolis Colts — 20-of-28 for 174 yards and zero touchdowns — but&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/nfl/story/_/id/35133053/the-kenny-pickett-era-seven-starts-pittsburgh-steelers-quarterback-colts-win-provides-evidence-progress'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kenny Pickett era blooming after quarterback&#39;s full-circle win in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTHI1O6DwQzqEUArvkQIYtgJWmVjabgDp4gDcuLYvrKCpadeV79wJVpQvGPc60cMlblWz9ySHY8" alt="Kenny Pickett era blooming after quarterback&#39;s full-circle win in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eight months after appearing at Lucas Oil Field in the NFL combine, Kenny Pickett returned to Indianapolis and engineered his finest pro performance to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.usatoday.com/story/sports/nfl/2022/11/29/pickett-making-steady-if-not-flashy-progress-for-steelers/50987675/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pickett making steady if not flashy progress for Steelers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTEz9vRJ69JaDsVynKoBSSWdZiJfM3_HUhFHKOodEvRVcjxVgzfBANRMirtvoHLRjrnMYIkkDPv" alt="Pickett making steady if not flashy progress for Steelers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PITTSBURGH (AP) — Kenny Pickett is not going to blow opponents away with arm strength. Or speed. Or stature. Or flawless decision-making.</p></div>
            </div>
        </a><a href='https://steelersdepot.com/2022/11/pickett-and-steelers-offense-becoming-more-efficient-downfield/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pickett And Steelers Offense Becoming More Efficient Downfield</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRw43MogReW4JGPiPGk5eWZPR0DrGqP0-oSZZQfBbCVYm-mC_yNgfq5152X5twe7_RnUds5o0LY" alt="Pickett And Steelers Offense Becoming More Efficient Downfield" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In the first few games of his career, Pittsburgh Steelers rookie quarterback Kenny Pickett struggled when throwing the ball down the field. It was super.</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/steelers/news/pittsburgh-steelers-kenny-pickett-named-pffs-third-highest-rated-rookie'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steelers Kenny Pickett Named PFF&#39;s Third-Highest Rated Rookie in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRI7q4nEX3Zrm50yTRPR2XJPMWcpjBJHo-KOx1w0aFI9fJlRU6motE2EAfzunnoP94FpNleNqNT" alt="Steelers Kenny Pickett Named PFF&#39;s Third-Highest Rated Rookie in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PITTSBURGH -- The numbers - 20 of 28 for 174 yards and no touchdowns - didn&#39;t jump off the box score for Pittsburgh Steelers quarterback Kenny Pickett,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}