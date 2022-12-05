import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Михалков</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Михалков"/>
        <meta name="description" content="Trending News about Михалков" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Михалков</h1>
            <Image width={800} height={500} src="" alt="Михалков"/>
            <h3>Recent News</h3>
            <a href='https://rossaprimavera.ru/news/c9319d9f'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Российский оскаровский комитет проще собрать заново ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSCeAYtYEK_E58ooLnvPsd9WMmq6TnjjhifCqxA-lSw6Is_y3YmLB-iYVPEUIKbACD9oyVnOe3x" alt="Российский оскаровский комитет проще собрать заново ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российский оскаровский комитет после выхода из него председателя и нескольких членов до сих пор не реорганизован, заявил глава Союза кинематографистов РФ,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}