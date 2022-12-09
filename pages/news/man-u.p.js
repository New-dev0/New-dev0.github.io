import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Man U</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Man U"/>
        <meta name="description" content="Trending News about Man U" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Man U</h1>
            <Image width={800} height={500} src="https://assets.manutd.com/AssetPicker/images/0/0/17/231/1173313/0R7A0671_f5e603d9_3e5d_4aeb_8e02_033275b8e3481670442994297_large.jpg" alt="Man U"/>
            <h3>Recent News</h3>
            <a href='https://www.manutd.com/en/news/detail/talking-points-from-cadiz-v-man-utd-friendly-on-7-december'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What we noticed from our Cadiz friendly</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQo1MSrZyEOjjLoLAFhsqbCAjgfWAqFBZTxu9nm7u9jxMm7p2aGPL_vkqpiE0uE62uXkU_KKj1w" alt="What we noticed from our Cadiz friendly" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erik ten Hag&#39;s Manchester United team returned to action for the first time in 24 days, with a friendly against La Liga side Cadiz CF in Spain.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-us/news/ten-hag-blasts-unacceptable-man-utd-performance-friendly-defeat-la-liga-strugglers-cadiz/bltb941d89977e6f765'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ten Hag blasts &#39;unacceptable&#39; second-string Man Utd performance ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSpnXisftwboy-QngT46fqxmOFv3MaIxbWlYAsWLfwjg9t2TWjMjyPXv10NhZJtnjLKH26pwabq" alt="Ten Hag blasts &#39;unacceptable&#39; second-string Man Utd performance ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester United boss Erik ten Hag was not impressed by his second-string squad in their 4-2 friendly defeat to Cadiz on Wednesday.</p></div>
            </div>
        </a><a href='https://www.90min.com/posts/who-is-kobbie-mainoo-things-to-know-about-man-utd-talent'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who is Kobbie Mainoo? Things to know about Man Utd talent</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSGuKkk86HFCt8AZNt1WcKNmogcA-4_v8xmE-QQAdebzVuQrTYhyFzivw_IwVvQjTJH5RzZ_IjG" alt="Who is Kobbie Mainoo? Things to know about Man Utd talent" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 17-year-old played the second half of the club&#39;s mid-season friendly against Cadiz on Wednesday night and impressed by scoring only two minutes after coming&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/sport/live/article-11511741/Cadiz-vs-Man-Utd-Live-score-team-news-updates-mid-World-Cup-friendly.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cadiz 4-2 Manchester United: Red Devils lose on their return to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSH8IDtndeCHnBllXf-xeFSg7PgbP4uo0R74NKOwz6GXY5lu3ffDz1wK_b2NQiuMutMicusUWCa" alt="Cadiz 4-2 Manchester United: Red Devils lose on their return to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CHRIS WHEELER: Cadiz feels a world away from Qatar and the business end of the World Cup involving the majority of United&#39;s stars, but those left behind&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en-ng/news/no-spanish-holiday-man-utd-miss-martinez-varane-friendly-loss-cadiz/bltd53574a2b0310ac2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No Spanish holiday! Man Utd miss Lisandro Martinez and Raphael ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSaak3oJ8lSFa9SuYu-vX0ZMddZ7pz74sk_thpL9sI1ajEql8-UbzZx6yNSKG4k9EsDPRGybGhG" alt="No Spanish holiday! Man Utd miss Lisandro Martinez and Raphael ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erik ten Hag demanded full focus during Manchester United&#39;s mid-season friendlies, but didn&#39;t get it in a 4-2 loss to Cadiz on Wednesday.</p></div>
            </div>
        </a><a href='https://www.standard.co.uk/sport/football/man-united-xi-vs-cadiz-starting-lineup-confirmed-team-news-injury-latest-friendly-2022-today-b1044692.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man United XI vs Cadiz: Starting lineup, confirmed team news, injury ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRLt3a_ZPgOxlAERN5JtdTr5GTfLUr1HwP3luwIQSFgbJUEiQRERKwhM_PcOiZceJaaxbRdF0aE" alt="Man United XI vs Cadiz: Starting lineup, confirmed team news, injury ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester United have named a strong team to take on Cadiz in tonight&#39;s mid-season friendly.</p></div>
            </div>
        </a>
        </Template></>;
}