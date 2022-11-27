import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Irene Cara</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Irene Cara"/>
        <meta name="description" content="Trending News about Irene Cara" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Irene Cara</h1>
            <Image width={800} height={500} src="https://imageio.forbes.com/specials-images/imageserve/63827b1399f3515ee44597a0/0x0.jpg?format=jpg&width=1200" alt="Irene Cara"/>
            <h3>Recent News</h3>
            <a href='https://www.forbes.com/sites/adriennegibbs/2022/11/26/remember-her-name-irene-cara-fame-sparkle-flashdance-star-dies-at-63/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Remember Her Name: Irene Cara, &#39;Fame,&#39; &#39;Sparkle,&#39; &#39;Flashdance ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTwpBhO4-cA9p3kawGbcoB7rAsULaIYMWsL5pOPYn1Age_2_wocD4nwuS-QJCOibf7bYymXIYG0" alt="Remember Her Name: Irene Cara, &#39;Fame,&#39; &#39;Sparkle,&#39; &#39;Flashdance ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Irene Cara, an Oscar- and Grammy-winning master of music creation, has made her transition. The Bronx-born, Puerto Rican-Cuban actor and songstress died in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/26/1139275959/fame-flashdance-irene-cara-dies'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Fame&#39; and &#39;Flashdance&#39; singer Irene Cara has died at 63</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="&#39;Fame&#39; and &#39;Flashdance&#39; singer Irene Cara has died at 63" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Oscar-winning singer-actress died at her home in Florida, according to her publicist. Cara was behind some of the most era-defining pop anthems of the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/26/entertainment/irene-cara-obit/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Irene Cara, &#39;80s pop star behind &#39;Fame&#39; and &#39;Flashdance&#39; theme ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTqPrIAjdX41_lrGAtBeOFot0k6ri6jrn9NsnPohm89j_qhxCUfHSGE_5mCiXgwp44S8lQb8NDY" alt="Irene Cara, &#39;80s pop star behind &#39;Fame&#39; and &#39;Flashdance&#39; theme ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Actress and singer Irene Cara, an Oscar and Grammy winner best known for the theme songs of &quot;Fame&quot; and &quot;Flashdance&quot; in the early &#39;80s, has died,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnbc.com/2022/11/26/irene-cara-oscar-winning-singer-of-fame-and-flashdance-title-tracks-dies-at-63.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Irene Cara, Oscar-winning singer of &#39;Fame&#39; and &#39;Flashdance&#39; title ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQN0WidAsP1ul-dC5M5I37KyjYtfvMwfAjULSASmvgqx8KSUiW5e-Z9wQlmApEG-L3X3GijR4fp" alt="Irene Cara, Oscar-winning singer of &#39;Fame&#39; and &#39;Flashdance&#39; title ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Irene Cara, the Oscar-winning musician best known for singing the title tracks to the movies &quot;Fame&quot; and &quot;Flashdance&quot; has died, her publicist said Saturday.</p></div>
            </div>
        </a><a href='https://www.marca.com/en/lifestyle/music/2022/11/26/638223a8ca474166028b45ce.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Fame&#39; and &#39;Flashdance&#39; singer Irene Cara found dead at Florida home</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTmzEEVuhpCk40BQFJX1VXH8RtK6ckmyDSD_1p4FMrNuBNj4Wl4BTBc32rqp0rNzuTv16FA65qg" alt="&#39;Fame&#39; and &#39;Flashdance&#39; singer Irene Cara found dead at Florida home" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Irene Cara has been found dead at her home in Florida, with the cause of death being unknown. The famous singer was known for the 1980&#39;s hits &#39;Fame&#39; and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/26/arts/music/irene-cara-dead.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Irene Cara, &#39;Fame&#39; and &#39;Flashdance&#39; Singer, Dies at 63</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTe1zdp3M7j3O5D1NCa5tgPa3FfVE6JM_SpxFZMq9siJTTzUESw0O1x0E8qR-p2v3dvW3p0lv9t" alt="Irene Cara, &#39;Fame&#39; and &#39;Flashdance&#39; Singer, Dies at 63" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ms. Cara was a child star from the Bronx who gained international fame as the singer of major pop anthems from movies of the 1980s.</p></div>
            </div>
        </a>
        </Template></>;
}