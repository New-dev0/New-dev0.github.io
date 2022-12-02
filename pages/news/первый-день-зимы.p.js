import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Первый день зимы</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Первый день зимы"/>
        <meta name="description" content="Trending News about Первый день зимы" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Первый день зимы</h1>
            <Image width={800} height={500} src="https://ryazpressa.ru/wp-content/uploads/2022/12/katok.jpg" alt="Первый день зимы"/>
            <h3>Recent News</h3>
            <a href='https://ryazpressa.ru/v-pervyj-den-zimy-v-pronske-zalivayut-katok/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В первый день зимы в Пронске заливают каток</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSV0RJa8-d2OD5lDIXfjUzlQU-e5iXP--vtJERmkMKl7Eov82hT67TRGMJNpH0bOriD3Z2OjHUK" alt="В первый день зимы в Пронске заливают каток" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1 декабря на пронской хоккейной площадке начали заливать каток. Хоккейную коробку установили на стадионе в этом году по программе поддержки местных&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}