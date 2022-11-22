import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Morgan Freeman</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Morgan Freeman"/>
        <meta name="description" content="Trending News about Morgan Freeman" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Morgan Freeman</h1>
            <Image width={800} height={500} src="https://imageio.forbes.com/specials-images/imageserve/637bc5f7982fa52fd3817eea/0x0.jpg?format=jpg&crop=3328,2253,x266,y125,safe&width=1200" alt="Morgan Freeman"/>
            <h3>Recent News</h3>
            <a href='https://www.forbes.com/sites/danidiplacido/2022/11/21/morgan-freeman-sparks-backlash-after-leading-qatar-world-cup-opening-ceremony/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morgan Freeman Sparks Backlash After Leading Qatar World Cup ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSGqEQy_pOx3XDctLUKflk9pB0a8hN8q6qLJGayoceDsMrwWcHkYdLtlxECEewr83Fu87rHXwgE" alt="Morgan Freeman Sparks Backlash After Leading Qatar World Cup ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hollywood star Morgan Freeman made a surprise appearance at the opening ceremony of the FIFA World Cup in Qatar, sparking backlash from disappointed fans.</p></div>
            </div>
        </a><a href='https://www.siasat.com/ghanim-al-muftah-morgan-freemans-dialogue-at-fifa-world-cup-opening-sparks-interaction-2461813/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ghanim Al Muftah, Morgan Freeman&#39;s dialogue at FIFA World Cup ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ2XYuHNkNZFkMFNyN7FVfwFzNUx3NL9Ek-jFVwablKEtGEyumRpvJFQB-omhSa08kXV1tQHA39" alt="Ghanim Al Muftah, Morgan Freeman&#39;s dialogue at FIFA World Cup ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ghanim Al Muftah drew the world&#39;s attention at the opening ceremony of the World Cup 2022, with his dialogue with the famous American actor.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/entertainment/music/jungkook-morgan-freeman-perform-at-fifa-world-cup-2022-opening-ceremony-photos-videos-8279735/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jungkook and Morgan Freeman perform at FIFA World Cup 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTLcCA8IYfB5nf8v5Idd5Xf-B1wZCU8AFCpZbzO4wuhHlYTuY6r_uxw64u0_oF4xvkEiSlAVxo2" alt="Jungkook and Morgan Freeman perform at FIFA World Cup 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The FIFA World Cup 2022 opening ceremony saw performances by K-pop band BTS&#39; Jungkook, Hollywood actor Morgan Freeman, YouTuber Ghanim Al Muftaha and singer&nbsp;...</p></div>
            </div>
        </a><a href='https://nypost.com/2022/11/21/morgan-freeman-slammed-for-taking-part-in-2022-qatar-world-cup-opening-ceremony-should-be-ashamed/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morgan Freeman slammed for taking part in 2022 Qatar World Cup ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQndvnAm3cBE-Nq00mso5IYDpOd33-BDlO7XB-oM5Y1SH5VEUfohasp7D60MhuOQnfWpoo4ze7g" alt="Morgan Freeman slammed for taking part in 2022 Qatar World Cup ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fans are giving Morgan Freeman a red card for this stunt. The 85-year-old actor kicked off the tournament by narrating the opening segment of &quot;The Calling&quot;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.timesnownews.com/viral/fifa-world-cup-2022-the-reason-why-actor-morgan-freeman-wore-a-single-beige-glove-during-the-opening-ceremony-article-95648071'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022: The reason why actor Morgan Freeman wore ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTnS_PXUocmvQ9ByLg5420_tAGXNHzwl3hwTniNvk_BOt8O_LKEtyAEspbFZ5f4RjV72SVMoJ_F" alt="FIFA World Cup 2022: The reason why actor Morgan Freeman wore ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Morgan Freeman has been wearing a compression glove on his right hand ever since suffering a paralysis after his car crash in 2008.</p></div>
            </div>
        </a><a href='https://www.scoopwhoop.com/sports/morgan-freeman-left-hand-glove-qatar-world-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Here&#39;s Why Morgan Freeman Had A &#39;Fake&#39; Left Hand During Qatar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQtbiNjUniR0KAQqEPqW153ilLy-qhPqISfBVjY45dMDjnUUmIi7NabrzO_ZvOqpYweggAhBUuY" alt="Here&#39;s Why Morgan Freeman Had A &#39;Fake&#39; Left Hand During Qatar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>During the opening ceremony of Fifa Qatar World Cup, Twitter observed Morgan Freeman and his fake left hand. It&#39;s because of a condition called&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}