import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Риши Сунак</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Риши Сунак"/>
        <meta name="description" content="Trending News about Риши Сунак" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Риши Сунак</h1>
            <Image width={800} height={500} src="" alt="Риши Сунак"/>
            <h3>Recent News</h3>
            <a href='https://suspilne.media/320546-britanskij-premer-priihav-do-kieva/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Ми з вами до кінця&quot;: британський прем&#39;єр приїхав до Києва та ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT2JKupq8FPu81128lAgJCRmuDDvXUNaYeyMxVxIja-nbAA_MMxAfEj0R9pLRG0XFWOeQTZeDCq" alt="&quot;Ми з вами до кінця&quot;: британський прем&#39;єр приїхав до Києва та ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media Прем&#39;єр-міністр Великої Британії Ріші Сунак 19 листопада відвідав Київ та зустрівся з президентом Зеленським. Про це повідомляється на&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/russian/news-63690770'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Британский премьер Риши Сунак посетил Киев и пообещал ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRUSr5b9fccmVJ2f8I7tSLHIDOSLeu7vIX1S5wnIiojLFDXRITFMFEU2ycshm_nYfNeaEoxjmA8" alt="Британский премьер Риши Сунак посетил Киев и пообещал ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Военная помощь включает 125 зенитных орудий и технологии для противодействия ударным беспилотникам, поставленным Ираном, в том числе десятки радаров и&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/19/7377078/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Киев прибыл премьер Британии Риши Сунак</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSS4j9zi2H1bBkk8_KJoeTbADD1hKDJDSbavvIzPmO1hx80xAm57KVJvZ_p_72WS47Yv700imCJ" alt="В Киев прибыл премьер Британии Риши Сунак" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Как пишет &quot;Европейская правда&quot;, видео встречи опубликовал президент Владимир Зеленский. &quot;С первых дней войны Украина и Великобритания были мощными союзниками.</p></div>
            </div>
        </a><a href='https://fakty.com.ua/ua/ukraine/20221119-do-ukrayiny-z-vizytom-prybuv-premyer-ministr-velykoyi-brytaniyi-rishi-sunak/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>До України з візитом прибув прем&#39;єр-міністр Великої Британії ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT87HfDIksvKib4rB-WLGolFWc34vlD2C_49XKqk8I5faWKYQ3P1uBHdZ1HQWpiePb1k5HBUKAG" alt="До України з візитом прибув прем&#39;єр-міністр Великої Британії ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Прем&#39;єр-міністр Великої Британії Ріші Сунак прибув з офіційним візитом до Києва. Подробиці візиту Ріші Сунака в Україну - читайте на Фактах ICTV.</p></div>
            </div>
        </a><a href='https://www.bbc.com/ukrainian/media-63690730'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Мужність українського народу надихає весь світ&quot; - Ріші Сунак ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTOszLjWQtmoB8Gx1MXPu2RrMd1gxDpOJ0XSbitUw8CBR52DvcNT91k6VO644XkcSU8-OEZX5R5" alt="&quot;Мужність українського народу надихає весь світ&quot; - Ріші Сунак ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Обговорили з президентом Зеленським низку питань як для обох країн, так і для глобальної безпеки. Ріші Сунак відзначив мужність українського народу, яка надихає&nbsp;...</p></div>
            </div>
        </a><a href='https://www.golosameriki.com/a/rishi-sunak-kyev-visit-air-defense/6841656.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Риши Сунак: Великобритания предоставит Украине больше ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQvDEx2hC-_BPHXFWzwa_Pgy-ewMHY1siApcsK51ujODK2sxf3dHK5r-aNgZ2aLkLa-a04KT3wf" alt="Риши Сунак: Великобритания предоставит Украине больше ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>125 зенитных орудий и другие средства ПВО будут поставлены в Украину.</p></div>
            </div>
        </a><a href='https://promin.cv.ua/2022/11/19/premier-brytanii-rishi-sunak-prybuv-do-kyieva-i-zustrivsia-iz-prezydentom-ukrainy.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Прем&#39;єр Британії Ріші Сунак прибув до Києва і зустрівся із ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSPhTgWfobfa71sIZr7ztpkxUKFiSyNKr3UdGsk9aTwBWWuJoklXwcRLwCsjsLNi_KTMGMkynHd" alt="Прем&#39;єр Британії Ріші Сунак прибув до Києва і зустрівся із ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У ході зустрічі обговорювалися найважливіші питання як для наших країн, так і для глобальної безпеки, заявив Зеденський В Україну прибув із неоголошеним&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.ua/politics/rishi-sunak-pribuv-v-ukrajinu-shcho-vidomo-novini-kiyeva-12050595.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Британський прем&#39;єр приїхав у Київ та зустрівся із Зеленським ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTULZsN4l1EaC9WBS_Y7cAG7196yucvFRYLcuKUabraFI0jr26tlyOyV_Bg6EiidunHf37MlZsv" alt="Британський прем&#39;єр приїхав у Київ та зустрівся із Зеленським ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Під час перемовин президент та прем&#39;єр обговорили низку актуальних питань.</p></div>
            </div>
        </a><a href='https://focus.ua/uk/politics/537759-moshchnyy-soyuznik-rishi-sunak-posetil-ukrainu-i-vstretilsya-s-vladimirom-zelenskim-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Потужний союзник: Ріші Сунак відвідав Україну та зустрівся з ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRHUtj2BiZD7bBRJkI_7P1nTdFsP8MnMWovBI359Di8YmXubRA_QyJe4PIWXYRANvddxfoIC6ny" alt="Потужний союзник: Ріші Сунак відвідав Україну та зустрівся з ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>За словами Володимира Зеленського, під час зустрічі вдалося обговорити найважливіші питання для України та Великобританії й торкнутися теми глобальної&nbsp;...</p></div>
            </div>
        </a><a href='https://focus.ua/politics/537774-vazhno-imenno-seychas-zelenskiy-i-rishi-sunak-obsudili-priznanie-golodomora-genocidom-ukraincev'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Важно именно сейчас&quot;: Зеленский и Риши Сунак обсудили ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQgFxZcsJUqCWhsIV7Nt9JYS-1C6TtbOLLkL3uut6QwQK4SY5R9XJpRE1xjFivkFWu_s1izKBaQ" alt="&quot;Важно именно сейчас&quot;: Зеленский и Риши Сунак обсудили ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Зеленский акцентировал внимание на том, что в 2022 году Москва вновь совершает геноцид украинского народа.</p></div>
            </div>
        </a>
        </Template></>;
}