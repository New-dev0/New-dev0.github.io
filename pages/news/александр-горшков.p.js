import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Александр Горшков</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Александр Горшков"/>
        <meta name="description" content="Trending News about Александр Горшков" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Александр Горшков</h1>
            <Image width={800} height={500} src="https://n1s1.hsmedia.ru/8d/ad/6a/8dad6ab6c3c7976b61114d3c32c2f60f/1200x630_0xac120003_12341259431668883221.png" alt="Александр Горшков"/>
            <h3>Recent News</h3>
            <a href='https://www.starhit.ru/novosti/proshanie-s-legendarnym-figuristom-aleksandrom-gorshkovym-pryamoi-efir-849883/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Прощание с легендарным фигуристом Александром Горшковым ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQNXxTU9OBN_5wHd6qNLLIRs51fF7Eu-9-ByLJErHwpEsbKvdZBZudi0OD9sKW1brxCkhN8025X" alt="Прощание с легендарным фигуристом Александром Горшковым ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>17 ноября не стало легендарного российского фигуриста, президента Федерации фигурного катания России Александра Горшкова. Прощание с ним проходит сейчас на&nbsp;...</p></div>
            </div>
        </a><a href='https://sport24.ru/news/figureskating/2022-11-20-figurnoye-kataniye-aleksandr-gorshkov-umer-ot-infarkta-miokarda-proshchaniye-s-aleksandrom-gorshkovym-v-luzhnikakh-tarasova-rodnina-navka-shcherbakova-valiyeva-foto'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мир фигурного катания простился с президентом ФФККР ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTZINqHlZ4IuOZfeFPbN8EpDDAamFGCR0X9uI9nb-4gKlTqviv5KIYUIe1ZWQs_WwHvhCqE7Lp7" alt="Мир фигурного катания простился с президентом ФФККР ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Церемонию провели в «Лужниках». 17 ноября из-за инфаркта миокарда скоропостижно ушел из жизни Александр Горшков. Вся жизнь Горшкова была связана с фигурным&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/figure-skating/reviews/figurnoe-katanie-kak-proshla-ceremoniya-proschaniya-s-aleksandrom-gorshkovym-v-luzhnikah-kto-ee-posetil-2000600/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Будем помнить о его заветах, чтобы мы побеждали на мировых ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRJImVWJGqsxv3aXhoU_I2y1mfH3ZyW5wpVOjNSDcwtY6qRmfUFMkySwhqSbgHL472QWLsfooQk" alt="«Будем помнить о его заветах, чтобы мы побеждали на мировых ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Церемонию в «Лужниках» посетили олимпийские чемпионы разных лет — в том числе Камила Валиева, Анна Щербакова и Татьяна Навка. В Москве в воскресенье днем&nbsp;...</p></div>
            </div>
        </a><a href='https://matchtv.ru/figure-skating/matchtvnews_NI1726548_Aleksandr_Zhukov_S_imenem_i_rabotoj_Gorshkova_svazan_vzlet_nashih_figuristov_V_etom_jego_ogromnaja_zasluga'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Александр Жуков: «С именем и работой Горшкова связан взлет ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQsl00DvMKJdfC0MQ4KDb_wU1gP4S7m_uHIlDNmSTTUezzTo0Ye486AY2PrqsoDQRq0BPOkEkTk" alt="Александр Жуков: «С именем и работой Горшкова связан взлет ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Почетный президент Олимпийского комитета России Александр Жуков заявил, что президент Федерации фигурного катания на коньках России (ФФККР) Александр&nbsp;...</p></div>
            </div>
        </a><a href='https://spbdnevnik.ru/news/2022-11-20/v-moskve-prostilis-s-olimpiyskim-chempionom-v-tantsah-na-ldu-aleksandrom-gorshkovym'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Москве простились с олимпийским чемпионом в танцах на льду ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQGlrVWq0xC_7fzNHgclMU8fXsbQE8ngHfCJjQLspSzfr4920cMdzjdOFARptZpPucTExIW7l9_" alt="В Москве простились с олимпийским чемпионом в танцах на льду ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В этом печальном мероприятии, которое прошло на Малой спортивной арене в «Лужниках», приняли участие министр спорта России Олег Матыцин, президент Олимпийского&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bfm.ru/news/513359'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Москве простились с легендарным фигуристом Александром ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="В Москве простились с легендарным фигуристом Александром ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Церемония прощания с олимпийским чемпионом в танцах на льду Александром Горшковым прошла в Москве 20 ноября. Об этом сообщает Shot. Проводить спортсмена и&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}