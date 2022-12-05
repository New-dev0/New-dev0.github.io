import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Херсонская область</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Херсонская область"/>
        <meta name="description" content="Trending News about Херсонская область" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Херсонская область</h1>
            <Image width={800} height={500} src="https://images.unian.net/photos/2022_11/thumb_files/620_324_1668778582-7268.jpg?1" alt="Херсонская область"/>
            <h3>Recent News</h3>
            <a href='https://www.unian.net/war/hersonskaya-oblast-rossiyane-desyatki-raz-obstrelyali-region-12066588.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Россияне десятки раз обстреляли жилые кварталы Херсона и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQHpViwJ6TfdlpZZsCdCsx_cgG1ZqdVMcVlBBBRWTU2ofq3H0WMfuSnwISDDa3CxcGrlQ1i9zXv" alt="Россияне десятки раз обстреляли жилые кварталы Херсона и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российские оккупанты били из артиллерии, танков, минометов, РСЗО по жилым домам и гражданской инфраструктуре Херсона и населенных пунктов Херсонской&nbsp;...</p></div>
            </div>
        </a><a href='https://delo.ua/ru/incidents/okkupanty-obstrelyali-xersonskuyu-oblast-est-pogibsii-407683/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Оккупанты обстреляли Херсонскую область, есть погибший</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR4YfrmxqdztPf2R8zP-NeZI3iS5-xG3CYRjhUYvQwwerKIer2fuVNxOxVGO_FPSFAEW6Oow-Nd" alt="Оккупанты обстреляли Херсонскую область, есть погибший" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российские оккупационные войска продолжают обстреливать Херсонскую область. В результате чего за прошедшие сутки, 3 декабря, один человек погиб и еще двое&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/desyatki-obstriliv-dobu-herson-poterpae-vid-1670145783.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Десятки обстрелов в сутки. Херсон страдает от атак россиян ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRmrXoLJLRYBznqyf06l-9w19CSeyH2a9wMIM_9Vsexayl-2oWZLcIyB57KYa0apQPDd5F43lXL" alt="Десятки обстрелов в сутки. Херсон страдает от атак россиян ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российские оккупанты 46 раз обстреляли Херсонскую область. Враг гнал из артиллерии, танков, минометов, РСЗО по мирным жителям.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/12/4/7379179/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Россияне били по Херсонской области 46 раз: 1 погибший и 2 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS_IkIiKd3wNCadMNLrrj3clG8f4UgA_agvcXxzw1PSFzwVdfSigATbMgJmTOqrbcLDngtDrMX5" alt="Россияне били по Херсонской области 46 раз: 1 погибший и 2 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Росіяни 46 разів за добу обстріляли населені пункти Херсонської області: є загиблий та поранені.</p></div>
            </div>
        </a><a href='https://korrespondent.net/ukraine/4541095-za-sutky-khersonskuui-oblast-obstrelialy-46-raz'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>За сутки Херсонскую область обстреляли 46 раз</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQZsCZiJicZrUMH_w5Bsykcr3XWO_2HZzwGgYUQPbaIWdL0eDp6b6iBXWnt4a0Z3cFVU57RlmuL" alt="За сутки Херсонскую область обстреляли 46 раз" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Враг бил из артиллерии, танков, минометов, РСЗО по мирным населенным пунктам области, сообщает глава ОВА.</p></div>
            </div>
        </a><a href='https://gazeta.ua/ru/articles/np/_est-pogibshie-i-ranenye-rossiyane-plotno-obstrelyali-hersonschinu/1123532'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Есть погибшие и раненые – россияне плотно обстреляли ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSYnwp6TWWyIldfkO-dLkTygzoQ7phyk8_A6oMaxD3NXOPfCxDxcUatIov3gNM6GP6nhLw7oYyN" alt="Есть погибшие и раненые – россияне плотно обстреляли ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>За сутки, 3 декабря, российские войска 46 раз обстреляли территорию Херсонщины. Враг бил из артиллерии, танков, минометов, РСЗО по мирным населенным пунктам&nbsp;...</p></div>
            </div>
        </a><a href='https://gordonua.com/news/war/za-minuvshie-sutki-okkupanty-obstrelyali-hersonskuyu-oblast-46-raz-ova-1639147.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>За минувшие сутки оккупанты обстреляли Херсонскую область ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTZacO0S5RIRjlu7KZjnbqo705VRjyFUzbHAWte2rml0gI_tkX57Wl2u_05uYKMwjHBnQv3WAsw" alt="За минувшие сутки оккупанты обстреляли Херсонскую область ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В результате ударов оккупантов по Херсонской области 3 декабря погиб один человек и двое получили ранения. Об этом...</p></div>
            </div>
        </a><a href='https://hromadske.ua/ru/posts/rossiyane-za-sutki-46-raz-obstrelyali-hersonskuyu-oblast-odin-chelovek-pogib-est-ranenye'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>россияне за сутки 46 раз обстреляли Херсонскую область: один ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTWzP8GiLMjXPYGen9V6z9ysIBn2sqUnwXZS8qy6D2R4aBiOKHPzb6ZZbYLKMjZyf8ih2VE4ZVh" alt="россияне за сутки 46 раз обстреляли Херсонскую область: один ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Войска рф в течение 3 декабря 46 раз обстреляли территорию Херсонской области: огонь открывали из артиллерии, танков, минометов и РСЗО по мирным населенным&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}