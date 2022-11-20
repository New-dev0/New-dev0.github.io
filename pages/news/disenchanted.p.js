import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Disenchanted</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Disenchanted"/>
        <meta name="description" content="Trending News about Disenchanted" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Disenchanted</h1>
            <Image width={800} height={500} src="https://film-authority.com/wp-content/uploads/2022/11/773806-featured.jpg" alt="Disenchanted"/>
            <h3>Recent News</h3>
            <a href='https://film-authority.com/2022/11/19/disenchanted/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Disenchanted</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSRvT92pVmHdirMde2EpDdREVEcsOFbOUfb2yyatkVNlkto63i4_FLbpEQU5WX4B1btibKd1juC" alt="Disenchanted" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This Amy Adams vehicle is a sequel to Enchanted, which coined $340 million back in 2007, and a far bigger sum on auxiliary markets; if you&#39;re wondering why a&nbsp;...</p></div>
            </div>
        </a><a href='https://collider.com/disenchanted-director-adam-shankman-interview/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Disenchanted&#39; Director Adam Shankman on Figuring Out the Story ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcToQTidLImPnM765vMfM0DRurVpXu7bV6DidNL3sc6Bk0tzwHfFHKFVIzHlba9DAet8VOcSK-hr" alt="&#39;Disenchanted&#39; Director Adam Shankman on Figuring Out the Story ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Disenchanted&#39;s Adam Shankman discusses the Disney+ Enchanted sequel starring Amy Adams, &amp; reveals how VFX had the power to make or break the feature.</p></div>
            </div>
        </a><a href='https://www.avclub.com/disenchanted-easter-eggs-adam-shankman-1849787675'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Disenchanted continues the tradition of hiding Disney Easter eggs in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ0nfsPFt3amM8dYvMSt94OdlpVK2uFGHEuiqnLn4l3-eForueEh6UvWfvseeLLIu349S1Da5Kr" alt="Disenchanted continues the tradition of hiding Disney Easter eggs in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The musical extravaganza Enchanted was notable for many things—bringing an animated Disney princess to life; launching the film career of Amy Adams;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/art-entertainment/-disenchanted-a-quick-guide-to-all-the-characters-of-the-magical-fairytale-world-news-238679'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Disenchanted&#39;: A Quick Guide To All The Characters Of The Magical ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSpFWXfzvS6UVjsjPNQ2Q17jJqsSZL5l734flBLXBl0C0eWYCS0rGdlJQcGD1RjAlutB4n_w0W3" alt="&#39;Disenchanted&#39;: A Quick Guide To All The Characters Of The Magical ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The magical fairytale world is set to collide with reality once again in Amy Adams starrer &#39;Disenchanted&#39; on Disney+ Hotstar.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/entertainment/movie-review/disenchanted-movie-review-amy-adams-disney-musical-sequel-8275666/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Disenchanted movie review: Amy Adams dusts off beloved Disney ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTvcilK5phSs6arJ4aBFV3IFFOUiAVYij_0iiRh-DhzfavErKFYInr--AZuEK5M1QIUryeUBRUa" alt="Disenchanted movie review: Amy Adams dusts off beloved Disney ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Disenchanted movie review: The long-awaited sequel to Disney&#39;s beloved 2007 fantasy film leaves a lot to be desired, despite Amy Adams&#39; committed central&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}