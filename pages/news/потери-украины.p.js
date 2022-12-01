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
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_russian/0BB0/production/_127829920_gettyimages-1245052356.jpg" alt="Потери Украины"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/russian/news-63807932'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Еврокомиссия оценила число погибших и раненых украинских ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTdedDJA_Q6y7llBkUDDYJfLfmWy4OKTdGiTyfd1gwOfkzZo_6kqFYsVuQ-sV9jgInzr2Q8fFCm" alt="Еврокомиссия оценила число погибших и раненых украинских ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Еврокомиссия оценила потери Украины в войне с Россией в 100 тысяч военных, но заявление с такой оценкой пришлось отредактировать - речь идет не только о&nbsp;...</p></div>
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
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR-HUc6ff3tOafpzRcL129adQrUdh2FKXAqbQG3XaFg002JIuZfj966NaVTIocDDDtum6X3Ohjs" alt="Глава Еврокомиссии понесла потери в цифрах" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Выступление главы Еврокомиссии Урсулы фон дер Ляйен, состоявшееся в среду, закончилось скандалом. Она заявила, что военные потери Украины составили свыше&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/es-nazvali-vtrati-ukrayini-viyni-sered-tsivilnih-1669797191.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В ЕС оценили возможные потери Украины в войне среди ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTNglCUTM8S3X3PLe8UnRRBaZFu_lRnC2PtfTXtK4AJFPjNgRXVnDDhnddgzuQRF27bJwpw-ypG" alt="В ЕС оценили возможные потери Украины в войне среди ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Европейской комиссии оценили потери украинских военных в войне с РФ в 100 тысяч человек, а гражданских в 20 000.</p></div>
            </div>
        </a><a href='https://eadaily.com/ru/news/2022/11/30/zayavlenie-glavy-ek-o-bolshih-poteryah-ukrainy-vzorvalo-kiev-cifry-pereputany'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Заявление главы ЕК о больших потерях Украины взорвало Киев ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRWRRixkHSA9_zvDDWWPEigSO17vBSk3SOYonhgJZ1jIbmPxLaVZEklE0Wik3JcVJe56W5vp-H-" alt="Заявление главы ЕК о больших потерях Украины взорвало Киев ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По оценкам Евросоюза потери Украины с начала специальной военной операции (СВО) составили свыше 100 тыс. военных и более 20 тыс. гражданских лиц.</p></div>
            </div>
        </a><a href='https://oboz.info/evrokomissiya-priznala-chto-poteri-ukrainy-s-nachala-svo-sostavili-uzhe-svyshe-100-tysyach-voennyh/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Еврокомиссия признала, что потери Украины с начала СВО ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRsjiLCec17Lzx-JDb3Liau1zFemwULtmOIidRkr0kMKHpddeB5CgBtzPgtwyprRaMDKyvBQqPb" alt="Еврокомиссия признала, что потери Украины с начала СВО ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Еврокомиссия оценила размер колоссальных потерь украинских вооруженных сил с начала специальной военной операции, которую проводит Россия. По официальным,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}