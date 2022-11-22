import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Динамо</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Динамо"/>
        <meta name="description" content="Trending News about Динамо" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Динамо</h1>
            <Image width={800} height={500} src="https://fcdynamo.com/img/img/7ff72b02-7814-4819-b405-6afb8ca3cbf8/beg-4504.jpg" alt="Динамо"/>
            <h3>Recent News</h3>
            <a href='https://fcdynamo.com/news/veres-dinamo-0-1-preskonferenciya-yuriya-virta'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Верес» - «Динамо» - 0:1. Пресконференція Юрія Вірта - ФK ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQAPkabdB8r_w0VRR-2Cvo18DvmPJVv326uSdo3KpJPjKyfMKrLrsFKwD3mUJKTc5Xr1Y68ytia" alt="«Верес» - «Динамо» - 0:1. Пресконференція Юрія Вірта - ФK ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Верес» - «Динамо» - 0:1. Пресконференція Юрія Вірта. 21.11.2022, 16:58. Друк. Поділитись:.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/dinamo-minimalno-peregralo-veres-i-zbereglo-1669038961.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Динамо&quot; минимально обыграло &quot;Верес&quot; и сохранило позиции в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQJ04mpUXF3oUOZAkGmOQ_ku_a2BBCmtuyPnie9Xy1OwLa7fM0zyhuJFUP3RBdXJkZQm-B4EP9w" alt="&quot;Динамо&quot; минимально обыграло &quot;Верес&quot; и сохранило позиции в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Победой киевского &quot;Динамо&quot; в непростых погодных условиях завершилась встреча 14-го тура отечественной Премьер-лиги против ровненского &quot;Вереса&quot;.</p></div>
            </div>
        </a><a href='https://fcdynamo.com/ru/news/veres-dinamo-cisla-ta-fakti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Верес» – «Динамо» - 0:1: числа и факты - ФK «Динамо» Киев ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT74Lwbxx-TYUbFJE6TcnsCvDfdq1W57U-88iVLlJuwflzoAS0OEVu9RqQwCehkesPZBDN4TYg0" alt="«Верес» – «Динамо» - 0:1: числа и факты - ФK «Динамо» Киев ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В рамках 14-го тура VBET Лиги киевское «Динамо» в номинально гостевом матче, проходившем на столичном стадионе имени Валерия Лобановского,&nbsp;...</p></div>
            </div>
        </a><a href='https://fakty.ua/411111-dinamo-blagodarya-golu-cygankova-obygralo-veres-videoobzory-matchej-upl'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Динамо» завдяки голу Циганкова обіграло «Верес ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSsXSGGprYh6IDN8AtI66HKx6KZ7YVnqBHizUJ91ZrHmoZdyP7Nn8cE-p_lneUPCykpmSpnaQco" alt="«Динамо» завдяки голу Циганкова обіграло «Верес ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Диво-гол приніс «Інгульцю» перемогу над «Львовом»</p></div>
            </div>
        </a><a href='http://www.golos.com.ua/news/171753'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Футбол. Скромна перемога «Динамо» в гостях … на своєму полі</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS9pNEAYVixlViwMZ6DRtvr4_hIex2se8Q3mnKXIP-05SzggutTkXJe0VdVOqiMC6ldccduAw" alt="Футбол. Скромна перемога «Динамо» в гостях … на своєму полі" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Чемпіонат УПЛ. 14-й тур. 21 листопада. «Верес» – «Динамо». 0:1. Гол: Циганков, 26. «Верес»: Когут, Гагун, Мірошник, Вовченко, Є.Пасіч, Кльоц (Курко, 85),&nbsp;...</p></div>
            </div>
        </a><a href='https://fakty.ua/ru/411111-dinamo-blagodarya-golu-cygankova-obygralo-veres-videoobzory-matchej-upl'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Динамо» благодаря голу Цыганкова обыграло «Верес ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSsXSGGprYh6IDN8AtI66HKx6KZ7YVnqBHizUJ91ZrHmoZdyP7Nn8cE-p_lneUPCykpmSpnaQco" alt="«Динамо» благодаря голу Цыганкова обыграло «Верес ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Чудо-гол принес «Ингульцу» победу над «Львовом»</p></div>
            </div>
        </a><a href='https://tsn.ua/prosport/supergol-cigankova-dozvoliv-dinamo-peregrati-veres-i-vpritul-pidibratisya-do-shahtarya-v-upl-video-2206441.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Супергол Циганкова дозволив &quot;Динамо&quot; переграти &quot;Верес&quot; і ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR2ing0enXurPoOT8EJxs0t8kF2CW7Mev0eNYZA8Eik3dJuYigs_YmCzof3RgDU5zklR5a6TVX4" alt="Супергол Циганкова дозволив &quot;Динамо&quot; переграти &quot;Верес&quot; і ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Київське Динамо обіграло рівненський Верес у рамках 14-го туру української Прем&#39;єр-ліги (УПЛ). Перемогу підопічним Мірчі Луческу приніс розкішний гол&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ua-football.com/ua/ukrainian/high/1669038804-veres-dinamo-0-1-mig-bi-buti-rozgrom-ale-vistachilo-odnogo-udaru-cigankova.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Верес - Динамо 0:1. Міг би бути розгром, але вистачило одного ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSmXDr-Lc4RLnAfeU1QA2iBj9dlMjeiNKjW-YYeSzw0Nxx5zmG77H_zqwo00O2Jh5pN0hoXYHNI" alt="Верес - Динамо 0:1. Міг би бути розгром, але вистачило одного ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>21-11-2022 ✓ Прем&#39;єр-Ліга. Майже без шансів для рівненців: Хоча це був домашній матч для Вереса, однак рівненський клуб звернувся до Динамо з проханням&nbsp;...</p></div>
            </div>
        </a><a href='https://football24.ua/veres__dinamo_skladi_i_onlayn_translyatsiya_matchu_upl_n748182/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Верес – Динамо: склади і онлайн-трансляція матчу УПЛ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTG3jOSlpdQY8D-nhF2rjoN5oUIIKwvjjQDss8PxIGlYCcamOgmFHmlBA8zIHCXU2wvsMu78G6M" alt="Верес – Динамо: склади і онлайн-трансляція матчу УПЛ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Динамо зустрічається з рівненським Вересом у матчі 14-го туру УПЛ. Склади і посилання на онлайн-тнансляцію – у цій новині на &quot;Футбол 24&quot;.</p></div>
            </div>
        </a><a href='https://sport.ua/news/604420-v-gostyah-kak-doma-dinamo-v-kieve-odolelo-veres'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В гостях как дома. Динамо в Киеве одолело Верес</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQBwlsT6bBCufWww4Yw32VaUrKlfPkiEbCkwbLfW18C58WR-iJeMCrjOHtF4eOqEJ6nSyCycl29" alt="В гостях как дома. Динамо в Киеве одолело Верес" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Результаты матча {Верес} – {Динамо Киев} ⇒ ≺{21.11.2022}≻ ✓ {Чемпионат Украины} Счет матча ⇒ Кто выиграл ☛ Лучшие моменты матча,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}