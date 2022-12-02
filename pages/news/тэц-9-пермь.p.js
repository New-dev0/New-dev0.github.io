import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ТЭЦ-9 пермь</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ТЭЦ-9 пермь"/>
        <meta name="description" content="Trending News about ТЭЦ-9 пермь" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ТЭЦ-9 пермь</h1>
            <Image width={800} height={500} src="https://cdn.iportal.ru/news/2015/social/07202b1268bcda5efbe63f89f37b60.png" alt="ТЭЦ-9 пермь"/>
            <h3>Recent News</h3>
            <a href='https://59.ru/text/incidents/2022/11/30/71857331/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В домах может похолодать. На мощнейшей в Перми ТЭЦ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcShP_fTh59r5m7udb6_4AZuVNBrVO5NG0Fbfp9a3cD8S8qsWhu8opYDvLYqGDMuQlgHMl6y1LM-" alt="В домах может похолодать. На мощнейшей в Перми ТЭЦ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В социальных сетях начали публиковать видео, на котором заметно сильное задымление возле ТЭЦ-9 в Перми. Мы будем собирать здесь всю поступающую информацию о&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5695522'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пожар на ТЭЦ-9 не привел к повышению содержания вредных ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRZ3gmi5FUWcWo9aoi8bpVm8quRDJJn1q70qDbMdHbE8wPJoSXKfQMkSuUoW_ewuihP97jCRFJF" alt="Пожар на ТЭЦ-9 не привел к повышению содержания вредных ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По результатам лабораторных исследований содержание в воздухе загрязняющих веществ вблизи ТЭЦ-9 в Перми не превысило предельно допустимых концентраций.</p></div>
            </div>
        </a><a href='https://www.business-class.su/news/2022/11/30/v-permi-gorit-krovlya-krupneishei-v-gorode-tec-9'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Перми горит кровля крупнейшей в городе ТЭЦ-9</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSUrwnyTf7UyfaDo0PaEhRSqJPpmlP-CvKqgxndw83TTYr9OF0JQ5dip0ZZkmoMWYsTfOCPutqn" alt="В Перми горит кровля крупнейшей в городе ТЭЦ-9" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня днем на ТЭЦ-9 (ул. Промышленная, 103) в Индустриальном районе Перми произошел пожар. По данным регионального управления МЧС, горит кровля&nbsp;...</p></div>
            </div>
        </a><a href='https://v-kurse.ru/2022/12/02/306896'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пожар на ТЭЦ-9 в Перми унес жизнь 31-летнего монтажника ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQKUS_kqEm-cZuEc0_GAgpTFx1zqtCyq5V7qFXNsDzDEFyllu-QbaRX-qaarJEU6zmKPiWGksSR" alt="Пожар на ТЭЦ-9 в Перми унес жизнь 31-летнего монтажника ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>После происшествия он не приходил в сознание. Во время пожара на ТЭЦ-9 в Перми погиб человек, еще двое госпитализированы с ожогами.</p></div>
            </div>
        </a><a href='https://www.chitaitext.ru/novosti/pozhar-na-tets-9-likvidirovan-pogib-odin-chelovek/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пожар на ТЭЦ-9 ликвидирован - погиб один человек</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRYEP9E1xv-JMFG2qS35APp6gFGFaW5y1kLvs-0mjswG4AY0icrMafx-u543Ic4uF9LroNLnqpI" alt="Пожар на ТЭЦ-9 ликвидирован - погиб один человек" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня в 14 часов 11 минут пожарные ликвидировали возгорание на пермской ТЭЦ-9. Сейчас на месте ЧП будут работать сотрудники правоохранительных органов.</p></div>
            </div>
        </a><a href='https://www.zwezda.su/security/proisshestviya/2022/12/dvoe-postradavshih-vo-vremya-pozhara-na-tec-9-v-permi-nahodyatsya-v-udovletvoritelnom-sostoyanii'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Двое пострадавших во время пожара на ТЭЦ-9 в Перми ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTHQ1pETI82ZqbrL9fdXVUg_f9-XFC2vWPJAL-PhTWc8XsNqcRLEIn5XArn8ubJAxh-jKC1I3Mo" alt="Двое пострадавших во время пожара на ТЭЦ-9 в Перми ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Газета «Звезда» — старейшая газета Пермского края. Новости политики, экономики, общества и спорта.</p></div>
            </div>
        </a><a href='https://rifey.ru/news/list/id_118959'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Перми произошел пожар на ТЭЦ-9</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRLZn1fkS7bwK8cY69UDhj6nAoY4tUKflQTZvpGxhzPnClWJ6fEbJ16mSsjzfjrTO9-8aJ5r68" alt="В Перми произошел пожар на ТЭЦ-9" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Днем в среду 30 ноября в Перми произошел пожар на ТЭЦ-9. Огромные клубы дыма видны почти со всей территории города. Фото и видео произошедшего пожара&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}