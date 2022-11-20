import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Крис Хемсворт</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Крис Хемсворт"/>
        <meta name="description" content="Trending News about Крис Хемсворт" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Крис Хемсворт</h1>
            <Image width={800} height={500} src="https://img07.rl0.ru/afisha/e1200x630i/daily.afisha.ru/uploads/images/b/3d/b3d3f69f8fb0cb34149eb32d66cc6f56.png" alt="Крис Хемсворт"/>
            <h3>Recent News</h3>
            <a href='https://daily.afisha.ru/news/70213-kris-hemsvort-planiruet-sdelat-pereryv-v-kinokarere/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Крис Хемсворт планирует сделать перерыв в кинокарьере</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQe-M87nvNqelhW-_Frqp9KtI8qGMQZbKa6ZrX0yuiGh6O6-nAcIgEctPWJtK3D12oVQ3x70CEO" alt="Крис Хемсворт планирует сделать перерыв в кинокарьере" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Каждый день мы собираем путеводитель по лучшим фильмам, ресторанам, книгам и прочим развлечениях из привычного круга Афиши.</p></div>
            </div>
        </a><a href='https://gamemag.ru/news/173384/chris-hemsworth-will-take-a-break-from-acting-following-a-health-warning'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Крис Хемсворт делает паузу в карьере из-за риска развития ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQTjPgEE6cLrCxAFNYpmjHEEOBQ9YS4D2ZEpzPAXnMba5pY51QUNQvxpT4t-Al9TK6W-8XN-cXH" alt="Крис Хемсворт делает паузу в карьере из-за риска развития ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>39-летний актёр узнал об этом во время съемок Limitless, документального сериала для National Geographic о &quot;противостоянии естественному упадку сил,&nbsp;...</p></div>
            </div>
        </a><a href='https://rozetked.me/news/26513-kris-hemsvort-soobschil-chto-u-nego-est-predraspolozhennost-k-bolezni-al-cgeymera'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Крис Хемсворт сообщил, что у него есть предрасположенность к ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ3LbTvC_Wa2Qp5iGZZ73g378Fn_iqTcCGnXYZASXiXf_lZqC3EFlS_kFCQKKUF2u7m9Y8R7Uc7" alt="Крис Хемсворт сообщил, что у него есть предрасположенность к ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Крис Хемсворт сообщил, что у него есть предрасположенность к болезни Альцгеймера. Об этом актёр узнал во время съёмок документального сериала Limitless,&nbsp;...</p></div>
            </div>
        </a><a href='https://focus.ua/lifestyle/537762-kris-hemsvort-zayavil-o-geneticheskoy-predraspolozhennosti-k-bolezni-alcgeymera'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Крис Хемсворт заявил о генетической предрасположенности к ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ9RynxVtMRqJC13hs657Im5ztmcsYk2HL09i6x9eLsN4Ut2H6xjwAkusZh4NKpAb_weT3wHydqkQ" alt="Крис Хемсворт заявил о генетической предрасположенности к ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Актер узнал о своей предрасположенности во время съемок проекта о долголетии.</p></div>
            </div>
        </a><a href='https://www.film.ru/news/otpusk-hemsvorta'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Крис Хемсворт возьмёт перерыв в карьере из-за ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRkK4kiTekbTl7ORMplSBAoo_3sd9MqMXh4J0tH9t_ZAlWVqf6tGTFcvJC3Vh0HAYhfVxbze6N5" alt="Крис Хемсворт возьмёт перерыв в карьере из-за ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По данным Vanity Fair, в соcтав ДНК Хемсворта входят две копии гена APOE4, который связан в риском развития Альцгеймера. Недавно такой же диагноз поставили деду&nbsp;...</p></div>
            </div>
        </a><a href='https://kg-portal.ru/comments/109822-kris-hemsvort-gotovit-poklonnikov-k-tomu-chto-sledujuschij-tor-mozhet-stat-poslednim/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Крис Хемсворт готовит нас к тому, что следующий «Тор» может ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQUzpbcrYqXRxSG5GCeSdG1qrm9B5Et5POGbFKT_Rt_xVDNZ_oDnFjwzAt5gTuf7PCtSbKfmgjE" alt="Крис Хемсворт готовит нас к тому, что следующий «Тор» может ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В конце фильма «Тор: Любовь и гром» MCU-фандом заверили, что космический викинг ещё вернётся. Но как предполагает Крис Хемсворт, следующая картина про&nbsp;...</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/glamur/zvezda-marvel-kris-hemsvort-priostanavlivaet-kareru-v-kino-iz-za-neuteshitelnyh-prognozov-vrachey-2205496.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Звезда Marvel Крис Хемсворт приостанавливает карьеру в кино ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT8BObxTZAH9ybOiw54rL2rJwxBGBTyFgegDd3lKCs5fvvrRsJ4aD61A5Ukg9h_Sb1BEpYuQvuI" alt="Звезда Marvel Крис Хемсворт приостанавливает карьеру в кино ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Звезда киновселенной Marvel Крис Хемсворт сообщил о намерениях приостановить свою карьеру из-за проблем со здоровьем. Недавно актер узнал, что склонен к&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}