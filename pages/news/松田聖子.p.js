import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>松田聖子</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,松田聖子"/>
        <meta name="description" content="Trending News about 松田聖子" /></Head><Template>
            <h1 style={{fontSize: "30"}}>松田聖子</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221209-00000321-spnannex-000-2-view.jpg?exp=10800" alt="松田聖子"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/42dce8b89c7cc86777ba1fa09e4567847c1c9643'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>石原良純 「みんな好きだった」松田聖子にカラオケで名曲 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSf3f2BPEKj_snu_UfURHnRtWYGoTGznKZrw9ayOeFsUOPAj1XTI1Uwkn0efjP2Hze3gnRqIT7S" alt="石原良純 「みんな好きだった」松田聖子にカラオケで名曲 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>タレントで気象予報士の石原良純（60）が、9日放送のテレビ朝日系「ザワつく！金曜日SP」（後6・50）に出演し、歌手・松田聖子（60）とカラオケをした思い出を語った。</p></div>
            </div>
        </a><a href='https://reminder.top/712984506/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>鮮やかに交差する山口百恵の引退と松田聖子のデビュー【80年代 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTwzfXE9ceXKx5XZj3xr3S2zpJOAv2o5c51tn0GXk6c_Tb6yEmLfgD04CpzdhRa87xyq7L-0pmC" alt="鮮やかに交差する山口百恵の引退と松田聖子のデビュー【80年代 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>僅か10年の隔たりしかなく、地続きのものであるにも拘わらず、70年代アイドルと80年代アイドルとではだいぶ印象が違う。時代背景が異なるのはもちろんだが、デビューに&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}