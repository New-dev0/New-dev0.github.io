import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Wizkid news</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Wizkid news"/>
        <meta name="description" content="Trending News about Wizkid news" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Wizkid news</h1>
            <Image width={800} height={500} src="https://media.pitchfork.com/photos/63785b12bee08b255d815e68/16:9/w_1280,c_limit/wizkid.jpg" alt="Wizkid news"/>
            <h3>Recent News</h3>
            <a href='https://pitchfork.com/news/wizkid-performs-money-and-love-on-fallon-watch/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wizkid Performs “Money &amp; Love” on Fallon: Watch</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRtdd-kYKm-yYYrBHGabyNY-UhKe9pOecUGZXA91tqnhxrcXoSEfIZyRw1Bq2EOx-ZToBomzfm6" alt="Wizkid Performs “Money &amp; Love” on Fallon: Watch" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wizkid was the musical guest on the latest episode ofThe Tonight Show Starring Jimmy Fallon. The Nigerian vocalist performed his song “Money &amp; Love” from&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rollingstone.com/music/music-news/wizkid-money-love-fallon-1234633801/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch Wizkid Bring Celebratory &#39;Money &amp; Love&#39; to &#39;Fallon&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTTw211WejvUMoex9RnCPIXPE17aN2Ai14_aTYOQETWzZK1bCMhR086nuoY7W7kNkojWe_i7OrA" alt="Watch Wizkid Bring Celebratory &#39;Money &amp; Love&#39; to &#39;Fallon&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fresh off his sold-out Madison Square Garden concert, Wizkid appeared on a much-smaller stage Friday to perform &quot;Money &amp; Love&quot; on &#39;The Tonight Show.&#39;</p></div>
            </div>
        </a><a href='https://www.vanguardngr.com/2022/11/wizkid-entertains-fans-with-davidos-song-in-new-york-concert/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wizkid entertains fans with Davido&#39;s song in New York concert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQuxAx5nowm1ybermZzKLBTSvAAzZP49sdz9plkJz7L9_P4rqTs6QOyD6ygDfdsqNlL5Bhk75Qb" alt="Wizkid entertains fans with Davido&#39;s song in New York concert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Reactions have continued to pour from Nigerians on social as Nigerian superstar, Wizkid played Davido&#39;s song to further pay tribute following the demise of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/pidgin/articles/c13kln48nlpo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wizkid and Davido: Nigeria music star pay tribute to Davido late son ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRhTCM_MN_QuR5KQ2NfMl9I2ZTGE8ijgsTtcTAg_PWoZZxN62EmuZJxr7Nbg-9pMgSlIYDaX669" alt="Wizkid and Davido: Nigeria music star pay tribute to Davido late son ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nigerian superstar singer, Wizkid show support for im colleague, Davido, by paying tribute to im late son.</p></div>
            </div>
        </a><a href='https://punchng.com/davidos-song-thrills-fans-at-wizkids-new-york-concert/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Davido&#39;s song thrills fans at Wizkid&#39;s New York concert - Punch ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRRAx51OBwFp78KVWKLO1bXcpKmeJzF0wIICkVMSwqOrkQyPkW4J8aSrQHrLZeBvNeh1FKVgvla" alt="Davido&#39;s song thrills fans at Wizkid&#39;s New York concert - Punch ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Music star, Ayo Balogun, popularly known as Wizkid, expressed support for his colleague, Davido, at his just-concluded concert in New York.</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/tvshowbiz/article-11444949/Touching-tribute-paid-Wizkid-concert-fellow-Nigerian-music-star-Davido-lost-son-three.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wizkid pays tribute to Davido who lost his son, three</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRNTBUOWVZGnvo-7QoI5AFWw2OjfrSOF10iPDmHHjgyjbblpAiv8fYkxMXksrzQX6Pct1cNqAI9" alt="Wizkid pays tribute to Davido who lost his son, three" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Touching tribute paid at Wizkid concert to fellow Nigerian music star Davido who lost his three-year-old son after he &#39;drowned in a swimming pool at home in&nbsp;...</p></div>
            </div>
        </a><a href='https://dailytrust.com/busta-rhymes-congratulates-wizkid-after-sold-out-show-in-new-york/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Busta Rhymes congratulates Wizkid after sold out show in New York</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRSmPIvsaW6tXioICrvq60Nx3-5Hxbz4W8uTiYSajQBrdY7-gIqdUS4CsMnQqeauj-fXz2wcday" alt="Busta Rhymes congratulates Wizkid after sold out show in New York" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Legendary American rapper and actor, Trevor George Smith Jr. known professionally as Busta Rhymes has congratulated Nigerian afrobeat artiste, Wizkid,</p></div>
            </div>
        </a><a href='https://variety.com/2022/music/news/wizkid-madison-square-garden-1235435896/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wizkid Enters His Rock Star Era at Madison Square Garden Show ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTJRVlspDcGFpGe0tMO741iGJU75rtVYxyj3Ldl5bss81Y-M76GvYJhaiKCIupfvBv85nOe382i" alt="Wizkid Enters His Rock Star Era at Madison Square Garden Show ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Big hits, crazed fans and star power are the makings of a rock star, and at his New York City concert, Wizkid proved he has all of them.</p></div>
            </div>
        </a><a href='https://www.legit.ng/entertainment/celebrities/1504919-machala-wizkid-performs-money-love-closes-tonight-show-starring-jimmy-fallon-video-trends/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Machala Way: Wizkid Performs Money and Love As He Closes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSXM4PjjyurpD2mIEADXG2cannFoYh74Khjbjp1mSv9X9IdCU07PHuxTxrnB8mrrRltdDLsY1Yd" alt="Machala Way: Wizkid Performs Money and Love As He Closes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Singer Wizkid was live on popular American talk show “Tonight Show Starring Jimmy Fallon,&quot; where he performed his song Money and Love, a song off his new&nbsp;...</p></div>
            </div>
        </a><a href='https://www.withinnigeria.com/entertainment/2022/11/19/chiiled-wizkid-performs-money-love-on-the-tonight-show-starring-jimmy-fallon-in-america-watch/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chiiled Wizkid Performs &#39;Money &amp; Love&#39; On The Tonight Show ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ06xAoAvkb5rVo3qbfYpkb1xi7PDxH4EUbNHnbXIQQt-lZWUbsAwpn5nG8pKlEzkzCMSSslyE_" alt="Chiiled Wizkid Performs &#39;Money &amp; Love&#39; On The Tonight Show ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On Friday, November 18, 2022, Nigerian Afrobeats sensation Wizkid delivered a brilliant rendition of his trendy single, &#39;Money &amp; Love,&#39; on the recent&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}