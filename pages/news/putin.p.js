import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Putin</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Putin"/>
        <meta name="description" content="Trending News about Putin" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Putin</h1>
            <Image width={800} height={500} src="https://cdn.vox-cdn.com/thumbor/dTDaxK6e9X8uni9Rb2Ij40rFgPg=/0x342:4776x2843/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24259636/1245290866.jpg" alt="Putin"/>
            <h3>Recent News</h3>
            <a href='https://www.vox.com/2022/12/3/23489915/biden-putin-macron-diplomacy-france-russia-ukraine'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biden and Putin diplomacy about the Russian and Ukraine conflict ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQfodaBWXCf6PQIcpnRAt7MM5FBIN9vigaHJolUK1acbrqjL14Me6ZOcAkFGoil6VB4FS3uPTa5" alt="Biden and Putin diplomacy about the Russian and Ukraine conflict ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The president&#39;s statements on talks with Russia aren&#39;t that different from his previous positions.</p></div>
            </div>
        </a><a href='https://www.kbia.org/2022-12-02/putin-turns-down-biden-talks-and-defends-russian-attacks-on-ukraines-energy-grid'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Putin turns down Biden talks and defends Russian attacks on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRrjPIIfm1eGQqFqOMKaWmN15spwBHrJB4b4rQ84Rx2XqbrmrsMYqctJg-x0Odxs5oZr0qU8vts" alt="Putin turns down Biden talks and defends Russian attacks on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Kremlin dismissed the idea of talks with President Biden to end the war in Ukraine and said its assault on Ukrainian infrastructure was an &quot;inevitable&quot;&nbsp;...</p></div>
            </div>
        </a><a href='https://fortune.com/2022/12/03/declining-birth-rate-population-russia-millennials-gen-z-blame-putin-covid-ukraine-invasion/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Millennials and Gen Z are blaming Putin for intensifying Russia&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTk9Xpc4v2Md8gyAEox_fZi9DG1oyF-qnfeBFE-oKqkUABYn_xs2LYhOER2kQf33ZiMWqWDFgXb" alt="Millennials and Gen Z are blaming Putin for intensifying Russia&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Throughout his rule, Russian President Vladimir Putin has obsessed over Russia&#39;s shrinking population. Last year, Putin encouraged Russians to build a “strong&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/12/02/us/politics/biden-putin-ukraine-talks.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>U.S. Sees Little Prospect for Ukraine Talks With Putin After Biden Offer</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRuO5cTDiOeOjfMhTc8agxgSX6SSSyHmxgcbVE5c1h1bxmb9NZ6jLKRnbIlX8foK4h_ra4Wfr5p" alt="U.S. Sees Little Prospect for Ukraine Talks With Putin After Biden Offer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WASHINGTON — A day after President Biden said he would be willing to talk with President Vladimir V. Putin of Russia about a possible peace agreement in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.reuters.com/world/bidens-offer-talk-putin-is-trial-balloon-end-war-ukraine-2022-12-02/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biden trial balloon to Putin on Ukraine appears to quickly pop</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTq4FtdY3E2wMXZScIm8c6ZQe3VK0LkXqTHBPxkCQE3Om-_CSMNmiK5mazxhJoyf6JDJGXoaVoe" alt="Biden trial balloon to Putin on Ukraine appears to quickly pop" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>President Joe Biden floated a trial balloon to President Vladimir Putin intended to determine whether Russia, after months of battlefield losses and stalled&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foxnews.com/politics/putin-open-ukraine-talks-biden-signals-willingness-russia-serious-ending-war'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Putin open to Ukraine talks after Biden signals willingness if Russia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSjSniLp5OY6SjY2Xfl3OL-52JNQ-fympyL3BBO0gIKp-PXFUjjBBdnzRgvWLDxRVe94nYzCKga" alt="Putin open to Ukraine talks after Biden signals willingness if Russia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Kremlin on Friday once again signaled that Russian President Vladimir Putin is &quot;open&quot; to talks with the U.S. if the West accepts his demands.</p></div>
            </div>
        </a>
        </Template></>;
}