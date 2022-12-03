import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Києво-Печерська Лавра</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Києво-Печерська Лавра"/>
        <meta name="description" content="Trending News about Києво-Печерська Лавра" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Києво-Печерська Лавра</h1>
            <Image width={800} height={500} src="https://racurs.ua/content/images/Publication/News/17/74/06/preview_w696zc1.jpg" alt="Києво-Печерська Лавра"/>
            <h3>Recent News</h3>
            <a href='https://racurs.ua/ua/n177406-pcu-zareiestruvala-sviy-monastyr-u-kyievo-pecherskiy-lavri.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ПЦУ зареєструвала свій монастир у Києво-Печерській лаврі</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS7AOnei7ujqvtgd23qANhV-ZdvYI-wkHcH1Ktu8u_FrnnuHOOTCCA9QSI54HIlZbES8TdPlVVX" alt="ПЦУ зареєструвала свій монастир у Києво-Печерській лаврі" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Зареєстровано Свято-Успенську Києво-Печерську Лавру як монастир у складі Православної церкви України (ПЦУ). Про це 2 грудня повідомив прес-секретар ПЦУ&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/12/2/7379045/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Свято-Успенську Києво-Печерську Лавру зареєстрували як ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSh8CFPZ1Zs9aNbLhuhbIL_OlhRWta6daHvv1MUy6ccHAQIWQpM1t82mtZkD3MUNDNgeCpfDrIw" alt="Свято-Успенську Києво-Печерську Лавру зареєстрували як ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1 грудня Києво-Печерську Лавру зареєстрували в якості монастиря у складі Православної церкви України.</p></div>
            </div>
        </a><a href='https://ipress.ua/news/ofitsiyno_kyievopechersku_lavru_zareiestrovano_u_skladi_ptsu_336668.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Офіційно: Києво-Печерську Лавру зареєстровано у складі ПЦУ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRVRml-BZuGk8gzlQkhvKeREVvQi8uEbff48BKR8YqCs3ceAe84IivsFSBCXdOds79fjHmPBkpx" alt="Офіційно: Києво-Печерську Лавру зареєстровано у складі ПЦУ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Свято-Успенську Києво-Печерську Лавру офіційно зареєстрували як монастир у складі Православної церкви України. Очолить її Митрополит Епіфаній.</p></div>
            </div>
        </a><a href='https://www.unian.ua/society/obshuki-v-kiyevo-pecherskiy-lavri-u-minkulti-detalno-poyasnili-shcho-vidbuvayetsya-12065175.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Мінкульті детально пояснили, що відбувається в Києво ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSR6ltgz8MurNalPOvkyJFjp_SMTRozkhxCFvaqOgXigxOy6WtEwB9tItR2gcWHqYXJomyWf6KL" alt="У Мінкульті детально пояснили, що відбувається в Києво ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Міністр культури Олександр Ткаченко пояснив, що реєстрація Свято-Успенської Києво-Печерської Лаври відноситься до монастиря, який використовувала ПЦУ&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}