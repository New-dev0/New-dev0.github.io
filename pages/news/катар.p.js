import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Катар</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Катар"/>
        <meta name="description" content="Trending News about Катар" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Катар</h1>
            <Image width={800} height={500} src="https://racurs.ua/content/images/Publication/News/17/69/29/preview_w696zc1.jpg" alt="Катар"/>
            <h3>Recent News</h3>
            <a href='https://racurs.ua/ua/n176929-katar-zaboronyv-pyvo-na-stadionah-pid-chas-chs-z-futbolu-za-dva-dni-do-startu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар заборонив пиво на стадіонах під час ЧС з футболу — за ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSLlnZLKbzORgjtbe4J_IPn9sSsi0Vn3FlJ8hcsymm2IZR5o23LIuudqjDtYM1QMUDOalOAAKyG" alt="Катар заборонив пиво на стадіонах під час ЧС з футболу — за ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Реалізація пива була передбачена контрактом між FIFA і AB InBev, власником бренду Budweiser. Контракт оцінили в 75 млн дол. В офіційній заяві ФІФА не&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/world/2022/reviews/futbol-pravda-li-chto-katar-podkupil-ekvador-radi-pobedy-v-startovom-matche-chm-2022-podrobnosti-1999812/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар обвиняют в подкупе соперника на матч чемпионата мира ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRw2ADht1Wd07jcADSk28Q3KrKCeZeKWRrO8wFfxDjmnIPi2q900w0mmrQeGCMF7tJM-XKhf5mh" alt="Катар обвиняют в подкупе соперника на матч чемпионата мира ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В четверг вечером журналист Амджад Таха сделал в соцсетях серьезное заявление: «Катар заплатил восьмерым эквадорским игрокам 7,4 миллиона долларов,&nbsp;...</p></div>
            </div>
        </a><a href='https://interfax.com.ua/news/sport/873170.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Катар прибувають уболівальники напередодні старту ЧС з ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5xZrk2Ng0ys0RPchXfi2mJ0aJgGXezCLkyIRr6lfVOQ1jBSSWiK6tOv6ykkt6FH_2uK-0PHjI" alt="У Катар прибувають уболівальники напередодні старту ЧС з ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Групи вболівальників із різних країн світу прибувають до Катару, де в неділю розпочнеться чемпіонат світу з футболу, повідомляють близькосхідні ЗМІ.</p></div>
            </div>
        </a><a href='https://focus.ua/sport/537647-ne-prazdnik-a-lovushka-katar-lishil-bolelshchikov-vazhnogo-atributa-na-chm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Не праздник, а ловушка: Катар лишил болельщиков важного ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSUU5JYOdx0CIBu2DczMrOrrKi03TkL_4ZgCvtoARXuSvkWTdZ-QAGc5V36Sk9TXPCqVrWuQoaN" alt="Не праздник, а ловушка: Катар лишил болельщиков важного ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Приближающийся чемпионат мира по футболу будет уникальным во многих аспектах, в том числе — и в плане алкоголя.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4895859-katar-zapretil-prodazhu-piva-na-stadionah-za-dva-dnya-do-nachala-chm-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар запретил продажу пива на стадионах за два дня до ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTDocSqPhzeMuydw4ZVSLjhaX_hLpmSe6-QE9icnuu_PbuFVwYFNOtVPdfOEFk1QG1MUqBthvr9" alt="Катар запретил продажу пива на стадионах за два дня до ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Как информирует New York Times, официальное лицо ЧМ-2022, чьё имя не разглашается из соображений конфиденциальности, подтвердило запрет на продажу алкогольных&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-sports/3617338-katar-zaboroniv-prodaz-alkogolu-bila-stadioniv-cs2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар заборонив продаж алкоголю біля стадіонів ЧС-2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQzYOC7DmPKxWFwgcCX15WCGlZtwqH069XO3mlbuFMDAlfyCmJu77Gs8kH9w0bepjSE6uu9pDqR" alt="Катар заборонив продаж алкоголю біля стадіонів ЧС-2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Купити можна буде лише безалкогольне пиво. Катар заборонив продаж алкогольних напоїв на стадіонах чемпіонату світу-2022 та на прилеглих до них територіях,&nbsp;...</p></div>
            </div>
        </a><a href='https://ru.euronews.com/2022/11/18/qatar-world-cup-beer-ban'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар запретил пиво на стадионах</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSI6jozbek-7y1ClxBkBeLd2nYq9gkctpYkjhMjkzqHQt6YleRadDHkmwLbe4VVsv8be7wRwJS8" alt="Катар запретил пиво на стадионах" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>За два дня до начала футбольного Чемпионата мира власти Катара запретили продажу пива на стадионах. Это сообщение официально подтвердили в FIFA.</p></div>
            </div>
        </a><a href='https://football24.ua/ru/katar_jekvador_gde_smotret_online_20_11_2022_otkrytie_chm_2022_n747845/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар – Эквадор: где смотреть матч-открытие ЧМ-2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRd9v2Pj5-ZO1-fYMZZoC397NqOI4oWNbfXXRAIubII-M7MoZL1RXinLRi2Ti0yEEU2Pf8xW1Oc" alt="Катар – Эквадор: где смотреть матч-открытие ЧМ-2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Катар будет принимать Эквадор в стартовом матче чемпионата мира. Где смотреть матч-открытие ЧМ-2022, подскажет &quot;Футбол 24&quot;. Новости футбола Футбол 24.</p></div>
            </div>
        </a><a href='https://www.ua-football.com/ua/foreign/worldcup/1668764652-katar-naynyav-pakistanskih-ubolivalnikiv-dlya-zapovnennya-tribun-na-chs-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар найняв пакистанських уболівальників для заповнення ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQkAFuHCjaf78nUPYabOgJovO4eRCTUg7y6HU7mazD-4a5PfkBfYZxH8PRJK__N6eTeUfrCz6tV" alt="Катар найняв пакистанських уболівальників для заповнення ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>18-11-2022 ✓ Чемпіонат світу FIFA. Несподівано: Хазяїн чемпіонату світу-2022 Катар найняв пакистанських уболівальників, щоб вони заповнювали стадіони,&nbsp;...</p></div>
            </div>
        </a><a href='https://sport.24tv.ua/katar-naynyav-pakistanskih-vbolivalnikiv-abi-ti-zapovnili-stadioni_n2200438'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Брак інтересу, – Катар найняв пакистанських вболівальників, аби ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTwAtqgpxqlZAkbCCNfphgHLyRbVCh5gjbrJm_ZY-1i1599_leczbUi21ZWmfd9XC-Nx_40yzLl" alt="Брак інтересу, – Катар найняв пакистанських вболівальників, аби ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Чемпіонат Світу в Катарі не викликав очікуваного інтересу вболівальників зі всього світу. Пакистанські вболівальники-найманці за оплату будуть наповнювати&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}