import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Фридман</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Фридман"/>
        <meta name="description" content="Trending News about Фридман" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Фридман</h1>
            <Image width={800} height={500} src="https://cdn.forbes.ru/forbes-static/shareimages/482014.jpg?v=1670087596" alt="Фридман"/>
            <h3>Recent News</h3>
            <a href='https://www.forbes.ru/milliardery/482014-al-fa-bank-oproverg-svaz-fridmana-s-zaderzaniami-v-velikobritanii'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Альфа-банк опроверг связь Фридмана с задержаниями в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRKr9zNeWGGONhNjuiMVynxKumz_AshihRLgTr6KEIKnJWJurRrAxCU5gN3Z308vISeIemE3RE8" alt="Альфа-банк опроверг связь Фридмана с задержаниями в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Миллиардер и основатель Альфа-банка Михаил Фридман не имеет «никакого отношения» к задержаниям в Великобритании, заявил Forbes представитель банка.</p></div>
            </div>
        </a><a href='https://www.starhit.ru/novosti/v-londone-zaderzhan-rossiiskii-milliarder-mikhail-fridman-852999/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Лондоне задержан российский миллиардер Михаил Фридман</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSHXShnQFRqk8Ntlym0oZUf6T8yR4omBeA_JFkwBpzZB-sgEIqpUOJFbx30sQGNOeBDfJT0QuXa" alt="В Лондоне задержан российский миллиардер Михаил Фридман" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Днем 3 декабря сотрудники Национального агентства по борьбе с преступностью (NCA) Великобритании задержали российского бизнесмена,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5705836'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ТАСС: Фридмана задержали в Лондоне и отпустили под залог</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="ТАСС: Фридмана задержали в Лондоне и отпустили под залог" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сооснователь «Альфа-групп» и холдинга LetterOne Михаил Фридман был задержан полицией в Лондоне и впоследствии отпущен под залог, сообщает ТАСС со ссылкой на&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fontanka.ru/2022/12/03/71867912/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ТАСС: В Великобритании задержали бизнесмена Михаила ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQPhsdi01v4f8jmVvuxwOb197aD33HVsOTKEJvd4ad46FYwg1j-jb-OKbSFxTJxq1rdXhlTBLpC" alt="ТАСС: В Великобритании задержали бизнесмена Михаила ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Великобритании по подозрению в отмывании денег был задержан российский предприниматель, основатель «Альфа-Групп» Михаил - Происшествия - 3 декабря 2022&nbsp;...</p></div>
            </div>
        </a><a href='https://www.svoboda.org/a/v-londone-byl-zaderzhan-sostoyateljnyy-rossiyskiy-biznesmen-/32160292.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Лондоне был задержан российский бизнесмен – вероятно ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSSd3F6tlD3qs2czmGCSmZxwadmVAW3XE86TJaCYSmDjvaLeQ0VuVxwaGNXse_F5l3nkKxfAyO8" alt="В Лондоне был задержан российский бизнесмен – вероятно ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Национальное агентство по борьбе с преступностью Великобритании (NCA) задержало &quot;состоятельного российского бизнесмена&quot; по подозрению в отмывании денег.</p></div>
            </div>
        </a><a href='https://ura.news/news/1052607916'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ТАСС: задержанным в Лондоне российским бизнесменом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTmo9ubBzVZJkejaUiDekRENW1XhyvAT7tNBNYGOTViNAcMWLNzxVAX0HTmgLAbuD2S-iMc94nH" alt="ТАСС: задержанным в Лондоне российским бизнесменом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Лондоне задержан российский бизнесмен Михаил Фридман. Его подозревают в отмывании денег. Об этом сообщает агентство ТАСС. Только на URA.RU.</p></div>
            </div>
        </a><a href='https://thebell.io/smi-zayavili-o-zaderzhanii-v-londone-mikhaila-fridmana-on-sam-zayavil-chto-u-nego-vse-v-poryadke'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>СМИ заявили о задержании в Лондоне Михаила Фридмана. Он ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS6kaO7fP18ZvNvMrk39x5OPdD4MbIht8rsEuQMCynETUz_7BClajPYkdY3KqOvPO1jJIfUXv_j" alt="СМИ заявили о задержании в Лондоне Михаила Фридмана. Он ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Лондоне 1 декабря был задержан 58-летний «состоятельный российский бизнесмен». Его подозревают в нескольких правонарушениях, включая отмывание денег,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}