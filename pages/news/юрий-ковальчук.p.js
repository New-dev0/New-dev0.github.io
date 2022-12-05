import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Юрий Ковальчук</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Юрий Ковальчук"/>
        <meta name="description" content="Trending News about Юрий Ковальчук" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Юрий Ковальчук</h1>
            <Image width={800} height={500} src="" alt="Юрий Ковальчук"/>
            <h3>Recent News</h3>
            <a href='https://fakty.com.ua/ua/svit/rosiya/20221204-rosijskyj-oligarh-yurij-kovalchuk-pidburyuvav-putina-do-napadu-na-ukrayinu-wsj/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Російський олігарх Юрій Ковальчук підбурював Путіна до нападу ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTfZZuRb-nc3_KN8XMjDO4papSHAlifr7DAoBlNCuKl_Y2e0-7hYXjTNmyzeBiXal-M7aTxNS8I" alt="Російський олігарх Юрій Ковальчук підбурював Путіна до нападу ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>71-річний російський мільярдер Юрій Ковальчук є одним із найзатятіших прихильників рішення Володимира Путіна напасти на Україну. На думку Ковальчука, війна.</p></div>
            </div>
        </a><a href='https://nv.ua/ukr/world/countries/yuriy-kovalchuk-pidshtovhnuv-putina-pochati-viynu-proti-ukrajini-ta-populyarizuye-jiji-wsj-50288576.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Підштовхнув до повномасштабної війни. Мільярдер Ковальчук ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQHgWDYflP6YcKHs9Rz53bm0X4tASnbcS5N61bAD6taMirt1jMhHLZg2Wx2SADtC4zLA_GIFOl1" alt="Підштовхнув до повномасштабної війни. Мільярдер Ковальчук ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WSJ розповіла, як мільярдер Ковальчук підштовхував Путіна розпочати повномасштабну війну проти України та казав про «слабкий Захід»</p></div>
            </div>
        </a><a href='https://zn.ua/ukr/POLITICS/druh-putina-ta-mediamahnat-jurij-kovalchuk-populjarizuje-vijnu-the-wall-street-journal.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Друг Путіна та медіамагнат Юрій Ковальчук популяризує війну ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRqiIM5iooJ9Z-2JwL64V_gutdK9W2Asaj9pR6qk4cghqUQ01A-ZsxJaZA6S5ujbCWDHaMq5U9Y" alt="Друг Путіна та медіамагнат Юрій Ковальчук популяризує війну ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Хто і як впливає на російські маси? Друг Путіна та медіамагнат Юрій Ковальчук популяризує війну – The Wall Street Journal. © РИА Новости.</p></div>
            </div>
        </a><a href='https://nv.ua/world/countries/yuriy-kovalchuk-podtolknul-putina-nachat-voynu-protiv-ukrainy-i-populyariziruet-ee-wsj-50288576.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Подтолкнул к полномасштабной войне. Миллиардер Ковальчук ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQHgWDYflP6YcKHs9Rz53bm0X4tASnbcS5N61bAD6taMirt1jMhHLZg2Wx2SADtC4zLA_GIFOl1" alt="Подтолкнул к полномасштабной войне. Миллиардер Ковальчук ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WSJ рассказала, как миллиардер Ковальчук подстрекал Путина начать полномасштабную войну против Украины и говорил о «слабом Западе»</p></div>
            </div>
        </a><a href='https://zn.ua/POLITICS/druh-putina-i-mediamahnat-jurij-kovalchuk-populjariziruet-vojnu-the-wall-street-journal.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Друг Путина и медиамагнат Юрий Ковальчук популяризирует ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRqiIM5iooJ9Z-2JwL64V_gutdK9W2Asaj9pR6qk4cghqUQ01A-ZsxJaZA6S5ujbCWDHaMq5U9Y" alt="Друг Путина и медиамагнат Юрий Ковальчук популяризирует ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российский олигарх Юрий Ковальчук, называемый &quot;личным банкиром&quot; главы Кремля, помогает российскому диктатору Владимиру Путину укреплять власть и продавать&nbsp;...</p></div>
            </div>
        </a><a href='https://bykvu.com/ua/bukvy/rosiiskyi-miliarder-iurii-kovalchuk-buv-naibilshym-prykhylnykom-povnomasshtabnoho-vtorhnennia-rf-v-ukrainu-wsj/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Російський мільярдер Юрій Ковальчук був найбільшим ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTMkznz9zbyURIxI5kS_mg33Frex2XC7N7wXQDLjCnv17H1BPmyPqIFF1U7pDQkjt5KUUl3P2Zf" alt="Російський мільярдер Юрій Ковальчук був найбільшим ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>За даними ЗМІ, однією з найвпливовіших осіб, які найбільше підтримували президента РФ Володимира Путіна у прагненні повномасштабного вторгнення в Україну,&nbsp;...</p></div>
            </div>
        </a><a href='https://fakty.com.ua/ru/svit/rosiya/20221204-rosijskyj-oligarh-yurij-kovalchuk-pidburyuvav-putina-do-napadu-na-ukrayinu-wsj/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Российский олигарх Юрий Ковальчук подстрекал Путина к ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTfZZuRb-nc3_KN8XMjDO4papSHAlifr7DAoBlNCuKl_Y2e0-7hYXjTNmyzeBiXal-M7aTxNS8I" alt="Российский олигарх Юрий Ковальчук подстрекал Путина к ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>71-летний российский миллиардер Юрий Ковальчук является одним из самых ярых сторонников решения Владимира Путина напасть на Украину. По мнению Ковальчука,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/osobistiy-bankir-ta-drug-putina-hto-prodae-1670066199.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Личный банкир&quot; и друг Путина. Кто продает россиянам войну и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS2qRvsD3JTXNbgt4XE4GEeFRQ2WgPW9U3WhKNjHS-o-NQ5QcH_IQgrhTasubZcrmiwhtpxeaTE" alt="&quot;Личный банкир&quot; и друг Путина. Кто продает россиянам войну и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Олигарх Юрий Ковальчук является личным другом Владимира Путина и продолжает продолжать войну против Украины. Миллиардер владеет СМИ и частью соцсети VK.</p></div>
            </div>
        </a><a href='https://holod.media/2022/12/04/milliarder-yurij-kovalchuk-ubezhdal-putina-nachat-vojnu-s-ukrainoj-chtoby-pokazat-voennuyu-moshh-rossii-the-wall-street-journal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Миллиардер Юрий Ковальчук убеждал Путина начать войну с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Миллиардер Юрий Ковальчук убеждал Путина начать войну с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Wall Street Journal со ссылкой на источники сообщает, что 71-летний миллиардер Юрий Ковальчук был одним из тех, кто убеждал президента России.</p></div>
            </div>
        </a><a href='https://news.obozrevatel.com/ukr/russia/zaklikav-pokazati-silu-rosii-slabkomu-zahodu-v-wsj-nazvali-imya-nablizhenogo-do-putina-yakij-perekonav-jogo-napasti-na-ukrainu.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Закликав показати силу Росії слабкому Заходу: в WSJ назвали ім ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTufWyRQyZGQdQ5AxtDWjUrW_XVuVFxNodUzW4Pg8MA2h3Y0lajxzaQYZCIyXTRxsRPrQuR7z49" alt="Закликав показати силу Росії слабкому Заходу: в WSJ назвали ім ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Закликав показати силу Росії слабкому Заходу: в WSJ назвали ім&#39;я наближеного до Путіна, який переконав його напасти на Україну &middot; Найбільш гаряче і болісно зараз&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}