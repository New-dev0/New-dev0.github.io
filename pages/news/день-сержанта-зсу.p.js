import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>День сержанта ЗСУ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,День сержанта ЗСУ"/>
        <meta name="description" content="Trending News about День сержанта ЗСУ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>День сержанта ЗСУ</h1>
            <Image width={800} height={500} src="https://static.ukrinform.com/photos/2022_11/thumb_files/630_360_1668751707-306.jpg" alt="День сержанта ЗСУ"/>
            <h3>Recent News</h3>
            <a href='https://www.ukrinform.ua/rubric-ato/3616989-u-genstabi-privitali-serzantiv-zsu-z-profesijnim-svatom.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Генштабі привітали сержантів ЗСУ з професійним святом</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQEW2uPE38wX3P1H-YAx9qidVNT64on2VMs8qIdmQBv2Cfw1gc1INprQjHEMAdpyZXQVpmYUynd" alt="У Генштабі привітали сержантів ЗСУ з професійним святом" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Як передає Укрінформ, про це вітання розміщене на сторінці Генштабу у Фейсбуці. &quot;18 листопада – День сержанта Збройних сил України. Вітаємо усіх сержантів&nbsp;...</p></div>
            </div>
        </a><a href='https://news.glavred.net/den-serzhanta-vsu-otkrytki-i-luchshie-pozdravleniya-v-stihah-i-proze-10426511.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День сержанта ЗСУ: листівки та найкращі привітання у віршах та ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQkuXo8RA9BRlUCag3FI8dumAnAUFrZKh3qJnIwX2MH0SfaBDujHiI_u7P54UJHrvPlMQuhHhlP" alt="День сержанта ЗСУ: листівки та найкращі привітання у віршах та ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>День сержанта Збройних сил України-найкращі привітання З Днем сержанта ЗСУ у віршах та прозі, листівки, а також історія професійного свята.</p></div>
            </div>
        </a><a href='https://i-ua.tv/news/70819-sohodni-den-serzhanta-zbroinykh-syl-ukrainy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сьогодні День сержанта Збройних Сил України</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRSx4XCNNWsCzlKpiqtIJzxD206DKHx-TThEc-dVOhoP7uVKwTmBYc3u6olcjV-qEVyfBKvGtPE" alt="Сьогодні День сержанта Збройних Сил України" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>День професійного сержанта у Збройних Силах України, згідно відповідного наказу, було прийнято відзначати в першу п&#39;ятницю березня. Зараз — щороку 18 листопада.</p></div>
            </div>
        </a><a href='https://armyinform.com.ua/2022/11/18/zhoden-serzhantskyj-korpus-svitu-ne-maye-takogo-bojovogo-dosvidu-yakyj-nyni-mayemo-my-golovnyj-serzhant-zsu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Жоден сержантський корпус світу не має такого бойового ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRN1VskIcgx9h1kxyc5osBT6dpV5i1XR8K-nrdkIaz7slmCRkcpBy_Jb0cWHiA-XOyIY02fgs0g" alt="«Жоден сержантський корпус світу не має такого бойового ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сьогодні в України відзначають День сержанта ЗСУ. Напередодні професійного свята наш... Война с Украиной 2022, Война с Украиной последние новости сегодня,&nbsp;...</p></div>
            </div>
        </a><a href='https://interfax.com.ua/news/general/873181.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленський привітав сержантів ЗС України з професійним святом</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ128q3p4Cg9ZAYMyv0rxr3IM7oIivKUrQcT97Y2Betd7jJFQel1C7b865-b5z26m1wjsZNfIni" alt="Зеленський привітав сержантів ЗС України з професійним святом" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Сьогодні хочу привітати всіх сержантів ЗСУ з їхнім професійним днем. Сьогодні було вже багато сказано теплих слів – і в армії, і в суспільстві. Сержанти – це&nbsp;...</p></div>
            </div>
        </a><a href='https://bigkyiv.com.ua/zaluzhnyj-pryvitav-serzhantiv-zsu-z-profesijnym-svyatom/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Залужний привітав сержантів ЗСУ з професійним святом</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSHPEQOElwNU8Z5d4CT6OAtHYU9xmJPakv2KlAZ8_KK8yTIxkyf1tuqqsdsVQFpCMr8IihuDZ_2" alt="Залужний привітав сержантів ЗСУ з професійним святом" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На плечах сержантів і старшин тримається військо. Залужний, сержанти ЗСУ.</p></div>
            </div>
        </a><a href='https://www.volyn.com.ua/news/231305-na-volyni-pryvitaly-komandyriv-zi-sviatom'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У волинській теробороні відзначили кращих сержантів (Фото)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQW9XdhpfYwkd4LN1N28a6F9SS1pPMiUG4spSVlpU67NPXuQXCnKCXMCNJ_-dGWypIXtsaRpofW" alt="У волинській теробороні відзначили кращих сержантів (Фото)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>18 листопада в Україні відзначається День сержанта. З нагоди Дня професійного свята командир Волинської бригади тероборони, полковник Руслан Ткачук привітав&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}