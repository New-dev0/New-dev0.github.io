import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pedri</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pedri"/>
        <meta name="description" content="Trending News about Pedri" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pedri</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/11/esp-2.jpg" alt="Pedri"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/sports/football/luis-enriques-spain-turns-passing-into-an-elevated-art-with-gavi-pedri-morata-and-the-wondrous-busquets-8294754/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Luis Enrique&#39;s Spain turns passing into an elevated art, with Gavi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRsoT7znh7TkT1MRpoKVMMM1p4daXFYZ7vbzQVJ1hn3j_HqDQ4xG-mZDUUNQrEsBrwYdWyH98_y" alt="Luis Enrique&#39;s Spain turns passing into an elevated art, with Gavi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It&#39;s not revolution, or counter-revolution, but an evolution, and you need to dwell into the minute and specifics to fully grasp and enjoy Spain&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en-ae/news/xavi-barcelona-spain-superstar-pedri-so-special/blt15e813be175a7176'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;He has no ceiling&#39; - Xavi explains what makes Barcelona &amp; Spain ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSKU9XU78uuRv4477uWraD2D0s9FdmLqsx6E-3aJ3PL063TGCY8o65dWmHoKVznAQLA5ZneYbmg" alt="&#39;He has no ceiling&#39; - Xavi explains what makes Barcelona &amp; Spain ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Xavi has heaped praise on 20-year-old midfielder Pedri, saying he has &quot;no ceiling&quot; as continues to impress for club and country,</p></div>
            </div>
        </a><a href='https://talksport.com/football/1234459/pedri-profile-spain-midfielder-world-cup-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pedri close to 100 Barcelona appearances, likened to Andres ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR-iACIkGJug3P0xBLksWG2MiN_7eEwyR9hTSxVAiwUr8hqBbdU0TueDw45GAqYOH1BLBHA__wk" alt="Pedri close to 100 Barcelona appearances, likened to Andres ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After being knocked out of Euro 2020 in the semi-finals, Spain will be hoping this winter&#39;s World Cup will have a happier ending.But there&#39;s one playe.</p></div>
            </div>
        </a><a href='https://www.sport.es/en/news/world-cup/xavi-hernandez-gavi-and-pedri-have-everything-to-mark-an-era-79184221'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Xavi Hernandez: Gavi and Pedri have everything to mark an era</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQarUB-SYUFgdcg_GI8I0unYsdsHNWIQXLNaApt6NOrfGU8J1XondVBmFiyYJLpIhSAGvagBkwL" alt="Xavi Hernandez: Gavi and Pedri have everything to mark an era" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barça coach praises his two young guns at the World Cup, hours before the Spain - Germany match.</p></div>
            </div>
        </a><a href='https://the12thman.in/fifa-news-xavi-lavishes-praise-on-spain-barcelona-midfielder-pedri/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Xavi Lavishes Praise on Spain &amp; Barcelona Midfielder Pedri</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTpnRprUe3nwd9B6cH3JUH-o3dvSr2OUXXBaK_Vm_ZORIszC1IWrer_EtxI4tf4SYtAA2rB55le" alt="Xavi Lavishes Praise on Spain &amp; Barcelona Midfielder Pedri" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Xavi has lavished praise on Barcelona and Spain midfielder Pedri, who is becoming increasingly important for both his club and country.</p></div>
            </div>
        </a>
        </Template></>;
}