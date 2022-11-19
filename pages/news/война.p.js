import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Война</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Война"/>
        <meta name="description" content="Trending News about Война" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Война</h1>
            <Image width={800} height={500} src="https://vestikavkaza.ru/upload/2022-11-18/1668776120637780b88fe670.16543334.jpg" alt="Война"/>
            <h3>Recent News</h3>
            <a href='https://vestikavkaza.ru/analytics/vozmozna-li-bolsaa-vojna-na-uznom-kavkaze.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Возможна ли большая война на Южном Кавказе?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTrObY0PuaCOFp2n3MPXYuPmRJHIyUgey_0pRDQfHGzhXBKdtOw-kYslSvdCzXL_93dAy1TkiIU" alt="Возможна ли большая война на Южном Кавказе?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Недавно в гостях у всем известного Максима Шевченко выступил грузинский политолог Леван Пирвели. По мнению этого эксперта, на Южном Кавказе разворачивается&nbsp;...</p></div>
            </div>
        </a><a href='https://zona.media/chronicle/268'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Война в Украине. 268‑й день</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTKemRMW6IEEFn6w-Ukr30ZiBYoM7Pm09bqZ8kRNU_FCj2CPuBVTe0U_ni0tmKD5nQ5MtZx7c1o" alt="Война в Украине. 268‑й день" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Украинские спасатели продолжают извлекать тела из-под дома в Вольнянске, в который попала российская ракета; число жертв увеличилось до девяти человек.</p></div>
            </div>
        </a><a href='https://news.zerkalo.io/world/26418.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Мы всерьез-то еще ничего не начинали». Разбираемся, может ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTfNN8P_E2m0pmU6pFcXmwA8Ftz_jxqHifoq2wvOv7cdEJs0nWXJqEKhXJ9vd6WQPPB3vSNr-xB" alt="«Мы всерьез-то еще ничего не начинали». Разбираемся, может ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Мы всерьез-то еще ничего не начинали». Разбираемся, может ли война в Украине стать для РФ Отечественной и что тогда произойдет. 18 ноября 2022 в 13:45</p></div>
            </div>
        </a><a href='https://www.kavkazr.com/a/putj-ahmata-kak-voyna-v-ukraine-zastavila-kadyrova-poyti-protiv-zavetov-ottsa-/32134478.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Путь Ахмата&quot;: как война в Украине заставила Кадырова пойти ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRQ538B-gnBue7lM9b9BRKMKNCKM3sZwEyaiHOeKxKVOfkSypbpw0Bzn9JewitK2kvgjqyHoJsM" alt="&quot;Путь Ахмата&quot;: как война в Украине заставила Кадырова пойти ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>С началом полномасштабного военного вторжения России на территорию Украины политика главы Чечни Рамзана Кадырова и основные тезисы местной пропаганды стали&nbsp;...</p></div>
            </div>
        </a><a href='https://24tv.ua/ru/268-den-vojny-v-ukraine-18-11-2022-novosti-za-sutki_n2199782'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Украинские эксперты в Польше, поезд в Херсон: хронология 268 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRCfQOTHLi3UD24nlVAjfvU-0k18kJks4ah1V06Z7McAoCAiy82mS3EQvV4QC0be_7o1muZFp7I" alt="Украинские эксперты в Польше, поезд в Херсон: хронология 268 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Полномасштабная война началась еще 24 февраля 2022, уже 268 дня подряд россия атакует территории Украины. Какая ситуация сейчас, 18 ноября 2022,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}