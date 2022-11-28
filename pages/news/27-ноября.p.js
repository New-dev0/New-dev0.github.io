import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>27 ноября</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,27 ноября"/>
        <meta name="description" content="Trending News about 27 ноября" /></Head><Template>
            <h1 style={{fontSize: "30"}}>27 ноября</h1>
            <Image width={800} height={500} src="https://gdb.voanews.com/03370000-0aff-0242-4eb3-08dad09875ef_w1200_r1.jpg" alt="27 ноября"/>
            <h3>Recent News</h3>
            <a href='https://www.golosameriki.com/a/voaexpress-11272022/6852047.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VOAэкспресс 27 ноября 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQJ-G7fl9s6LPfBZjDlR7YLwo3wAzhvWIvxkrQ5prF9pvCzJ437zYLcH4ymh6qMg7A_WmngLdGP" alt="VOAэкспресс 27 ноября 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>США выдали Chevron Corp расширенную лицензию, позволяющую импортировать нефть или нефтепродукты, произведенные предприятиями компании в Венесуэле. Это было&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}