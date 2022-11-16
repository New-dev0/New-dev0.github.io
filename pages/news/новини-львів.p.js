import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Новини Львів</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Новини Львів"/>
        <meta name="description" content="Trending News about Новини Львів" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Новини Львів</h1>
            <Image width={800} height={500} src="https://dailylviv.com/assets/cache/news/580x378/raket15.jpeg" alt="Новини Львів"/>
            <h3>Recent News</h3>
            <a href='https://dailylviv.com/news/sytuatsiyi-i-pryhody/prolunalo-kilka-huchnykh-vybukhiv-u-lvovi-104798'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пролунало кілька гучних вибухів у Львові: частина міста без ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTNt6MF3jq9ElIHcHOpSL4QkKh9S9SfyQU9WZtphUViIwtlGlotbWoPCAXrk1_iLUtljFeDmMvm" alt="Пролунало кілька гучних вибухів у Львові: частина міста без ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>16:13 15 листопада 2022 р. ... Це сталося близько 16-ї години. Ворог вразив об&#39;єкт критичної енергетичної інфраструктури на Львівщині. Про це пише Dailylviv.com.</p></div>
            </div>
        </a><a href='https://dailylviv.com/news/sytuatsiyi-i-pryhody/vybukh-na-terytoriyi-nato-pid-chas-povitryanoyi-tryvohy-v-ukrayini-104800'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Вибух на території НАТО під час повітряної тривоги в Україні</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQzBs3QeO1vj6qRWiQpBIRC_QLeDUmNiJGnKAMTIjsjdEa-GJ6AGKwxoyy6mO1PkQUU4mg3SqTs" alt="Вибух на території НАТО під час повітряної тривоги в Україні" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Дві людини загинули у Польщі внаслідок вибуху у Пжеводові Грубещівського повіту під час повітряної тривоги, пише DailyLviv.com, повідомляє Radio Lublin. Вибух&nbsp;...</p></div>
            </div>
        </a><a href='https://galinfo.com.ua/news/na_lvivshchyni_chuty_vybuhy_391929.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Новини Львова: На Львівщині чути вибухи</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ4YhpJhigRg5o-x6vcHokzINKdNtCv3b6RJ5cnjfMjFZyrE_xLeZChQeC0uqbS6OmQAEDtm72c" alt="Новини Львова: На Львівщині чути вибухи" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мер міста Львова Андрій Садовий підтвердив вибухи. Частина міста без електроенергії. Фото з відкритих джерел. Як повідомив голова Львівської ОДА Максим&nbsp;...</p></div>
            </div>
        </a><a href='https://www.032.ua/news/3497133/u-lvovi-cuti-vibuhi-so-vidomo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Львові чути вибухи: що відомо</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTx_H4nQfl9UI9Fsgi_bRiXkM1MjP3Ytl_PMzbdNrb_k9UIJVVCthkoty-hXDSomtqmfBne3d4L" alt="У Львові чути вибухи: що відомо" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Близько 16:10 у Львові пролунали вибухи. Про це повідомив мер Львова Андрій Садовий в телеграм-каналі. За його словами, частина міста зараз без світла.</p></div>
            </div>
        </a><a href='https://lviv.media/lviv/59579-u-lvovi-mobilni-operatori-obmezhili-robotu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Львові мобільні оператори обмежили роботу</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ7D9DCa-LEFxY1TtXtb3MhOBTN0h6YsmZ3t7lNeO8qe9yPoBBzm09jT3l6xmAT1vpKbJDChFkG" alt="У Львові мобільні оператори обмежили роботу" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Для містян намагаються забезпечити можливість дзвонити і заощадити електроенергію. Читайте останні новини Львова на сайті LVIV.MEDIA.</p></div>
            </div>
        </a><a href='https://zn.ua/ukr/UKRAINE/vnaslidok-ataki-lviv-opinivsja-bez-svitla-tjazhko-poraneno-ljudinu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Внаслідок атаки Львів опинився без світла, тяжко поранено людину</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ-HdHAr6zZ5jfXShuki6JUQScbWo1hcxyxfpq2PlvULmn3Vuwv2Lv_sCcR9GW8HBH3tqHbE9yb" alt="Внаслідок атаки Львів опинився без світла, тяжко поранено людину" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У місті зупинено електротранспорт, лікарні працюють на генераторах. Внаслідок атаки Львів опинився без світла, тяжко поранено людину.</p></div>
            </div>
        </a><a href='https://lviv.tsn.ua/chastina-lvova-zalishilasya-bez-svitla-2202448.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Частина Львова залишилася без світла</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTO1EnzUpmMmeOklbQ1H13z4YvrcuAZNkjF64gEMbK0OWt9MgKwHBuMGJk34AKTU2vVNUqytoFi" alt="Частина Львова залишилася без світла" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Частина Львова 15 листопада залишилась без електроенергії. Сталося це після того, як в місті під час повітряної тривоги пролунали вибухи.</p></div>
            </div>
        </a>
        </Template></>;
}