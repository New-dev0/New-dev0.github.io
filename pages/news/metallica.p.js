import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Metallica</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Metallica"/>
        <meta name="description" content="Trending News about Metallica" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Metallica</h1>
            <Image width={800} height={500} src="https://www.metaledgemag.com/.image/t_share/MTk0MDcxMjYyMTIzNzk2MTQ1/phil-anselmo-2018.jpg" alt="Metallica"/>
            <h3>Recent News</h3>
            <a href='https://www.metaledgemag.com/metal-wire/metallica-announce-north-american-tour-dates-with-pantera'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Metallica announce North American tour dates with Pantera</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRps-POGHz_6Z0iVh8kK_9Wzn1ZKnDMleOOXVfqFXJfLi7NU17jKQEmKZsQ8YnMyNgFR2JZyqoB" alt="Metallica announce North American tour dates with Pantera" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pre-sale tickets are on sale November 30 at 9 a.m. local times, with more info available here. You can check out the full itinerary below. Metallica 2023 tour&nbsp;...</p></div>
            </div>
        </a><a href='https://www.newyorker.com/magazine/2022/12/05/the-enduring-metal-genius-of-metallica'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Enduring Metal Genius of Metallica</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS_H6Azk_YbpWts7ScYwdnxoWgKVnypnMQApvA9u6UQGTz1NGWczEjilh7XU1uxnOn78jv1ZI1C" alt="The Enduring Metal Genius of Metallica" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Metallica&#39;s current lineup includes the singer and rhythm guitarist James Hetfield and the drummer Lars Ulrich, both of whom co-founded the band; the lead&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/quentinsinger/2022/11/28/metallica-announce-new-album--2203--2024-world-tour/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Metallica Announce New Album &amp; 2023-2024 World Tour</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQNp4qhzVT-abU9TlJNNofZo8E2aTqaHLHIW-Wu4AMavj5s8mj5uxXpqBS3SDstyWkuqRh5_x28" alt="Metallica Announce New Album &amp; 2023-2024 World Tour" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Just as 2022 was coming to a close, Metallica has decided taken the internet by storm with the surprise announcement of their next studio album,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.azcentral.com/story/entertainment/music/2022/11/28/metallica-2023-concerts-phoenix/69682006007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Metallica announces 2 concerts in metro Phoenix. Everything fans ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR-Re6AD_-qQhJxfjCbdSvTESGabTNkSJPkeh_kEDFtakE2DqvGpAW4N10MamxsgdrC6_SF7xrK" alt="Metallica announces 2 concerts in metro Phoenix. Everything fans ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Metallica&#39;s M72 tour comes to Glendale in 2023. The No Repeat Weekend features Pantera, Five Finger Death Punch, Mammoth WVH and Ice Nine Kills.</p></div>
            </div>
        </a><a href='https://www.seattletimes.com/entertainment/music/metallica-announces-2-massive-seattle-shows/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Metallica announces 2 massive Seattle shows</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTJnMgLRF4lF2pidZObWM-Bj5WC-rtnF_8NjpAl0CLcWK1fKQueQuRaCM2otm5IXwN0kYim56iM" alt="Metallica announces 2 massive Seattle shows" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seattle headbangers are in store for a &quot;no repeat weekend&quot; when the metal gods come to town. But it&#39;s going to be a long wait.</p></div>
            </div>
        </a><a href='https://www.nj.com/live-entertainment/2022/11/metallica-announces-huge-2023-tour-but-theres-a-catch-if-you-want-tickets.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Metallica announces huge 2023 tour, but there&#39;s a catch if you want ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQHiVyJsHVbfk37xDNb_NBc03kjxwXAwwGmb9iCHNK5AzzF8dd14zzH_-urDzXJjAPUjeVTKJ8U" alt="Metallica announces huge 2023 tour, but there&#39;s a catch if you want ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The &#39;M72&#39; tour will feature 46 concerts in 23 cities.</p></div>
            </div>
        </a><a href='https://variety.com/2022/music/news/metallica-new-album-72-seasons-world-tour-1235443111/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Metallica Announces New Album, &#39;72 Seasons,&#39; and Two-Year ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRY6mYKbl3dDUXisLGtImtqBMOrnATGgnHLnpMUKb4s0bd2uI1I6KZygWLf7xzC-V8tzsa_HAWr" alt="Metallica Announces New Album, &#39;72 Seasons,&#39; and Two-Year ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Metallica has dropped the first single from its forthcoming 12th studio album, &#39;72 Seasons,&#39; and unveiled tour dates for the next two years.</p></div>
            </div>
        </a><a href='https://www.12news.com/article/syndication/spanish/le-contamos-lo-que-debe-saber-sobre-los-conciertos-de-metallica-en-arizona-y-su-nuevo-material-discogrfico/75-39fa008e-9afe-44e3-97e4-273fe9a74467'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le contamos lo que debe saber sobre los conciertos de Metallica en ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRZiJxS7wB1_kmVpCNS39iGhsdFIt67mSjpn8wGakA6QVWMexPS67PD4fs-w770NjbBqQ7ZKFm4" alt="Le contamos lo que debe saber sobre los conciertos de Metallica en ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Metallica se detendrá durante dos noches en el State Farm Stadium en Glendale, Arizona con dos noches que prometen buenas dosis de metal.</p></div>
            </div>
        </a>
        </Template></>;
}