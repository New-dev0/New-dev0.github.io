import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Troll</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Troll"/>
        <meta name="description" content="Trending News about Troll" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Troll</h1>
            <Image width={800} height={500} src="https://www.voicesfromthebalcony.com/wp-content/uploads/2022/12/Troll-2.jpg" alt="Troll"/>
            <h3>Recent News</h3>
            <a href='https://www.voicesfromthebalcony.com/2022/12/02/troll-2022-review/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Troll (2022) Review - Voices From The Balcony</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTIZUDm3EtOKv6u5UPfaxh_J-FRbOz0Cyc9IHXoIBxNCt0YT3Kf7ln2iCrkbWJBo56DyphUv8v2" alt="Troll (2022) Review - Voices From The Balcony" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Troll opens with a young girl and her father rock climbing in the reputed home of Norway&#39;s trolls. When the girl professes her disbelief her father tells&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nationalworld.com/culture/film/netflix-troll-what-2022-film-about-trailer-cast-sequel-troll-hunter-3939499'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netflix Troll: what is 2022 film about, trailer, cast - is it a sequel to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSNeOz_gbceY4vxHFCmcUGVKtkrV_LjnJLq_8VhN94MAj0vQC2URJ4TBmcilZVOp2n_VHcLOueN" alt="Netflix Troll: what is 2022 film about, trailer, cast - is it a sequel to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Troll is a Norwegian-language Netflix original monster movie in the style of Godzilla and King Kong. The film was shot on location around Norway.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/entertainment/movie-review/troll-movie-review-netflix-norwegian-monster-film-roar-uthaug-8302228/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Troll movie review: Netflix&#39;s spectacular new monster film blends ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRoVstVRph1ZzoAdo4p-a7FyQ05AOP3waK7H2WkPp6CVE692fKEywq30DvpOtJHhh4033VdooQK" alt="Troll movie review: Netflix&#39;s spectacular new monster film blends ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Troll movie review: With a heart as big as the &#39;monster&#39; at its centre, the new Netflix film from Tomb Raider director Roar Uthaug is old-fashioned&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pajiba.com/film_reviews/review-netflixs-troll-is-a-king-kong-story-out-of-legend.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Review: Netflix&#39;s &#39;Troll&#39; Is A King Kong Story Out of Legend</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSip5-hlASWz0QWtPxUkEOqFcoVIaZgoRcN8Jf5_F2AwwPZ4OkNv0GRITB4NIrXg3H5Lj1JgPreqA" alt="Review: Netflix&#39;s &#39;Troll&#39; Is A King Kong Story Out of Legend" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It&#39;s difficult to know what path a monster movie will take on its way to a satisfying conclusion. Is the monster bloodthirsty or misunderstood?</p></div>
            </div>
        </a><a href='https://973espn.com/roll-with-the-troll/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Roll With the Troll</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTKnLPx4g19ms5EqL72J82nu12LrgrXjIzxg1zvO97N-73vnKVQdtJAB5ilhMV2q9SxHkHeEfms" alt="Roll With the Troll" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yet, some of the best fishing awaits, especially if you have a bonus tag (allows one bass between 24 and less than 28 inches) and like to eat stripers via the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.routesnorth.com/language-and-culture/scandinavian-trolls-all-you-need-to-know/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Scandinavian trolls: all you need to know - Routes North</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTu-8ZJ6A11haeQUJ6DGr6lTgLbVyBDQBNpU2VOoz87pgUw1iFQ49BwvVgr8wXpo_mEc0GCDae2" alt="Scandinavian trolls: all you need to know - Routes North" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Everyone in Norway knows a little about Norwegian troll mythology and trolls are an important part of the country&#39;s folklore and legends. Trolls are often&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dexerto.com/tv-movies/is-there-going-to-be-a-troll-2-on-netflix-2001619/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Is there going to be a Troll 2 on Netflix?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTaLxI14DbSc83WlmEg1e2L3W8oL6Ub30WZ_wHeaFIGQ_P9qTWEkGmEnLT2Gmxqps6fI3VgMBUe" alt="Is there going to be a Troll 2 on Netflix?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Troll comes from director Roar Uthaug, the filmmaker behind Alicia Vikander&#39;s Tomb Raider movie and The Wave, a despairingly underseen disaster movie that puts&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vanguardngr.com/2022/12/troll-movie-netflixs-newest-blockbuster/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Troll Movie: Netflix&#39;s newest blockbuster</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTGI3D4qG248I3XUC2CB53Q0SeV9sV7DLuQVT2pWz7YRzlb0CTMrJ1TrDg3_8lmgrSt_5ty1VNU" alt="Troll Movie: Netflix&#39;s newest blockbuster" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Newly released Troll comes with its sizzling plot that has got movie fans in high spirits to see what Netflix has in store for their entertainment this&nbsp;...</p></div>
            </div>
        </a><a href='https://readysteadycut.com/2022/12/02/is-netflixs-troll-a-horror-movie/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Is Netflix&#39;s Troll a horror movie?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTGXKjAZ2RlgSxD4-fThlUqwu2k0x6jyfpOlB2a-Nh8623jLN3JXzEu2istwlzq8kSQIghL-d6k" alt="Is Netflix&#39;s Troll a horror movie?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Troll is a film by Norwegian director Roar Uthaug. Roar is a consistently working director that has had a long filmmaking career spanning lots of different&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}