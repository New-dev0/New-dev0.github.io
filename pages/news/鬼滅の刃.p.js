import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>鬼滅の刃</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,鬼滅の刃"/>
        <meta name="description" content="Trending News about 鬼滅の刃" /></Head><Template>
            <h1 style={{fontSize: "30"}}>鬼滅の刃</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221204-00000002-anmanmv-000-1-view.jpg?exp=10800" alt="鬼滅の刃"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/09792b51f16c38a9ebb607c37bcf239d3a86e025'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「鬼滅の刃」炭治郎、天元たちが遊郭潜入！ “遊び”がテーマの描き ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTas6nFYGOxppH8yeaIm-LfyBFLwXblN15ELQBpwy__e0bVZtVX6K8BHsm-7ucnR7e9dU31l3q5" alt="「鬼滅の刃」炭治郎、天元たちが遊郭潜入！ “遊び”がテーマの描き ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TVアニメ『鬼滅の刃』とバンダイナムコアミューズメントのコラボキャンペーン第4弾となる「『鬼滅の刃』肆ノ章（よんのしょう）in ナムコ」の開催が決定した。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/332c7ff84bc3cc34220ff8da35623bdd84933c53'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>鬼滅の刃「刀鍛冶の里編」制作公式発表 時透は河西健吾、甘露寺は ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSjE7CEobfmPTzctxzz-V5acG7Eat-_0w19ftXObQQerWl8NXhdmHhIMkUw6RHWmM7rmiTvLaBM" alt="鬼滅の刃「刀鍛冶の里編」制作公式発表 時透は河西健吾、甘露寺は ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>人気アニメ「鬼滅の刃」の新作「刀鍛冶の里編」が制作されることが３日、明らかになった。公式サイトに予告動画、画像などが掲載され発表された。</p></div>
            </div>
        </a><a href='https://www.niigata-nippo.co.jp/articles/-/146598'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「鬼滅の刃」パッケージの新潟県産コシヒカリ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSpl9aWlokLOyw5SC7TuCX_sHuhYmKE_x7oShLsYmRnw0uaHcCujNIEd3q0o8FweOJWXzLwrF1L" alt="「鬼滅の刃」パッケージの新潟県産コシヒカリ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>コメ卸の「むらせ」（神奈川県横須賀市）は人気アニメ「鬼滅の刃」のキャラクターをパッケージにプリントした２０２２年の新潟県産コシヒカリ＝写真＝を販売している。</p></div>
            </div>
        </a>
        </Template></>;
}