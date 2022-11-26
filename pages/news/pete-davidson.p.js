import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pete Davidson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pete Davidson"/>
        <meta name="description" content="Trending News about Pete Davidson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pete Davidson</h1>
            <Image width={800} height={500} src="https://pagesix.com/wp-content/uploads/sites/3/2022/11/Emily-Ratajkowski-Pete-Davidson-dating.jpg?quality=75&strip=all&w=1200" alt="Pete Davidson"/>
            <h3>Recent News</h3>
            <a href='https://pagesix.com/2022/11/15/emily-ratajkowski-likes-tweet-about-dating-pete-davidson/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Emily Ratajkowski likes tweet about &#39;dating Pete Davidson&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQl_yRXI7Sg9I2g3xO0QuNu8JSpBky1WOqtdW1avST6O9gz9gHwinnYvmxEJV_b9IGaLG08yZaO" alt="Emily Ratajkowski likes tweet about &#39;dating Pete Davidson&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Model Emily Ratajkowski sent a subtle message via Twitter about “dating Pete Davidson” amid reports that she and comedian Pete Davidson are an item.</p></div>
            </div>
        </a><a href='https://www.capitalfm.com/news/pete-davidson-emily-ratajkowski-dating/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Are Pete Davidson and Emily Ratajkowski dating?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSib9UmM-hICoxOR1-o6lDnHy42ZwYJG_GlL4GHHxCBhQp6yfXEyh1zSaJvDbGWIB8gqRakPttc" alt="Are Pete Davidson and Emily Ratajkowski dating?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pete Davidson has reportedly moved on from his split with Kim Kardashian after he was seen on a date with Emily Ratajkowski.</p></div>
            </div>
        </a><a href='https://www.eonline.com/news/1354759/emily-ratajkowski-subtly-reacts-to-pete-davidsons-dating-life'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Emily Ratajkowski Subtly Reacts to Pete Davidson&#39;s Dating Life</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRgxGyW6kxOsBVgVw-Qo7INTlXwNXAynbI2bT3BbTa0kg_sTPnW95Sf4_A-AgW-6PN8cnBRF_y9" alt="Emily Ratajkowski Subtly Reacts to Pete Davidson&#39;s Dating Life" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Emily Ratajkowski seemingly acknowledged the romance rumors about her and Pete Davidson by liking a playful tweet from Dionne Warwick about the comedian&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.capitalxtra.com/features/pete-davidson-dating-history-kim-kardashian-emily-ratajowski-ariana-grande/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pete Davidson dating history: from Kim Kardashian to EmRata</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRENhURr-BFKk0kBytdbQ6Gm30CqvjWFPUUW2R6R22WlQkt8JvtPKdCRoWiNqpBCseZ6Pvw505a" alt="Pete Davidson dating history: from Kim Kardashian to EmRata" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Who has Pete Davidson dated? Take a look back at his string of famous ex-girlfriends, from Ariana Grande to Margaret Qualley here...</p></div>
            </div>
        </a><a href='https://www.complex.com/pop-culture/pete-davidson-emily-ratajkowski-dating'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pete Davidson and Emily Ratajkowski Reportedly Dating</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRDwMD2VryVhKSMeScUESgtU1zEKnT4lFOhQcFRY4LrHUdWZPKU-fynReaSQjQRj370UiSJ8_u-" alt="Pete Davidson and Emily Ratajkowski Reportedly Dating" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Emily Ratajkowski speculation arrives on the heels of Pete Davidson&#39;s split with Kim Kardashian after a very public nine-month relationship.</p></div>
            </div>
        </a>
        </Template></>;
}