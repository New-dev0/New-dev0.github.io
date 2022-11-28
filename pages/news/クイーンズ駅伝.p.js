import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>クイーンズ駅伝</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,クイーンズ駅伝"/>
        <meta name="description" content="Trending News about クイーンズ駅伝" /></Head><Template>
            <h1 style={{fontSize: "30"}}>クイーンズ駅伝</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221127-00000212-spnannex-000-9-view.jpg?exp=10800" alt="クイーンズ駅伝"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/c29a3157e1e210f9e3f9e8f036c558723b09d675'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【クイーンズ駅伝】積水化学 2連覇ならず、アンカー佐々木が激走も ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRw46smkUfawrCnsKLMoC9dgBN0Khupsq3WciD0wFAvQ3a4x2knal1ei2mZYG7ffabjpiDZdYm3" alt="【クイーンズ駅伝】積水化学 2連覇ならず、アンカー佐々木が激走も ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>クイーンズ駅伝（全日本実業団対抗女子駅伝）（2022年11月27日 宮城県松島町文化観光交流館前～弘進ゴムアスリートパーク仙台、6区間、42・195キロ） クイーンズ&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/b895c42b697c32b08f9240922ac4ee77d36dae00'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>クイーンズ駅伝5度優勝の元監督が提言 「マラソンと駅伝選手は ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRss7eOze-Dbub6HFeamguirexU50iW1DCufzpNiElyrkAUPp1bA4eROTu9tf2ztK1RfC1MvbHw" alt="クイーンズ駅伝5度優勝の元監督が提言 「マラソンと駅伝選手は ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>実業団の女子駅伝日本一を決める27日の全日本実業団女子駅伝は、資生堂が2時間12分28秒の大会新記録で16年ぶり2度目の優勝を果たした。</p></div>
            </div>
        </a><a href='https://www.nikkansports.com/sports/news/202211270001131.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【クイーンズ駅伝】新谷仁美、広中璃梨佳の「無敗」止める 先着 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="【クイーンズ駅伝】新谷仁美、広中璃梨佳の「無敗」止める 先着 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>全日本実業団対抗女子駅伝（クイーンズ駅伝）＞◇27日◇宮城県松島町文化観光交流館前〜弘進ゴムアスリートパーク仙台（6区間42.195キロ）.</p></div>
            </div>
        </a><a href='https://www.rikujyokyogi.co.jp/archives/87100'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>1区は資生堂・木村友香が制す！「自分のリズムを崩さず」16年ぶり ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSAegLAKDJdA-E1_XXgWOveTF6Fsc0qTtYzu6qit6Mif0iDe331G4_Ad5yTGfQf22E5Xy8Q26Gb" alt="1区は資生堂・木村友香が制す！「自分のリズムを崩さず」16年ぶり ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>... ◇クイーンズ駅伝in宮城（11月27日／宮城・松島～仙台、6区間42.195km）. 全日本実業団対抗女子駅伝（クイーンズ駅伝）が11月27日に行われ、1区は資生堂の木村友香&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hokkoku.co.jp/articles/-/921381'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【クイーンズ駅伝】資生堂・五島莉乃（星稜高ＯＧ）２年連続の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="【クイーンズ駅伝】資生堂・五島莉乃（星稜高ＯＧ）２年連続の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>第４２回全日本実業団対抗女子駅伝（クイーンズ駅伝）は２７日、宮城県内で行われ、２４チームが６区間４２・１９５キロで争った。５区（１０キロ）では資生堂・五島&nbsp;...</p></div>
            </div>
        </a><a href='https://mainichi.jp/articles/20221127/k00/00m/050/130000c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>クイーンズ駅伝、資生堂が大会新記録で優勝 16年ぶり2回目 - 毎日新聞</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS0VVBQGPLb_hyin4WAazRUx52qb1c47HHa4kI4DHFFup8iJnnnyE-VfdcEHB9ZVbJo2jnsxDcM" alt="クイーンズ駅伝、資生堂が大会新記録で優勝 16年ぶり2回目 - 毎日新聞" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>クイーンズ駅伝in宮城 第42回全日本実業団対抗女子駅伝競走大会」は27日、宮城県を舞台に6区間42・195キロで争われ、資生堂が2時間12分28秒の大会新記録で、16年ぶり2&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jomo-news.co.jp/articles/-/208483'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>クイーンズ駅伝 群馬県のヤマダHDは12位</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRImVjRmU2RvZ7irUZ1H32bI_b4x_s51vY9wQMSgbkHkH5MJwPn2tBFn7Jds2O_9tJt_K0TgpVn" alt="クイーンズ駅伝 群馬県のヤマダHDは12位" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>全日本実業団対抗女子駅伝（クイーンズ駅伝）は２７日、宮城県松島町文化観光交流館前から弘進ゴムアスリートパーク仙台までの６区間、４２・１９５キロで行われ、本県&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}