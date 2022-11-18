import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sho Madjozi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sho Madjozi"/>
        <meta name="description" content="Trending News about Sho Madjozi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sho Madjozi</h1>
            <Image width={800} height={500} src="http://www.thesouthafrican.com/wp-content/uploads/2022/11/Screenshot_20221117-150110_YouTube_copy_1200x858_12.jpg" alt="Sho Madjozi"/>
            <h3>Recent News</h3>
            <a href='https://www.thesouthafrican.com/lifestyle/celeb-news/breaking-sho-madjozi-da-les-interview-drunk-high-video-17-november-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sho Madjozi says &#39;never again&#39; to Da Les interview after &#39;drunk&#39; clips</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTgnXduvfyJzO5CgfVpA_bbzGMOB9awAF49YcjEkw1Foy6gHeED0wrlbhGyFXdcBW8DFuGNgQq5" alt="Sho Madjozi says &#39;never again&#39; to Da Les interview after &#39;drunk&#39; clips" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Musician and actress Sho Madjozi — real name Maya Christinah Xichavo Wegerif — has reacted to her viral “drunk” interview with rapper Da L.E.S..</p></div>
            </div>
        </a><a href='https://iharare.com/sho-madjozi-reveals-how-she-got-high-like-a-kite-on-da-les-podcast/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sho Madjozi Reveals How She Got High Like A Kite On Da Les ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQdkqAoc9YCsPDROgso7RQVOcLIjez0AkggkNR26pA0smm06W216GVSxiclYCBVneHU8VTm8-63" alt="Sho Madjozi Reveals How She Got High Like A Kite On Da Les ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The revelation came after a clip of the John Cena singer looking faded did the rounds on Twitter. In the clip that has since gone viral on social media, Da&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}