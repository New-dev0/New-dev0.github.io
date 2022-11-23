import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Энергоатом</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Энергоатом"/>
        <meta name="description" content="Trending News about Энергоатом" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Энергоатом</h1>
            <Image width={800} height={500} src="https://static.ukrinform.com/photos/2018_04/thumb_files/630_360_1522682136-2819.jpg" alt="Энергоатом"/>
            <h3>Recent News</h3>
            <a href='https://www.ukrinform.ua/rubric-economy/3619153-rosiani-vikoristovuut-zaes-ak-vijskovu-bazu-energoatom.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>росіяни використовують ЗАЕС як військову базу - Енергоатом</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSLRL-P6n8EJTYmrvtwtG6Ca1cZzFdqI1zuKtleVPWrIgElYdD5kexZOhy2vdBYVi4omp-UUY38" alt="росіяни використовують ЗАЕС як військову базу - Енергоатом" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Про це розповів президент НАЕК «Енергоатом» Петро Котін виданню The Economist, передає Укрінформ із посиланням на Телеграм компанії.</p></div>
            </div>
        </a><a href='https://ukranews.com/ua/news/896556-okupanty-ne-dopuskayut-magate-do-zaporizkoyi-aes-pislya-obstriliv-energoatom'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Окупанти не допускають МАГАТЕ до Запорізької АЕС після ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcST6Cnr7amRM7nHoDwRZVsJpTAjfvCWEmqCGv4PLpTV2BXlz63Rqx0rynNW4cDip5kwHbCQBqq9" alt="Окупанти не допускають МАГАТЕ до Запорізької АЕС після ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Російські окупанти не допускають місію Міжнародного агентства з атомної енергії (МАГАТЕ) на Запорізьку атомну електростанцію (Енергодар, Запорізька область)</p></div>
            </div>
        </a><a href='https://borgexpert.com/news/okupanty-vyvely-z-ladu-infrastrukturu-dlia-zapusku-enerhoblokiv-zaporizkoi-aes-enerhoatom'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Окупанти вивели з ладу інфраструктуру для запуску ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR325dWiXK_VJtj3s69zdMqAkuZDjn7svwUAfs9wUxZVjBim-H53smM46r0n6Qu08OhnpJnVN-j" alt="Окупанти вивели з ладу інфраструктуру для запуску ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Також зафіксовано три влучання в районі підстанції &quot;Райдуга&quot;. Відомості про пошкодження та руйнування там ще з&#39;ясовуються.</p></div>
            </div>
        </a><a href='https://gordonua.com/news/war/rossiyane-ne-dayut-magate-proverit-sostoyanie-zaes-posle-obstrelov-energoatom-1637175.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Россияне не дают МАГАТЭ проверить состояние ЗАЭС после ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTbkHgPnbi20Mh0631rADQUDYCFx3K0OhyrlcF7K5JpG-aNEEh1Eych7BOsoxIfxlX2BIVYFxVf" alt="Россияне не дают МАГАТЭ проверить состояние ЗАЭС после ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российские оккупанты ограничивают доступ МАГАТЭ на Запорожскую атомную электростанцию после обстрелов 19-го и 20...</p></div>
            </div>
        </a><a href='https://borgexpert.com/ru/news/okkupanty-vyvely-yz-stroia-ynfrastrukturu-dlia-zapuska-enerhoblokov-zaporozhskoj-aes-enerhoatom'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Оккупанты вывели из строя инфраструктуру для запуска ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR325dWiXK_VJtj3s69zdMqAkuZDjn7svwUAfs9wUxZVjBim-H53smM46r0n6Qu08OhnpJnVN-j" alt="Оккупанты вывели из строя инфраструктуру для запуска ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Также зафиксировано три попадания в районе подстанции &quot;Радуга&quot;. Сведения о повреждениях и разрушениях там еще выясняются.</p></div>
            </div>
        </a><a href='https://ukranews.com/news/896577-okkupanty-ne-dopuskayut-magate-na-zaporozhskuyu-aes-posle-obstrelov-energoatom'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Оккупанты не допускают МАГАТЭ на Запорожскую АЭС после ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcST6Cnr7amRM7nHoDwRZVsJpTAjfvCWEmqCGv4PLpTV2BXlz63Rqx0rynNW4cDip5kwHbCQBqq9" alt="Оккупанты не допускают МАГАТЭ на Запорожскую АЭС после ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российские оккупанты не допускают миссию Международного агентства по атомной энергии (МАГАТЭ) на Запорожскую атомную электростанцию ​​(Энергодар,&nbsp;...</p></div>
            </div>
        </a><a href='https://gordonua.com/ukr/news/war/rosijani-ne-dajut-magate-pereviriti-stan-zaes-pislja-obstrilu-energoatom-1637175.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Росіяни не дають МАГАТЕ перевірити стан ЗАЕС після обстрілів ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTbkHgPnbi20Mh0631rADQUDYCFx3K0OhyrlcF7K5JpG-aNEEh1Eych7BOsoxIfxlX2BIVYFxVf" alt="Росіяни не дають МАГАТЕ перевірити стан ЗАЕС після обстрілів ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Російські окупанти обмежують доступ МАГАТЕ на Запорізьку атомну електростанцію після обстрілів 19-го й 20 листопада....</p></div>
            </div>
        </a><a href='https://typical.if.ua/rosiyani-ne-vpuskayut-ekspertiv-magate-na-zaporizku-aes-pislya-obstriliv-energoatom'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Росіяни не впускають експертів МАГАТЕ на Запорізьку АЕС після ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSARIJcR8gZKcriFI__hDZh4AR2FoQUw7gFsidAhZL2OienjJ7ERIsMRohnMVkxPW_0UN-R0pzh" alt="Росіяни не впускають експертів МАГАТЕ на Запорізьку АЕС після ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Окупанти таким чином ховають свідчення своїх злочинів, кажуть в &quot;Енергоатомі&quot;. Рашисти обмежують доступ експертам Міжнародного агентства з атомної енергії&nbsp;...</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/ukrayina/rossiyane-ne-puskayut-ekspertov-magate-na-zaporozhskuyu-aes-posle-obstrelov-energoatom-2206513.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Россияне не пускают экспертов МАГАТЭ на Запорожскую АЭС ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRgxBtseKsqvLuADzb8syS99WzZaiJ8ava0nIp9UKeQFALqaMRbKRbcY1M5JdUSEa3dwFf_ytik" alt="Россияне не пускают экспертов МАГАТЭ на Запорожскую АЭС ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Рашисты ограничивают доступ МАГАТЭ на Запорожскую АЭС после обстрелов. Таким образом, Россия прячет свидетельства своих преступлений и пытается обвинить в&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/11/21/7377313/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Росіяни обмежують доступ МАГАТЕ на ЗАЕС після обстрілів</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSXJJsviDiOiFsFvM5lP67uVedky6YC9ZgsGn9lMGxI37P1isgXTJPySCOdZW8TGHzit2unB1mp" alt="Росіяни обмежують доступ МАГАТЕ на ЗАЕС після обстрілів" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Російські окупанти на пропозицію генерального директора МАГАТЕ Рафаеля Гроссі провести оцінку пошкоджень на Запорізькій АЕС відповіли,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}