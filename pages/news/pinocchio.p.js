import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pinocchio</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pinocchio"/>
        <meta name="description" content="Trending News about Pinocchio" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pinocchio</h1>
            <Image width={800} height={500} src="https://media.npr.org/assets/img/2022/12/09/matilda_unit_14280rc_wide-27192491719976fa9055c35c69c106c23865041e-s1400-c100.jpg" alt="Pinocchio"/>
            <h3>Recent News</h3>
            <a href='https://www.npr.org/2022/12/09/1141854709/pinocchio-matilda-musical-movie-netflix'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kids really can change the world — just ask &#39;Pinocchio&#39; and &#39;Matilda&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT90ix54NezWW1-5HwtydwuZYbnGgMpzHuauhAcV3d30L6dDPxOe7caYQ3x_iVOHSetZ3ih7kV9" alt="Kids really can change the world — just ask &#39;Pinocchio&#39; and &#39;Matilda&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Del Toro, who directed the movie with Mark Gustafson, has also darkened the story in other ways. This Pinocchio, who&#39;s voiced by Gregory Mann, dies multiple&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/12/09/entertainment/guillermo-del-toro-pinocchio-review/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Guillermo del Toro&#39;s Pinocchio&#39; is beautiful but comes with too many ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS_bh2pIx27R4Uji2ifRb7XXOS5OhIU0cWiMugv4SVb6rMl1HKY-BdfiVtVfSMX5p3Z3VuwCZEz" alt="&#39;Guillermo del Toro&#39;s Pinocchio&#39; is beautiful but comes with too many ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The mere title &quot;Guillermo del Toro&#39;s Pinocchio&quot; announces that this stop-motion animated movie reflects the keen eye and visual style of the directing&nbsp;...</p></div>
            </div>
        </a><a href='https://www.terracestandard.com/entertainment/review-del-toro-takes-his-pinocchio-to-very-dark-places/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Review: Del Toro takes his &#39;Pinocchio&#39; to very dark places</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQHQU6V7X3BRMHmRR6DS9r-XrZLb5ZFVpcazgrOly4OvlHw-YlsGh9VzIKwXv_ZqWCIZR9OVzoE" alt="Review: Del Toro takes his &#39;Pinocchio&#39; to very dark places" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Of course, lying is wrong. But that&#39;s not the only message the story sends. Even the classic 1940 Disney version — lighter and more kid-friendly than the 1883&nbsp;...</p></div>
            </div>
        </a><a href='https://time.com/6239786/pinocchio-review-guillermo-del-toro/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&lt;i&gt;Guillermo del Toro&#39;s Pinocchio&lt;/i&gt; Is Clever, Lively, and Just ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRjgGCTEjtuY_t_VK4nJgBZLY0xD5HvJFVgzAfEfMwVSqTSZf4irSlyDnOqQQa4pPUI_rSdN0J1" alt="&lt;i&gt;Guillermo del Toro&#39;s Pinocchio&lt;/i&gt; Is Clever, Lively, and Just ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This loose retelling of Carlo Collodi&#39;s weird and often unsettling 1883 fantasy novel (the screenplay is by del Toro and Patrick McHale) is a little too long,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.denofgeek.com/movies/guillermo-del-toros-pinocchio-vs-disney-what-are-differences/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Guillermo del Toro&#39;s Pinocchio vs. Disney: What Are the Differences?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSvyOm_nr388KHwreItrdHIBvHmLG9c43qxRuPx9IH09xCiLww-1xwtPaIAWg2HsNCCJPmJCxTv" alt="Guillermo del Toro&#39;s Pinocchio vs. Disney: What Are the Differences?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>More than 80 years after Walt Disney seemed to crystallize the Pinocchio tale for American audiences, Guillermo del Toro makes it his own.</p></div>
            </div>
        </a><a href='https://collider.com/pinocchio-frankenstein-story-guillermo-del-toro/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Pinocchio&#39; Is a Frankenstein Story, And Guillermo del Toro Knows It</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTkCKXpYAT4QqVCqKXx9CV-PtqTpHzyPjZNCczQNyHkK__sIlJVq3iTJ-y-SwEmwJwbgrY4NWdF" alt="&#39;Pinocchio&#39; Is a Frankenstein Story, And Guillermo del Toro Knows It" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Editor&#39;s Note: The following contains spoilers for Pinocchio.2022 saw the debut of two absolutely horrifying adaptations of the Pinocchio story (only one&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hollywoodreporter.com/lifestyle/lifestyle-news/m3gan-pinocchio-red-carpet-events-1235275190/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Events of the Week: &#39;M3GAN,&#39; &#39;Pinocchio&#39; and More</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSHiiINmikK8P1IvX8zNwn1bIyzi7QtyvRehFy5mWTrYXKcX0JdkJ2ffrubeJYbL3It7S0xn4d3" alt="Events of the Week: &#39;M3GAN,&#39; &#39;Pinocchio&#39; and More" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ryan Reynolds Amy Sussman/Getty Images ; Lizzo and James Corden Chris Polk/E! Entertainment/NBC via Getty Images ; James Pickens Jr., Kelly McCreary, Ellen Pompeo&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}