import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Chainsaw Man</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Chainsaw Man"/>
        <meta name="description" content="Trending News about Chainsaw Man" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Chainsaw Man</h1>
            <Image width={800} height={500} src="https://cdn.vox-cdn.com/thumbor/f1oDzY_OlgfRftwTVdC-tvXSla8=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24099763/FefLBp3aAAAzy8U.jpg" alt="Chainsaw Man"/>
            <h3>Recent News</h3>
            <a href='https://www.polygon.com/23398611/best-chainsaw-man-fights-anime'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Chainsaw Man anime fights</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTJOf23-jaoy1h3dvnGMfOGcve12EeYa8GuzV192KfxV1saIRrpXOFlOKFrlQ7SmQ2hRZR3YTqa" alt="Best Chainsaw Man anime fights" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We break down the climactic fight scene in the first episode of Chainsaw Man, the new supernatural horror action anime from studio MAPPA based on Tatsuki&nbsp;...</p></div>
            </div>
        </a><a href='https://gizmodo.com/chainsaw-man-anime-episode-1-review-1849637078'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chainsaw Man Is a Bloody, Somber Story of a Boy and His Dog</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRNUxnfi1QrCS_ixp8iEbdQAhPFO_lU32Va8DWRqe67z9uZzoGwWSQCDh6HyRnMRPBqDkyyNQpc" alt="Chainsaw Man Is a Bloody, Somber Story of a Boy and His Dog" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MAPPA&#39;s adaptation of Tatsuki Fujimoto&#39;s action shonen is revving up to be something fun.</p></div>
            </div>
        </a><a href='https://www.denofgeek.com/tv/chainsaw-man-episode-1-review-dog-chainsaw/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chainsaw Man Episode 1 Review: Dog &amp; Chainsaw</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQk_SvZM60w3UZtiQI81mLAEwp-5JiZDt-825OB2myedYO_c942CMsNaGfvU3P4S23seZJsp3LG" alt="Chainsaw Man Episode 1 Review: Dog &amp; Chainsaw" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chainsaw Man is the most violent new anime of the season, but rich lore and a confidence in its mysteries makes for a strong start.</p></div>
            </div>
        </a><a href='https://www.crunchyroll.com/anime-news/2022/10/11-3/chainsaw-man-anime-releases-opening-first-ending-videos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chainsaw Man Anime Releases Opening, First Ending Videos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQZ8awzKjUEVDPSKBFEYPBoNgz30dre0_8z1f_2yZof__XjkFYy1lmEDqReteEQGQs7OdHZcQBB" alt="Chainsaw Man Anime Releases Opening, First Ending Videos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following the release of the first episode of Chainsaw Man in Japan today, MAPPA released the official opening theme movie for the series, “KICK BACK” by&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnet.com/culture/entertainment/chainsaw-man-stream-anime-series-on-crunchyroll/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Chainsaw Man&#39; Drops Tuesday: Stream the Anime Series on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQKMbK_qjPJXXEwCehtDnnqOwWuxK4ASp1WpUoGIYzNP7YCwaEulhtVXIv9iBr8523GWkFy3w7P" alt="&#39;Chainsaw Man&#39; Drops Tuesday: Stream the Anime Series on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Denji becomes Chainsaw Man on Crunchyroll in October. Tatsuki Fujimoto/MAPPA/Crunchyroll. One of the most anticipated anime releases of 2022 will finally stream&nbsp;...</p></div>
            </div>
        </a><a href='https://beebom.com/chainsaw-man-devils-fiends-devil-hybrids-difference/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chainsaw Man: Difference Between Devils, Fiends, and Devil Hybrids</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRqepeeyVBdvurLCUQY36bDhBrO97GL1nckj-SpY5OzwYPDk1wo3CA0aQUp7XWqDORgtBKEZhyP" alt="Chainsaw Man: Difference Between Devils, Fiends, and Devil Hybrids" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Learn the differences between devils, fiends, and devil hybrids in the new Chainsaw Man anime and manga with detailed descriptions.</p></div>
            </div>
        </a>
        </Template></>;
}