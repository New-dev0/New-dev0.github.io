import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>США</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,США"/>
        <meta name="description" content="Trending News about США" /></Head><Template>
            <h1 style={{fontSize: "30"}}>США</h1>
            <Image width={800} height={500} src="https://img.tsn.ua/cached/856/tsn-90ef87392779da7417a975ee734335dc/thumbs/1200x630/af/f2/092cfa5f70814ab3be4899164cb4f2af.jpeg" alt="США"/>
            <h3>Recent News</h3>
            <a href='https://tsn.ua/dopomoga/ssha-rozmirkovuyut-nad-znachnim-rozshirennyam-masshtabiv-boyovoyi-pidgotovki-zsu-cnn-2213590.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США розмірковують над значним розширенням масштабів ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRvbU1Pp5ZFovN8L55CfLniOBpVdwdOoSQLgvCCr7HB0PDttmmgp4rxeG68gsckwmvHO1hVYMZ9" alt="США розмірковують над значним розширенням масштабів ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>США хочуть навчати на базі у Німеччині до 2500 військових ЗСУ. Адміністрація президента США розмірковує над розширенням масштабів підготовки воїнів Збройних&nbsp;...</p></div>
            </div>
        </a><a href='https://www.radiosvoboda.org/a/news-pol-vilan-rosia-ssha/32156138.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У США занепокоєні долею Пола Вілана. Його госпіталізували в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRzf5D43j5ARW73epyYkKSHPi56YkaotDiJMD9RXEVkdkZBHIoaOPuq641oR-gucM9chOgH_VId" alt="У США занепокоєні долею Пола Вілана. Його госпіталізували в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Раніше родина Пола Вілана заявила, що з 23 листопада не має новин від нього.</p></div>
            </div>
        </a><a href='https://www.radiosvoboda.org/a/news-leveniata-ukrayina-viyna/32156148.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чотирьох осиротілих на війні в Україні левенят перевезли до США</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS7OLSGIQwWdebNlFrQlGPdvfSz6gUeViKVs6SpsQ2cevK58WsdMr3lXRjZPYclOisyblk-MpiM" alt="Чотирьох осиротілих на війні в Україні левенят перевезли до США" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Левенята з іменами Тарас, Стефанія, Леся та Прада віком від чотирьох до п&#39;яти місяців провели останні три тижні в зоопарку в польській Познані, перед тим,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/12/1/7378738/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США можуть значно розширити масштаби бойової підготовки ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT6LUepgc7xRiLLPLa5LVs7P0DGWtq4xAeUxbbEvPjDwOHlCjdjqvV_ZnORonALV7y29RasDQO_" alt="США можуть значно розширити масштаби бойової підготовки ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Адміністрація Байдена розглядає можливість значного розширення підготовки українських військових на американській базі в Німеччині, зокрема йдеться про&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/12/1/7378738/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США могут значительно расширить масштабы боевой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT6LUepgc7xRiLLPLa5LVs7P0DGWtq4xAeUxbbEvPjDwOHlCjdjqvV_ZnORonALV7y29RasDQO_" alt="США могут значительно расширить масштабы боевой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>США могут значительно расширить масштабы боевой подготовки ВСУ – CNN ... Администрация Байдена рассматривает возможность значительного расширения подготовки&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/30/7378660/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США и союзники создают координационную группу для ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcStaCsF_aK_QYD0oq0QGb43PXpuMMsgTDvjpp_nsVbZaSkLRDwF9Au_162TR_Sox24-Dc3J2BN2" alt="США и союзники создают координационную группу для ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Источник: госсекретарь США Энтони Блинкен после встречи с коллегами по НАТО в Бухаресте, &quot;Радио Свобода&quot; со ссылкой на &quot;France-Presse&quot; &middot; Детали: &middot; Прямая речь&nbsp;...</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/dopomoga/ssha-dumayut-nad-znachitelnym-rasshireniem-masshtabov-boevoy-podgotovki-vsu-cnn-2213590.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США думают над значительным расширением масштабов ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRvbU1Pp5ZFovN8L55CfLniOBpVdwdOoSQLgvCCr7HB0PDttmmgp4rxeG68gsckwmvHO1hVYMZ9" alt="США думают над значительным расширением масштабов ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Администрация президента США раздумывает о расширении масштабов подготовки воинов Вооруженных сил Украины на своей военной базе на территории Германии.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/komoga-shvidshe-ta-efektivnishe-ssha-zoseredzheni-1669818533.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Как можно быстрее и эффективнее. США сосредоточены на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS1c62bwybYeNuKU0gE0_LEG9HvF_BSr5RpW0VfXA9n9xP0hoEIk6NnOVkrtvj3aV-gunozI8Gc" alt="Как можно быстрее и эффективнее. США сосредоточены на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Об этом пишет РБК-Украина со ссылкой на CNN. По словам Блинкена, США работают над тем, чтобы Украина получила как можно быстрее системы ПВО, а ВСУ прошли&nbsp;...</p></div>
            </div>
        </a><a href='https://ru.interfax.com.ua/news/general/875573.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Блинкен подтвердил готовность США предоставлять Украине ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT94d5RPnOWsbfWaC3qSrC3Qy13Dm47M8HqdlJAipWOWJLyA-A5iaICkPcmuIOBaRw0GLrEahHW" alt="Блинкен подтвердил готовность США предоставлять Украине ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Госсекретарь США Энтони Блинкен в среду подтвердил главе МИД Украины Дмитрию Кулебе готовность США предоставлять Киеву системы ПВО, говорится в заявлении&nbsp;...</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/zbroya/ssha-zaklyuchili-kontrakt-na-1-2-mlrd-s-raytheon-na-proizvodstvo-shesti-kompleksov-nasams-dlya-ukrainy-2213581.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США заключили контракт на $1,2 млрд с Raytheon на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTMLUQr1Kv1Zzvmpu1EYa4N1Jm933MWTbiTm_BSwU9Sm7qAc-6jIya0TEd2js9vg6GP4PtE1BjS" alt="США заключили контракт на $1,2 млрд с Raytheon на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Министерство обороны США заключило контракт на сумму $1,2 млрд с Raytheon Technologies на производство для Украины шести ЗРК NASAMS.</p></div>
            </div>
        </a>
        </Template></>;
}