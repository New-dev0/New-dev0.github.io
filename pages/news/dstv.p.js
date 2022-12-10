import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>DStv</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,DStv"/>
        <meta name="description" content="Trending News about DStv" /></Head><Template>
            <h1 style={{fontSize: "30"}}>DStv</h1>
            <Image width={800} height={500} src="https://supersport-cms-prod.azureedge.net/media/m3ljrndr/ss-placeholder.jpg?width=500" alt="DStv"/>
            <h3>Recent News</h3>
            <a href='https://supersport.com/football/general/news/239ac84c-ea3c-47b7-b939-7149084c9013/games-comes-to-life-on-dstv-this-festive-season-'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Games comes to life on DStv this festive season! | SuperSport</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRx4PweK7sMgBGiJxPBlQEzg3YlbpiPaaqmrv8aWSJFNKJRZuWj-K__r-bRulNLNKgi6bAtsXFg" alt="Games comes to life on DStv this festive season! | SuperSport" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>South Africa&#39;s biggest off-season football tournament is officially here, as DStv, in partnership with the Philly&#39;s Games, officially launched the 31st&nbsp;...</p></div>
            </div>
        </a><a href='https://www.itweb.co.za/content/KWEBbvyLmpEqmRjO'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DStv customer service chatbot sees user uptick</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ_SOgtV_I6aitlKM8ZUSNDO6v1YvBoyjjcZiv7WyrWu86cx4S_y-GpQbEWVeDnjiny6JZvjO1J" alt="DStv customer service chatbot sees user uptick" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MultiChoice says its DStv WhatsApp self-service chatbot, DStv Assist, has strengthened the overall customer experience and helped improve customer retention&nbsp;...</p></div>
            </div>
        </a><a href='https://www.news24.com/citypress/sport/popular-phillys-games-kick-starts-kasi-festive-soccer-tournament-20221209'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Popular Philly&#39;s Games kick-starts kasi festive soccer tournament</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS7Q77qq3_ky_uLRvPAUp9wbxlAP-UoMbltdc1omHPW_3DPAvuJ6kxMGZu7Tx4NxvJX-x_SVZyR" alt="Popular Philly&#39;s Games kick-starts kasi festive soccer tournament" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Recently retired PSL referee Victor Hlungwani has launched the 22nd edition of his annual festive games, the Zama Zama Sports Challenge that will take place&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}