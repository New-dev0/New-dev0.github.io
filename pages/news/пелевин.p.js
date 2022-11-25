import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Пелевин</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Пелевин"/>
        <meta name="description" content="Trending News about Пелевин" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Пелевин</h1>
            <Image width={800} height={500} src="https://mospravda.ru/wp-content/uploads/2022/11/пелевин.jpg" alt="Пелевин"/>
            <h3>Recent News</h3>
            <a href='https://mospravda.ru/2022/11/23/663704/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пелевин и Пустота</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRaAtKIW02Ru3D4wege5j-ay5hIt6OM5lbzcQtaYokpspCm7GBkJd28DjccFjEJ8XpUGiYzNgsX" alt="Пелевин и Пустота" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>К 60-летию главного мистификатора российской литературы Виктора Пелевина вышел новый, авторский документальный фильм Родиона Чепеля о нем.</p></div>
            </div>
        </a><a href='https://www.forbes.ru/forbeslife/481448-model-boga-cto-my-uznaem-o-pelevine-iz-novogo-dokumental-nogo-fil-ma-o-ego-zizni'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Модель бога: что мы узнаем о Пелевине из нового ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSK5seGB7NprEWuN3-IK7GA0Vnfexjfhb63nQJea5Yrak160Q99onPgSip4_y5BnddInAqgmoAJ" alt="Модель бога: что мы узнаем о Пелевине из нового ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В день рождения самого закрытого российского писателя Виктора Пелевина, 22 ноября, онлайн-кинотеатр KION и кинокомпания «Амурские волны» выпускают&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mirf.ru/kino/pelevin-film-chto-uznali/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Что мы узнали из фильма о Викторе Пелевине? | Кино, Обзоры ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRjSQSOc0kDkZnlyJPcEnb-psCbkti-xqvp3HzS0I7SwC9wpzh2MfTNHL29Wpb3XYXHGvVX446P" alt="Что мы узнали из фильма о Викторе Пелевине? | Кино, Обзоры ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Правда ли Пелевин пишет на скорость, что его связывает с Китаем и как он переписал Кастанеду.</p></div>
            </div>
        </a><a href='https://www.fontanka.ru/2022/11/22/71837372/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Как в юбилейной документалке искали Пелевина, а нашли ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTz2F1Rt3ZAM6YUddoG4HZn-LpcDG4ryH4dSB_OFiwk9AXFlLmzjesswotTBQRBR-CtKM8VOC4U" alt="Как в юбилейной документалке искали Пелевина, а нашли ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>22 ноября Виктору Пелевину исполняется 60 лет. Онлайн-кинотеатр Kion к юбилею знаменитого писателя выпускает документальный - Афиша Plus - 22 ноября 2022&nbsp;...</p></div>
            </div>
        </a><a href='https://holod.media/2022/11/22/chepel-pelevin/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Насколько актуален Пелевин и его «KGBT+»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSY7DaEAYNp8YPfHrPy7k3w6z47ABZ2ax4tJ6GZKE659X_ItHqe8OSaOAjZ6maZIekDqFqRJldV" alt="Насколько актуален Пелевин и его «KGBT+»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Виктор Пелевин выпустил новый роман — «KGBT+», уже 19 книга за его авторством. Объясняем, насколько актуально его творчество во время войны.</p></div>
            </div>
        </a><a href='https://kg-rostov.ru/premiere/k-yubileyu-viktora-pilevina-v-rostove-proydet-premera-dokumentalnogo-filma-pelevin/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>К юбилею Виктора Пелевина в Ростове пройдет премьера ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRb4c5gPBXL4uB4EMH6IDJbw4uTSZ1yWAA99ipxcGAJP1AsVrUfDq7k_0l7NkYw_hjnU7QzZbBC" alt="К юбилею Виктора Пелевина в Ростове пройдет премьера ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>22 ноября исполнилось 60 лет Виктору Пелевину. Последние 20 лет он не появляется на публике, но, несмотря на скрытный образ жизни, остается одним из самых&nbsp;...</p></div>
            </div>
        </a><a href='https://www.buro247.ru/community/party/23-nov-2022-pelevin-premiere.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Как прошла премьера фильма «Пелевин» в Noôdome</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSFG00rI-RE0mD0xkKtQdJuG20_KaR41ND4fXwy0Vh1Ay_BhV-yc8U3l9c_bpyHwgu1XGYiB-4C" alt="Как прошла премьера фильма «Пелевин» в Noôdome" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В пространстве Noôdome прошла премьера документального фильма Родиона Чепеля «Пелевин», приуроченного к 60-летию писателя.</p></div>
            </div>
        </a>
        </Template></>;
}