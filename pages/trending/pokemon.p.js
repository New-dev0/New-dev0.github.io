import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pokemon</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pokemon"/>
        <meta name="description" content="Trending News about Pokemon" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pokemon</h1>
            <Image width={800} height={500} src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/11/pokemon-scarlet-violet-rotom-phone-case-switch-references-fixed.jpg" alt="Pokemon"/>
            <h3>Recent News</h3>
            <a href='https://gamerant.com/pokemon-scarlet-violet-rotom-phone-case-save-data-reward-home-transfer-id/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pokemon Scarlet and Violet&#39;s Rotom Phone Cases Could go Further ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSznvc7lZH1E5Z3PdL1JOSsRZJt-32iwL29T67ifYGEx3fUO4gB61ega3p8ASqPc-8vcYEEiJh1" alt="Pokemon Scarlet and Violet&#39;s Rotom Phone Cases Could go Further ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pokemon Scarlet and Violet players can receive Rotom Phone cases if they own other Switch entries, but this system could identify way more games.</p></div>
            </div>
        </a><a href='https://screenrant.com/pokemon-scarlet-violet-legends-arceus-features-paldea-region/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Will Pokémon Scarlet &amp; Violet Be Like Legends: Arceus?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTPsVT9W-qsIIWRhSMhvlPFlHtklQZGBIdiTFecGROPMhBJzmtgFbIEDVYiwLP_37SglXF9HsD4" alt="Will Pokémon Scarlet &amp; Violet Be Like Legends: Arceus?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pokémon Scarlet and Violet is launching in November and is open world. Here is how much Gen 9 is similar to Pokémon Legends: Arceus.</p></div>
            </div>
        </a><a href='https://screenrant.com/new-pokemon-legends-games-regions-sinnoh-johto-celebi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Forget Sinnoh, These Pokémon Regions Should Be Explored More</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRbw4BAvaVVqGNlfjUIWFuj-CgJ5rKH2O9IMGy65TFNY-JcpO_CIYgk6Zz-615dgwBcYyaDbr6k" alt="Forget Sinnoh, These Pokémon Regions Should Be Explored More" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With Pokémon: Legends Arceus and Brilliant Diamond and Shining Pearl releasing in the past 12 months, fans have been able to explore Sinnoh&#39;s past and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dexerto.com/pokemon/pokemon-scarlet-violet-leak-reveals-shiny-pokemon-cant-be-knocked-out-by-lets-go-feature-1982977/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pokemon Scarlet &amp; Violet leak reveals Shiny Pokemon can&#39;t be ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTHgt-TqRZb5-69Ne3LuvuA-vBtzdPtYb0i4n2SdvwD1a2q6OwTfRcJYikkYQEAMWDGMOnRvWeQ" alt="Pokemon Scarlet &amp; Violet leak reveals Shiny Pokemon can&#39;t be ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Leaked footage of Pokemon Scarlet &amp; Violet has put Shiny Hunter&#39;s fears at ease as the new Let&#39;s Go mechanic can&#39;t knock out Shinies.</p></div>
            </div>
        </a><a href='https://www.moneycontrol.com/news/trends/pokemons-ash-ketchum-becomes-world-champion-after-25-years-9506841.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pokemon&#39;s Ash Ketchum becomes world champion after 25 years</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSvgzyR_kkQ-hUVV-vJvRh1qJs9wcTCMdEcFTThLObhdg3jvkFIUdju13DOLEnR2P0eUxcQR_GY" alt="Pokemon&#39;s Ash Ketchum becomes world champion after 25 years" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ash Ketchum has become the world&#39;s best Pokemon trainer after 25 long years. The protagonist for the Pokemon anime series, who has remained 10-years-old&nbsp;...</p></div>
            </div>
        </a><a href='https://ewn.co.za/2022/11/12/pokemon-s-ash-ketchum-finally-becomes-world-champion-after-25-years'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pokémon&#39;s Ash Ketchum finally becomes World Champion after 25 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS5DcMyW4X_nExsnWcwLEWiFBtKv4ozfQiEnZMJB7tzkfoLuZl3iAKBlIa93dHd0JWS4lv8U2rc" alt="Pokémon&#39;s Ash Ketchum finally becomes World Champion after 25 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fans of the franchise were met with joy after the character became the ultimate Pokémon trainer in the world.</p></div>
            </div>
        </a><a href='https://www.videogamer.com/guides/pokemon-scarlet-and-violet-legendaries/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pokemon Scarlet And Violet Legendaries, Koraidon And Miraidon ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6afs36MIjy8fSUUDsk2_QN9yoUDnKMgiU0IlbxZgqt7-zODZrbjG9yHbevzmhBKga_YM0MFuP" alt="Pokemon Scarlet And Violet Legendaries, Koraidon And Miraidon ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meet Pokemon Scarlet and Violet Legendaries, Koraidon And Miraidon, who will traverse you throughout the game.</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/trending-news/story/after-25-years-pokemons-ash-ketchum-becomes-the-world-champion-netizens-cant-keep-calm-2296487-2022-11-12'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>After 25 years Pokemon&#39;s Ash Ketchum becomes the world ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTcrhM7Zj9UAz_g6RV1QMdoSOV3C6DfjPPgWc6UAOfIR_sNmzAVGB10lW37jS2B4u3nM_SyK53e" alt="After 25 years Pokemon&#39;s Ash Ketchum becomes the world ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The official Twitter profile for Pokemon shared a post announcing Ash Ketchum&#39;s achievement. In the picture shared with the post, Ash can be seen holding&nbsp;...</p></div>
            </div>
        </a><a href='https://www.distractify.com/p/is-the-pokemon-anime-ending'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Is The Pokémon Anime Ending? Pokemon Ultimate Journeys Shows ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS4MxE39rlQhGChi7jgzdF9BajwEgGmn6Hac56UjeQstnGbee5Du2y3bTcxS9iowpXjrFwOaxAt" alt="Is The Pokémon Anime Ending? Pokemon Ultimate Journeys Shows ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Since Pokémon began in 1997, Ash Ketchum&#39;s dream was to become the world champion Pokémon Trainer. Twenty-five years later, is the story ending?</p></div>
            </div>
        </a><a href='https://screenrant.com/pokmon-ash-ketchum-retiring-episode-title-journeys/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pokémon Just Hinted That It&#39;s Retiring Ash Ketchum</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRHEq6hm4xrhnErICXJXFImYPpOMG3Ct1-OX1TvqJ4Bt8ryHzB_Zv138gvp6g5MiOf_qR3wTb28" alt="Pokémon Just Hinted That It&#39;s Retiring Ash Ketchum" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New episode titles for Pokemon Journeys have been revealed, and one of the titles hints that the anime is finally retiring Ash as the protagonist.</p></div>
            </div>
        </a>
        </Template></>;
}