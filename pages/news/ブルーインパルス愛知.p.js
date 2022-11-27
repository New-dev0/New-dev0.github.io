import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ブルーインパルス愛知</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ブルーインパルス愛知"/>
        <meta name="description" content="Trending News about ブルーインパルス愛知" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ブルーインパルス愛知</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/tokai-news/20221126/3000026171_20221126193542_m.jpg" alt="ブルーインパルス愛知"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/tokai-news/20221126/3000026171.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>愛知県１５０年記念 ブルーインパルスが愛知上空を飛行｜NHK 東海 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR0ME-VAG_NGaY6k3NaDdhzKPMvSrX6MLdZp9-JyxczbTddaotrVM95KRDQ9PflmtuN8LSQdaU5" alt="愛知県１５０年記念 ブルーインパルスが愛知上空を飛行｜NHK 東海 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>宮城県の航空自衛隊松島基地に所属するアクロバット飛行チーム「ブルーインパルス」は、２６日午後、カメラを構えた大勢の人たちに見送られる中、県営名古屋空港の滑走路を&nbsp;...</p></div>
            </div>
        </a><a href='https://weathernews.jp/s/topics/202211/260165/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>今日11月26日(土)昼過ぎ、愛知県名古屋市を中心にブルー ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRRoLmFVDnLJiflxKFEOlt7fyt0dMfcz7FgyQHM8t5cXCnf6h0dhUln5gkvHkCLYkFJKZWAfpTH" alt="今日11月26日(土)昼過ぎ、愛知県名古屋市を中心にブルー ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>今日11月26日(土)昼過ぎ、愛知県名古屋市を中心にブルーインパルスによる展示飛行が披露され、スモークが映える大迫力の飛行となりました。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/aef8ab5d71682d33b2d0c41bf3ae63b85818a579'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>愛知県政150周年 ブルーインパルスが記念飛行（テレビ愛知）</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTV9ARqqido4ivDCNoE7KYtQEnCpR4w7FsftEM4ePbEY3aAcrA_TcFF1N6FVCjFv5bcBZuOLugn" alt="愛知県政150周年 ブルーインパルスが記念飛行（テレビ愛知）" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>愛知県が誕生して11月27日で150周年になるのを記念して、11月26日、航空自衛隊のアクロバット飛行チームブルーインパルスが愛知県の上空で展示飛行を行いました。</p></div>
            </div>
        </a><a href='https://www.tokai-tv.com/tokainews/article_20221126_23428'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“大きなハート”も披露…航空自衛隊「ブルーインパルス」が愛知県 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQbEmmiKbG4rxZNyE8JaoSLfAtNjpk5OfYN4iUH9Th4CMltY0ebJxb8SCWwwAMWKmlWlhHfW06s" alt="“大きなハート”も披露…航空自衛隊「ブルーインパルス」が愛知県 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>あいち航空ミュージアム前で出発式が行われ、午後1時15分、航空自衛隊のアクロバット飛行チームブルーインパルスが次々と出発しました。 展示飛行は愛知県政150周年を祝う&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/337b04ccf62016b7d3980bf22c95cf88ecde6a23'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>愛知の秋空をブルーインパルスが舞う 県誕生150周年を祝い ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTUTEsmy9SorUD19C8caJJxKt2yaDnVcBQ9Sv5w1_fGsYiu9oYI_hp43KfLdelkjDrAYoXM1iGL7w" alt="愛知の秋空をブルーインパルスが舞う 県誕生150周年を祝い ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>愛知の秋空をブルーインパルスが舞う 県誕生150周年を祝い、名古屋城上空ではアクロバット飛行も披露 &middot; 1. 学びがある &middot; 15. わかりやすい &middot; 14. 新しい視点&nbsp;...</p></div>
            </div>
        </a><a href='https://www.chunichi.co.jp/article/589569'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【動画・写真多数】ブルーインパルスが愛知の空で展示飛行 名古屋 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSlcgZGEYTqZTUonsORbqm863fyt5kk81yb0LGZ_BH3Yl781EyOPpvzWFYrFdi5cxq2S8HR_rX-" alt="【動画・写真多数】ブルーインパルスが愛知の空で展示飛行 名古屋 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>航空自衛隊のアクロバット飛行チーム「ブルーインパルス」が２６日、愛知県内を展示飛行した。名古屋市の名古屋城周辺では、多くの家族連れなど...</p></div>
            </div>
        </a>
        </Template></>;
}