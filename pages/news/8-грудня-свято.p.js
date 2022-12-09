import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>8 грудня свято</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,8 грудня свято"/>
        <meta name="description" content="Trending News about 8 грудня свято" /></Head><Template>
            <h1 style={{fontSize: "30"}}>8 грудня свято</h1>
            <Image width={800} height={500} src="https://images.unian.net/photos/2022_11/thumb_files/620_324_1668665167-1893.jpg?1" alt="8 грудня свято"/>
            <h3>Recent News</h3>
            <a href='https://www.unian.ua/lite/holidays/narodnyy-prazdnik-8-dekabrya-2022-obychai-primety-chto-nelzya-delat-12070197.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>8 грудня: народні звичаї та прикмети погоди, що не можна ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR8W17q9ZVYMNAEeOqwuDwiahSpsEtjo10WwEQcct5rhOMzK3CTSCCyJthtS69W_njPI2HXOpaa" alt="8 грудня: народні звичаї та прикмети погоди, що не можна ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>8 грудня 2022 року відзначається народне свято день Клима. Дізнайтеся, які обряди проводяться в цей день, що не можна робити і які прикмети погоди.</p></div>
            </div>
        </a><a href='https://glavcom.ua/country/society/8-hrudnja-jake-sohodni-svjato-traditsiji-ta-zaboroni-893940.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>8 грудня: яке сьогодні свято, традиції та заборони</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQS8rO4iTYAuwMhtidt6uxB222DkpPSxhsLVTIVAE82mzHwnYXSvw5dk3MIOK8u8nzOFOwK9Inb" alt="8 грудня: яке сьогодні свято, традиції та заборони" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сьогодні не можна сумувати та накопичувати негативні думки. У четвер, 8 грудня, відзначають Всесвітній день клімату та День «Візьми до відома».</p></div>
            </div>
        </a><a href='https://lviv.media/religiya/60983-8-grudnya-cerkovni-svyata-imeninniki-prikmeti-i-sho-ne-mozhna-robiti/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>8 грудня: церковні свята, іменинники, прикмети і що не можна ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSYIdIrxU43flUiTJcGTNi4fji671qkmQ6JhOtFZ-vYWTgorVlQrtzbhDdcmg64_nkRe1FldHT9" alt="8 грудня: церковні свята, іменинники, прикмети і що не можна ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Чиї іменини святкувати, яке церковне свято 8 грудня, прикмети та заборони — про все пише LVIV.MEDIA…</p></div>
            </div>
        </a><a href='https://tsn.ua/ukrayina/8-grudnya-yake-cerkovne-svyato-v-pravoslavnomu-kalendari-2218390.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>8 грудня — яке церковне свято в православному календарі</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS24tKN2kW52gihtbGq2foflQk30UbgmVB_zp6KlreGcCgEXi_2_HlTgl6d9swU_HqiisqtGzwG" alt="8 грудня — яке церковне свято в православному календарі" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Яке церковне свято 8 грудня святкують віряни? Церква вшановує пам&#39;ять святого Климента та священномученика Петра.</p></div>
            </div>
        </a><a href='https://1plus1.ua/novyny/ake-sogodni-svato-8-grudna-svatogo-apostola-klimenta-so-ne-mozna-robiti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Яке сьогодні свято — 8 грудня: святого апостола Климента (що ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQmyst4Fvkc8MfXvwyPsijUL9jLQ2PfsLv1zQiP5Ps4jfyEVAkAezzJEylHGkf8zcLdzcHBERbs" alt="Яке сьогодні свято — 8 грудня: святого апостола Климента (що ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Православна церква 8 грулня вшановує пам&#39;ять папи Римського Климента I, одного з апостолів від сімдесяти. Климент провідував Євангеліє на українських теренах,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rbc.ua/rus/styler/svyato-8-grudnya-shcho-mozhna-robiti-prikmeti-1670400603.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Свято 8 грудня: що не можна робити, прикмети, кого привітати з ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR0gQh2nEL1wA-kfN_I717o0EwVxGtWcpxF6OpuU-wTAwpKXw2GIk8JaNypJWrT44ZKMNRI9_b6" alt="Свято 8 грудня: що не можна робити, прикмети, кого привітати з ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>8 грудня – це церковний день пам&#39;яті священномученика Климента. У матеріалі Styler ви прочитаєте про всі прикмети та заборони цього дня.</p></div>
            </div>
        </a><a href='https://interfax.com.ua/news/general/877020.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>8 грудня: Цей день в Україні та в світі</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSDoF1HNG4-FAtjkk0VeqqTLF8gTJrnP0nXSeXAk0MbCR8TRl1195w3wK3eQ0Z3krmz7Xkqjs-X" alt="8 грудня: Цей день в Україні та в світі" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ДЕНЬ 288 РОСІЙСЬКА АГРЕСІЯ - DAY 288 RUSSIAN AGRESSION. 8 грудня – Міжнародний день художника, Всесвітній день клімату та День мандрівника у часі.</p></div>
            </div>
        </a>
        </Template></>;
}