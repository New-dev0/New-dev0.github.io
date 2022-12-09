import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Селин Дион</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Селин Дион"/>
        <meta name="description" content="Trending News about Селин Дион" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Селин Дион</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_russian/10F7C/production/_127900596_gettyimages-686513352.jpg" alt="Селин Дион"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/russian/news-63910481'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Неизлечимая болезнь Селин Дион: почему певица отменила тур ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTfiM9Tmitv7Rmg3ywWATn2IP0oR7GoXyCZtdFCSKayzv64YY_bnjb52bnJVzIaAfsxaAirPy7h" alt="Неизлечимая болезнь Селин Дион: почему певица отменила тур ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Подпишитесь на нашу рассылку ”Контекст”: она поможет вам разобраться в событиях. Celine Dion. Автор фото, Getty Images.</p></div>
            </div>
        </a><a href='https://www.forbes.ru/forbes-woman/482235-u-pevicy-selin-dion-diagnostirovali-sindromom-mysecnoj-skovannosti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У певицы Селин Дион диагностировали синдромом мышечной ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQvivOPcY6saA2dJ0jYD9pcZUaFTLnwPpmBqKEQ8VXmJZmRUmQguDxqpRKWpVA83pQHm_Z6RGem" alt="У певицы Селин Дион диагностировали синдромом мышечной ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Певица Селин Дион отменила концерты в Великобритании и Европе в следующем году, рассказав, что у нее был диагностирован синдром мышечной скованности.</p></div>
            </div>
        </a><a href='https://spbdnevnik.ru/news/2022-12-08/vrachi-postavili-neuteshitelnyy-diagnoz-u-selin-dion-redkoe-neizlechimoe-zabolevanie'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Врачи поставили неутешительный диагноз: у Селин Дион ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR-m3SXvTBzMvMfezoOzSnuS4VeJiYgtYolM6bpDe3bu56Gh7QQrHEsKjsmnh7mpK0jzNcoyYVi" alt="Врачи поставили неутешительный диагноз: у Селин Дион ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Всемирно известная певица, 54-летняя Селин Дион, узнала о страшном диагнозе. У нее диагностировали синдром мышечной скованности. С этим недугом знаменитость&nbsp;...</p></div>
            </div>
        </a><a href='https://www.starhit.ru/novosti/u-selin-dion-vyyavili-redkoe-neizlechimoe-zabolevanie-854075/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Селин Дион выявили редкое неизлечимое заболевание</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRVNde7RjSfAaPPNA10-ulHFmacjDWdZen90B5j38FHL3N-ZdhW28-9a2t5QveNz1l7y3hw9PxB" alt="У Селин Дион выявили редкое неизлечимое заболевание" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Селин Дион в личных соцсетях выступила с обращением, в котором рассказал о тяжелом недуге. Теперь ей придется отменить все ближайшие гастроли и лечиться у&nbsp;...</p></div>
            </div>
        </a><a href='https://www.interfax.ru/world/876027'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Селин Дион отменила концерты из-за неизлечимого заболевания</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRHvIUoev3hVRUu6ZK1nKcYBfL1o1u5SHG0sHNjddaTxahPh_7Jqcc0cb6WFslmQY_z95qRKaf8" alt="Селин Дион отменила концерты из-за неизлечимого заболевания" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Москва. 8 декабря. INTERFAX.RU - Канадская певица Селин Дион отменит февральское турне по Европе из-за проблем со здоровьем, передает CNN.</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5708613'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Селин Дион выявили редчайшее неврологическое ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRuI_q7ySgM3r5zzBu5ksL7YWCIJUeBypNHAm9l4HHj1Ntqjd8qXKOVWv1sw9GSf1e25oP1lxSP" alt="У Селин Дион выявили редчайшее неврологическое ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Канадская певица Селин Дион сообщила, что страдает редким неврологическим расстройством — синдромом мышечной скованности. Об этом она рассказал в своем&nbsp;...</p></div>
            </div>
        </a><a href='https://klops.ru/news/2022-12-08/262626-odno-na-million-u-pevitsy-selin-dion-diagnostirovali-redkoe-i-neizlechimoe-nevrologicheskoe-zabolevanie'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Одно на миллион: у певицы Селин Дион диагностировали ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTPjX87s0HTLs44a58wUOlnfcPoXZxwwGEKLzui7SRc0CjehsfvxDsBFahjfhoI4N5zS-ZtulvV" alt="Одно на миллион: у певицы Селин Дион диагностировали ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«У меня уже давно проблемы со здоровьем. Мне было очень трудно столкнуться с ними и рассказать обо всём, через что я прошла. Недавно у меня диагностировали&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}