import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Зеленский Крым</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Зеленский Крым"/>
        <meta name="description" content="Trending News about Зеленский Крым" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Зеленский Крым</h1>
            <Image width={800} height={500} src="https://gdb.rferl.org/CB3D619B-9F8F-4D35-A3EC-B5A724BDBFBB_w1200_r1.jpg" alt="Зеленский Крым"/>
            <h3>Recent News</h3>
            <a href='https://www.svoboda.org/a/zelenskiy-ukraina-vyderzhit-rossiyskie-udary-i-vernyot-krym/32148454.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленский: Украина выдержит российские удары и вернёт Крым</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRwmGdtx58kR328FoRjPGtzLCr_6v8s1Jt7dUcaKap8nPFz4v4s1epo0js8EeQ2wARbjIr1GlkO" alt="Зеленский: Украина выдержит российские удары и вернёт Крым" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Украины Владимир Зеленский заявил, что новая российская стратегия - наносить удары по энергетической инфраструктуре с целью лишить жителей страны&nbsp;...</p></div>
            </div>
        </a><a href='https://www.interfax.ru/russia/874220'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кремль увидел в заявлении Зеленского о Крыме нежелание ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSe6ZGvNK-uMcTVGOdGeR6I0xTVjNWo5HQgNzaO_wmkTsdQgl3uA7lGPOhNe9QqjpDgc_65Ims5" alt="Кремль увидел в заявлении Зеленского о Крыме нежелание ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Москва. 25 ноября. INTERFAX.RU - Последние высказывания президента Украины Владимира Зеленского &quot;о возвращении Крыма&quot; свидетельствуют о нежелании Киева&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vedomosti.ru/politics/news/2022/11/25/952123-peskov-prokommentiroval-zayavlenie-zelenskogo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Песков прокомментировал заявление Зеленского о ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ1gosGdbzwkGZR42gfKdT_niBFV6gsn0_bbBNpNPmAwYlia8VjzBRIG1llXKjz3P971S4ZI4Du" alt="Песков прокомментировал заявление Зеленского о ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>О возвращении Крыма в состав Украины «невоенным путем» не может быть речи, заявил пресс-секретарь президента РФ Дмитрий Песов, отвечая на вопросы&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rosbalt.ru/world/2022/11/25/1979600.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленский хочет вернуть Крым, Меркель запретили переговоры ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQa1O0ncOetuYXf0YjS-5hjLJ6nR9x2Ttb8sHTkIxZ7vrEkXRXQFjZgEuvTF_cDOvwH8tdfFaOB" alt="Зеленский хочет вернуть Крым, Меркель запретили переговоры ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ДАННОЕ СООБЩЕНИЕ (МАТЕРИАЛ) СОЗДАНО И (ИЛИ) РАСПРОСТРАНЕНО ИНОСТРАННЫМ СРЕДСТВОМ МАССОВОЙ ИНФОРМАЦИИ, ВЫПОЛНЯЮЩИМ ФУНКЦИИ ИНОСТРАННОГО АГЕНТА,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.souzveche.ru/news/68345/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Песков: Слова Зеленского о желании вернуть Крым говорят о ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSsS41vqwDcN_F1sBt35IbBbSoVEaBlToawqVw3WLV-69vavVujxkxxw_cOgL6LhtCItcpSdglg" alt="Песков: Слова Зеленского о желании вернуть Крым говорят о ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>- О возвращении Крыма в состав Украины «невоенным путем» не может быть даже речи, это было бы отчуждение территории РФ, - сообщил он. Ранее президент Украины&nbsp;...</p></div>
            </div>
        </a><a href='https://vm.ru/politics/1014004-nastoyatelnaya-prosba-zachem-zelenskij-zayavil-o-gotovnosti-reshat-sudbu-kryma-nevoennym-putem'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Настоятельная просьба»: зачем Зеленский заявил о готовности ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT3JWxYQmgA48XzVHu6_y7v5ZIAjq_114IAEc0vJ1yBzTAzjP0_qgd_8jROeMec8icoqbjrojGj" alt="«Настоятельная просьба»: зачем Зеленский заявил о готовности ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Украинский президент Владимир Зеленский сообщил, что не против рассмотреть варианты, которые предусматривают «присоединение Крыма к Украине невоенным путем»&nbsp;...</p></div>
            </div>
        </a><a href='https://fedpress.ru/news/crimea/policy/3148152'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Песков заявил, что Зеленский не сможет получить Крым</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQGVVO7a3HocD0-zU063A2E_S1wvN2oLg8FhochphkS5t-1D9oQs2W-pvjZA_yc13sDst4yTGeq" alt="Песков заявил, что Зеленский не сможет получить Крым" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Пресс-секретарь президента Дмитрий Песков прокомментировал очередные заявления президента Украины Владимира Зеленского о том, что Россия должна отдать Крым,&nbsp;...</p></div>
            </div>
        </a><a href='https://rostov.tsargrad.tv/news/vladimir-zelenskij-zajavil-o-namerenii-zabrat-u-rossii-krym-nevoennym-putjom_672170'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Зеленский заявил о намерении забрать у России ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSyuc0tO7ViWN0scF1L_nQw8kQlJsOvPQvXSZ6_WwOtr24BRwSQCiCegbKDv_Sjte1fXVvCyjcR" alt="Владимир Зеленский заявил о намерении забрать у России ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Жители полуострова считают некорректным вопрос о принадлежности Крымской Республики после вхождения в состав русского государства.</p></div>
            </div>
        </a>
        </Template></>;
}