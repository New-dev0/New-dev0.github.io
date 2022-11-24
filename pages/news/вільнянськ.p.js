import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Вільнянськ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Вільнянськ"/>
        <meta name="description" content="Trending News about Вільнянськ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Вільнянськ</h1>
            <Image width={800} height={500} src="https://i.ytimg.com/vi/ExzapduY_8w/maxresdefault.jpg" alt="Вільнянськ"/>
            <h3>Recent News</h3>
            <a href='https://www.youtube.com/watch?v=ExzapduY_8w'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ВІЛЬНЯНСЬК. Загинуло НЕМОВЛЯ через ракетний обстріл ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSJLuqopDNwzCrIEbQPL0vCHRrNV49wcSgMu8EFReC0kIFErf2_d3Uk6obCEWW0ZY7KIYZyA0cV" alt="ВІЛЬНЯНСЬК. Загинуло НЕМОВЛЯ через ракетний обстріл ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У ніч на 23 листопада російські військові обстріляли пологове відділення лікарні у Вільнянську. Внаслідок спричиненої окупантами трагедії загинуло немовля.</p></div>
            </div>
        </a><a href='https://fakty.ua/411177-vrag-udaril-po-volnyanskoj-bolnice-na-zaporozhe-pogib-tolko-chto-rozhdennyj-mladenec'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ворог вдарив по Вільнянській лікарні на Запоріжжі: загинуло ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSBxcplscknXR7KufsfQoC-1CfyK2z4vWn3rN5U88GSLw1MqNtrkRWp-jTn4cyqmg15NnJNr-FI" alt="Ворог вдарив по Вільнянській лікарні на Запоріжжі: загинуло ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Голова Запорізької ОВА Олександр Старух показав фото рятувальної операції в містечку Вільнянськ, яке рашисти піддали смертоносному обстрілу.</p></div>
            </div>
        </a><a href='https://suspilne.media/322958-ne-moze-buti-kompromisiv-zi-zlom-lasko-prokomentuvav-obstril-pologovogo-budinku-u-vilnansku/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Не може бути компромісів зі злом&quot;: Ляшко прокоментував ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSZ7QTxGLjP2WTb2lB2l10qSUYcu9CxaHkPFWZoip5QYNllee9jMtDh4ywY-dvf0QPnGOC_uRLt" alt="&quot;Не може бути компромісів зі злом&quot;: Ляшко прокоментував ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media Обстріл Росією пологового будинку на Запоріжжі, під час якого загинуло немовля, є злочином, за який відповідальне все населення Російської&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/ukrainian/news-63726534'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Обстріл Запорізької і Харківської областей. Загинуло немовля і ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRHiSyPCZ-7Lp5JzAj1JL-o8n5KdSFF583maEGq3C6ij1Wfl6spNA3rKkYNZiNLmpjQ1foziUnQ" alt="Обстріл Запорізької і Харківської областей. Загинуло немовля і ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Російська армія обстріляла житлові будинки та лікарні у Запорізькій та Харківській областях. Є загиблі та поранені мирні мешканці.</p></div>
            </div>
        </a><a href='https://www.slovoidilo.ua/2022/11/23/novyna/suspilstvo/zelenskyj-pro-udary-po-vilnyansku-ta-kupyansku-krayina-teroryst-prodovzhuye-voyuvaty-proty-cyvilnyx'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленський про удари по Вільнянську та Куп&#39;янську: «Країна ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQaCP3H01vbsIptlO1d40uWyqxKZLUKOdFcfesJJuHC2_9hYcU8bCzuJF2SMoNI0S8g72d5glNW" alt="Зеленський про удари по Вільнянську та Куп&#39;янську: «Країна ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент України Володимир Зеленський прокоментував обстріли армії рф Вільнянська та Куп&#39;янська, де загинули люди.</p></div>
            </div>
        </a><a href='https://nv.ua/ukr/ukraine/events/novi-podrobici-obstrilu-pologovogo-budinku-u-vilnyansku-povidomili-v-op-novini-ukrajini-50286051.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Загиблому хлопчику було лише 2 дні: в ОП повідомили подробиці ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQN9rE5o_ZjYnVmK9YW5O0ITdhBZbRCt0qy9xUK0DD90v_6G3Zsh7d2excqw1Pi8yxn3wV-G12d" alt="Загиблому хлопчику було лише 2 дні: в ОП повідомили подробиці ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Як повідомив у себе в Telegram заступник голови ОП Кирило Тимошенко, окупанти вдарили по медустанові ракетами С-300. Внаслідок атаки окупантів загинув хлопчик,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}