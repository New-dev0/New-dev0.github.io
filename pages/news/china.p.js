import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>China</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,China"/>
        <meta name="description" content="Trending News about China" /></Head><Template>
            <h1 style={{fontSize: "30"}}>China</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_news/11CB9/production/_127798827_vigilreuters.jpg" alt="China"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/news/world-asia-63771109'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>China Covid: Protests continue in major cities across the country</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTWHMdXOHwxYWRuSJauYLfEYcK8d_DX2MSl92kp5CPZq5ArBdYj0tg6PNdU-FmVzRMKhOb818IR" alt="China Covid: Protests continue in major cities across the country" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Demonstrators gathered in the capital Beijing and the financial hub Shanghai, as well as Wuhan.</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/world/2022/11/27/china-covid-lockdown-protest-xinjiang/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rare protests against China&#39;s &#39;zero covid&#39; policy erupt across country</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQqMZAqe2yRf2h8WdbO3_JUhw4wjEb3IY5akQ7JAwPa92EH52_FML20Na0QJqMNwWAogfWacKOH" alt="Rare protests against China&#39;s &#39;zero covid&#39; policy erupt across country" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Demonstrations were sparked by accusations that pandemic restrictions had hampered rescuers trying to reach a deadly fire in Xinjiang.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/26/china/china-protests-xinjiang-fire-shanghai-intl-hnk/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Protests erupt across China in unprecedented challenge to Xi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSRl46Oc1KV5vgRW7WKZLijs-ZkqZUt5yOBvtpjvTiD7wfO52MC0aD-TUHu5rr0-2yiz1NhBZfM" alt="Protests erupt across China in unprecedented challenge to Xi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Protests erupted across China throughout the weekend, including at universities and in Shanghai where hundreds chanted &quot;Step down, Xi Jinping!</p></div>
            </div>
        </a><a href='https://www.amnesty.org/en/latest/news/2022/11/china-lockdown-protests-covid/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>China: Government must not detain peaceful protesters as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTAcMOpe727hdQPWXo965NKcK5MI4h4Exqb0KwiMtl9q2nqwZaJlkQ8Ah9EZV4MsSdpnfEbb53T" alt="China: Government must not detain peaceful protesters as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Responding to widespread protests unprecedented in recent years, Amnesty International&#39;s Deputy Regional Director Hana Young said:.</p></div>
            </div>
        </a><a href='https://www.vox.com/2022/11/27/23480144/urumqi-xinjiang-apartment-fire-china-zero-covid-uyghur-xi-jinping-protest'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Protests after an Urumqi apartment fire test China&#39;s zero-Covid ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTt8ga7v_MwTlx0C_RkcdWbCRx9jJk_ValYNs5S3HImAsm5aOVU0ExmcsMPebeV5Cv1JDQc-We3" alt="Protests after an Urumqi apartment fire test China&#39;s zero-Covid ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In cities across China, people are protesting Xi Jinping&#39;s Covid policy — and even demanding his resignation.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/27/briefing/covid-protests-shanghai-china-asia.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Your Monday Briefing: Covid Protests Intensify in China</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQQXcENlFbkcpDYTgj6zp6QJ5ddfqrtvE15rkXriHaTM64-yqyB1vhgx_2MPeBHvKe_J4sHNPZY" alt="Your Monday Briefing: Covid Protests Intensify in China" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Plus World Cup updates, Kiribati&#39;s judicial shake-up and “Gangnam Style,” 10 years later.</p></div>
            </div>
        </a><a href='https://www.bbc.com/mundo/noticias-internacional-63772155'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Las protestas en China se extienden a Pekín y manifestantes piden ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRWeZXuoWX7yriG385VhUo5w9Xn0teZH0XRxQ_87tiPXlSnB0XNbRF8-1jSBtVgPr4L0nkBC6cV" alt="Las protestas en China se extienden a Pekín y manifestantes piden ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>El domingo, el descontento por un incendio que mató a 10 personas en un bloque de apartamentos en Urumqi y que se atribuye al confinamiento, se extendió a&nbsp;...</p></div>
            </div>
        </a><a href='https://santamariatimes.com/espanol/noticias/mundo/china-multitud-harta-de-confinamiento-pide-renuncia-de-xi/article_820d0b85-9b43-5515-9e2a-95564408e864.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>China: Multitud harta de confinamiento pide renuncia de Xi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQZVdJ-L1SvAGGvMsj6m25zSqUnr7iDZQiv3lduAltTLMjsswJthwQ7uEj5XkdzP24mu0uVgP_0" alt="China: Multitud harta de confinamiento pide renuncia de Xi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SHANGHÁI (AP) — Manifestantes enojados por las estrictas medidas contra el virus pidieron la dimisión del presidente de China, un reproche sin precedentes&nbsp;...</p></div>
            </div>
        </a><a href='https://elpais.com/internacional/2022-11-27/las-protestas-contra-las-politicas-de-covid-cero-se-extienden-por-shanghai-y-otras-ciudades-de-china.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Las protestas se extienden en China contra la política de covid cero</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSutMBzvnSN9ownT-qZbmmbelxxass3E3e5hAOVVy6-FVbWbMLWHuc_a51ObQgGrNNoYQxtFBgd" alt="Las protestas se extienden en China contra la política de covid cero" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No queremos PCR, queremos libertad”, son algunas de las proclamas de los manifestantes en Pekín. Concentraciones también en Shanghái, Wuhan, Nanjing, Xi&#39;an,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.univision.com/noticias/mundo/protestas-china-covid-19-xi-jinping'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Miles protestan en China contra el confinamiento y piden la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQRKKhROeIgJ0CmUIeWCDIW0tOmxdORA-DFABWU23gQ49DzYDSmHQ2_UUciiUgvEnT_JWRMjuJU" alt="Miles protestan en China contra el confinamiento y piden la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Las protestas, que han ocurrido en al menos ocho ciudades chinas, comenzaron el viernes y han continuado durante el sábado y domingo, y suponen un reproche&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}