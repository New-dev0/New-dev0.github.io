import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Эдуард Артемьев</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Эдуард Артемьев"/>
        <meta name="description" content="Trending News about Эдуард Артемьев" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Эдуард Артемьев</h1>
            <Image width={800} height={500} src="https://muz-tv.ru/storage/images/news/crops/social-facebook/Dwejb14O7rZIUIti6KB217dQ4Q6bbIzT0rZYYq9h.jpg" alt="Эдуард Артемьев"/>
            <h3>Recent News</h3>
            <a href='https://muz-tv.ru/news/eduard-artemev-rasskazal-o-problemah-so-zdorovem-nikity-mihalkova/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Эдуард Артемьев рассказал о проблемах со здоровьем Никиты ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR2KMlmre2Aixm2aoOkNXYRx8fivQE3cB7eCyLPm0S0lcatWnbRLk5y6Utci787rJG46R9HC28N" alt="Эдуард Артемьев рассказал о проблемах со здоровьем Никиты ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Композитор в интервью RTVI-развлечения рассказал о дружбе со знаменитым режиссером. Эдуард Артемьев создал музыку для «Неоконченной пьесы для механического&nbsp;...</p></div>
            </div>
        </a><a href='https://fedpress.ru/news/77/society/3152728'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Композитор Эдуард Артемьев рассказал про необычный дар ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQbO4NkugZQQavhzCMpufcaCeSlRgc-cktyUGtmf9XPInkMox2uNVMR0MH5BpYy0Xm8N74mlECC" alt="Композитор Эдуард Артемьев рассказал про необычный дар ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Кинорежиссер Никита Михалков обладает необычным даром, благодаря которому он заставляет своих коллег создавать шедевры, передает ФедералПресс.</p></div>
            </div>
        </a><a href='https://www.classicalmusicnews.ru/interview/on-sozdal-muzykalnyj-kosmos-jeduard-artemev-otmechaet-jubilej/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Он создал музыкальный космос. Эдуард Артемьев отмечает ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRWDEU14mMkyoCaOelKSQUMER0o2aOLi5lnUMWYGgiqN8vu_tEGg-qObcSt9id_czv4ddWwMcrO" alt="Он создал музыкальный космос. Эдуард Артемьев отмечает ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Композитор, которого при жизни хочется назвать великим. Неутомимый экспериментатор, он стал одним из первопроходцев и корифеев отечественной электронной&nbsp;...</p></div>
            </div>
        </a><a href='https://novgorod-tv.ru/news/kompozitor-eduard-artemev-otmechaet-85-letie/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Композитор Эдуард Артемьев отмечает 85-летие ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Композитор Эдуард Артемьев отмечает 85-летие ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Народному артисту РФ, композитору Эдуарду Артемьеву исполнилось 85 лет. Он является автором музыкальных тем ко многим фильмам - «Свой среди чужих,&nbsp;...</p></div>
            </div>
        </a><a href='https://informing.ru/2022/12/01/jeduard-artemev-soobschil-chto-u-rezhissera-nikity-mihalkova-sereznye-problemy-so-zdorovem.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Эдуард Артемьев сообщил, что у режиссера Никиты Михалкова ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRRpsswmsMFjq9NRMBCUc-CJ9jzTMj3Q59MDNRusgJxGsr3d8RdMguI3vmdFAuqh-7upX2xLEzb" alt="Эдуард Артемьев сообщил, что у режиссера Никиты Михалкова ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Композитор Эдуард Артемьев рассказал, что знаменитый российский режиссер Никита Михалков имеет серьезные проблемы со здоровьем. Сейчас ему нездоровится у&nbsp;...</p></div>
            </div>
        </a><a href='https://inforeactor.ru/23777847-kompozitor_eduard_artem_ev_rasskazal_o_trebovatel_nosti_nikiti_mihalkova'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Композитор Эдуард Артемьев рассказал о требовательности ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSGi5etMtS_inwx8bK-RoeiU0eAzAeOVHz0fc60HASciBUBv7HCVETTZJODXRunMuEm-qEPM7fx" alt="Композитор Эдуард Артемьев рассказал о требовательности ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Композитор Эдуард Артемьев признался, что Никита Михалков является жестким режиссером. Мэтр российского кино очень требователен в работе.</p></div>
            </div>
        </a><a href='https://foma.ru/muzyka-jeduarda-artemeva-stala-vizitnoj-kartochkoj-mnogih-spektaklej-i-filmov-patriarh-kirill.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Музыка Эдуарда Артемьева стала визитной карточкой многих ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS9fvroNVpeGhIewQUzSTYvW6Nc-9mpeZwgUuMVl8XPs-t6TF0Bpil2ZjrMn4aqvi_8_eGLOfTb" alt="Музыка Эдуарда Артемьева стала визитной карточкой многих ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Святейший Патриарх Кирилл поздравил Народного артиста России Эдуарда Артемьева с 85-летием со дня рождения, отметив знаковость созданной им музыки для.</p></div>
            </div>
        </a>
        </Template></>;
}