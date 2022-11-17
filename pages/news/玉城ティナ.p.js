import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>玉城ティナ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,玉城ティナ"/>
        <meta name="description" content="Trending News about 玉城ティナ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>玉城ティナ</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221115-00010045-realsound-000-1-view.jpg?exp=10800" alt="玉城ティナ"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/20d1f89420c634186a9af4043840c193dcf2170f'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>『窓辺にて』玉城ティナのあどけなさが観客を虜に 純真な笑顔が ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQNLtk0iS1ZGZ5sHZZA-LiE-JIqxeTGO20KIaXyYHpGBhEn2xJ6VYumuCOD4rqmn921uKTrgDep" alt="『窓辺にて』玉城ティナのあどけなさが観客を虜に 純真な笑顔が ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>『愛がなんだ』『街の上で』をはじめ、等身大の恋人たちの愛を描く作風が根強く支持されてきた今泉力哉監督の最新作『窓辺にて』が公開中だ。</p></div>
            </div>
        </a>
        </Template></>;
}