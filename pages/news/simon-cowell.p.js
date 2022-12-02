import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Simon Cowell</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Simon Cowell"/>
        <meta name="description" content="Trending News about Simon Cowell" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Simon Cowell</h1>
            <Image width={800} height={500} src="https://mediaproxy.snopes.com/width/1200/https://media.snopes.com/2022/12/online_posts_said_there_was_very_sad_news_and_that_bruce_willis_was_dead_but_it_was_a_death_hoax.jpg" alt="Simon Cowell"/>
            <h3>Recent News</h3>
            <a href='https://www.snopes.com/fact-check/simon-cowell-death-hoax/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Simon Cowell Is Not Dead, Despite &#39;Very Sad News&#39; Death Hoax</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRErKVON6c_x0eetMTtC8N6npOJYVaw9eEOrcrwgWW8DRdqHL1o46vtE46p3UTDfhJMfm9-AWml" alt="Simon Cowell Is Not Dead, Despite &#39;Very Sad News&#39; Death Hoax" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The death hoax for Cowell showed a doctored picture of former U.S. President Bill Clinton paying respects to Black baseball legend Hank Aaron.</p></div>
            </div>
        </a>
        </Template></>;
}