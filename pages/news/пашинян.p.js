import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Пашинян</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Пашинян"/>
        <meta name="description" content="Trending News about Пашинян" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Пашинян</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/2/2/22389_b_1300x820.jpg" alt="Пашинян"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/odkb-zagrozhue-rozval-pashinyan-vlashtuvav-1669229873.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ОДКБ грозит развал? Пашинян устроил демарш, а Лукашенко ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQbSSGKKkrbR6GtY38dBGEEuzoJyXa5NFUj08dwrrbfVm3PMGl6h5n2vlNVslnl_TEMwXQz1eiI" alt="ОДКБ грозит развал? Пашинян устроил демарш, а Лукашенко ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Лидеры Армении и Беларуси отличились заявлениями на саммите ОДКБ, из которых следует, что организации может грозить развал.</p></div>
            </div>
        </a><a href='https://espreso.tv/pashinyan-vchiniv-demarsh-na-samiti-odkb-vidmovivshis-pidpisuvati-spilni-dokumenti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пашинян вчинив демарш на саміті ОДКБ, відмовившись ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRNp3_CqEBiRi-h_G7Gz4IGQNxMX61hzGzBPD6TVUVbnDHekjafcAbOaC6JkERG5jgtYt7Dhs7-" alt="Пашинян вчинив демарш на саміті ОДКБ, відмовившись ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Прем&#39;єр-міністр Вірменії на саміті ОДКБ в Єревані відмовився підписувати проєкти спільних декларацій і документи про державні заходи щодо надання допомоги&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5681603'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пашинян отказался подписывать декларацию Совета ОДКБ по ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRYJ_kXnhpqUMXp7vse13it-pwa8GJKjcG9CqiLnMta8FMR0P7sWhzn93iQgvMcp2FZe-W4MwLU" alt="Пашинян отказался подписывать декларацию Совета ОДКБ по ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Премьер-министр Армении Никол Пашинян заявил, что проект декларации Совета коллективной безопасности Организации Договора о коллективной безопасности в&nbsp;...</p></div>
            </div>
        </a><a href='https://news.obozrevatel.com/ukr/abroad/pashinyan-na-samiti-odkb-vidmovivsya-pidpisati-proekt-deklaratsii-kolektivnoi-bezpeki-scho-oznachae-demarsh.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пашинян на саміті ОДКБ відмовився підписати проєкт декларації ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ7uUUz0UMbiDWSya6QgMIVphVUK54H91os4ifl0LtM4t4BRLcSWQvpLLtHJyKVneLMIL63_iBt" alt="Пашинян на саміті ОДКБ відмовився підписати проєкт декларації ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>17,3 т. Лише перевірена інформація в нас у Telegram-каналі Obozrevatel та Viber. Не ведіться на фейки!</p></div>
            </div>
        </a><a href='https://censor.net/ua/news/3382631/pashynyan_vidmovyvsya_pidpysuvaty_dokumenty_odkb_yaki_stosuyutsya_nadannya_dopomogy_virmeniyi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пашинян відмовився підписувати документи ОДКБ, які ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQQrGOQRmRzYGxEO2wVKofnsFYA4s5hPXADX1tnzzv2WnNF3EmXVaW26XBVLg42BpXFYu_X3tqd" alt="Пашинян відмовився підписувати документи ОДКБ, які ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Виступаючи на саміті, який проходив в Єревані, Пашинян закликав організацію дати політичну оцінку дій Азербайджану проти Вірменії, які він вважає агресією,&nbsp;...</p></div>
            </div>
        </a><a href='https://newsua.one/news-world/75575.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пашинян розкритикував ОДКБ та відмовився підписувати ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTv38jhPHvf_RIj5sBSrNSrIQpU85mISdOF6joPmbOuh2OKK6-nZ26BHalvzuwJQqKqGhAlgmes" alt="Пашинян розкритикував ОДКБ та відмовився підписувати ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Прем&#39;єр-міністр Вірменії Нікол Пашинян відмовився підписувати проект декларації проект про спільні заходи щодо надання допомоги його країні.</p></div>
            </div>
        </a><a href='https://eadaily.com/ru/news/2022/11/23/pashinyan-poyasnil-svoy-otkaz-podpisat-dva-dokumenta-sammita-odkb-v-erevane'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пашинян пояснил свой отказ подписать два документа саммита ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcShzusOIxuSddLigQc2WtxEKv5JESFkLvBVcqEcEHiXix_schkqMz84f2-E0_JodqhKot23Dh3s" alt="Пашинян пояснил свой отказ подписать два документа саммита ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Речь шла о «Декларации СКБ ОДКБ» и «О совместных мерах по оказанию помощи Республике Армения». Глава правительства отметил, что эти документы недостаточно&nbsp;...</p></div>
            </div>
        </a><a href='https://tsargrad.tv/news/demarsh-na-odkb-pashinjan-zajavil-o-fiasko-i-otkazalsja-raspisyvatsja_671046'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Демарш на ОДКБ: Пашинян заявил о фиаско и отказался ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQJZ5DazwTJlXOsdWXa9APSrSViLH66PE38RSA9w6VN7MxJJMetF6mWYA35148TwU4ItY2WhtrG" alt="Демарш на ОДКБ: Пашинян заявил о фиаско и отказался ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Премьер-министр Армении Никол Пашинян отказался на саммите ОДКБ от подписания проекта декларации Совета коллективной безопасности и проекта о совместных&nbsp;...</p></div>
            </div>
        </a><a href='https://eadaily.com/ru/news/2022/11/23/pashinyan-putinu-otnosheniya-armenii-i-rossii-razvivayutsya-bolshimi-tempami'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пашинян — Путину: Отношения Армении и России развиваются ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRG5zpBqdrJUufYWWXL1XzWkbB8LOQ8mGBUjxfcXtpM0ncS4PgI7GiVwbb-MtcGjSf9iHnTLkwQ" alt="Пашинян — Путину: Отношения Армении и России развиваются ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Глава правительства закавказской республики констатировал развитие двусторонних экономических связей «большими темпами». 23 ноября 2022. EADaily.</p></div>
            </div>
        </a><a href='https://www.rosbalt.ru/world/2022/11/23/1979482.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пашинян: Ереван ожидает от ОДКБ проведения политико ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT9mlZ_iBMpoC1bJYU8wi7_vkRz13tMFA6fF41vSWQibdU5nG6Vi3og72fvpddzFZQ3mxqLEpUq" alt="Пашинян: Ереван ожидает от ОДКБ проведения политико ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Премьер-министр Армении Никол Пашинян заявил, что Ереван ожидает от ОДКБ проведения политико-дипломатической работы с Баку для вывода войск с суверенной ар.</p></div>
            </div>
        </a>
        </Template></>;
}