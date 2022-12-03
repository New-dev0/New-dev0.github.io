import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Алексей Коростелев</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Алексей Коростелев"/>
        <meta name="description" content="Trending News about Алексей Коростелев" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Алексей Коростелев</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_russian/18E8/production/_127867360_.jpg" alt="Алексей Коростелев"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/russian/news-63836217'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Дождь&quot; уволил ведущего за слова о помощи российским ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT_Y6lSLtCLZGVOi_OnruHO3nkXxi-SIvf5ylzqcrTWiTqNH5dzfU0N7tdK3P3tQKsqb-WHeJf5" alt="&quot;Дождь&quot; уволил ведущего за слова о помощи российским ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Телеканал &quot;Дождь&quot; (внесен в реестр &quot;иноагентов&quot;) сообщил, что прекратил сотрудничество с телеведущим Алексеем Коростелевым. Накануне журналист в прямом&nbsp;...</p></div>
            </div>
        </a><a href='https://nn.tsargrad.tv/news/kto-takoj-aleksej-korostelev-chto-izvestno-o-zhurnaliste-kotorogo-liberaly-uvolili-v-prjamom-jefire_677214'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кто такой Алексей Коростелев: что известно о журналисте ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSXLUU4cS94pU3s1qCjHwWgcEJv8TesqSaPX0tk_N3UU2Hp0u31DtrijfOD0URuOOykWGSBQlPS" alt="Кто такой Алексей Коростелев: что известно о журналисте ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Скандал разгорелся в Латвии: сбежавшее из России либеральное СМИ находится под угрозой закрытия из-за слов журналиста Алексея Коростылева о спецоперации.</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5705269'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Дождь» уволил журналиста Алексея Коростелева за фразу о ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ4snp_gXjJeQWL-Xkea3Rqc16CACNb7FKcvL5vqblbqGwuNWDeNqKbyoKX4tlXhgAeGJ14lgRc" alt="«Дождь» уволил журналиста Алексея Коростелева за фразу о ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Руководство телеканала «Дождь» (признан иностранным агентом в РФ) уволило ведущего Алексея Коростелева. Накануне, 1 декабря, в эфире «Дождя» в выпуске&nbsp;...</p></div>
            </div>
        </a><a href='https://readovka.news/news/123382'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Алексей Коростелев уволен с «Дождя» в прямом эфире после ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQz2fvocaYqZJ9bT8jP5lULyy0RiewCnxAy-r7Pbl7myRzDU_jlF7y8DeJJfMlW2yE9OZ1igTXe" alt="Алексей Коростелев уволен с «Дождя» в прямом эфире после ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ранее Readovka писала Журналист издания Bild призвал расследовать казнь бойцов ВС РФ боевиками ВСУЗа это его затравили в комментариях о том, что журналист&nbsp;...</p></div>
            </div>
        </a><a href='https://news.ru/society/uvolennyj-zhurnalist-dozhdya-obyasnil-slova-o-podderzhke-mobilizovannyh/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Уволенный журналист «Дождя» объяснил слова о поддержке ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQqayIpo1EUi1vNxZVVwqtNEnJL98QjgNOxdqF0ye0WRHiUik1-iuxRySaUgvAnD-ZAD7quOVqi" alt="Уволенный журналист «Дождя» объяснил слова о поддержке ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ведущий «Дождя» (СМИ, исполняющее функции иностранного агента) Коростелев назвал оговоркой слова о «помощи российским солдатам с элементарными удобствами».</p></div>
            </div>
        </a><a href='https://nv.ua/world/countries/korostelev-zayavil-v-efire-chto-telekanal-dozhd-pomogaet-armii-rf-video-poslednie-novosti-50288233.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ведущий Дождя заявил, что телеканал помогает армии РФ, его ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ2AhEt70kWAJz4rJf60gBL2y1sBnmgUyXXtnwUfC6sUT29NIsSvHwqIsJYD0Fc4f3BLms8ymHD" alt="Ведущий Дождя заявил, что телеканал помогает армии РФ, его ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ведущий Алексей Коростелев в эфире российского телеканала Дождь заявил, что телеканал помогает российской армии, его уволили.</p></div>
            </div>
        </a><a href='https://eadaily.com/ru/news/2022/12/02/vysokie-otnosheniya-vedushchego-dozhdya-uvolili-za-slova-o-pomoshchi-mobilizovannym'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Высокие отношения: ведущего «Дождя» уволили за слова о ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTS4P62AeQ6SjvLVQVKOo-TTAJAgkjYcpbmAI4cABjzXbib3pk7dehlZR-Sbn2GsWdmaDihAOYU" alt="Высокие отношения: ведущего «Дождя» уволили за слова о ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Телеканал «Дождь» (иностранное СМИ, признано в РФ иноагентом) уволил ведущего Алексея Коростелева после призыва о помощи мобилизованным военнослужащим&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}