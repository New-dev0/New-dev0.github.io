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
            <Image width={800} height={500} src="https://s0.rbk.ru/v6_top_pics/media/img/8/12/756686661059128.jpg" alt="Александр Горшков"/>
            <h3>Recent News</h3>
            <a href='https://sportrbc.ru/news/6375d1fe9a794719eb3baeb6'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Умер первый олимпийский чемпион в танцах на льду Горшков</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTiaRUW2cvg2P6b5fsX6MSeLF_CEMq6udEr9kZb2KiInxQjLN-ct_IkI6dyVnaSApClFch9Pwx4" alt="Умер первый олимпийский чемпион в танцах на льду Горшков" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Александр Горшков скончался в возрасте 76 лет. Он возглавлял ФФККР с июня 2010 года. Горшков был первым в истории олимпийским чемпионом в танцах на льду.</p></div>
            </div>
        </a><a href='https://www.championat.com/figureskating/article-4894389-ushyol-iz-zhizni-legendarnyj-figurist-i-glava-ffkkr-aleksandr-gorshkov-vspominaem-velikuyu-istoriyu-ego-zhizni.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«В моём понимании руководить — это помогать». Умер великий ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSZ9D2UTdzyxwsJec4poCw52LuZq2uusAFlf03btIb-5rK6LIdI0_WuVmLA4YX-tLRyoGRX32S9" alt="«В моём понимании руководить — это помогать». Умер великий ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Александр Георгиевич жил фигурным катанием до последнего дня своей жизни.</p></div>
            </div>
        </a><a href='https://snob.ru/sport/pervyj-v-mire-kakim-byl-prezident-federacii-figurnogo-kataniya-aleksandr-gorshkov/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Первый в мире: каким был президент Федерации фигурного ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTvQudUnfKMyyMwu8avzRkXxEl-rDI__B_sZTuwwlrL01iFwZ-3LT0SKKEqUWMiTUPEuIu8hX_0" alt="Первый в мире: каким был президент Федерации фигурного ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В возрасте 76 лет умер первый олимпийский чемпион в танцах на льду Александр Горшков. Последние 12 лет он возглавлял ФФККР. Рассказываем, как складывалась&nbsp;...</p></div>
            </div>
        </a><a href='https://www.svoboda.org/a/umer-figurist-olimpiyskiy-chempion-aleksandr-gorshkov-/32134760.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Умер фигурист, олимпийский чемпион Александр Горшков</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRtxfV4cWM8xPj2jDT2ww5Uu-hD1OBnWm7sVQlpxk9BzEQXJ5rCGPFN9lLYGfpMvNA0z6EzvVGZ" alt="Умер фигурист, олимпийский чемпион Александр Горшков" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Он стал победителем на Играх в Инсбруке в 1976 году в паре с Людмилой Пахомовой.</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5669469'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Танцор номер один</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTt8bjLKGkdcl-k68wCgIWWGH89jJEL21t3I6_CBVNfi2ck7OMDBipB1o3NfEYXMQ7x0voZAR7n" alt="Танцор номер один" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На 77-м году скоропостижно скончался Александр Горшков. В 1970-е в паре с Людмилой Пахомовой он превратил танцы на льду из почти маргинального жанра в жанр,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sports.ru/football/1113338886-sbornaya-rossii-ne-obygrala-tadzhikistan-umer-aleksandr-gorshkov-ronal.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сборная России не обыграла Таджикистан, умер глава ФФКР ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSq86GnE2NA3G6P5c0UaENYs82x1fQnQuY8ZNpix9cnIf1KYyeQZp_abjVv0_LUbfUcoQRBt60F" alt="Сборная России не обыграла Таджикистан, умер глава ФФКР ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sports.ru - 24 года! Все это время вы — наша главная ценность, поэтому сегодня заголовки на главной заменяются на комментарии. Этот переключатель вернет&nbsp;...</p></div>
            </div>
        </a><a href='https://fakty.ua/ru/410900-umer-legendarnyj-sovetskij-figurist-perezhivshij-lichnuyu-tragediyu-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Умер легендарный советский фигурист, переживший личную ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRffRTB_yLeaP6kx9hAjE27DIIs30lUasl7tshbiur9zuMcO9QcnskYMeNgmKe4cgznvXrzsKZd" alt="Умер легендарный советский фигурист, переживший личную ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Москве ушел из жизни прославленный советский фигурист Александр Горшков, который в паре со своей женой Людмилой Пахомовой был олимпийским чемпионом,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}