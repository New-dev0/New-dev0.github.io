import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>DRDO</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,DRDO"/>
        <meta name="description" content="Trending News about DRDO" /></Head><Template>
            <h1 style={{fontSize: "30"}}>DRDO</h1>
            <Image width={800} height={500} src="https://spiderimg.amarujala.com/assets/images/2021/11/15/750x506/drdo-apprentice-recruitment-2021_1636967365.jpeg" alt="DRDO"/>
            <h3>Recent News</h3>
            <a href='https://www.amarujala.com/india-news/indian-army-drdo-making-electromagnetic-railgun-defence-news-in-hindi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indian Army: DRDO बना रहा भविष्य का हथियार, नभ-थल और जल तीनों ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRhb_BoebrbHgvQy420pTAkEDisj8mECfvyt6TTSX80H5vlGc_J9jm-p-LLow0UbkDwgYxmfa7z" alt="Indian Army: DRDO बना रहा भविष्य का हथियार, नभ-थल और जल तीनों ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>डीआरडीओ ने इलेक्ट्रो मैग्नेटिक रेलगन बनाने की तैयारियां शुरू कर दी है।</p></div>
            </div>
        </a><a href='https://www.zeebiz.com/hindi/india/drdo-is-working-on-100mg-rail-gun-electromagnetic-railgun-drdo-indian-army-air-force-100109'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Electromagnetic Railgun: DRDO बना रहा घातक इलेक्ट्रोमैग्नेटिक ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQoM_emqZDU84kP5uAOeLEUhVU6Rn_K0NnQP4MFsmkAw-e5HOx00n2xxQl-xDH7gCfR6ay64D-h" alt="Electromagnetic Railgun: DRDO बना रहा घातक इलेक्ट्रोमैग्नेटिक ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Electromagnetic Railgun: छोटी मिसाइलों से जो काम हो सकते हैं, वह इससे आसानी से किए जा सकेंगे,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dnaindia.com/hindi/science/news-drdo-successfully-tests-futuristic-electromagnetic-railguns-what-it-how-it-works-defense-system-4056286'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Electromagnetic Railgun: DRDO तैयार कर रहा है घातक ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRePaxheGjaHWyQIffgI3oyNqfE1GIBLftEvN3lNLQBxINesCLZlrg_xDBcBuDcWrJdho3r9p5A" alt="Electromagnetic Railgun: DRDO तैयार कर रहा है घातक ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>इलेक्ट्रोमैग्नेटिक रेलगन एक तरह की तोप है, जिसकी मारक क्षमता 200 किलोमीटर तक होती है.</p></div>
            </div>
        </a><a href='https://www.timesnowhindi.com/india/drdo-railgun-future-weapon-of-india-that-replaces-cannon-article-94877285'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DRDO का घातक हथियार &#39;रेलगन&#39;, 200 KM तक मारक क्षमता; बिना बारूद के ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRfrtvMHvS7grs_0vZhEYkcenr_ZUCsPIm0qgb3kiYzSNIXi41Cnil5WS3XKNu-V4zMqAXnTGm9" alt="DRDO का घातक हथियार &#39;रेलगन&#39;, 200 KM तक मारक क्षमता; बिना बारूद के ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DRDO जिस खतरनाक हथियार पर काम कर रहा है, उसमें बारूद का इस्तेमाल नहीं होता है।</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/national/story-electromagnetic-railgun-drdo-indian-army-air-force-navy-defence-news-7221645.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>बगैर बारूद दागेगी गोला, 200 किमी तक करेगी मार; DRDO बना रहा घातक रेलगन</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT64ySxINIDLWLu3IISRz_UCcNUMdsHqrFTjELUu1a8gTO3EFqKmq2D_F_0IajZMnU8_c5lxBEj" alt="बगैर बारूद दागेगी गोला, 200 किमी तक करेगी मार; DRDO बना रहा घातक रेलगन" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>इलेक्ट्रिक करंट के जरिये इलेक्ट्रो मैग्नेटिक फील्ड तैयार किया जाता है।</p></div>
            </div>
        </a>
        </Template></>;
}