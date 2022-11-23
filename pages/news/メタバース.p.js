import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>メタバース</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,メタバース"/>
        <meta name="description" content="Trending News about メタバース" /></Head><Template>
            <h1 style={{fontSize: "30"}}>メタバース</h1>
            <Image width={800} height={500} src="https://media.vogue.co.jp/photos/637c2524c7f8a837f223a1b3/16:9/w_1280,c_limit/metaverse%20sexual%20violence.jpg" alt="メタバース"/>
            <h3>Recent News</h3>
            <a href='https://www.vogue.co.jp/lifestyle/article/sexual-assault-in-the-metaverse'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>メタバースでの性被害をなくすために今、考えるべきこと</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRTk9uvU-N7E0n8tMki649va9oLQhxlYu2pImtJO9wSZeRNlzFzpXUELJj2bobcP8NVyhHky781" alt="メタバースでの性被害をなくすために今、考えるべきこと" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>11時間30分の間に100件──これは、バーチャルリアリティに関するメタ社の規約に違反する可能性がある行為の数だ。その中には、さまざまな性暴力も多く含まれる。</p></div>
            </div>
        </a><a href='https://prtimes.jp/main/html/rd/p/000000027.000050210.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2030年代、メタバースの産業利用が社会課題を解決</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS6g2ryEYVuqYjlc8t68vb4TiSkVno2kFKGAjCOJo_gJPNm837VOr7pYZXIkfaQK-qPrJ52nW_t" alt="2030年代、メタバースの産業利用が社会課題を解決" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>株式会社三菱総合研究所（本社：東京都千代田区、代表取締役社長：籔田健二、以下 MRI）は、11月22日、研究レポート「CX2030：バーチャルテクノロジー活用の場としての広義&nbsp;...</p></div>
            </div>
        </a><a href='https://www.itmedia.co.jp/news/articles/2211/22/news062.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>メタバースでパンデミック ソーシャルVRをハッキングする攻撃 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRe2ENhvb_MQBLSZ-W6VFtxPPeglx7tGKd2xuWSQ41lq5mtBGXKeHcDYzHXc0l_hhDuJBC0iB24" alt="メタバースでパンデミック ソーシャルVRをハッキングする攻撃 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>チェコのBrno University of Technology、米Louisiana State University、米University of New Havenに所属する研究者らは、他人のVR HMDとコンピュータに侵入して&nbsp;...</p></div>
            </div>
        </a><a href='https://prtimes.jp/main/html/rd/p/000000425.000025058.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>メタバースでのハラスメント対策「メタハラ対策講座」：自分も ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSRqQ7WsE_y8k14EuUqXFXDrYLntG7tTgTylxeELk7SKGeDbZ9e-RKTOSYta4NhISaH2Kcx54rv" alt="メタバースでのハラスメント対策「メタハラ対策講座」：自分も ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>報道機関各位 2022年11月22日日本マネジメント総合研究所合同会社 この度の新型コロナウイルス感染症(COVID-19)禍中の苦境をはじめ、各種感染症・台風/豪雨災害・各種&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/06b9f9ada8b4b9691f6ffacd60ab14858f760244'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>栄幸食品が仮想空間のメタバース型ショールーム立ち上げ 新社屋の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRhidrYcGkrnYyUkbuvqmEoWlfPUaHElNQfvca7kFCOdIJnf17XCJyFEy4OvYtXh5Z0lvIxF5P_" alt="栄幸食品が仮想空間のメタバース型ショールーム立ち上げ 新社屋の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>食品卸や貿易などを手がける栄幸食品（大阪市）は、新社屋の3階を菓子・食品展示フロアにするとともに、それと連動するバーチャルショールームを立ち上げた。</p></div>
            </div>
        </a><a href='https://prtimes.jp/main/html/rd/p/000000131.000071141.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>パーソルマーケティング、仮想空間での企業PRイベントで求職者の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQnaLYuNic9Qzlyc6ikdNxc3qObrBQ627VKJJvGIV7jQxdNKd4TAK4FWhFaH9u5qw6VE6jzgMxL" alt="パーソルマーケティング、仮想空間での企業PRイベントで求職者の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>パーソルテンプスタッフ株式会社のプレスリリース（2022年11月22日 09時01分）パーソルマーケティング、仮想空間での企業PRイベントで求職者の就労意欲を喚起 豊田市初&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/d866daf645a2cd6392e5607a9f909056452315cf'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「無双」シリーズとの関係性は？ コエテクが「メタバース無双」を ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQzTdfX1Uq1-VJ5GZDEz7Vt_uSm9oak3x9jtfZiMeHNiYCFiWxPYSDr44e4yUvIKpg-o6I1LgHk" alt="「無双」シリーズとの関係性は？ コエテクが「メタバース無双」を ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>商標ウォッチは、公開商標公報の情報として商標「メタバース無双」が出願されたと報じた。出願日は11月11日で、出願人はコーエーテクモゲームス。</p></div>
            </div>
        </a><a href='https://prtimes.jp/main/html/rd/p/000000196.000037973.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IMAGICA EEX、国際宇宙ステーション（ISS）のあるメタバース ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQkVHE3OlZaBJ4qRpH5Oq3EMXEiupdNSIJnHFvjiMPocJky-GKbeNIIwEctvATRGcsQGqFYGD2a" alt="IMAGICA EEX、国際宇宙ステーション（ISS）のあるメタバース ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IMAGICA GROUPのプレスリリース（2022年11月22日 10時00分）IMAGICA EEX、国際宇宙ステーション（ISS）のあるメタバース宇宙空間で、360度好きな視点で体験できる&nbsp;...</p></div>
            </div>
        </a><a href='https://prtimes.jp/main/html/rd/p/000011580.000007006.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「Web3」「メタバース」「NFT」を礼賛する社会に刺激的な問いを ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRn74_28FDEs88BHTxvIVeKqxa_YzqRR8jthxzsFd2PbIjfVLiD0og39e2mhTu332pFDhkQoCrG" alt="「Web3」「メタバース」「NFT」を礼賛する社会に刺激的な問いを ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>佐々木俊尚氏は、テクノロジーの進化と社会の変化を追い続けながら、政治、経済、社会、ライフスタイルにいたるまで幅広く取材・執筆しているジャーナリストです。</p></div>
            </div>
        </a><a href='https://news.mynavi.jp/techplus/article/20221122-2519888/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2030年にメタバース経済圏は数十億人のユーザを持つ？ 三菱総研の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS__b_SbRPyID9aiUMrUnVQpdkN3088jeds5MzkE85Won04JLYsdumXXeIDKvIaCvkjjh63z3bT" alt="2030年にメタバース経済圏は数十億人のユーザを持つ？ 三菱総研の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>三菱総合研究所は11月22日、研究レポート「CX2030：バーチャルテクノロジー活用の場としての広義のメタバース」を発表した。同レポートによると、メタバースは2025年に&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}