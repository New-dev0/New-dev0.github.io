import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>День студента</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,День студента"/>
        <meta name="description" content="Trending News about День студента" /></Head><Template>
            <h1 style={{fontSize: "30"}}>День студента</h1>
            <Image width={800} height={500} src="http://inpushkino.ru/upload/gallery/340/191340_8d298bf20f4cfbfbf3b514f4ed9427c13034ab4c.jpg" alt="День студента"/>
            <h3>Recent News</h3>
            <a href='https://inpushkino.ru/novosti/obshchestvo/molodezh-gorodskogo-okruga-pushkinskiy-segodnya-prazdnuet-mezhdunarodnyy-den-studenta'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Молодежь Городского округа Пушкинский сегодня празднует ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQJwPUANDOjTqK75Gsrv5wjj8ziCvlPR_aNQuS87BRyH5dlUUdGliNHJe0N8iSqtFnGBbCcHI_Q" alt="Молодежь Городского округа Пушкинский сегодня празднует ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У многих этот праздник ассоциируется с молодостью, беззаботностью, романтикой и весельем, но история этого дня, начавшаяся в Чехословакии во время Второй&nbsp;...</p></div>
            </div>
        </a><a href='https://vikna.tv/ru/styl-zhyttya/podorozhi/mezhdunarodnyj-den-studenta-2022-originalnye-pozdravleniya/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Международный день студента 2022: красивые поздравления в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT_tDDhS2zY6iOWhkzvwJK7vKYslgSoSvEFvjoEhWRQJYPQ_U-mILihLYp4CCkQEV9awTE1a7_5" alt="Международный день студента 2022: красивые поздравления в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Когда День студента 2022 и кто его отмечает. Оригинальные поздравления с Днем студента в картинках и стихах — в материале.</p></div>
            </div>
        </a><a href='https://soc.obozrevatel.com/prazdniki/den-studenta-2022-luchshie-kartinki-i-otkryitki-s-pozdravleniyami.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День студента 2022: лучшие картинки и открытки с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSJAYYfP0H0OU8KClF_w4arZgX7cEfL1_5MWo7Ay4IjXo_8gMUcH2CDswzZhdgK4FgESbZL8gZC" alt="День студента 2022: лучшие картинки и открытки с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Международный день студента ежегодно празднуют 17 ноября. OBOZREVATEL публикует к празднику подборку оригинальных поздравлений и открыток.</p></div>
            </div>
        </a><a href='https://vestitambov.ru/new/segodnja-shkola-potrebitelej-mezhdunarodnyj-den-studenta-i-hk-tambov-protiv-chelmeta/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сегодня: школа потребителей, Международный день студента и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQEpPA9949mHFNJUXMmiwPLevx00d0KRMOJk2OcXwXw0hg3Jql1RbjqU4eohODNiGvDazv3vyEU" alt="Сегодня: школа потребителей, Международный день студента и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>О событиях сегодняшнего дня коротко. Школа потребителей приглашает на очередное занятие. Сегодня речь пойдет об изменении тарифов на коммунальные услуги с 1-го&nbsp;...</p></div>
            </div>
        </a><a href='https://nashaniva.com/ru/303321'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сегодня — Международный день студента</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcStpuchNVM4dW4F-kNeP3n0fn3eTHLdVP7-2MSbp3ZmHtAC7rUixAv5iQSdFS6ddsgf1wrTXpS9" alt="Сегодня — Международный день студента" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>28 октября 1939 года в оккупированной фашистами Чехословакии пражские студенты и их преподаватели вышли на демонстрацию, чтобы отметить годовщину&nbsp;...</p></div>
            </div>
        </a><a href='https://altapress.ru/zhizn/story/mezhdunarodniy-den-studentov-noyabrya-veselie-pozdravleniya-v-proze-stihah-i-sms-315042'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Международный день студентов - 17 ноября. Веселые ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSlnUXLGhvwGi5ObKbKEV89SdFZGScLk3t7SDHj4HnSEdDzvzZCbMXjNALUMrK-mkIgrlQQWGdK" alt="Международный день студентов - 17 ноября. Веселые ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>День студентов отмечают всему миру 17 ноября. Праздник утвердили в 1946 году в Праге по решению Всемирного конгресса студентов.</p></div>
            </div>
        </a><a href='https://www.ap22.ru/paper/17-noyabrya-v-Altayskom-krae-otmetyat-Mezhdunarodnyy-den-studenta.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>17 ноября в Алтайском крае отметят Международный день ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRP4NgL4XIAHl-8BC4HTxvorAde87D5ihcgbnD_1KI3J3eAl7qNRTNrDwP3qQ7EasD1F0QUaJfd" alt="17 ноября в Алтайском крае отметят Международный день ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В этот день 1939 года гестаповцы и эсэсовцы арестовали и заключили в концлагерь Заксенхаузен свыше 1200 студентов, которые участвовали в акции протеста в Праге.</p></div>
            </div>
        </a><a href='https://ug.ru/semnadczatogo-noyabrya-otmechaetsya-mezhdunarodnyj-den-studentov/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Семнадцатого ноября отмечается Международный день ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTyRdGAEyGbAWtTBvKS42VwArr7FuDvS6oe4_irBi1pdYbw27B6fhHWMSXj7OCJqnEfc8_XEQBb" alt="Семнадцатого ноября отмечается Международный день ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Этот праздник еще называют Днем международной солидарности студентов. Он отмечается каждый год 17 ноября, начиная с 1946 года.</p></div>
            </div>
        </a>
        </Template></>;
}