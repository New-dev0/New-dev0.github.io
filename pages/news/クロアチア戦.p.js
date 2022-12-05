import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>クロアチア戦</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,クロアチア戦"/>
        <meta name="description" content="Trending News about クロアチア戦" /></Head><Template>
            <h1 style={{fontSize: "30"}}>クロアチア戦</h1>
            <Image width={800} height={500} src="https://tk.ismcdn.jp/mwimgs/d/3/1200w/img_d3bb562989b56056c907fc1b7c4b4546552816.jpg" alt="クロアチア戦"/>
            <h3>Recent News</h3>
            <a href='https://toyokeizai.net/articles/-/637350'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>クロアチア戦｢前半耐えて後半勝負｣は通用するか</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRNiJ45FeO8jkT-PxsGkBmmlnAnms4SaF5psGI27NXFE0MGZcD9izHeaI8Yg8VXiulaBrMaSnDg" alt="クロアチア戦｢前半耐えて後半勝負｣は通用するか" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022年カタールワールドカップ（W杯）初戦・ドイツに2－1で逆転勝利を挙げながら、コスタリカに取りこぼすというミスを犯した日本代表。しかしながら、12月1日の&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/c289a1b10c9cd81921b58afbc5a569ac6e80b0c5'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>新内眞衣、Ｗ杯クロアチア戦予想は「素人目線で２―１。勝って ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSLTGSzXLXrx4-_of4ASX5sZbNQcDMGdAwv9mnFefcfxs7xWefnllEzf9Rhe9dkbtaAo1y0sm0z" alt="新内眞衣、Ｗ杯クロアチア戦予想は「素人目線で２―１。勝って ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>元「乃木坂４６」の新内眞衣が３日、２０２３年のカレンダーの発売イベントを都内で行った。 今年２月に乃木坂を卒業後、初のカレンダー。「自然体で等身大の私が写っ&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}