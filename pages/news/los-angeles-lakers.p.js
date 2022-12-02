import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Los Angeles Lakers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Los Angeles Lakers"/>
        <meta name="description" content="Trending News about Los Angeles Lakers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Los Angeles Lakers</h1>
            <Image width={800} height={500} src="https://ca-times.brightspotcdn.com/dims4/default/70566c9/2147483647/strip/true/crop/3000x1575+0+348/resize/1200x630!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffa%2F83%2F6f48415046e3b85f654db753ebda%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1245259606" alt="Los Angeles Lakers"/>
            <h3>Recent News</h3>
            <a href='https://www.latimes.com/sports/lakers/story/2022-12-01/lakers-trail-blazers-takeaways-darvin-ham-chauncey-billips'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Takeaways from the Lakers&#39; 128-109 win over Trail Blazers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS197Vy2jv-ykp3criaXz1ZDpsVc6DcymczIHYV-aDEpMegRoH0h-2w_nadKtJJetGPH6PYEF5M" alt="Takeaways from the Lakers&#39; 128-109 win over Trail Blazers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lakers coach Darvin Ham and Trail Blazers coach Chauncey Billips have been like brothers since winning an NBA title together with the Pistons in 2004.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/nba/news/lakers-trade-rumors-front-office-considering-three-different-paths-to-deals-as-dec-15-looms-per-report/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lakers trade rumors: Front office considering three different paths to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRxtP3h0OeGZSnW2cT5g4OprTmCXbI4LXlhgYtNFUO1UxjvOghVyyLiFd1HKAkTtPy3onLkYq0l" alt="Lakers trade rumors: Front office considering three different paths to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>When the season began, the Los Angeles Lakers leaked their intent to hold off on making any trades until around Thanksgiving or the 20-game mark.</p></div>
            </div>
        </a><a href='https://www.washingtontimes.com/news/2022/dec/1/lebron-james-gets-31-in-los-angeles-lakers-128-109/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LeBron James gets 31 in Los Angeles Lakers&#39; 128-109 rout of Dame ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT1TCa6SuB5tKRP55vDnVFkScMob8vBuGr8iIpbEsJJRjVJi0gGCnsnsy4Wo-9LS47qKA-p8-i8" alt="LeBron James gets 31 in Los Angeles Lakers&#39; 128-109 rout of Dame ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LeBron James had 31 points, eight assists and seven rebounds, Austin Reaves added a season-high 22 points and the Los Angeles Lakers rebounded from a&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/lakers-leaning-toward-dealing-patrick-130025561.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lakers leaning toward dealing Patrick Beverley and Kendrick Nunn ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ70li9lHB6iyCklrNeiVpGNyKsI9s2Eonq8Q8HDulUi8DT5i5BicTyRAa2xelBRT47Q2Y2YpZX" alt="Lakers leaning toward dealing Patrick Beverley and Kendrick Nunn ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Just about everyone agrees the Los Angeles Lakers need to make a trade if they will have any hope of contending for the NBA championship this season.</p></div>
            </div>
        </a><a href='https://www.si.com/nba/lakers/news/anthony-davis-praises-late-game-play-in-win-over-portland-ak1987'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lakers News: Anthony Davis Praises L.A.&#39;s Late-Game Two-Way ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQxxx3P0BFOnE_ovLXuZYm0JQIXQqQ_42pvFnDeMtfb37QxZ1zGapTlMPH2j-1ctKcp__xWn6w0" alt="Lakers News: Anthony Davis Praises L.A.&#39;s Late-Game Two-Way ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In strangling the life out of the visiting Portland Trail Blazers last night, 128-109, your Los Angeles Lakers submitted their first comfortable&nbsp;...</p></div>
            </div>
        </a><a href='https://www.blogdebasket.com/2022/12/01/5-razones-esperanza-angeles-lakers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Las 5 razones para la esperanza en Los Angeles Lakers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT3OcbrEw-zuN1tX_bBsTNMekZf9qgRScvy-FU8HL3v7rOrZgJKm3c8L9oC-UEKbBJOYns8hSDR" alt="Las 5 razones para la esperanza en Los Angeles Lakers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Motivos para confiar en Los Angeles Lakers esta temporada NBA 2022/23 &middot; 1. Compromiso colectivo para no dejarse ir nunca más &middot; 2. Anthony Davis, decidido a&nbsp;...</p></div>
            </div>
        </a><a href='https://bleacherreport.com/articles/10057375-lakers-rumors-russell-westbrook-patrick-beverley-more-trade-scenarios-revealed'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lakers Rumors: Russell Westbrook, Patrick Beverley, More Trade ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQfQlW7gx-n6jofHweSYbKbguJlp08hbaybd7BhQ481RTrzazlYu2ksz0oh9K_TDOXFm2TjeurM" alt="Lakers Rumors: Russell Westbrook, Patrick Beverley, More Trade ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It&#39;s no secret the Los Angeles Lakers have been in the trade market amid a disappointing start to the 2022-23 season. However, potential moves might not&nbsp;...</p></div>
            </div>
        </a><a href='https://www.express.co.uk/sport/nba/1704243/Los-Angeles-Lakers-LeBron-James-NBA-trade-latest'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Los Angeles Lakers have surprise NBA trade plan lined up ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcREs3OCBXBjgwCkRd2BUO9HeWTuzxBiPKk61Sk69LcLxqLe79euMV_Ml4UYWGXIyLtPLWwnyrCa" alt="Los Angeles Lakers have surprise NBA trade plan lined up ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Despite a star-studded roster headed by Lebron James and Anthony Davis, the Lakers had been in decline since former NBA MVP Westbrook&#39;s arrival from the&nbsp;...</p></div>
            </div>
        </a><a href='https://lakersnation.com/anthony-davis-hoping-for-at-least-4-2-road-trip-as-lakers-are-starting-to-gel/2022/12/01/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anthony Davis Hoping For At Least 4-2 Road Trip As Lakers Are ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSR8y4BarPwlULi05fxXZQ9xVGZOWwC33HSPK80sM4toB8xP27GntFwp-_HHKdyVzXFMjhWR7GI" alt="Anthony Davis Hoping For At Least 4-2 Road Trip As Lakers Are ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anthony Davis said the Los Angeles Lakers are finally gelling as a team and feel like they can beat any team on the upcoming road trip.</p></div>
            </div>
        </a><a href='https://sportsnaut.com/los-angeles-lakers-keeping-russell-westbrook/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Los Angeles Lakers &#39;leaning towards&#39; keeping Russell Westbrook ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRFnbb7G4LqjsY1nmcS89pPUMUF2xaK-iIvPreWDCC5pgGRUEl-1dOMQ-SOyzOW50UOJn9SeJCu" alt="Los Angeles Lakers &#39;leaning towards&#39; keeping Russell Westbrook ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Los Angeles Lakers are &quot;leaning towards&quot; keeping Russell Westbrook and trading smaller pieces, such as Patrick Beverley or Kendrick Nunn.</p></div>
            </div>
        </a>
        </Template></>;
}