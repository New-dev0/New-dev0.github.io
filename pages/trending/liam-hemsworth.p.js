import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Liam Hemsworth</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Liam Hemsworth"/>
        <meta name="description" content="Trending News about Liam Hemsworth" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Liam Hemsworth</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/211213114243-the-witcher-season-2-netflix.jpg?c=16x9&q=w_800,c_fill" alt="Liam Hemsworth"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/10/30/entertainment/henry-cavill-liam-hemsworth-the-witcher/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Henry Cavill exits &#39;The Witcher&#39; as Liam Hemsworth takes over lead ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRw4DDnDxcTmEYCERQG_EB-RvECSQxmzW93A_7i_0DAxxSo4WhfHzDfV9hnY6wZgq0X80jeeyIb" alt="Henry Cavill exits &#39;The Witcher&#39; as Liam Hemsworth takes over lead ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Henry Cavill is putting down his blades and moving on from &quot;The Witcher&quot; after three seasons as the leading man on the Netflix series.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/entertainment/web-series/the-witcher-renewed-for-season-4-liam-hemsworth-to-replace-henry-cavill-8238034/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liam Hemsworth to replace Henry Cavill in The Witcher Season 4</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRwT1DQ2B-yK2RR_VgH4tF2Ss6EECjIM7uJrprAK4pQu1rDVyFfd6k8UuWYZsZngzF2GRJgJCvW" alt="Liam Hemsworth to replace Henry Cavill in The Witcher Season 4" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Henry Cavill had a short-term deal for The Witcher and felt it was time to move on after three seasons on the show, which films overseas and has a demanding&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatvnews.com/entertainment/ott/henry-cavill-replaced-in-netflix-boycott-the-witcher-geralt-of-rivia-by-liam-hemsworth-netizens-outraged-2022-10-30-819944'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Henry Cavill replaced in Netflix&#39;s The Witcher by Liam Hemsworth ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT-Hl1kOKptmgsEJSEFqtQ1mbGUVd-UvNEiZ1d0tJC1JN2Q5UaoIJGg5kvnX3esP8wJ19Pmxffn" alt="Henry Cavill replaced in Netflix&#39;s The Witcher by Liam Hemsworth ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Social media users have been left furious with Netflix&#39;s decision to replace Henry Cavill with Liam Hemsworth in The Witcher. Check out the reactions here.</p></div>
            </div>
        </a><a href='https://variety.com/2022/tv/news/the-witcher-liam-hemsworth-henry-cavill-leaving-season-4-1235417724/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;The Witcher&#39; Season 4 Recasts Geralt of Rivia With Liam ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5nOZ-7kqflF3BJPG_Dfhxn7nw_3roPg5FMkg-ExuGxTokNIDgVbE7ul93ExrYEJl65351C_bS" alt="&#39;The Witcher&#39; Season 4 Recasts Geralt of Rivia With Liam ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Liam Hemsworth will take over the role of Geralt of Rivia in &quot;The Witcher&quot; Season 4, as Season 3 of the Netflix series will be Henry Cavill&#39;s last.</p></div>
            </div>
        </a><a href='https://www.wionews.com/entertainment/hollywood/news-liam-hemsworth-to-replace-henry-cavill-in-the-witcher-season-4-529529'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Its confirmed! Liam Hemsworth to replace Henry Cavill in The ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSEqtH-60mjeQAoOh481hNf0HNQ0yqDPc0_5WI7rP_LXD69OBq7-wu0DxwNpjZ5aFST-UvGStcq" alt="Its confirmed! Liam Hemsworth to replace Henry Cavill in The ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hollywood actor Liam Hemsworth is all set to play Geralt of Rivia in the fourth season of &#39;The Witcher&#39;. The 32-year-old has replaced Henry Cavill.</p></div>
            </div>
        </a>
        </Template></>;
}