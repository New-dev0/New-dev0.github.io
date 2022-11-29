import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Eve</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Eve"/>
        <meta name="description" content="Trending News about Eve" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Eve</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221128-06028088-mnet-000-1-view.jpg?exp=10800" alt="Eve"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/b30d57f423c800068fdc7e7463f357ff5f42b8a2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eve、映画『ブラックナイトパレード』の主題歌「白雪」デジタル ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcShIoabSTGsNsNu_W9WjVQqlIxQiExc3mX-faGbR4AjgaDqYp3ARlfgF4vkVkX7_2jl7NoPn3fq" alt="Eve、映画『ブラックナイトパレード』の主題歌「白雪」デジタル ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eve×映画キャスト＆原作者・中村光によるTikTok LIVEコラボ配信を開催.</p></div>
            </div>
        </a><a href='https://skream.jp/news/2022/11/eve_shirayuki_release.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eve、映画&quot;ブラックナイトパレード&quot;主題歌「白雪」デジタル配信 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSEFLUMR6OesJXAUNb7A2w8VP-YI2rSTrZgcI-NtVgu76UyUdtuA9sodfCT_LclWI0ec60N3Ds-" alt="Eve、映画&quot;ブラックナイトパレード&quot;主題歌「白雪」デジタル配信 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eveが、12月23日に公開する映画&quot;ブラックナイトパレード&quot;主題歌として書き下ろしした新曲「白雪」を12月1日0時に配信リリースすることが決定。合わせて、映画.</p></div>
            </div>
        </a><a href='https://natalie.mu/music/news/503021'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eve「ブラックナイトパレード」主題歌リリース決定、吉沢亮ら出演 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQEJT_lB3uoBaoW4dPxDpBhggsLjOddA-aZAJgGGDHKIN0evucwTx8UmJQT_xglQOoe5dXBO4bo" alt="Eve「ブラックナイトパレード」主題歌リリース決定、吉沢亮ら出演 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eveの新曲「白雪」が12月1日0:00に配信リリースされる。</p></div>
            </div>
        </a><a href='https://rockinon.com/news/detail/204738'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eve、映画『ブラックナイトパレード』主題歌“白雪”を12/1配信 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRTUVdW8VwC0rKox8wr5cK74G3rGkfXxJx9FzhVPaYd0NPNNOyLJ56j8lczAp6zPvbXcY16RTM2" alt="Eve、映画『ブラックナイトパレード』主題歌“白雪”を12/1配信 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>劇場版』などを監督した福田雄一が監督を務める。主演は吉沢亮が務め、個性的なキャラクター達を橋本環奈、中川大志、渡邊圭祐らが演じるほか、吉沢達を取り囲むクセ強&nbsp;...</p></div>
            </div>
        </a><a href='https://www.billboard-japan.com/d_news/detail/119397'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eve、映画主題歌「白雪」配信リリース 吉沢亮／中川大志／渡邊 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTURkfwcpDQ-ajtl7zWiwpPeUjSnsF2Ya19IRoRKBdEMJS7Xet0wyvRbHOiI24Nr8mOe36ql6Xk" alt="Eve、映画主題歌「白雪」配信リリース 吉沢亮／中川大志／渡邊 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eveが、新曲「白雪」を2022年12月1日に配信リリースする。 新曲「白雪」は、2022年1.</p></div>
            </div>
        </a>
        </Template></>;
}