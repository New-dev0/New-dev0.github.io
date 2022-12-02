import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Потери Украины</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Потери Украины"/>
        <meta name="description" content="Trending News about Потери Украины" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Потери Украины</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/_/g/_gettyimages_1239067748_34_1300x820.jpg" alt="Потери Украины"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/100-tisyach-podolyak-nazvav-vtrati-ukrayini-1669920100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Не 100 тысяч. Подоляк назвал потери Украины в войне с Россией</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTo_HyGofNLYR19IllPGaDca8SyZm9GJ3O9Epy0HnfcRe8kXgCUiaw34TfzR7Mhz1jxaTq8q7e-" alt="Не 100 тысяч. Подоляк назвал потери Украины в войне с Россией" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Советник Офиса президента Украины Михаил Подоляк назвал реальные цифры потерь украинских военных в этой войне.</p></div>
            </div>
        </a><a href='https://www.bbc.com/russian/media-63812094'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Глава Еврокомиссии назвала потери Украины в войне, но потом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTc5xaZCo15YJ_GL93xS8A0YqYRRmtdUjxq3bSawK6zoHJAcakWFf5K0gFwG8DqocSTN5m892rS" alt="Глава Еврокомиссии назвала потери Украины в войне, но потом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Названные главой Еврокомиссии потери Украины вызвали возмущение в Киеве. Украинские власти говорят, что данные о погибших закрытые, озвучить их могут только&nbsp;...</p></div>
            </div>
        </a><a href='https://www.svoboda.org/a/v-ofise-prezidenta-ukrainy-otsenili-poteri-v-voyne-v-10-tysyach-pogibshih-/32157867.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Офисе Зеленского оценили потери в войне в 10–13 тысяч ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQxiZvtGVWT7N8GN25ra3b_gkviN-J0_u-_5NLN6y5R2oElSC1v50duSBapuUtvZyWFFZn0utGS" alt="В Офисе Зеленского оценили потери в войне в 10–13 тысяч ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Потери украинских войск с начала полномасштабного вторжения России в Украину составили от десяти до 13 тысяч человек погибшими. Об этом заявил в четверг в&nbsp;...</p></div>
            </div>
        </a><a href='https://ura.news/news/1052607176'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Европе раскрыли потери Украины и отказали ей в части ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRU12skoLFyOV5nvxUe6eFFmK45m6ZNURXS937xBGLNWGNSANYt73K7PJZwPgpaol7rpwo0HREG" alt="В Европе раскрыли потери Украины и отказали ей в части ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Председатель Европейской комиссии Урсула фон дер Ляйен раскрыла потери украинской армии в боевых действиях на Украине. Канцлер Германии Олаф Шольц выступил&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5695055'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Глава Еврокомиссии понесла потери в цифрах</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS9B13-tOYXKfl9SlqdUez65oFlVAiexBZ7vV9K0wOmhYPBmTh9Eewjb9UB5zb3K2-MSpbWB1IG" alt="Глава Еврокомиссии понесла потери в цифрах" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Выступление главы Еврокомиссии Урсулы фон дер Ляйен, состоявшееся в среду, закончилось скандалом. Она заявила, что военные потери Украины составили свыше&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.net/war/poteri-ukrainy-v-voyne-podolyak-zayavil-chto-v-ukrainskoy-armii-pogibli-do-13-tysyach-voennyh-12064113.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Украине с 24 февраля погибли до 13 тысяч военнослужащих ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTtgFpd6MRnhjPWweflEfkk9qjY4pxBE6bFRw_9JmTqY8S63VpunD369B1H3EIa0yEWWbmybLjl" alt="В Украине с 24 февраля погибли до 13 тысяч военнослужащих ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Советник руководителя ОП Михаил Подоляк прокомментировал слова президента ЕК Урсулы фон дер Ляєн о том, что потери украинской армии составляют 100 тыс.</p></div>
            </div>
        </a>
        </Template></>;
}