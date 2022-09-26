import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sports</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sports"/>
        <meta name="description" content="Trending News about Sports" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sports</h1>
            <Image width={800} height={500} src="" alt="Sports"/>
            <h3>Recent News</h3>
            <a href='https://www.bloomberg.com/news/newsletters/2022-09-25/tv-has-turned-pro-sports-into-a-recession-proof-investment'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TV Has Turned Pro Sports Into a Recession-Proof Investment</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ9FSh-zkbqO-KaQYNhUPo-pjPV6IqhZuSkmFHDlhDsVX78mU1sqbJGtWDCpz359S2KfOuYo8S0" alt="TV Has Turned Pro Sports Into a Recession-Proof Investment" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Four US professional sports teams are for sale with one more on the way. Why this could be just the beginning of a sports deal bonanza.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/sport-others/pakistan-wrestle-over-weightlifting-administration-two-sporting-bodies-fighting-for-control-amidst-allegations-of-corruption-8173350/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan wrestle over weightlifting administration. Two sporting ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT8TbaNq4rdqXpkz7rHq7wHtI_4GWXT-P0s1XE9fK9sxtU9WF-O8AxRODdzgG4bXhC2PMORGunA" alt="Pakistan wrestle over weightlifting administration. Two sporting ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The current sports authority of the sport in Pakistan holds a letter from the International weightlifting federation backing them; the other body has been&nbsp;...</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/09/25/1124931137/sunday-puzzle-find-the-sport'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sunday Puzzle: Find the sport!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRLRyV8MFdMZIaR0GTNLW2MHgfL_9er1gBj0WuuCeKUH0Bjc2ldLAAsbcb74kjY15qobPth5BMx" alt="Sunday Puzzle: Find the sport!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NPR&#39;s Ayesha Rascoe plays the puzzle with winner Kel Hanlon of Jessup, Maryland and puzzle master Will Shortz.</p></div>
            </div>
        </a><a href='https://www.expresscomputer.in/news/dream-sports-appoints-dr-anantha-sundararajan-as-chief-data-officer/90343/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dream Sports appoints Dr. Anantha Sundararajan as Chief Data ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR5Fwv6Rd0VRzWJ4KdaH3A9nALRAkUxpLZRZ7QhjqF4S_ZC0liYpRLldQ5SKph3D4iwYXnrsrh_" alt="Dream Sports appoints Dr. Anantha Sundararajan as Chief Data ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dream Sports, India&#39;s leading sports technology company announced the appointment of Anantha Sundararajan, Ph.D., as their Chief Data Officer (CDO).</p></div>
            </div>
        </a>
        </Template></>;
}