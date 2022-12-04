import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>VAR</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,VAR"/>
        <meta name="description" content="Trending News about VAR" /></Head><Template>
            <h1 style={{fontSize: "30"}}>VAR</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/news/html/20221203/K10013911711_2212022154_1203070348_01_02.jpg" alt="VAR"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/news/html/20221203/k10013911711000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ワールドカップ 三笘 “VAR判定が物議”海外メディア</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSssHNFqE5i5oNx4s9cdZcD5nWN5OamESVzyqScqU4QtCGC0gCDlFaRA9og3UCYW5jOAJA294al" alt="ワールドカップ 三笘 “VAR判定が物議”海外メディア" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】日本対スペインの試合で、三笘選手がゴールライン際から蹴ったボールがVAR＝ビデオ・アシスタント・レフェリーと呼ばれる審判…</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/b05d8f2fa24c2cd34dfa6ef58e06a283b91d4494'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「VARに不満ばかりの人も手のひら返し」 世界で物議を呼んだ“三笘 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQQWRSwGMFmuCSn9BYE9jif4K69RQlosqyDyxT8JSqVilCznGIFDhxeA7ZSRK9ELMhMVMTnE3xU" alt="「VARに不満ばかりの人も手のひら返し」 世界で物議を呼んだ“三笘 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカーのカタール・ワールドカップ（W杯）は1日（日本時間2日）、E組の日本がスペインに2-1で逆転勝ちし、決勝トーナメント（T）進出を決めた。日本の逆転ゴールの&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/ae9228927a5e62a234766dd71705930059909f80'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFAが発信したVAR“証拠映像”に…日本サポーター「確かにこれは出 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQulbE5O0Jic3U4KZs-v5vqyvRQxqoONuVI2EJQibxnKFAA0oBmfGXARJ9kWK4QQdzkeMV8BGyS" alt="FIFAが発信したVAR“証拠映像”に…日本サポーター「確かにこれは出 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>国際サッカー連盟（FIFA）は3日未明、ツイッターを更新。日本時間2日早朝に行われたサッカーW杯カタール大会1次リーグE組・日本―スペイン戦の後半6分、日本の田中碧が&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/eda8f6e034c228312083bb071a0c5cfaf0d016b3'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>岡崎景介がサッカーＶＡＲ判定さながらの微差先着で決勝入り ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ5y-zXzFQLXjoPEWIavn2EvEPG9azjdgDxxQxTK95Vckkpq2sRL2Ju4wqE2ix6EOflcUjzI5O5" alt="岡崎景介がサッカーＶＡＲ判定さながらの微差先着で決勝入り ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>小田原競輪＞◇F1◇2日目◇2日 日本時間2日の早朝に行われたサッカーの日本対スペイン戦。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/a599bdfd17d2a935800da492a283843bd1eefabe'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“VAR弾”生んだ三笘薫の“1mmの左足”に長友佑都も感銘「諦めない心 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR2enkX-ZdJBaQSjWgOiUV5vh7jVjuW7kKxZb8b3EGAv0f7caxKk3e9x-Fnslr-_zmuYCoFPwRD" alt="“VAR弾”生んだ三笘薫の“1mmの左足”に長友佑都も感銘「諦めない心 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカー日本代表DF長友佑都が2日、ツイッターを更新。「諦めない心 信じる力が夢繋ぐ」とつづり、この試合を象徴するシーンに脚光を浴びせている。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/900aa6f5375bb92d536c113774624a01c471b97e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>アルゼンチン監督が”物議続出”VARに「クリアだ。ただ突然に導入 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTSIKYXyWsM1VPjTQ52FsAz6pguLACigeSREL4uPnqYZFXaV5Vo0lQWxHEwM6bseC69WS71s_CD" alt="アルゼンチン監督が”物議続出”VARに「クリアだ。ただ突然に導入 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>W杯カタール大会のアルゼンチンは、決勝トーナメント1回戦のオーストラリア戦（日本時間4日午前0時）を控え、リオネル・スカロニ監督とMFロドリゴ・&nbsp;...</p></div>
            </div>
        </a><a href='https://news.tv-asahi.co.jp/news_international/articles/000278235.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>世界に衝撃“三笘の1ミリ”「VARは茶番」「ミリメートルの判断 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRw4yPm277jLJBtI5DfzWUfPKGJ5GYA7BVOJuwlty5lmZodA6yevfV7xFLiWI2c8QY4P-ddS3Yi" alt="世界に衝撃“三笘の1ミリ”「VARは茶番」「ミリメートルの判断 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFAワールドカップ2022。日本代表は、スペインに逆転勝ちし、アジア勢で初となる2大会連続の決勝トーナメント進出を決めました。 世界は驚きを隠せませんでした。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/d93e300d5747cc23c73e66de05b02d814707c66a'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「主審は拒否するべきだった」2つのVAR判定を米メディアが厳しく ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRJYy1x2HEJPMFwpeoyy27DnCPwVkPhDfqMTgd2vlUaR0CLrIsM5Sw8QeJVtupDJy8h8VYfoBQ9" alt="「主審は拒否するべきだった」2つのVAR判定を米メディアが厳しく ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>現地時間11月30日に行なわれたカタール・ワールドカップのグループCとDの最終節、2つのVARをめぐる判定が物議を醸すことになった。</p></div>
            </div>
        </a><a href='https://www.sponichi.co.jp/soccer/news/2022/12/03/kiji/20221203s00002014122000c.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>三笘折り返しのVAR判定に海外でも物議 FIFAに“証拠”の情報公開 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="三笘折り返しのVAR判定に海外でも物議 FIFAに“証拠”の情報公開 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【FIFAワールドカップ（W杯）カタール大会1次リーグE組 日本2－1スペイン （ 2022年12月2日 ハリファ国際スタジアム ）】 三笘の折り返しでボールがゴールラインを割っ&nbsp;...</p></div>
            </div>
        </a><a href='https://www.football-zone.net/archives/420293'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【W杯】世界で話題をさらった日本の“VAR弾”に決着 FIFA公式見解 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRRr-okkp6LYo7scdAP8iuBtum8xF7MiLojoRr30smR5shEbbCRHOGA6s2SFLtJZ9cLUaN9EdqW" alt="【W杯】世界で話題をさらった日本の“VAR弾”に決着 FIFA公式見解 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>日本代表は現地時間12月1日、カタール・ワールドカップ（W杯）グループリーグ最終戦でスペイン代表に2-1で勝利。この2点目を呼び込んだMF三笘薫のプレーで、ボールが&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}