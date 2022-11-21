import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Colorado Springs</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Colorado Springs"/>
        <meta name="description" content="Trending News about Colorado Springs" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Colorado Springs</h1>
            <Image width={800} height={500} src="https://i.guim.co.uk/img/media/36f778e8251353aa40834f1df85bceaa6a7a1f98/0_103_2234_1341/master/2234.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=54554074ef6a8cb124a1f55d3690a5c5" alt="Colorado Springs"/>
            <h3>Recent News</h3>
            <a href='https://www.theguardian.com/us-news/2022/nov/20/people-killed-shooting-at-colorado-springs-nightclub'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>At least five people killed in shooting at gay nightclub in Colorado ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS8mlVyHu3WscYfeBDhhESSZoNJGm-x5pMsUrMhnOvrNba0iX5G5pz6Ub2icIM83IJJY4e_M-lJ" alt="At least five people killed in shooting at gay nightclub in Colorado ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>At least 25 people were also injured in attack at Club Q, and suspect in custody after patrons confronted and subdued him, police say.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/20/us/colorado-springs-shooting-gay-nightclub/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gunman kills 5 at LGBTQ nightclub in Colorado Springs before ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ8oDF50OhQn7LU_bzbCYgEmAsQbxE2OOG-ebGAZYetXKFaPNCd6x8q7iGtcgBV7eWdQkUVZ446" alt="Gunman kills 5 at LGBTQ nightclub in Colorado Springs before ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A 22-year-old gunman entered an LGBTQ nightclub in Colorado Springs, Colorado, just before midnight Saturday and immediately opened fire, killing at least&nbsp;...</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/20/1138045219/colorado-springs-shooting-lgbtq-club-q-5-dead'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Two patrons confronted the man who opened fire at an LGBTQ club ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRG4eKn8iuMnUpwv82I9xwWPbUiZOmKgTEr6NT6aT6vHNzFrOQWLWZm7cpB237woMxGPiPKEYcZ" alt="Two patrons confronted the man who opened fire at an LGBTQ club ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mayor John Suthers tells NPR one of the two patrons who fought the suspect grabbed a gun from the shooter and hit him with it. The motive behind the attack,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cpr.org/2022/11/20/colorado-springs-shooting-q-club-lgbtq/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Live Blog: shooting at Club Q in Colorado Springs leaves 5 dead ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQnZlZ2GHhyPz6W3PRXz8wQ5gNRSbmY6PQlbPeoZ9psxTjfWNrIvtu6oE-PLYgiOqOOHlJ53xmA" alt="Live Blog: shooting at Club Q in Colorado Springs leaves 5 dead ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cardboard sign with the words &amp;quot;Love over hate&amp;quot; sits next to flowers Dan Boyce/CPR News A makeshift memorial near Club Q, an LGBTQ club in Colorado&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/live/2022/11/20/us/colorado-springs-shooting'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Colorado Springs Shooting Latest Updates: Patrons Subdued ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQWn5sZE_GDbKPpNnPrzWCSd7edwrJ8Yv9Vggmd6PbAD_a6-XlncZEw_YU9wr4Ctt045Dwuz_az" alt="Colorado Springs Shooting Latest Updates: Patrons Subdued ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The authorities credited people inside the gay nightclub in Colorado Springs with stopping the gunman, who police say opened fire with a long rifle just&nbsp;...</p></div>
            </div>
        </a><a href='https://www.axios.com/2022/11/20/club-q-shooting-colorado-springs-lgbtq-community'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Club Q a &quot;haven&quot; for Colorado Springs LGBTQ community</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT2xMGshf6QV5HvuNbgHBNfNCzsxPARqRLy1-fZTUubqo9L-jhHcO80j6m8t2C6Cjm4rA6MJ9kW" alt="Club Q a &quot;haven&quot; for Colorado Springs LGBTQ community" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Law enforcement officers are investigating the motive for the shooting as well as whether it was a hate crime, Vasquez said. The big picture: Colorado Springs,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}