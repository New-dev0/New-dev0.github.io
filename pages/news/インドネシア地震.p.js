import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>インドネシア地震</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,インドネシア地震"/>
        <meta name="description" content="Trending News about インドネシア地震" /></Head><Template>
            <h1 style={{fontSize: "30"}}>インドネシア地震</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_japanese/14F3F/production/_127732858_javaearthquake-index2-reuters.jpg" alt="インドネシア地震"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/japanese/63698669'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>インドネシア・ジャワ島で地震、死者268人に 多くの子供が学校で ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSES8zxm7X0F4qu2FYa6lXt4wSmXeRNAAU4T_VrBtI8u92mJbyLoX2VArGUz-Z-t9B5_0o2AKNy" alt="インドネシア・ジャワ島で地震、死者268人に 多くの子供が学校で ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>インドネシア・西ジャワ州で21日午後1時20分ごろ、マグニチュード（M）5.6の地震があり、多数の死傷者が出ている。その多くは学校にいた子供だという。</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/news/html/20221123/k10013900981000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>インドネシア ジャワ島の地震 5万人以上が避難 支援も課題に</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSEVHMrtFYKbujRnakaukw7Nf8vHS0VL4lMYxwu-_sOnXUeZMExCI4ZpaE5wN9SxPaGebuGJCME" alt="インドネシア ジャワ島の地震 5万人以上が避難 支援も課題に" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】インドネシアのジャワ島西部で21日に起きた地震では、これまでに268人の死亡が確認されました。現地では倒壊した住宅などか…</p></div>
            </div>
        </a><a href='https://jp.reuters.com/article/indonesia-quake-children-idJPKBN2SC0NS'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>インドネシア地震の死者268人に、子ども多数犠牲 捜索難航</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRF7pOcyCYenOLa2GavkmWWeV5WSWLbD0iSDxXVCLJPz9dcV3I0iz5N83APsZQAxMpNjSxCBuww" alt="インドネシア地震の死者268人に、子ども多数犠牲 捜索難航" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>インドネシア西ジャワ州のチアンジュール付近で２１日発生した地震の死者は少なくとも２６８人となった。子どもが多数を占めるという。</p></div>
            </div>
        </a><a href='https://www.cnn.co.jp/world/35196449.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>インドネシア地震、死者２６８人に 知事「犠牲者の大半子ども」</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTiqmjj91bnaVzSOf19RikI8uNnVzDxhs4Jj_BYQqxqRMQ912Hl5un_LQQ9GBuvkZ1Fd90XCEpy" alt="インドネシア地震、死者２６８人に 知事「犠牲者の大半子ども」" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>インドネシア西ジャワ州の人口密集地を襲った地震で、少なくとも２６８人が死亡したことが分かった。救助隊は２２日、がれきをかき分けて生存者の捜索を行った。</p></div>
            </div>
        </a><a href='https://www.fnn.jp/articles/-/448888'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>インドネシア地震 死者は268人に 学校倒壊 多くの子ども犠牲に ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSNZbJW5uDziagz3Z5h3kYMpi_VIAtfLKTX9d3mVWBugDB5qHDp9TgndczeIX6HrGEgEuV4HmaR" alt="インドネシア地震 死者は268人に 学校倒壊 多くの子ども犠牲に ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>インドネシアのジャワ島西部で起きた地震の死者は、268人にのぼっている。西ジャワ州で21日に起きた地震で、インドネシアの国家防災庁はこれまでに、268人の死亡を確認&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}