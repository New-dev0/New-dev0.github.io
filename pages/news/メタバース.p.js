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
            <Image width={800} height={500} src="https://image.tabi-labo.com/jp/254595/5191611363360768.jpg" alt="メタバース"/>
            <h3>Recent News</h3>
            <a href='https://tabi-labo.com/305096/wt-interpole-metaverce'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>INTERPOLがメタバースを立ち上げ！ | TABI LABO</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS_By-JvFNLbptr80s4fRSf5VJJeY1xgNV6O6FVkj-7uNlval3JFFLNvWU1r8ijJ9CqCTIizuAH" alt="INTERPOLがメタバースを立ち上げ！ | TABI LABO" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>また、INTERPOLはメタバースを理解するには、まずは自分たちでそれを経験してみなければいけないという旨も語っている。 「INTERPOL Metaverse」はローンチされたばかり&nbsp;...</p></div>
            </div>
        </a><a href='https://business.nikkei.com/atcl/gen/19/00481/111800006/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>10年分の体験を10分で 人間拡張が実現するメタバース変革とは</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ0O_4I2825Y4pVLuuoKHOcHkISDGqsfEnM6Be1p5DBkzNKbaa4OQumh8ODtLmT9cWT9RSQ5m0W" alt="10年分の体験を10分で 人間拡張が実現するメタバース変革とは" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>産業界におけるメタバースはこれまでも、現実世界と仮想世界を融合するXR（クロスリアリティー）や仮想空間に現実を再現するデジタルツインの文脈で話題を集めてきた。</p></div>
            </div>
        </a><a href='https://game.watch.impress.co.jp/docs/news/1457582.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「無双」シリーズとの関係性は？ コエテクが「メタバース無双」を ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSEY-GTMNyNQFLTCbmrUzgDexgTr7byqXR1OUFqOrPdY_yjzQq52ve-CHnb0WUA7ZsYPsAYdLFG" alt="「無双」シリーズとの関係性は？ コエテクが「メタバース無双」を ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>コーエーテクモゲームスは「三國無双」シリーズや、「戦国無双」シリーズ、「無双OROCHI」シリーズなど爽快な戦闘が楽しめる数々の「無双」シリーズを手掛けている。そんな&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gamebusiness.jp/article/2022/11/22/21066.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>コエテクが『メタバース無双』を商標申請、『無双』シリーズ新作 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ13Be7guCjwaei8EZrIj1aZOQCzEk3bLSmRg5GdI6WHl67gm0vaQOPx4eq_7CJudEywQ0BMknR" alt="コエテクが『メタバース無双』を商標申請、『無双』シリーズ新作 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[商願2022-129256] 商標: [画像] (標準文字) / 出願人: 株式会社コーエーテクモゲームス / 出願日: 2022年11月11日 / 区分: 9類(電子計算機用プログラムほか), 41類(&nbsp;...</p></div>
            </div>
        </a><a href='https://retrogames-newgames.com/metaverse-koei/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>コエテクが「メタバース無双」「メタ三國志」などの商標出願 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ_qwzkRyzlIqzXRkVDCot-1HWd4njhBMnlvc-CXtOijwRnHvCFD35T7rVIO9QbOMIxUdb14v1n" alt="コエテクが「メタバース無双」「メタ三國志」などの商標出願 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>VR化の他にもNFTなどに絡めてくるのかな？ ちなみに、コエテクさんというと、. VRセンス. というVR筐体をアミューズメント施設に置いてい&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}