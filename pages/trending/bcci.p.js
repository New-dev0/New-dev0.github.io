import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bcci</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bcci"/>
        <meta name="description" content="Trending News about Bcci" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bcci</h1>
            <Image width={800} height={500} src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/10/24/5336ccbc2a3adbc7ec16805e88e124301666584470554576_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628" alt="Bcci"/>
            <h3>Recent News</h3>
            <a href='https://www.abplive.com/states/bihar/patna-news-patna-s-yashita-selected-in-bcci-will-play-women-s-under-19-t20-challenger-trophy-ann-2244632'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bihar: पटना की यशिता का BCCI में चयन, विमेंस अंडर-19 टी 20 चैलेंजर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSwdBW7E_m_iVbS4UlAHo8wd1iSGmDw9-kO_Mko4ZNVvkyO-_HhXFPTQ7htlBb9xWGocdE_E5NJ" alt="Bihar: पटना की यशिता का BCCI में चयन, विमेंस अंडर-19 टी 20 चैलेंजर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>U19 Women&#39;s T20 Challenger Trophy: पटना के आशियाना की रहने वाली यशिता विमेंस अंडर-19 टी 20 चैलेंजर&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}