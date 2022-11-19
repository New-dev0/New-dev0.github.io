import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Алабуга</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Алабуга"/>
        <meta name="description" content="Trending News about Алабуга" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Алабуга</h1>
            <Image width={800} height={500} src="https://im.kommersant.ru/SocialPics/5669446_26_2294808_439096226" alt="Алабуга"/>
            <h3>Recent News</h3>
            <a href='https://rt-online.ru/alabuga-prizvala-spetsialistov-iz-rf-vernutsya-domoj-s-pomoshhyu-reklamy-na-tajms-skver/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Алабуга» призвала специалистов из РФ вернуться домой с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="«Алабуга» призвала специалистов из РФ вернуться домой с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Особая экономическая зона (ОЭЗ) «Алабуга» призвала российских специалистов вернуться в РФ, разместив рекламу на Таймс-сквер в Нью-Йорке.</p></div>
            </div>
        </a><a href='https://logirus.ru/news/custom_and_ved/tatarstanskaya_oez_-alabuga-_-veshchala-_na_tayms-skver.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Татарстанская ОЭЗ «Алабуга» «вещала» на Таймс-сквер</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Татарстанская ОЭЗ «Алабуга» «вещала» на Таймс-сквер" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>18 ноября 2022. Обращение было адресовано специалистам в области авиастроения, микроэлектроники, биотехнологий. Татарстанская ОЭЗ «Алабуга» «вещала» на&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5669446'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Особая экономическая зона «Алабуга» разместила рекламу на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQBBZI69LwC0oSLtBqB31ly1C0OxusZ1BgtpY9BbrQsZqfskvcuFcydlfCH4DsWi1-U7RDHR3zi" alt="Особая экономическая зона «Алабуга» разместила рекламу на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Особая экономическая зона (ОЭЗ) «Алабуга» (Елабужский район Татарстана) разместила на одном из зданий на Таймс-сквер в Нью-Йорке рекламный баннер с текстом&nbsp;...</p></div>
            </div>
        </a><a href='https://kazanreporter.ru/news/52448_alabuga-podtverdila-zakupku-reklamy-v-nu-jorke-v-prizyvom-vozvrasatsa-domoj'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Алабуга» подтвердила закупку рекламы в Нью-Йорке с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRZYHR2Yt-rKeD17gyCLvz278Dtq9sWbicA8VF1yMiCCbshn48BvqMyDStC5epzrS4qE-52TLm7" alt="«Алабуга» подтвердила закупку рекламы в Нью-Йорке с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В пресс-службе особой экономической зоны (ОЭЗ) «Алабуга» прокомментировали решение о покупке рекламы в Нью-Йорке – баннер с надписью «пора возвращаться&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tatar-inform.ru/news/pora-vozvrashhatsya-domoi-alabgua-pozvala-specialistov-iz-ssa-na-rodinu-5886859'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Пора возвращаться домой»: «Алабуга» позвала специалистов ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR7CeG_3SbbmATg8LtzxMrwnKUAfdFo-HCrdzlUON4NmJktdjZ5PfEO-nuDfn3NzrZYxxf6G_qN" alt="«Пора возвращаться домой»: «Алабуга» позвала специалистов ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Реклама татарстанского предприятия засветилась на главной площади Манхэттена в Нью-Йорке – особая экономическая зона «Алабуга» разместила светодиодный&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sostav.ru/publication/alabuga-57636.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Пора возвращаться домой»: ОЭЗ «Алабуга» разместила ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ_r-JzaL-9IiF8vcovipqz5t2Fn8ebF2tnDoEgXWfcDBHkONrRlk2oNMLBsYlRHpQnUayDjluT" alt="«Пора возвращаться домой»: ОЭЗ «Алабуга» разместила ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Те кто поместил рекламу решили что специалисты по микроэлектронике, авиации и IT толкутся на Times Square. А где же им ище быть? Неизвестный 17.11.2022 в 18:53.</p></div>
            </div>
        </a>
        </Template></>;
}