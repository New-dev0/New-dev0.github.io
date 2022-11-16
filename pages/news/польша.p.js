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
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/d/s/dscf1933_id85289_1300x867_3_1300x820.jpg" alt="Польша"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/polshcha-pid-udarom-shcho-vidbuvaetsya-krayini-1668557302.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Польша под ударом? Что происходит в стране и будет ли ответ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRPpKFcXVoDaoRBbew_W4uuqBCyfT-wrmPrLqijU63iLnS_2Vg6_OadCcnSSqS2tN4D31ZH5B9C" alt="Польша под ударом? Что происходит в стране и будет ли ответ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Польша обсудит с другими членами НАТО ракетный обстрел своей территории. Власти говорят о том, что ракета – российского производства.</p></div>
            </div>
        </a><a href='https://www.eurointegration.com.ua/rus/news/2022/11/16/7150722/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Польша пригласила международных экспертов для ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTDnsIsRBACJZODoXx9RX_lGcznlWBFYjVRns03AmzW5biOo2gkacgnjJYDWxlHqm_xQilLezcV" alt="Польша пригласила международных экспертов для ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Премьер-министр Польши Матеуш Моравецкий после специального заседания правительства в связи со взрывами у границы с Украиной объявил, что Варшава перевела в&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/16/7376531/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Польше подтвердили, что на ее территорию упала российская ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQV6DvmXeqNpirZAeGLTX4VFzkJH9m95ycDFIOVpNFDicNlsaJJCLjyOzqEebfLYvhUQZnOdh06" alt="В Польше подтвердили, что на ее территорию упала российская ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Министерство иностранных дел Польши заявило, что на территорию страны во второй половине дня во вторник упала ракета российского производства.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/15/7376520/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Польша повышает боеготовность войска после взрывов из-за ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRrXqpUJFdon1_gSdBj__JqEpBv08Gh4q4jhfTf_G0My6h6aGgLDkr6xRuNP6TlUFm6vNFwHrG5" alt="Польша повышает боеготовность войска после взрывов из-за ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Правительство Польши приняло решение повысить боеготовность войска после взрыва вблизи границы с Украиной, вероятно, вызванного падением российских ракет.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/16/7376539/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Взрывы в Польше: Байден назвал &quot;маловероятным&quot; запуск ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ6G__U_qsAf10tXY8RXTj3i-Vq5zxCvcd1DxNA9YI9IpyMzOEn24bNuovCfjnJjTKnhn0FviCb" alt="Взрывы в Польше: Байден назвал &quot;маловероятным&quot; запуск ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Штатов Джо Байден назвал &quot;маловероятным&quot; то, что ракета, которая привела к взрывам и гибели людей в Польше, была выпущена из России.</p></div>
            </div>
        </a><a href='https://delo.ua/ru/politics/polsa-rassmotrit-vozmoznost-primeneniya-stati-4-ustava-nato-cerez-prilet-rossiiskix-raket-406917/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Польша рассмотрит возможность применения статьи 4 устава ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQkjHxGQFyFRYuB71OvOs9RS9o1V4AFWn0XlF5oCZrOZtob7u00Bx55NSNOmd9jsV4BVqAFMTI6" alt="Польша рассмотрит возможность применения статьи 4 устава ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Об этом сообщил представитель правительства Петр Мюллер, передает польское издание Polsat News. UA. Мы продолжаем сражаться с оккупантом на информационном&nbsp;...</p></div>
            </div>
        </a><a href='https://zn.ua/WORLD/na-territoriju-polshi-upali-rossijskie-rakety-mid-polshi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На территорию Польши упали российские ракеты — МИД Польши</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTA0CD5du6-Rl2m2TWG5eWvxQJL0pzer1RY959SOrA4qlKqYBykw32XJLegfhl_E-VIUTW-hKtI" alt="На территорию Польши упали российские ракеты — МИД Польши" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В МИД Польши подтвердили, что взрывы в Пшеводове произошли именно в результате прилета ракет российского производства.</p></div>
            </div>
        </a><a href='https://www.bbc.com/russian/news-63641684'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>СМИ сообщают, что российские ракеты упали в Польше, около ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQhkSE4xUppBQv14S67T0hzA-BB-a2lqgc1t-quul_7SOKyvSaozDfjo2jzG4qcKYTPqKVZwYP7" alt="СМИ сообщают, что российские ракеты упали в Польше, около ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Польское правительство провело срочное заседание после сообщений СМИ о том, что на территории Польши, неподалеку от границы с Украиной, во вторник упали две&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}