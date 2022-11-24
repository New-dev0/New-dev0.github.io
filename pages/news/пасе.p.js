import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ПАСЕ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ПАСЕ"/>
        <meta name="description" content="Trending News about ПАСЕ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ПАСЕ</h1>
            <Image width={800} height={500} src="https://img.pravda.com/images/doc/7/3/7377702_fb_image_rus_2022_11_23_21_07_42.png" alt="ПАСЕ"/>
            <h3>Recent News</h3>
            <a href='https://www.pravda.com.ua/rus/news/2022/11/23/7377702/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Президент ПАСЕ после новых ракетных атак РФ предупредил ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRsLt2GxVaydkyepSElrWvTCbUTt28RDVgqHfMjRH1dz9KONJtJTSrAdQ1zfk-75TDuwsIZf25G" alt="Президент ПАСЕ после новых ракетных атак РФ предупредил ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Парламентской ассамблеи Совета Европы (ПАСЕ) Тини Кокс предупредил руководство РФ о наказаниях после последних ракетных атак РФ по гражданской&nbsp;...</p></div>
            </div>
        </a><a href='https://focus.ua/voennye-novosti/538310-osteregaytes-prezident-pase-prigrozil-kremlyu-iz-za-raketnyh-udarov-po-ukraine'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Остерегайтесь&quot;: президент ПАСЕ пригрозил Кремлю из-за ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSc2wAEW6AaKX-bHZKZ5HFWBQb8YVcx9noBoF-bRpOGhlm1ZzAcc_4qLIk8Yn1dFoax_xEh-OdL" alt="&quot;Остерегайтесь&quot;: президент ПАСЕ пригрозил Кремлю из-за ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Тини Кокс предупредил Владимира Путина и его союзников, что военные преступления России не останутся безнаказанными.</p></div>
            </div>
        </a><a href='https://news.liga.net/politics/news/lidery-kremlya-beregites-beznakazannosti-dlya-vas-ne-budet-prezident-pase'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лидеры Кремля, берегитесь, безнаказанности для вас не будет ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSxSoOnAIRm9C07G__DotSapYEWv00TAAD-iKVq9-XP8fBefwyZ-VtJsQcVl1xBLKMu7nWNh7nz" alt="Лидеры Кремля, берегитесь, безнаказанности для вас не будет ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ракетные обстрелы гражданской инфраструктуры Украины не останутся безнаказанными для лидеров Кремля, заявил президент ПАСЕ Тини Кокс. Тини Кокс,&nbsp;...</p></div>
            </div>
        </a><a href='https://korrespondent.net/world/4537976-v-pase-otreahyrovaly-na-ataky-rf-po-ukrayne'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В ПАСЕ отреагировали на атаки РФ по Украине</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQOCC6EPbSiCiKpeS9QtgAQ_z5kP6CRH_4L9FSNdomIXfQJyAZd6wTCaQYi6J7oyK5SeDEYCee8" alt="В ПАСЕ отреагировали на атаки РФ по Украине" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент ПАСЕ заявил, что ракетными обстрелами гражданской инфраструктуры Россия продолжает нарушать международное право.</p></div>
            </div>
        </a><a href='https://nv.ua/world/geopolitics/prezident-pase-predupredil-kreml-prestupleniya-rf-ne-ostanutsya-beznakazannymi-poslednie-novosti-50286252.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Президент ПАСЕ предупредил Кремль: Будьте бдительны ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRE6ULZBYqn8KE-_rYfBFMHdN0jjA0TqkMH7Uq1XKMuz93tinCvIB6wTgKxvFeJx4W76BoFRELj" alt="Президент ПАСЕ предупредил Кремль: Будьте бдительны ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Парламентской ассамблеи Совета Европы Тини Кокс подчеркнул, что российские военные преступления не останутся безнаказанными.</p></div>
            </div>
        </a><a href='https://www.ukrinform.ru/rubric-ato/3620633-voennye-prestuplenia-kremla-ne-ostanutsa-beznakazannymi-prezident-pase-o-novyh-atakah-rf.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Военные преступления кремля не останутся безнаказанными ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSUIqE_tx6VEtS8RBdMsAVSF4QVhxodflz1lpVzKDYjUb77LXSHZg40wz7AT9mooh0gS8tQnKtO" alt="Военные преступления кремля не останутся безнаказанными ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Парламентской ассамблеи Совета Европы Тини Кокс отмечает, что военные преступления кремля не останутся безнаказанными. — Укринформ.</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/ukrayina/rukovoditeli-kremlya-beregites-prezident-pase-predupredil-rf-o-posledstviyah-ataki-po-ukraine-2208376.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Руководители Кремля, берегитесь&quot;: президент ПАСЕ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS1N99oV-HVWCgFZKLMn2HYPINCUJnFPz9kuBQb04g6kziC9W0umDTTDh8bQGEE5UXT0ij4rZKJ" alt="&quot;Руководители Кремля, берегитесь&quot;: президент ПАСЕ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Парламентской ассамблеи Совета Европы Тини Кокс отреагировал на российский массированный обстрел Украины и предупредил власти РФ о оследствиях&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}