import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>宝石の国</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,宝石の国"/>
        <meta name="description" content="Trending News about 宝石の国" /></Head><Template>
            <h1 style={{fontSize: "30"}}>宝石の国</h1>
            <Image width={800} height={500} src="https://nijimen.net/wp-content/uploads/2022/11/main___.jpg" alt="宝石の国"/>
            <h3>Recent News</h3>
            <a href='https://nijimen.net/topics/354551'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>やはり読む地獄…！「宝石の国」を読んだ人がとる行動に「該当 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTRrxU4mqwqzbeBfFKRai1vzdBnSvo6NEnXxWAs5WWKTfoXVcHQqyLqWkwyG7HYRnixCx4lZ3lk" alt="やはり読む地獄…！「宝石の国」を読んだ人がとる行動に「該当 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>市川春子先生による人気漫画「宝石の国」は、可愛い絵柄からは予想もつかない“鬱展開”が繰り広げられると有名ですよね。 本作を読んでいる人の行動に共感が寄せ&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}