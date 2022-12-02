import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>さくら保育園</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,さくら保育園"/>
        <meta name="description" content="Trending News about さくら保育園" /></Head><Template>
            <h1 style={{fontSize: "30"}}>さくら保育園</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221201-00324613-sdt-000-1-thumb.jpg?exp=10800" alt="さくら保育園"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/d835f4a0c6ad0d4894b91b270dbfca22529c5a1b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【園児虐待】２回目の保護者説明会にも怒りの声 静岡・裾野市 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ827W1_Bj4SV5hHbksWaoU5-dTDwLUaPy7xRlrZpglvEehvLmFNxD0QTdds48i9Dey2nu82mFM" alt="【園児虐待】２回目の保護者説明会にも怒りの声 静岡・裾野市 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>１歳児への虐待行為が明るみとなった静岡・裾野市の「さくら保育園」では、２回目の保護者説明会が開かれた。保護者からは怒りの声が上がり、虐待は他のクラスにも及&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/c91086195adba2ecf24c5f5fe22d049577906312'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「その時期、ほっぺが青くて、あざみたいになっていた」保育士1 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS0xcS-pbdbLJASveJbxtNKfJgq0ZwQqJJ-YjP0KxID2Dh9W2JsRU67Ny-z5Owjv-UUzXGNmhH_" alt="「その時期、ほっぺが青くて、あざみたいになっていた」保育士1 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>静岡県裾野市の私立「さくら保育園」で保育士3人が1歳児を虐待していた問題で園は30日夜、2回目の保護者説明会を開きましたが3人の保育士は出席しませんでした。</p></div>
            </div>
        </a><a href='https://www.sankei.com/article/20221201-XFUT7UZ6HNL5XIH6GFLREW6ZZY/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>女性保育士３人、４歳児にも虐待か 全員が退職、園は６日に会見へ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQJnzQBzHJgjrsifPAD9w1ePZMw3EGVCNr6AJ1EO3RcnYeSAv5Q1RceaZeGj9dLVuOxN2rzH8-c" alt="女性保育士３人、４歳児にも虐待か 全員が退職、園は６日に会見へ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>静岡県裾野市の私立「さくら保育園」で複数の１歳児に虐待をしていたとされる女性保育士３人の一部が、４歳児にもカッターナイフを示す問題行為をしていたことが１日、&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/lnews/shizuoka/20221201/3030018476.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>保育園１歳児虐待か 保護者憤り 裾野市が園に個別謝罪を指示｜NHK ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQt3O5SlhjzAePlApI45Jdt-w2yMxX96ZvFE18rcAGHXLtOuTH_feEUNuh7DVeEaLDL_Jmfr6wq" alt="保育園１歳児虐待か 保護者憤り 裾野市が園に個別謝罪を指示｜NHK ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】裾野市の保育園で、保育士３人が受け持っている１歳の園児に対し足を持って宙づりにするなど虐待したとされる問題で、保護者からは憤りや改善を求め…</p></div>
            </div>
        </a><a href='https://bunshun.jp/articles/-/59115'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>保育士が園児を宙づりにして撮影「ブス」「デブ」の暴言も…園側 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTv61KSP45A-dt0j8rt17ckY3p9POKmbzIDLZvInwdsgqwopjUGuIB2aQBcDTFH0wlJIH9a5lyn" alt="保育士が園児を宙づりにして撮影「ブス」「デブ」の暴言も…園側 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>静岡県裾野市は３０日、同市の私立「さくら保育園」で、保育士が園児の足をつかんで宙づりにするなど体罰を繰り返していたと発表した。園側は体罰などの把握後、職員に&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tokyo-np.co.jp/article/217219'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>裾野・保育士の不適切行為 「虐待であり犯罪」 刑事告発も視野に ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSWXOYhyvqgq3HqiKdnyQ_qwdyOF9FCegVpGXp2cSrO6hN5UfiIxRTh70UQr052Fkz1SnMOuj_l" alt="裾野・保育士の不適切行為 「虐待であり犯罪」 刑事告発も視野に ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>静岡県裾野市の社会福祉法人「桜愛会」が運営する「さくら保育園」で、一歳児担当の保育士三人が園児に不適切な行為を繰り返していた問題で、村...</p></div>
            </div>
        </a>
        </Template></>;
}