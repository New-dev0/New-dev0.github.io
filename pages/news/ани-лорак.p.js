import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ани Лорак</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ани Лорак"/>
        <meta name="description" content="Trending News about Ани Лорак" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ани Лорак</h1>
            <Image width={800} height={500} src="https://fakty.ua/photos2/article/41/15/411567_fb_132150.jpg" alt="Ани Лорак"/>
            <h3>Recent News</h3>
            <a href='https://fakty.ua/ru/411567-zaprodanka-ani-lorak-probila-ocherednoe-dno'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Предательница Ани Лорак пробила очередное дно</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSv6NEohQxUZWY4y1NIM2N8_tlwMIvwRN28ghG6k7EFDEij-I_BIKjfLHwuCc6KOOKJJgzPpEWB" alt="Предательница Ани Лорак пробила очередное дно" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Она опубликовала пост в Инстаграм, в котором в очередной раз поразила своими недалекими размышлениями. В этот раз «голубь мира» назвала войну в Украине хаосом,&nbsp;...</p></div>
            </div>
        </a><a href='https://showbiz.24tv.ua/ru/ani-lorak-nazvala-vojnu-ukraine-haosom-chto-ej-otvetili-showbiz_n2208349'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Предательница снова оскандалилась: Ани Лорак назвала войну ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQGga4VNd-G7Gg4Rm332A8c0tLYQW_Sf9wmmda1QeDnS0hecFwfvU2ArkrJOSS4-c3zSOtXcOqU" alt="Предательница снова оскандалилась: Ани Лорак назвала войну ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ани Лорак продолжает строить карьеру в России. Предательница оскандалилась заявлением о войне, опубликовав фото с моря. Больше узнайте на Showbiz.</p></div>
            </div>
        </a><a href='https://fraza.com/news/318765-ukrainskaja-pevitsa-stranno-prokommentirovala-prodolzhajuschujusja-vojnu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Украинская певица странно прокомментировала ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTiboboPOz4bb1Vq_DyKWAoE1n3IzEweUORnqsipaDMR1Qh9-OOlWASnsHLmSIQFNUsHOUr8YyF" alt="Украинская певица странно прокомментировала ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ани Лорак высказалась о войне в Украине. Она назвала ее хаосом. Автор: Александр Панько &quot;Фраза&quot;, 30.11.22.</p></div>
            </div>
        </a><a href='https://korrespondent.net/lifestyle/4539927-any-lorak-nazvala-voinu-v-ukrayne-khaosom'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ани Лорак назвала войну в Украине &quot;хаосом&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR1ZMKMfMdLGqpXZCjoRnV8kQ4ZhZmka8sXRBJx4RLEcxU213OR_xuJcilnCokYRniNzypcMXjL" alt="Ани Лорак назвала войну в Украине &quot;хаосом&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В начале полномасштабной войны артистка не осудила страну-агрессора, в которой долгое время проживала и работала.</p></div>
            </div>
        </a><a href='https://news.obozrevatel.com/show/people/haos-razrushaet-mechtyi-predatelnitsa-lorak-napisala-ocherednoj-mirotvorcheskij-post-i-poluchila-otvet-ot-razyarennyih-ukraintsev.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Хаос разрушает мечты&quot;: предательница Лорак написала ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQXb5zpRZ-D6kDVgbeMre26ncVNR5Bai1n_luoGnYeWcRxIg4d8l_ESIyQwuyDvhhNU5zEaFgvB" alt="&quot;Хаос разрушает мечты&quot;: предательница Лорак написала ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Только проверенная информация у нас в Telegram-канале Obozrevatel и в Viber . Не ведитесь на фейки! 0 copy.</p></div>
            </div>
        </a><a href='https://telegraf.com.ua/lifestyle/2022-11-30/5724522-bessovestnaya-besprintsipnaya-i-beznravstvennaya-poklonnitsu-putina-ani-lorak-snova-zakheytili-v-seti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Бессовестная, беспринципная и безнравственная&quot;: поклонницу ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRvqTiuss-8QHrRWQ8SB3zVuxndx4tgwGn93QRIMhQZ72XJFHZNVGC18VVUyCNkwJQp5WXwRYyZ" alt="&quot;Бессовестная, беспринципная и безнравственная&quot;: поклонницу ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Певица Ани Лорак разозлила сеть очередным постом в Инстаграм. Почему - читайте в материале Телеграфа.</p></div>
            </div>
        </a><a href='https://life.fakty.com.ua/ru/showbiz/pryyid-u-mariupol-harkiv-herson-ani-lorak-otrymala-vidpovid-vid-rozlyuchenyh-ukrayincziv/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Приедь в Мариуполь, Харьков, Херсон! Ани Лорак получила ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT3bVXfJeCoP4TT5Iu6YDahh6J17F3Y6TH3N6YqJ77qkR0jjRjJVjh2xkcvPOrD8rz054bON5aM" alt="Приедь в Мариуполь, Харьков, Херсон! Ани Лорак получила ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Певица-предательница Ани Лорак в очередной раз вызвала волну хейта постом в Instagram о хаосе и любви. Артистка продолжает делать вид, что в ее родной&nbsp;...</p></div>
            </div>
        </a><a href='https://teleprogramma.pro/news/nid4360773_au73662auauau_cr73662crcrcr_poziciya-yasna-ani-lorak-10-dekabrya-spoet-v-moskovskom-crocus-city-hall'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Позиция ясна: Ани Лорак 10 декабря споет в московском Crocus ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSYmIOMAZOh2viliWXq2Zeef8Wy7CLQEduQH2UH2zMkKNeyb18v-U3RO7APYNdEJvjHcH3s_93g" alt="Позиция ясна: Ани Лорак 10 декабря споет в московском Crocus ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Имя певицы появилось в списке артистов, которые уже 10 декабря 2022 года выступят на сборном концерте «Новый год «Жара» в столичном Crocus City Hall. Помимо&nbsp;...</p></div>
            </div>
        </a><a href='https://informing.ru/2022/12/01/ani-lorak-sdelala-svoj-vybor-7-dekabrja-ona-vyjdet-na-scenu-v-sbornom-moskovskom-koncerte.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ани Лорак сделала свой выбор: 7 декабря она выйдет на сцену в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQsxjdNKJzeT2mXIFT9c4QTbeD7K9LJbCTMXTDXLXLP3bs3cRtGLKGZpmFmsRv4KA6753gu4rfO" alt="Ани Лорак сделала свой выбор: 7 декабря она выйдет на сцену в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>После начала специальной военной операции (СВО) по освобождению Донбасса российский шоу-бизнес раскололся на части. Кто-то из звезд открыто не поддержал&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}