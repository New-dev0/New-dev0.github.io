import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Steam</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Steam"/>
        <meta name="description" content="Trending News about Steam" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Steam</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221123-00000001-gamespav-000-2-view.jpg?exp=10800" alt="Steam"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/5470c5f53a5b641a0aa22538a5a555cafb835c04'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022年Steamオータムセールがスタート！毎年恒例「Steam ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSE1V067UvX1enKqRUazdmGvtW4r0Enl8GKkf7Nf1HFPs398nCloz0S-yM2aCdpSR-mUFj2Oriu" alt="2022年Steamオータムセールがスタート！毎年恒例「Steam ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Valveは毎年秋に実施しているSteamの大型セールイベント「Steamオータムセール」を開始しました。多数のタイトルを割引価格でお得に購入できます。</p></div>
            </div>
        </a><a href='https://resemom.jp/article/2022/11/24/69623.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>研究者が熱狂した「ライフゲーム」をSTEAM教材に</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRC5BJBXwOGZzYV5Slm1GlXUK6ZAmC2dm6QuiHbcSYmb4qwkydwFeSL6Es07g1vwpECukDVQkh8" alt="研究者が熱狂した「ライフゲーム」をSTEAM教材に" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ワンダーラボは2022年11月、まったく新しいサイエンス教材「セルトンのふしぎなタブレット」を、STEAM教育の通信教育サービス「ワンダーボックス」に含まれるアプリ&nbsp;...</p></div>
            </div>
        </a><a href='https://www.4gamer.net/games/569/G056973/20221122084/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「ビビッドナイト」，Steamオータムセールにあわせて35％オフの ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSfNHEjs_CTRnIQuF5aDPEN-_QHpSdeIS9cuXpIHn1mWfGUXfOwqmtqBoKGVrqY6mA3P3sNmjNE" alt="「ビビッドナイト」，Steamオータムセールにあわせて35％オフの ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ビビッドナイト 配信元 アソビズム 配信日 2022/11/23 秋のお祭り！35％オフ！ “Steam オータムセール”に 『ビビッドナイト』が登場！ 株式会社アソビズムは、日本&nbsp;...</p></div>
            </div>
        </a><a href='https://www.famitsu.com/news/202211/23283814.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【Steamオータムセール】『ロマサガ2』977円、『Stray』2800円 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ-dqWr6icBkw5OLLBQVjlpsWZExk4f9VE_1OFgig1R5VDwfspl1kE_jFNpfRek6iGdt9h6iA_y" alt="【Steamオータムセール】『ロマサガ2』977円、『Stray』2800円 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Steamで『天穂のサクナヒメ』、『風のクロノア 1＆2アンコール』、『ゴッド・オブ・ウォー』、『ソフィーのアトリエ 』などのセールが行われている。</p></div>
            </div>
        </a><a href='https://automaton-media.com/articles/newsjp/20221123-227767/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steamオータムセール 2022開幕。話題の猫ゲームや『モンハンサン ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQS7CRpWsrFiZQQdfihnM9qkgw9e4Y4lJHZMFqRI8M1PjIDA7-CkYuM8u5fiJURg-UIgmjTrg0Q" alt="Steamオータムセール 2022開幕。話題の猫ゲームや『モンハンサン ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>まずは比較的最近の話題作や大型タイトルなどから。 □『Stray』 猫になってサイバーパンクな街を探索する、猫サイバーパンクアクションアドベンチャーゲーム。 ・&nbsp;...</p></div>
            </div>
        </a><a href='https://automaton-media.com/articles/newsjp/20221123-227812/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steamで実績を“ズル入手”しようとしたユーザー、フォントが変に ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6XiKExwK5ereOy9jvTGpNCp67iZSAJjbNUIlDqUPx-JKXWfQg35H3sDxckU4SbpDnIYprn7mV" alt="Steamで実績を“ズル入手”しようとしたユーザー、フォントが変に ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>あるSteamプレイヤーが遭遇した、不思議な現象が話題だ。プレイヤーがゲーム内実績解除のためにPCの時間設定を操作したところ、Steamクライアントのフォントが&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/cdf8f9f84624d87fd3fd9dc6e07e205cd9bcc581'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PC版『Auto Chess』Epic Gamesストア独占配信終了か―Steam ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQpODd4dyTWDS9Hn3Kni6FFwPh5yka2WFFZlblXxr_rXy7NEOCXFkybRz9frJEUIE351wnih9v0" alt="PC版『Auto Chess』Epic Gamesストア独占配信終了か―Steam ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>中国のデベロッパーDragonestは、Epic Gamesストアで基本プレイ無料で配信中のPC版『Auto Chess』について新たにSteamストアページを公開しました。</p></div>
            </div>
        </a><a href='https://automaton-media.com/articles/newsjp/20221123-227849/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steamお宝奪い合いPvPvEシューター『HAWKED』発表。11月25日 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ7XywGvtibgmmZFyQtkpRE94KTDOBhYl1XhzUnP_eEHgNLc5W8Rc8GGexggXtVorW7ed99ohBz" alt="Steamお宝奪い合いPvPvEシューター『HAWKED』発表。11月25日 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>実際のゲームプレイの様子についてはまだ公開されていないものの、武器や弾薬はマップ内を探索して入手することになる模様。トレイラーでは、敵の銃を奪う様子もみられる。</p></div>
            </div>
        </a><a href='https://www.moguravr.com/steam-autumn-sale-2/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「Steam」オータムセールが開催中 VRゲームもセール対象</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTr2TJZGOfaH-fQ3vT6_TLndGmbz2hXvgnGrNhO1GfPEY2cspfD2WAmc2Q0lC9bmdR_Jkuo29gf" alt="「Steam」オータムセールが開催中 VRゲームもセール対象" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ゲーム配信プラットフォーム「Steam」で、2022年のオータムセールが実施されることが発表されました。セール期間は11月30日（水）まで。暗殺アクションゲーム「HITMAN&nbsp;...</p></div>
            </div>
        </a><a href='https://news.denfaminicogamer.jp/news/221123a'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>『モンハンライズ』が50%オフの約2000円、『SEKIRO』が50 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ_66O0pkBZhYZgocb7BqP9-GqcRX36ArWMVLVhryUsTWSHMluLO00aURfxeS4sun2nGji-NfUD" alt="『モンハンライズ』が50%オフの約2000円、『SEKIRO』が50 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>11月22日（火）、Steamにて大規模セール「Steam オータムセール」が開幕した。</p></div>
            </div>
        </a>
        </Template></>;
}