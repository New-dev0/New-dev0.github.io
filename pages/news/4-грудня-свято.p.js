import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>4 грудня свято</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,4 грудня свято"/>
        <meta name="description" content="Trending News about 4 грудня свято" /></Head><Template>
            <h1 style={{fontSize: "30"}}>4 грудня свято</h1>
            <Image width={800} height={500} src="https://lviv.media/static/content/thumbs/1200x630/2/e6/droujg---c1200x630x50px50p-up--9d11c4e96b2b9370cc42f7bb72e8ae62.jpg" alt="4 грудня свято"/>
            <h3>Recent News</h3>
            <a href='https://lviv.media/religiya/60727-4-grudnya-cerkovni-svyata-imeninniki-prikmeti-ta-sho-ne-mozhna-robiti/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>4 грудня: церковні свята, іменинники, прикмети та що не можна ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRXkhjhO2TMXxEterIkPrSV2DTs8BLp_m9t4bQycvLm0ii5744hu_q-xdsh8XmebZgLsPVfFC-x" alt="4 грудня: церковні свята, іменинники, прикмети та що не можна ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Чиї іменини святкувати, яке церковне свято 4 грудня, прикмети та заборони — про все пише LVIV.MEDIA…</p></div>
            </div>
        </a><a href='https://zn.ua/ukr/UKRAINE/tretja-prechista-istorija-svjata.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Третя Пречиста: історія свята</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQQgFjKkhtMGVp6gC9R6ds68dXIEDK6p-0A61Y0Jufl91cV64ip-3V113ZZEeuvP1tpAkNWtnPz" alt="Третя Пречиста: історія свята" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Згідно з Писанням, у Йоакима та Анни, батьків Діви Марії, довгий час не було дітей. Вони благали Бога, щоб він послав їм дитину. Бог почув молитви і виконав&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.ua/lite/holidays/vvedenie-vo-hram-presvyatoy-bogorodicy-2022-tradicii-zaprety-i-primety-12064680.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Введення в храм Пресвятої Богородиці 2022: як відзначити і що ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTVPb2QzV7Lf4QmC5OfDNiwIA1wa2IPcGMVu8C6ZwJWD1DM5cSIEoNrZqFVOIeELwRmEuyidtFT" alt="Введення в храм Пресвятої Богородиці 2022: як відзначити і що ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Введення в храм Пресвятої Богородиці відзначають 4 грудня. УНІАН розповів, як слід відзначити це свято, що не можна робити і які є прикмети погоди.</p></div>
            </div>
        </a><a href='https://news.glavred.net/primety-na-4-dekabrya-nazvany-5-vazhnyh-veshchey-kotorye-zapreshcheno-delat-v-bolshoy-prazdnik-10430036.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Прикмети на 4 грудня: названо 5 важливих речей, які ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRdFgTlu6FbCPX8twgiRfv7Fmw82Er98sDbGXvYWcmcmuS-bpXYnNKaugbNnonhDha20ugCvSSI" alt="Прикмети на 4 грудня: названо 5 важливих речей, які ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>4 грудня церква відзначає велике свято Введення в храм Пресвятої Богородиці. Що не можна робити 4 грудня і як не потрапити в біду у велике свято.</p></div>
            </div>
        </a><a href='https://soc.obozrevatel.com/ukr/prazdniki/vvedennya-v-hram-presvyatoi-bogoroditsi-2022-scho-kategorichno-ne-mozhna-robiti-u-svyato.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Введення в храм Пресвятої Богородиці 2022: що категорично не ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRf4ZI15GQvLvBUTHUpy_59HPtYpcihmOkTRhH-IXcqQcBRWK1O4KBQnCS5KhDU44VbOczyTqMd" alt="Введення в храм Пресвятої Богородиці 2022: що категорично не ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>12,4 т. Лише перевірена інформація в нас у Telegram-каналі Obozrevatel та Viber. Не ведіться на фейки!</p></div>
            </div>
        </a><a href='https://vesti.ua/uk/poleznoe-uk/semja-uk/vvedenie-bogoroditsy-vo-hram-pozdravleniya-v-stihah-i-krasivye-kartinki'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Введення Богородиці у храм: привітання у віршах та красиві ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT-IFyNMLX-j780-1qLMjr7ghS1Z-CC7bPXJjbbLJdPokCWqA0b-_AT8MmHhbHHZwsA7_hPo2cq" alt="Введення Богородиці у храм: привітання у віршах та красиві ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Зібрали для вас красиві вірші та побажання, які допоможуть привітати близьких до Введення у храм Пресвятої Богородиці 2022.</p></div>
            </div>
        </a><a href='https://gazeta.ua/articles/life/_tretya-prechista-narodni-viruvannya-prikmeti-ta-zaboroni/1123470'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Третя Пречиста ‒ народні вірування, прикмети та заборони</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRKWdxKTIHFsWrOs_ycHCBs7UW18IR290N2vgSnlRmSFccYDdsF4npDCJsWgbvwwaQgT93xM6cZ" alt="Третя Пречиста ‒ народні вірування, прикмети та заборони" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Свято Введення до храму Пресвятої Богородиці християни східного обряду відзначають 4 грудня. Це одне з двонадесятих свят, яке ще називають Третьою Пречистою&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}