import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Владимир Путин</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Владимир Путин"/>
        <meta name="description" content="Trending News about Владимир Путин" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Владимир Путин</h1>
            <Image width={800} height={500} src="" alt="Владимир Путин"/>
            <h3>Recent News</h3>
            <a href='https://meduza.io/paragraph/2022/11/25/gospitali-zapolneny-na-38-voyna-put-k-ochischeniyu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Госпитали заполнены на 38%. Война — путь к очищению ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS2cU1fU4fnIiIQqf0ISJ5J-kSUsqC0YdKU3utByK4yedrfte2oq5geluP8XTcfuWOYCZ92DXVJ" alt="«Госпитали заполнены на 38%. Война — путь к очищению ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Госпитали заполнены на 38%. Война — путь к очищению» Такими словами Владимир Путин анонсировал День матери. 10:11, 25 ноября 2022. Источник: Meduza.</p></div>
            </div>
        </a><a href='https://www.vedomosti.ru/politics/articles/2022/11/26/952246-putin-pogovoril-s-materyami'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин поговорил с матерями российских военных</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcREQK6azEj38gmKQQcX5DELdHGWUM7GUU3FnoYPaQqXyU7pw_g--3c0eBsZGRJAFagl60eA2o0r" alt="Владимир Путин поговорил с матерями российских военных" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент начал с того, что напомнил: послезавтра отмечается День матери, «который наполнен особым, очень добрым содержанием и подчеркивает присущее всем&nbsp;...</p></div>
            </div>
        </a><a href='https://online47.ru/2022/11/25/vladimir-putin-oproverg-slukhi-o-vliyanii-svo-na-plany-po-razvitiyu-rossii-169312'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин рассказал о планах развития России в будущем</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQthaDL1C93-zV1PWTMxNhp32A2P7z6VyZACPS_ouyONsEKjEpqDcDTaReIajlhu9bmkr40wsM2" alt="Владимир Путин рассказал о планах развития России в будущем" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ранее Online47 сообщал, что Путин обсудил с Кадыровым работу чеченских подразделений в ходе СВО. Фото: kremlin.ru. Новости Online47- в Telegram быстрее  .</p></div>
            </div>
        </a><a href='https://www.ixbt.com/news/2022/11/26/vladimir-putin-zajavil-chto-promyshlennost-rabotaet-nad-obespecheniem-vseh-podrazdelenij-dronami.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин заявил, что промышленность работает над ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Владимир Путин заявил, что промышленность работает над ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Владимир Путин в пятницу на встрече с матерями военнослужащих - участников СВО заявил, что российская промышленность работает над обеспечением&nbsp;...</p></div>
            </div>
        </a><a href='https://www.severreal.org/a/vladimir-putin-vstretilsya-s-materyami-uchastnikov-voyny-v-ukraine-/32148846.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин встретился с матерями участников войны в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT29WJmsKlV3RuLNML-9xcokK9MlV7rH0-IQf8oLGaKDnY2OdtUeEStDTsLrxstODARPhmcW6Ns" alt="Владимир Путин встретился с матерями участников войны в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Встреча прошла в резиденции в Ново-Огарёво под Москвой. Путин сказал, что решил поговорить с матерями военнослужащих, чтобы &quot;из первых уст&quot; услышать их оценки,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/25/7377962/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Встреча Путина с матерями военных оказалась фарсом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSyCq-mXP-uXk9w6B85I071k-ffdoJJfseTM3Yjt2DjRXRe_nnEHlLr7Grv4ik3bkO4MBA2Yxcs" alt="Встреча Путина с матерями военных оказалась фарсом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По данным СМИ во встрече с президентом РФ Владимиром Путиным в качестве матерей участвовали специально подготовленные женщины.</p></div>
            </div>
        </a><a href='https://www.bbc.com/russian/news-63756383'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Ваши ребята выбрали такую судьбу&quot;. Что сказал Путин на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQBhZSkpsy7Rk9w4cQ8imXqFAsCjaEWAc6efjMirItj5k7aPDzvL4YWioBfmBZf9N3fplRziqaP" alt="&quot;Ваши ребята выбрали такую судьбу&quot;. Что сказал Путин на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент России Владимир Путин в пятницу 25 ноября провел встречу с матерями российских военных, участвующих в войне с Украиной. Опрошенные Би-би-си&nbsp;...</p></div>
            </div>
        </a><a href='https://spbdnevnik.ru/news/2022-11-25/vladimir-putin-zaveril-chto-rossiya-dobietsya-tseley-spetsoperatsii'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин заверил, что Россия добьется целей ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRaWP5GJG8ToYipqV5xyOFjb4VfJnxaUMdvGn8nXx3SvObKguOEGe4DZidL3KGyKU5gKvZAd55W" alt="Владимир Путин заверил, что Россия добьется целей ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Глава государства в пятницу провел встречу с матерями мобилизованных. Фото: kremlin.ru. В пятницу, 25 ноября, президент России Владимир Путин провел встречу&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vedomosti.ru/economics/news/2022/11/25/952232-putin-plani-ne-izmenilis'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Путин: планы России по социально-экономическому развитию ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTDypF8WxdIW46R7uO2thSKAYp2leG0srzRFoPEMDLz4K39Co7XkoLb0PSlhzT4ZUk0YqHN4IMx" alt="Путин: планы России по социально-экономическому развитию ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Россия не меняет свои огромные планы в сфере социально-экономического развития, несмотря на проведение специальной военной операции, заявил президент страны&nbsp;...</p></div>
            </div>
        </a><a href='https://realnoevremya.ru/news/266641-putin-zayavil-chto-bez-perevorota-na-ukraine-v-2014-godu-ne-bylo-by-svo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин заявил, что без переворота на Украине в 2014 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRwwpVhVMnKGguO_7lUx7qsYyO5BgZxz6jRgA5GaksDvZCbQ0B0XzQKoYDQutMAxIvWQrSKBSEK" alt="Владимир Путин заявил, что без переворота на Украине в 2014 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>— Но все-таки, если бы не было государственного переворота на Украине в 2014 году, ничего бы не было, — добавил он. Фото: kremlin.ru. Напомним&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}