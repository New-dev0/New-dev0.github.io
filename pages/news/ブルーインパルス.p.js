import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ブルーインパルス</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ブルーインパルス"/>
        <meta name="description" content="Trending News about ブルーインパルス" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ブルーインパルス</h1>
            <Image width={800} height={500} src="https://smtgvs.weathernews.jp/s/topics/img/202211/202211260165_top_img_A.jpg?1669439933" alt="ブルーインパルス"/>
            <h3>Recent News</h3>
            <a href='https://weathernews.jp/s/topics/202211/260165/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>今日11月26日(土)昼過ぎ、愛知県名古屋市を中心にブルー ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRRoLmFVDnLJiflxKFEOlt7fyt0dMfcz7FgyQHM8t5cXCnf6h0dhUln5gkvHkCLYkFJKZWAfpTH" alt="今日11月26日(土)昼過ぎ、愛知県名古屋市を中心にブルー ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>今日11月26日(土)昼過ぎ、愛知県名古屋市を中心にブルーインパルスによる展示飛行が披露され、スモークが映える大迫力の飛行となりました。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/f9d12fb9d0e7a4acecde4682098e3e94b21c2d51'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ブルーインパルス予行飛行で名古屋城やテレビ塔と共演 ファン ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTHPlfpcXGYuFQ5pioVLqKkCaUdTpSF4nj8rpo96ERTYoAj2tpXEu4fVLEg7OHsUhi9IEGCt0d4" alt="ブルーインパルス予行飛行で名古屋城やテレビ塔と共演 ファン ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>26日、愛知県内上空を飛ぶ「ブルーインパルス」。経路を確認する飛行が25日に行われました。カメラがとらえた「青空に描かれたもの」を一足早くご覧ください。</p></div>
            </div>
        </a><a href='https://okazaki.goguynet.jp/2022/11/26/post-24524/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【岡崎市】本日（11月26日）ブルーインパルスが愛知県を展示飛行 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ5TZeEVuDhVXb3reYpslLBuXQX-iHAsbl5C7Lq2orPojK14mFOAC13F38kRxJWwKm0OuIYaXXf" alt="【岡崎市】本日（11月26日）ブルーインパルスが愛知県を展示飛行 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>現在の愛知県が誕生してから150周年を迎えます。その記念に、本日、2022年11月26日（土）愛知県内の上空を航空自衛隊のブルーインパルスが展示飛行するとのことです。</p></div>
            </div>
        </a><a href='https://netatopi.jp/article/1458913.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>愛知県政150周年記念「ブルーインパルス展示飛行」が本日26日(土 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBTQ32upNjb1HvflFd0NIiI-5qJKlP0gn8lBZNy0Z7FT6-T9q6AO4zXlRhQ_ebdO3TjLqyns5i" alt="愛知県政150周年記念「ブルーインパルス展示飛行」が本日26日(土 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>YouTubeで、11月26日(土)13時30分頃からライブ配信も実施されます。</p></div>
            </div>
        </a>
        </Template></>;
}