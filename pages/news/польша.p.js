import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Польша</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Польша"/>
        <meta name="description" content="Trending News about Польша" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Польша</h1>
            <Image width={800} height={500} src="https://www.m24.ru/b/d/nBkSUhL2hFcunsi2I76BrNOp2Z318Ji-mifGnuWR9mOBdDebBizCnTY8qdJf6ReJ58vU9meMMok3Ee2nhSR6ISeO9G1N_wjJ=ws5baH9ZJD6ngkS1lImm8g.jpg" alt="Польша"/>
            <h3>Recent News</h3>
            <a href='https://www.m24.ru/news/politika/16112022/521820'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Польша пригласила к участию в расследовании падения ракет ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSjvgSW9EPCehaMxMMvXc3a0R500zhhz71A6m9j7ADyYnePdnE-3HARRlQ3LKKuGvMM7RaCGGtA" alt="Польша пригласила к участию в расследовании падения ракет ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По его словам, Польша также попросила о поддержке союзников, с которыми находится в постоянном контакте, передает ТАСС. Ранее радиостанция ZET сообщала, что в&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/russian/news-63641684'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>СМИ сообщают, что российские ракеты упали в Польше, около ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQhkSE4xUppBQv14S67T0hzA-BB-a2lqgc1t-quul_7SOKyvSaozDfjo2jzG4qcKYTPqKVZwYP7" alt="СМИ сообщают, что российские ракеты упали в Польше, около ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Польское правительство провело срочное заседание после сообщений СМИ о том, что на территории Польши, неподалеку от границы с Украиной, во вторник упали две&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5668496'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ракета Польшей пошла</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTElcBgEZOcg2shrFJGkN7NQFHH0VWg01q9rndlQZsgqGnvCdDCPv06fJayc-t5FYlKLP-upiRM" alt="Ракета Польшей пошла" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Военные действия на Украине, похоже, впервые привели к непосредственным трагическим последствиям для страны-члена НАТО и ЕС. Вечером во вторник польские СМИ&nbsp;...</p></div>
            </div>
        </a><a href='https://www.golosameriki.com/a/polish-president-talking-to-biden-now/6835951.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Власти Польши подтвердили российское происхождение ракеты ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRH9nMSe0AxBRtZ5b7S3KOu08Diwjwd1Lg3h14iITPGSetkq9DJQsGrDvo4hmliMMRnNg0x5fp0" alt="Власти Польши подтвердили российское происхождение ракеты ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Состоялся срочный телефонный разговор между президентами США и Польши. Польское министерство иностранных дел поздно вечером во вторник официально&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.ru/society/481183-nato-soberet-svoih-poslov-na-konsul-tacii-iz-za-ugrozy-bezopasnosti-pol-si'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>НАТО соберет послов стран-членов альянса на консультации из ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRlh7jTlPulPGNEeexDN_BQ0YH2UxE7-zKWz16b3po7p8lAqEGmdbEjUp5nLVtulRxVY-Jwwk9" alt="НАТО соберет послов стран-членов альянса на консультации из ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Послы стран-членов НАТО встретятся 16 ноября по просьбе Польши, передает Reuters со ссылкой на источники среди европейских дипломатов.</p></div>
            </div>
        </a><a href='https://vot-tak.tv/novosti/15-11-2022-raketa-w-polsce/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Польше на границе с Украиной, вероятно, упала ракета</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR8BbhIL-0CIGywqNjb6Y-K0GVNmhyLimiyzpJ9OSv-FHoYVxe_JKlONKb8VxkkGFiGZRDWmRD8" alt="В Польше на границе с Украиной, вероятно, упала ракета" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Место возможного падения ракеты. Пшеводув, Люблинское воеводство, Польша. 15 ноября 2022 года. Фото: Twitter. В Польше, в Пшеводове, располагающемся в пяти&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}