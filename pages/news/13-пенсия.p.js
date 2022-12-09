import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>13 пенсия</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,13 пенсия"/>
        <meta name="description" content="Trending News about 13 пенсия" /></Head><Template>
            <h1 style={{fontSize: "30"}}>13 пенсия</h1>
            <Image width={800} height={500} src="https://nsk.bfm.ru/storage/article/December2022/BvM0nSKsJh3mrRv33wzep2gvalxMHHq7lPqKcTIx.jpg" alt="13 пенсия"/>
            <h3>Recent News</h3>
            <a href='https://pravo.ru/news/244340/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Законопроект о 13-й пенсии получил отрицательный отзыв ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Законопроект о 13-й пенсии получил отрицательный отзыв ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Кабмин отметил, что новелла противоречит действующему законодательству. А еще в документе не указали источники финансирования для реализации инициативы.</p></div>
            </div>
        </a><a href='https://nsk.bfm.ru/news/14512'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>13-я пенсия в декабре 2022 года: дадут ли российским ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQvZATO-SkQchN-uO7q868a4-_fxnQ_-5gIF6YBs5V5ebd3BsMWIfJeW66-r-fUARoBxng4Ytmv" alt="13-я пенсия в декабре 2022 года: дадут ли российским ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Госдуму внесут законопроект о выплате 13-й пенсии в декабре 2022 года; получат ли пенсионеры России дополнительную выплату перед Новым годом.</p></div>
            </div>
        </a><a href='https://infopro54.ru/news/pravitelstvo-protiv-vvoda-13-j-pensii-dlya-rossiyan/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Правительство против ввода 13-й пенсии для россиян</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRUabYcJAwMaKadnVCKialGIAa3e1txrhhmOll5pGSPRL42BDrgaRhBfLkKGbLhL3gKz_SKIiB1" alt="Правительство против ввода 13-й пенсии для россиян" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Поскольку инициатива противоречит пенсионному законодательству РФ. Законопроект, которым предлагается ввести уже с декабря этого года ежегодную выплату&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tatar-inform.ru/news/pravitelstvo-scitaet-proekt-o-vyplate-13-i-pensii-rossiyanam-protivorecashhim-zakonu-5889221'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Правительство считает проект о выплате 13-й пенсии ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS_iUUptqyVx_ys_pALWCSZYmtzKPcX5jS0MnJCpO9SO1dFCR9_swdlBbJ6BlsWAbLbAbN3Q-ia" alt="Правительство считает проект о выплате 13-й пенсии ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Правительство России дало отрицательный отзыв проекту о ежегодной 13-й пенсии. По мнению политиков, эта инициатива противоречит пенсионному законодательству&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vedomosti.ru/society/news/2022/12/06/954022-v-gosdumu-vnesli'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Госдуму внесли законопроект о выплате 13-й пенсии</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQCTQyjVdJvsTbC_IDFV-WSvGEp3mN9mYIMiDjY7Q3tyXnlDqfM9Hfc9G2NFI7msD18SGRb0si2" alt="В Госдуму внесли законопроект о выплате 13-й пенсии" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Депутаты партии «Справедливая Россия — За правду» внесли в Госдуму законопроект о ежегодной выплате 13-й пенсии – дополнительно к пенсии по старости,&nbsp;...</p></div>
            </div>
        </a><a href='https://infokam.su/pravitelstvo-rossii-ne-podderzhalo-zakonoproekt-o-vyplate-13-j-pensii-v-dekabre.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Правительство России не поддержало законопроект о выплате ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQQ52Xc_foy6SX-0eRzwog5QAACvLNvfjtZuYaHn9gJy0zaZ4_PZQAhbox5WZvgxkEEPMmC3SFl" alt="Правительство России не поддержало законопроект о выплате ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Проект закона о введении с декабря 2022 года ежегодной выплаты 13-й пенсии по старости получил отрицательный отзыв правительства по причине внутреннего&nbsp;...</p></div>
            </div>
        </a><a href='https://moika78.ru/news/2022-12-07/834263-poluchat-li-pensionery-pered-novym-godom-13-yu-pensiyu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Получат ли пенсионеры перед Новым годом 13-ю пенсию ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTbfe7b566NU7hcoHO4Ja4kysV9-w2dzHhc7TQv7og7aNQWQsizNRQInLVi0xQMN4iOuQruMBDX" alt="Получат ли пенсионеры перед Новым годом 13-ю пенсию ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>6 декабря в Государственную думу внесли законопроект, согласно которому пенсионерам предлагается выплачивать дополнительную сумму накануне Нового года — по&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}