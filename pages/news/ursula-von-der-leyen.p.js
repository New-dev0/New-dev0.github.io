import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ursula von der Leyen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ursula von der Leyen"/>
        <meta name="description" content="Trending News about Ursula von der Leyen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ursula von der Leyen</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/001cec8f-1600.jpg" alt="Ursula von der Leyen"/>
            <h3>Recent News</h3>
            <a href='https://www.gov.ie/en/press-release/bb343-visit-of-european-commission-president-ursula-von-der-leyen/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Visit of European Commission President Ursula von der Leyen</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Visit of European Commission President Ursula von der Leyen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>They will discuss current issues on the EU agenda including the war in Ukraine, its impact on the cost and security of supply of energy, the outlook for the EU&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rte.ie/news/ireland/2022/1201/1339297-von-der-leyen-oireachtas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Von der Leyen says no hard border on island of Ireland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTAvlByhgxxEr6ZNh2RsZr7xDCI8WrU4__DVg6Nk6nOd-BPMb4gIkGqRhUrOsY44HWQyyoDFe9A" alt="Von der Leyen says no hard border on island of Ireland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>European Commission President Ursula von der Leyen has told a joint sitting of the Houses of the Oireachtas that there can be no hard border on the island&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gov.ie/en/speech/8619b-remarks-by-the-taoiseach-presenting-the-sutherland-leadership-award-to-european-commission-president-ursula-von-der-leyen/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Remarks by the Taoiseach presenting the Sutherland Leadership ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Remarks by the Taoiseach presenting the Sutherland Leadership ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>I am delighted to join you this evening to present this year&#39;s Sutherland Leadership Award to European Commission President, Ursula von der Leyen, who is&nbsp;...</p></div>
            </div>
        </a><a href='https://www.politico.eu/article/commission-ursula-von-der-leyen-says-europe-encouraged-by-positive-uk-vibes-from-pm-rishi-sunak/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Von der Leyen &#39;encouraged&#39; by positive vibes from Sunak over EU ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTqXEKnRrLxex4MLpFfKA53F1GErbG_-EVwmKu1kCyVeuhKPknGfTNj12nfXz8DXQZ7Kr52qr46" alt="Von der Leyen &#39;encouraged&#39; by positive vibes from Sunak over EU ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ursula von der Leyen tells Ireland&#39;s parliament &#39;a more pragmatic spirit&#39; in Downing Street could ease post-Brexit conflict over Northern Ireland.</p></div>
            </div>
        </a><a href='https://news.sky.com/story/eus-ursula-von-der-leyen-very-confident-ni-protocol-solution-can-be-found-after-encouraging-meetings-with-rishi-sunak-12759596'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EU&#39;s Ursula von der Leyen &#39;very confident&#39; NI Protocol solution can ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTW5LLJA9ch1xOO1rH3RW1hETLtU8zxlyaXOYS1q3I8gQe3XUXwagk6CRa_MwLpeMRa9JmD6Fo2" alt="EU&#39;s Ursula von der Leyen &#39;very confident&#39; NI Protocol solution can ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Relations between the UK and the EU have degraded recently after Westminster introduced a bill to change some of the trading relations for Northern Ireland&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishtimes.com/politics/oireachtas/2022/12/01/ireland-has-gone-above-and-beyond-in-support-to-ukraine-says-von-der-leyen/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ireland shows &#39;Europe&#39;s best face&#39;, Ursula von der Leyen tells ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTsThem7jrRx7lz3xre0gjPJxYEyDyDkfN_vXRlMFijodpNfhpGnAHuEEG7olfknKeuCAtQAE6e" alt="Ireland shows &#39;Europe&#39;s best face&#39;, Ursula von der Leyen tells ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>European Commission president tells Oireachtas &#39;there can be no hard Border on the island of Ireland&#39;</p></div>
            </div>
        </a><a href='https://www.bloomberg.com/news/articles/2022-12-01/eu-s-von-der-leyen-says-workable-brexit-solution-is-within-reach'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EU&#39;s Von Der Leyen Says Workable Brexit Solution Is Within Reach</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS_PsOGKDeOZK7msuzyHkK8nmDNz7TkSkOFjglLFkR2t9Kze44CJ0DdC5s7MtHvnTLXgqBZyjgn" alt="EU&#39;s Von Der Leyen Says Workable Brexit Solution Is Within Reach" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Talks between the UK and European Union over the Northern Ireland Protocol are marked by a new, more pragmatic spirit and a workable solution “is within&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}