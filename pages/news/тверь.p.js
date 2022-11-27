import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Тверь</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Тверь"/>
        <meta name="description" content="Trending News about Тверь" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Тверь</h1>
            <Image width={800} height={500} src="https://focus.ua/static/storage/thumbs/1200x630/f/4c/944e1835-5dd39d98ce141a05cfe7ed09896694cf.jpg?v=6094_1" alt="Тверь"/>
            <h3>Recent News</h3>
            <a href='https://focus.ua/world/538573-v-tverskoy-oblasti-rf-zametili-kolonnu-voennoy-tehniki-s-flagami-ukrainy-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Тверской области РФ заметили колонну военной техники с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQAXlSAxV6lA2wxEN20JNQyuDbnLZKAfSo2M4dLG68n2YRojvDHOwgPX-lQ_G6VXvEYc_fltI0H" alt="В Тверской области РФ заметили колонну военной техники с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Полицейские, которое сопровождали колонну, сообщили встревоженным горожанам, что &quot;снимают кино&quot;. Related video. В России, в Тверской области местные жители&nbsp;...</p></div>
            </div>
        </a><a href='https://telegraf.com.ua/novosti-rossii/2022-11-26/5724154-boyova-tekhnika-zsu-u-tveri-zyomki-propagandistskogo-kino-viklikali-furor-u-merezhi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Боевая техника ВСУ в Твери: съемки пропагандистского кино ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSTyvXmw-L8tR9bLjoedbgXG8AKzPSLkSuX1fsIgvJ2zU9PAlhiqwgg9u7CYiuy89anCBH2b2vJ" alt="Боевая техника ВСУ в Твери: съемки пропагандистского кино ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В российской Твери, что неподалеку от Москвы, была замечена боевая техника с украинскими флагами, которая знатно напугала местных жителей.</p></div>
            </div>
        </a><a href='https://news.obozrevatel.com/russia/v-tverskoj-oblasti-rf-zametili-kolonnu-voennoj-tehniki-s-ukrainskimi-flagami-govoryat-chto-snimayut-kino-video.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Тверской области РФ заметили колонну военной техники с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSQru9Vc_PuSZeHRP0vMqhOU3plELHPnJCNjA5rmkQ_xGKZ5IlmT6fYxF6VqIIgMS3C3XFVEmuQ" alt="В Тверской области РФ заметили колонну военной техники с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Кроме того, колонна двигалась в сопровождении полицейских машин. К слову, именно силовики объяснили происходящее. По словам российских полицейских, военная&nbsp;...</p></div>
            </div>
        </a><a href='https://fedpress.ru/news/69/society/3148879'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Власти Твери объяснили появление на улицах города военной ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSClgOLecniN_bdXN8CIvw8c8NXXNDW_-klfvKuHPBzEagXpDNKhY8GIdO3Ktl7l31PNzuaUk1m" alt="Власти Твери объяснили появление на улицах города военной ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В администрации города Тверь прокомментировали появление на городских улицах военной техники с флагами Украины пишет, ФедералПресс.</p></div>
            </div>
        </a><a href='https://media.az/world/1067886009/na-ulicah-tveri-poyavilas-voennaya-tehnika-s-ukrainskimi-flagami-video/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На улицах российского города Тверь появилась военная техника ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTDNoH4wYw_aAp3XdGXDlkVHofDFwmrnSxAkgP_t9JOzvB1CM1CjKx90oEyvwS0M8gfZp6lHpmI" alt="На улицах российского города Тверь появилась военная техника ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Появление военной техники с флагами Украины в сопровождении машин ДПС на центральных улицах Твери попало н.</p></div>
            </div>
        </a><a href='https://tverigrad.ru/publication/voennaja-tehnika-s-inostrannymi-flagami-v-tveri-okazalas-jelementom-filma/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Военная техника с иностранными флагами в Твери оказалась ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQr7H4YbAwj9v0O1VxF0kmOtsCbZO9QDqeSVT2tBsD3iFLNoz1_J9O-d3eAkNyJ9FPOHCOy609z" alt="Военная техника с иностранными флагами в Твери оказалась ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Также порталу Tverigrad.ru удалось добыть прокатное удостоверение фильма, так что теперь можно не переживать. Насколько нам известно, в фильм снимается при&nbsp;...</p></div>
            </div>
        </a><a href='https://ria-m.tv/news/304877/v_rossiyskoy_tveri_poyavilas_voennaya_tehnika_s_ukrainskimi_flagami_chto_proishodit_(video).html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В российской Твери появилась военная техника с украинскими ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSAdqHdeL3c7SCO8S0GlRGGZwhbpqcKkXfYQy2UAHm-na_HR_D0tYbQVJ4j-aiNRTTk8TLSTkpb" alt="В российской Твери появилась военная техника с украинскими ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Испуганные жители российского города, расположенного в каких-то 180 км от Москвы, публикуют видео колонны &quot;украинских войск&quot;.</p></div>
            </div>
        </a>
        </Template></>;
}