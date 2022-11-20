import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Мотор сич</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Мотор сич"/>
        <meta name="description" content="Trending News about Мотор сич" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Мотор сич</h1>
            <Image width={800} height={500} src="https://i.lb.ua/123/42/6379407435425.jpeg" alt="Мотор сич"/>
            <h3>Recent News</h3>
            <a href='https://lb.ua/society/2022/11/19/536451_rosiyani_obstrilyali_zaporizhzhi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Росіяни обстріляли в Запоріжжі &quot;Мотор Січ&quot;, прокуратура ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQMU9O2z08QAkR_nrWAa6Lv2wRjFZqh4etZCAoFIbvW2gJlTXjiz2QT7TKNJyQzu-LDiirAs6dn" alt="Росіяни обстріляли в Запоріжжі &quot;Мотор Січ&quot;, прокуратура ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Внаслідок ворожої атаки загинула людина. Зазнало руйнувань одне з промислових підприємств. Вибуховою хвилею пошкоджено багатоповерхівки, розташовані поряд&quot;, -&nbsp;...</p></div>
            </div>
        </a><a href='https://i-ua.tv/news/70968-raketnyi-udar-znyshchyv-velyke-pidpryiemstvo-u-zaporizhzhi-ie-zahyblyi-novi-podrobytsi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ракетний удар знищив велике підприємство у Запоріжжі, є ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTuFTIGyhjTcFPJS3dS77-Ykh2npk_bmzbkitOpSxakTKec4d0x6f-CbkTVKJTIHxQ6oOlBNOKD" alt="Ракетний удар знищив велике підприємство у Запоріжжі, є ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>За даними прокуратури, обстріл стався 18 листопада 2022 року о 22:35. російські окупаційні війська випустили по Запоріжжю п&#39;ять ракет із комплексів С-300. «&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}