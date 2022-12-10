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
        </a><a href='https://newizv.ru/news/culture/09-12-2022/pevitsa-selin-dion-zayavila-chto-neizlechimo-bolna-sindrom-zhestkogo-cheloveka'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Селин Дион заявила, что неизлечимо больна синдромом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRdWlNBqds8XRcGXxBGZHjhpm-qvelL58AUqCVYd1-iYgCurDL8zf_Ry8mooIqLbuMtBMdq-OTB" alt="Селин Дион заявила, что неизлечимо больна синдромом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Знаменитая канадская певица, автор песен, композитор и актриса Селин Дион объявила, что врачи диагностировано у нее редкое и неизлечимое неврологическое&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5708613'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Селин Дион выявили редчайшее неврологическое ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTTZtjLkFj6acJxwHzjmg2Dcj6FFCFJSD8AIigGy1Jhb_Mh6bKzcRZOGvsLNmoRYom3G2GIxh_Q" alt="У Селин Дион выявили редчайшее неврологическое ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Канадская певица Селин Дион сообщила, что страдает редким неврологическим расстройством — синдромом мышечной скованности. Об этом она рассказал в своем&nbsp;...</p></div>
            </div>
        </a><a href='https://dni.ru/showbiz/2022/12/9/514290.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Певице Селин Дион диагностировали неизлечимое заболевание</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTfOaSFfA2v_YIG6t-C1YWGA9PVIAAg8FI4adVt3g970QC1BAK7ZdEdq8dHLuMAPt8l53ka-s4T" alt="Певице Селин Дион диагностировали неизлечимое заболевание" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В личном блоге певица сообщила, что ей диагностировали неизлечимое неврологическое заболевание. Как сообщает телеканал.</p></div>
            </div>
        </a><a href='https://tolknews.ru/obsestvo/136181-chto-za-zabolevanie-diagnostirovali-u-pevitsi-selin-dion'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Что за заболевание диагностировали у певицы Селин Дион ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSzorT570AkeCt2XCbC6vNTdXRSD41ykKlGVpkcBz5_HPDAdzuk_8oGppHXwL11vGBQ0kCqnNdu" alt="Что за заболевание диагностировали у певицы Селин Дион ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>О проблемах исполнительницы со здоровьем впервые стало известно в январе этого года, когда артистка отменила свое турне Courage по Северной Америке.</p></div>
            </div>
        </a><a href='https://www.soyuz.ru/news/23590'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Селин Дион обнаружили неизлечимую неврологическую ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTPjX87s0HTLs44a58wUOlnfcPoXZxwwGEKLzui7SRc0CjehsfvxDsBFahjfhoI4N5zS-ZtulvV" alt="У Селин Дион обнаружили неизлечимую неврологическую ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Селин Дион рассказала, что ей диагностировали синдром мышечной скованности. Его также называют синдромом ригидного человека – это редкое неврологическое&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}