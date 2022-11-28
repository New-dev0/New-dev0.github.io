import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Emilia Clarke</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Emilia Clarke"/>
        <meta name="description" content="Trending News about Emilia Clarke" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Emilia Clarke</h1>
            <Image width={800} height={500} src="https://content3.promiflash.de/article-images/video_1080/emilia-clarke-posiert-vor-eisdiele.jpg" alt="Emilia Clarke"/>
            <h3>Recent News</h3>
            <a href='https://www.promiflash.de/news/2022/11/27/game-of-cones-emilia-clarke-posiert-vor-schraeger-eisdiele.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Game of Cones&quot;: Emilia Clarke posiert vor schräger Eisdiele</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSqUSR_LPrfVlXOwsEy0zeA-0hrAWj8QopV0L8yIiOpmrPUtU3OnyfEj8d2KljdHCi6LqOBOCOw" alt="&quot;Game of Cones&quot;: Emilia Clarke posiert vor schräger Eisdiele" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Diesen Besuch konnte sich Emilia Clarke (36) wohl nicht verkneifen. Bekannt ist die Britin vor allem durch ihre Rolle der Daenerys Targaryen in dem&nbsp;...</p></div>
            </div>
        </a><a href='https://www.filmfutter.com/news/emilia-clarke-an-ideal-wife/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Emilia Clarke spielt Oscar Wildes Ehefrau in &quot;An Ideal Wife&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT95bkvpqwwjvcNU-Ydx0IbYDx5wwWqv50RACm9SuiChkDV_wQUYEvST6CKqtkgZWqBGSHARzuR" alt="Emilia Clarke spielt Oscar Wildes Ehefrau in &quot;An Ideal Wife&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im nächsten Film der Regisseurin von &quot;Meine Stunden mit Leo&quot; wird &quot;Game of Thrones&quot;-Star Emilia Clarke Constance Lloyd verkörpern.</p></div>
            </div>
        </a>
        </Template></>;
}