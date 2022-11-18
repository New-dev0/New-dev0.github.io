import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Генератор дизельний</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Генератор дизельний"/>
        <meta name="description" content="Trending News about Генератор дизельний" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Генератор дизельний</h1>
            <Image width={800} height={500} src="https://vsim.ua/img/cache/reference/news_fb_og/0029/60/2859470-hto-y-za-skilki-pridbav-generatori-u-hmelnitskomu-oglyad-zakladiv-i-pidpriemstv.jpeg" alt="Генератор дизельний"/>
            <h3>Recent News</h3>
            <a href='https://vsim.ua/Groshi/hto-y-za-skilki-pridbav-generatori-u-hmelnitskomu-oglyad-zakladiv-i-pi-11711014.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Хто й за скільки придбав генератори у Хмельницькому: огляд ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRRlmruTu0NoW4oMNJGZDz3eTNjGSSh_e34MaGyepw5YXLlYnDIMvuBiiHDbq9HqIab22VdsgKe" alt="Хто й за скільки придбав генератори у Хмельницькому: огляд ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[16:11:2022] Хто й за скільки придбав генератори у Хмельницькому: огляд закладів і підприємств ✓Новини від vsim.ua ✓ Тільки свіжі новини - слідкуйте разом&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}