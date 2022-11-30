import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Менингит</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Менингит"/>
        <meta name="description" content="Trending News about Менингит" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Менингит</h1>
            <Image width={800} height={500} src="https://www.m24.ru/b/d/nBkSUhL2hFcvms2-Ir6BrNOp2Z318Ji-mifGnuWR9mOBdDebBizCnTY8qdJf6ReJ58vU9meMMok3Ee2nhSR6ISeO9G1N_wjJ=RBTCzMTGpbLZ6ormE6rgTg.jpg" alt="Менингит"/>
            <h3>Recent News</h3>
            <a href='https://www.m24.ru/articles/obshchestvo/29112022/526043'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Иммунолог рассказал, можно ли заразиться менингитом от ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQNcVP8PozhAY9eeiXYcWSkTwFPMyME_i9xHpCJ9kNr3InecaSghtMQPi4ZTsJcjtpKLaerCSoV" alt="Иммунолог рассказал, можно ли заразиться менингитом от ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На одном из складов маркетплейса OZON в Подмосковье зафиксировали случаи заражения инфекционным менингитом: под наблюдением врачей оказались более двух&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5693629'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>11 сотрудников Ozon госпитализированы в Московской области ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="11 сотрудников Ozon госпитализированы в Московской области ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Московской области госпитализированы 11 сотрудников складского комплекса маркетплейса Ozon с подозрением на инфекционный менингит.</p></div>
            </div>
        </a><a href='https://secretmag.ru/zdorove/vrach-otvetil-nuzhno-li-boyatsya-posylok-so-sklada-ozon-tam-sluchilas-vspyshka-meningita-29-11-2022.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Врач ответил, нужно ли бояться посылок со склада Ozon. Там ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSuWFim7Jj97gS5Ev0ILzUN8tygF2ckORjIiyQAQFN_ed0fUVK12UNZrt-4Z3K7ZYF5xkFB0ufw" alt="Врач ответил, нужно ли бояться посылок со склада Ozon. Там ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Несколько сотрудников со склада Ozon на Новой Риге заболели менингококковой инфекцией (она же менингит). Разумеется, клиенты маркетплейса, переживая за своё&nbsp;...</p></div>
            </div>
        </a><a href='https://spbdnevnik.ru/news/2022-11-29/vrach-napomnil-ob-opasnosti-meningita'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Врач напомнил об опасности менингита</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQCtRkoP4dFvIO6iZ0-GeTrPHJq6Go2Tn8A8L9ZrpX9L2wuO-ouLNXleUOl7ZxuyC2AMWfw6XPJ" alt="Врач напомнил об опасности менингита" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>И посоветовал прививаться. Фото: Александр Глуз/ «Петербургский дневник». Заслуженный врач России Александр Мясников рассказал, как защитить себя от&nbsp;...</p></div>
            </div>
        </a><a href='https://www.miloserdie.ru/news/o-vspyshke-meningita-na-sklade-ozon-v-podmoskove-soobshhili-v-seti-desyatki-lyudej-gospitalizirovany/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>О вспышке менингита на складе Ozon в Подмосковье сообщили ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSXclBThIvsWhA-CWxs7ZDXle0TygdTfFWXy1ZlDy_iahAFS8xfkR5YEO8MkTb642kEAR9OJIgu" alt="О вспышке менингита на складе Ozon в Подмосковье сообщили ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Дополнение: позже в пресс-службе Ozon сообщили &quot;Милосердию.ru&quot;, что массового заболевания работников нет - менингитом заразились несколько сотрудников&nbsp;...</p></div>
            </div>
        </a><a href='https://www.starhit.ru/life/v-podmoskove-bolee-30-sotrudnikov-sklada-ozon-gospitalizirovany-iz-obshezhitiya-s-meningitom-851685/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Подмосковье более 30 сотрудников склада Ozon ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQo-U2cBdtHVXVgcjjlBQEm5C7NkaiS_TIw_FXgLPmePpkM9drTbIS9NX9E6hbIo7HDxBjR6kgW" alt="В Подмосковье более 30 сотрудников склада Ozon ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Несколько дней назад у работников Ozon повысилась температура, началась головная боль и появился кашель. Заболевшие обратились в больницу,&nbsp;...</p></div>
            </div>
        </a><a href='https://fedpress.ru/news/77/society/3150451'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Эпидемиолог ответил, могут ли клиенты Ozon подхватить ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQMNkjUZ_Bs9JXij93ugPF0KGYU8I00axuIWKi7psvoIE-An-jF8SE10Af7cFZEXC0PqPDGw6Nt" alt="Эпидемиолог ответил, могут ли клиенты Ozon подхватить ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Эпидемиолог рассказал, можно ли заразиться от посылки из Ozon менингитом, передает ФедералПресс.</p></div>
            </div>
        </a>
        </Template></>;
}