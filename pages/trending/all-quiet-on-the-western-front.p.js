import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>All Quiet on the Western Front</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,All Quiet on the Western Front"/>
        <meta name="description" content="Trending News about All Quiet on the Western Front" /></Head><Template>
            <h1 style={{fontSize: "30"}}>All Quiet on the Western Front</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-95147559,width-1070,height-580,imgsize-7972,overlay-economictimes/photo.jpg" alt="All Quiet on the Western Front"/>
            <h3>Recent News</h3>
            <a href='https://economictimes.indiatimes.com/news/international/uk/all-quiet-on-the-western-front-on-netflix-do-you-want-to-see-a-story-retold-a-third-time-you-just-might/articleshow/95147536.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>All Quiet on the Western Front on Netflix: Do you want to see a story ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSFAMaVCozpwSsctLIZj7IXEkjRhM4C9pzWcYXAu70Z337uH8WVuvXo8gjLtF0P6OIx3ZkkYH8X" alt="All Quiet on the Western Front on Netflix: Do you want to see a story ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The conflict between Germany and the Allies ended on November 11, 1918. We can never forget the moment as it was the light at the end of the tunnel.</p></div>
            </div>
        </a><a href='https://www.ign.com/articles/all-quiet-on-the-western-front-review'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>All Quiet on the Western Front Review - IGN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTPhYPYZ5zcsDSADN3mxsHdP9aTTn-d96RJTsb7mkRTgAzryVmotDqbS-fgirWAb9hYuW_IC3CYjA" alt="All Quiet on the Western Front Review - IGN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>All Quiet on the Western Front reveals a harrowing glimpse of the reality of war with tear-jerking performances throughout.</p></div>
            </div>
        </a><a href='https://www.latimes.com/entertainment-arts/movies/story/2022-10-28/all-quiet-on-the-western-front-1930-original-how-to-watch'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to watch the original &#39;All Quiet on the Western Front&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQusFcUYL8TUNHKb1uA0orYmD0oLpEe6Uj3AncoOtNbD47C-gmlkXJXrMrnOoOYm7BWtz7sYA6e" alt="How to watch the original &#39;All Quiet on the Western Front&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>You can stream the 1930, 1979 and 2022 versions of &#39;All Quiet on the Western Front.&#39; Here&#39;s where to find them, with excerpts from Times coverage.</p></div>
            </div>
        </a><a href='https://collider.com/all-quiet-on-the-western-front-anti-war-films/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;All Quiet on the Western Front&#39; and the Tragic Futility of Anti-War ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQiSRUk7SNpFAVL_AMo6bBzu-E8tY9Qbcs1tEYt0s9iNueNWxGM4-4pOU43yaIkdd1xyUz6XRuj" alt="&#39;All Quiet on the Western Front&#39; and the Tragic Futility of Anti-War ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The best adaptation of the novel to date embodies an artistic rage at how those in power are fully aware of the doom they are sending men into. all-quiet&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/10/28/movies/all-quiet-on-the-western-netflix.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>In a German &#39;All Quiet on the Western Front,&#39; History Has a Starring ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRzkAaZAVcfAchY93ShIeh6BIAoaOEPn-BeHNGMK5gXWJQOoc_VXHCcS8AaOSRGalz0cue-IEO3" alt="In a German &#39;All Quiet on the Western Front,&#39; History Has a Starring ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>More gruesome than previous film adaptations of the novel, a new Netflix feature looks to other conflicts past and present.</p></div>
            </div>
        </a><a href='https://www.nbcnews.com/think/opinion/new-netflix-war-movie-quiet-western-front-brutal-rcna54619'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New Netflix war movie &#39;All Quiet on the Western Front&#39; is brutal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcROKeiMXyqMqw5OkGRg5ehikUOtnSNnQW0QPaDVOdXTlU2uO1ie9CREs0KqaMGI_fgy3UOMLq4t" alt="New Netflix war movie &#39;All Quiet on the Western Front&#39; is brutal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One of the best new Netflix movies right now is &#39;All Quiet on the Western Front&#39; — which is a frustrating but searing look at World War I via France and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.firstpost.com/entertainment/explained-why-all-quiet-on-the-western-front-is-one-of-the-great-war-movies-of-our-time-11528741.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Explained: Why All Quiet on the Western Front is one of the great ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ1fAzYs58KeIZV9J1nkAAE8h5STZK1IZwUztZiuw77RWw1K2LO8VqIko_gaIwwdiOtG-wq4x2m" alt="Explained: Why All Quiet on the Western Front is one of the great ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Netflix&#39;s adaptation of the classic Erich Maria Remarque pacifist novel, arguably, even improves upon the Oscar-winning 1930 film of the same name,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}