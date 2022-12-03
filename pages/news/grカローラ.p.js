import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>GRカローラ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,GRカローラ"/>
        <meta name="description" content="Trending News about GRカローラ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>GRカローラ</h1>
            <Image width={800} height={500} src="https://response.jp/imgs/ogp_f/1825952.jpg" alt="GRカローラ"/>
            <h3>Recent News</h3>
            <a href='https://response.jp/article/2022/12/02/364807.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【トヨタ GRカローラ】ドアスタビライザーなど、GRパーツも発売</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQboo6JAf1vgZh20KH-40IbNTOOyxmPyoNvbbCrl-eQqieDFwjDk8sybwT_lj7jOSMgpPXXaJHf" alt="【トヨタ GRカローラ】ドアスタビライザーなど、GRパーツも発売" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>トヨタカスタマイジング＆ディベロップメントは12月2日、新型車『GRカローラ』の発売に伴い、GRパーツブランドの「GRドアスタビライザー」「GRカーボンナンバー&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}