import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>США</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,США"/>
        <meta name="description" content="Trending News about США" /></Head><Template>
            <h1 style={{fontSize: "30"}}>США</h1>
            <Image width={800} height={500} src="https://frankrg.com/wp-content/uploads/2022/12/65f18f4d38d2-scaled.jpg" alt="США"/>
            <h3>Recent News</h3>
            <a href='https://frankrg.com/103427'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Прокуратура США приступила к конфискации $5,4 млн ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRKe04_zjWgevNrrP7jYrJnLBB8ongZpol5UmmuNWjao7n--X5QO78p89ndN3DWpg1gvfqEcGvf" alt="Прокуратура США приступила к конфискации $5,4 млн ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Федеральная прокуратура США приступила к конфискации $5,4 млн с банковского счета, принадлежащего российскому бизнесмену Константину Малофееву, пишет Reuters со&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aex.ru/news/2022/11/30/250722/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Госдеп США одобрил продажу Катару средств борьбы с БПЛА</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQfpabng3Mo00vZ8uEEJrwRA1LykmaNI2KgDTcI-7qGgw75198QR6K1FXob13-Q-OqV3BLBoJU2" alt="Госдеп США одобрил продажу Катару средств борьбы с БПЛА" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>30 ноября 2022 г., AEX.RU – Госдепартамент США одобрил возможную продажу Катару системы противодействия беспилотным летательным аппаратам (БПЛА) FS-LIDS и&nbsp;...</p></div>
            </div>
        </a><a href='https://www.interfax.ru/world/874930'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В США увидели угрозу для нацбезопасности в прокладке ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQJqLH0fxgvLGf5iTtNUuFPTCYEXV5lXnETsxpH6-S0hmKvjkby3WakkoqzXpb7psu2LGc3f2MQ" alt="В США увидели угрозу для нацбезопасности в прокладке ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Москва. 1 декабря. INTERFAX.RU - Комитет по оценке иностранного участия в телекоммуникационном секторе в США (известен также под названием &quot;Группа Телеком&quot;)&nbsp;...</p></div>
            </div>
        </a><a href='http://www.finmarket.ru/database/news/5852100'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beige Book: экономическая активность в США осенью не ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Beige Book: экономическая активность в США осенью не ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1 декабря. FINMARKET.RU - Экономическая активность в США осенью практически не изменилась, говорится в опубликованном вчера Федеральной резервной системой&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}