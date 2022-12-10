import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>笠原祥太郎</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,笠原祥太郎"/>
        <meta name="description" content="Trending News about 笠原祥太郎" /></Head><Template>
            <h1 style={{fontSize: "30"}}>笠原祥太郎</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221209-00000040-chuspo-000-5-view.jpg?exp=10800" alt="笠原祥太郎"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/55c4fe4b0cc074f3c5b0678ad0416f1d5ff37621'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【中日】笠原祥太郎、現役ドラフトでDeNA移籍 2019年開幕投手 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRdOFSFOw3r84NsCAuO_oSzc-_7069ox3JQ2j8OWxeVROndQVrQJJBgIB_Mc2Z3kqQCfRoulLTK" alt="【中日】笠原祥太郎、現役ドラフトでDeNA移籍 2019年開幕投手 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>プロ野球の現役ドラフトが9日に行われ、中日の笠原祥太郎投手（27）が、DeNAに指名され移籍することが決まった。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/65e662cdd5b27d7b804b3d409d792dc630958f8a'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【現役ドラフト】中日笠原祥太郎がDeNAへ「心機一転！頑張りたい ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTDLNZB3XfDq6TQkhQ1rVT_C5Q9zTOyHO9oBJetbG6E2YGvJtEza-liGOOy2aFomnAcoYA37maf" alt="【現役ドラフト】中日笠原祥太郎がDeNAへ「心機一転！頑張りたい ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>中日が9日の現役ドラフトで、DeNAから細川成也外野手（24）獲得した。DeNAも中日笠原祥太郎投手（27）を指名。1対1の交換トレードの形になった。 ◇ ◇ ◇ 19年開幕.</p></div>
            </div>
        </a><a href='https://www.sanspo.com/article/20221209-7IHTI6ILYBLY5CKZJIMF4O52W4/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ＤｅＮＡから指名の笠原祥太郎 左腕王国の新たなピースに／現役 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRtMryewEjOPrxKs_nI3goU-8Y4XwG8-2eYSbYsTkS-zOlU8d5bn9mbQssKgF0PuZAyZRvSlN-O" alt="ＤｅＮＡから指名の笠原祥太郎 左腕王国の新たなピースに／現役 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ＤｅＮＡは９日、現役ドラフトで中日から笠原祥太郎投手（２７）を獲得した。来季７年目の左腕は「指名していただけたことは光栄。心機一転頑張りたい」と前向きに&nbsp;...</p></div>
            </div>
        </a><a href='https://www.chunichi.co.jp/article/598218'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【中日】現役ドラフトで笠原祥太郎がDeNA移籍「心機一転！頑張り ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTZYSqPqNns4pWEce_kjqdAgxr6Wo2rv8M3zt2Vl3t_jyAU_GXA6HNsKOl_Xxr10Z5iN-yUyD9A" alt="【中日】現役ドラフトで笠原祥太郎がDeNA移籍「心機一転！頑張り ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>プロ野球の現役ドラフトが９日、オンラインで行われ、中日の笠原祥太郎投手（２７）がＤｅＮＡから指名された。中日はＤｅＮＡの細川成也外野手...</p></div>
            </div>
        </a><a href='https://www.niigata-nippo.co.jp/articles/-/149281'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>プロ野球現役ドラフト、中日・笠原祥太郎投手（新潟秋葉区出身 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR5Xg4MW3ecfdOdXAVW4VKvBobCCNQUXpwFBokOSOWuMOuMSjriHUuEQnAFsW6Es1bxwYDIL2Rt" alt="プロ野球現役ドラフト、中日・笠原祥太郎投手（新潟秋葉区出身 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>プロ野球で出場機会に恵まれない選手の移籍を活性化させるために導入された現役ドラフトが９日、非公開で初めて実施された。全１２球団で移籍が生じ、中日の笠原祥太郎&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tokyo-sports.co.jp/articles/-/247755'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【現役ドラフト】１番人気は中日→ＤｅＮＡの笠原祥太郎か 元プロ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSxaRMx-1cW-YAAVAsdrDAkizgIduiPNuhkvi1J2WgJs3vomGT55pcJH7IIPBcCroqkVeJ_DuMF" alt="【現役ドラフト】１番人気は中日→ＤｅＮＡの笠原祥太郎か 元プロ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>プロ野球の現役ドラフトが９日に非公開のオンラインで開催された。１２球団で１２人の移籍が決定したが、どんな選手に人気が集まり、思い切った戦略に出た球団はどこな&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}