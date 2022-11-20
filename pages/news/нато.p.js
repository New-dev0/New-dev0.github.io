import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>НАТО</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,НАТО"/>
        <meta name="description" content="Trending News about НАТО" /></Head><Template>
            <h1 style={{fontSize: "30"}}>НАТО</h1>
            <Image width={800} height={500} src="https://online47.ru/media/photo/article/__159559.jpg" alt="НАТО"/>
            <h3>Recent News</h3>
            <a href='https://online47.ru/2022/11/19/shef-pentagona-ostin-nato-ne-ishchet-konfrontatsii-s-rf-no-prodolzhit-pomogat-ukraine-168858'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Шеф Пентагона Остин: НАТО не ищет конфронтации с РФ, но ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQNKFjSIxLt4-FYvO35KP3A4m7XazMD2rrDqVZ2kH1JQiYLUg-8hIh1DLECi55wwZSZcf0Ym03" alt="Шеф Пентагона Остин: НАТО не ищет конфронтации с РФ, но ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;НАТО — это оборонительный альянс&quot;, - подчеркнул Остин.</p></div>
            </div>
        </a><a href='https://online47.ru/2022/11/19/evrensel-protiv-atakovavshey-polshu-ukrainy-sledovalo-primenit-pyatuyu-statyu-ustava-nato-168815'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Evrensel: против атаковавшей Польшу Украины следовало ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRkVcHTf-bAJAqSPdkXlgU8BQAoufb-WK7A2My93KMdFDOQ04vTAWhg-50RYRS8Vii8PiKVB3Md" alt="Evrensel: против атаковавшей Польшу Украины следовало ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Однако ожидать подобных действий НАТО нереалистично&quot;, — считает эксперт. Североатлантическому альянсу следовало применить против Украины вооруженные силы&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5679272'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В НАТО назвали небезопасным облет кораблей российскими ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="В НАТО назвали небезопасным облет кораблей российскими ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В НАТО заявили, что облет их кораблей в Балтийском море со стороны российских летчиков был небезопасным и непрофессиональным. Заявление об этом опубликовано&nbsp;...</p></div>
            </div>
        </a><a href='https://www.golosameriki.com/a/nato-says-russian-jets-conduct-unsafe-baltic-ship-overflight/6841000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Российские самолеты совершили «небезопасный» облет ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTd579_WHO7FCTVIa62PBVFwY4CQ7vYO6ECDmuv25D_hqIQUpkzH2SXkDnYg68ZI_9-EYyRO02y" alt="Российские самолеты совершили «небезопасный» облет ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Два российских истребителя приблизились к кораблям альянса на небезопасное расстояние от 73 до 91 метра.</p></div>
            </div>
        </a><a href='https://www.rosbalt.ru/world/2022/11/19/1979250.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Глава Пентагона заявил, что НАТО не ищет конфликта с РФ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-FS1XB4WY0ceEOpq3PifPj_DK17hxYnSQxxL7sb5gaQ_hJBFlwrNDp2ZXwguaoQI-AYq2D6Ol" alt="Глава Пентагона заявил, что НАТО не ищет конфликта с РФ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Шеф Пентагона Ллойд Остин заявил, что НАТО не ищет конфликта с РФ. Как передает «РИА Новости», об этом Остин заявил, выступая на конференции в Канаде. «НАТ.</p></div>
            </div>
        </a><a href='https://newprospect.ru/news/aktualno-segodnya/smi-nato-dolzhna-byla-primenit-statyu-5-ustava-protiv-ukrainy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>СМИ: НАТО должна была применить статью 5 устава против ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="СМИ: НАТО должна была применить статью 5 устава против ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В ответ на инцидент с падением украинской ракеты на территории Польши блок НАТО должен был задействовать статью 5 своего устава, пишет в колонке для&nbsp;...</p></div>
            </div>
        </a><a href='https://www.m24.ru/news/politika/19112022/523034'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Пентагоне заявили, что НАТО не ищет конфликта с Россией</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR78dmL3xPaEDmCeZ7nflu2-4INePR_vvtnzzbY-qsSlc3mco6k6bkRfqR9_anklVTyCeKPFxy6" alt="В Пентагоне заявили, что НАТО не ищет конфликта с Россией" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>При этом Остин подчеркнул, что США продолжат оказывать помощь Украине. Конфликт на территории страны он назвал крупнейшим кризисом безопасности с момента&nbsp;...</p></div>
            </div>
        </a><a href='https://www.golosameriki.com/a/6840984.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тест на кризис-менеджмент в НАТО. Итоги с Юлией Савченко</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTB-eAz0nnNSMXPxSScrpByx2QS6syK5dao1WpxMoai-PTsjW3URCqippl4miZbpT7Jlpq-KYtE" alt="Тест на кризис-менеджмент в НАТО. Итоги с Юлией Савченко" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Баллистический накал: могла ли по ошибке начаться третья мировая из-за ракеты, упавшей в Польше? //Херсон - начало конца? Надежды Зеленского на мир,&nbsp;...</p></div>
            </div>
        </a><a href='https://life.ru/p/1540134'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пентагон: НАТО не ищет конфронтации с Россией и не будет ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQxETGI6TYuForSJBwWdkDvHnOwZGJqOQQ9KxL6GT8kI95_19WXki3ydyk7kVVeMnqHK-0GrLNx" alt="Пентагон: НАТО не ищет конфронтации с Россией и не будет ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Глава Пентагона Ллойд Остин заявил на ежегодном форуме по безопасности в Галифаксе, что НАТО якобы не ищет конфликта с Россией. По его словам, тем не менее&nbsp;...</p></div>
            </div>
        </a><a href='https://ura.news/news/1052604406'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Министр обороны США: НАТО не хочет конфликта с Россией</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSaxTJwnW0Yruv0ctShy0scfEiN00xicrj2vXeQ37aG2XGEalKlPTq-xwgbOzI56e1cHZ2C-571" alt="Министр обороны США: НАТО не хочет конфликта с Россией" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>НАТО является оборонительным альянсом и не хочет столкновения с Россией. Об этом сообщил глава Пентагона Ллойд Остин. Только на URA.RU.</p></div>
            </div>
        </a>
        </Template></>;
}