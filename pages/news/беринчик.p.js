import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Беринчик</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Беринчик"/>
        <meta name="description" content="Trending News about Беринчик" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Беринчик</h1>
            <Image width={800} height={500} src="https://sport.24tv.ua/resources/photos/news/202212/2210890.jpg?v=1670097347000&w=1200&h=675" alt="Беринчик"/>
            <h3>Recent News</h3>
            <a href='https://sport.24tv.ua/ru/denis-berinchik-ivan-mendi-ishod-boja-24-kanal_n2210890'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Беринчик по единогласному решению победил Менди в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZ240b5_x7OAyvHooNXKJRb-1ewAnqyh-vVZH1GXZUP8X9m5XgcuebEPWPaVV48Mrb3FhOno1X" alt="Беринчик по единогласному решению победил Менди в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>3 декабря Денис Беринчик встретился на ринге с Иваном Менди. Кто победил в поединке, состоявшемся в андеркарде боя Тайсон Фьюри – Дерек Чисора.</p></div>
            </div>
        </a><a href='https://fakty.ua/ru/411686-nepobedimyj-ukrainec-berinchik-otobral-chempionskij-poyas-u-francuza-v-anderkarde-boya-fyuri-chisora-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Непобедимый украинец Беринчик отобрал чемпионский пояс у ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQpRzhe--sjhziUuIPFrdq48tNolQM_MffDKVQtvc7kA6thkQ8_TkhkiNEWTtERW-7uMKYX94bW" alt="Непобедимый украинец Беринчик отобрал чемпионский пояс у ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На стадионе футбольного клуба «Тоттенхэм» в Лондоне в андеркарде боя Фьюри — Чисора состоялся боксерский поединок за титулы чемпиона Европы по версии EBU в&nbsp;...</p></div>
            </div>
        </a><a href='https://news.obozrevatel.com/sport/box/berinchik-mendi-rezultat-chempionskogo-boya.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Беринчик выиграл в Лондоне чемпионский бой</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRI-oozSB_QMo3aPM19ooDmtAqIlKoNCxzl8jQgw8sgr4iEQYHfPtMF07iNWf9cNmto99ciTT0B" alt="Беринчик выиграл в Лондоне чемпионский бой" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>5,8 т. Только проверенная информация у нас в Telegram-канале Obozrevatel и в Viber . Не ведитесь на фейки!</p></div>
            </div>
        </a><a href='https://sport24.ua/ru/box/news/32012-berinchik-polozhil-mendi-na-ring-no-ne-smog-nokautirovat-v-evropejskom-debjute'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Беринчик положил Менди на ринг, но не смог нокаутировать в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTgNqaAodEFXOPiiVqccuzs3wnQOnd1GjzmTWKHAQrh7dPbcCri030ZYGqdWWxcMWwmX_df20sY" alt="Беринчик положил Менди на ринг, но не смог нокаутировать в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Украинский чемпион легкого веса WBO International Денис Беринчик победил француза Ивана Менди и отобрал его чемпионский пояс EBU European — Спорт 24.</p></div>
            </div>
        </a><a href='https://xsport.ua/ru/boxing_s/news/denis-berinchik-ivan-mendi-onlayn-translyatsiya_8739446/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Все главные события боя на XSPORT.ua</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTpNIcucTeJf9oWILdbqcgZ-2cVAleFcCJsb4V-KYNvdLmVIlRbRAJ4PJ8273YLRxEV7c2PZffa" alt="Все главные события боя на XSPORT.ua" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Денис Беринчик победил Ивана Менди. Как это было. Все главные события боя на XSPORT.ua. Бокс Профессиональный бокс. 03 декабря 21:49.</p></div>
            </div>
        </a><a href='https://sportarena.com/boxing/berinchik-pobedil-mendi-resheniem-sudej-i-vyigral-titul/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Беринчик победил Менди единогласным решением судей и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRnos3wjpJmKTPk44svBoOL2rZ6iOuYz8BKJWJvK-zVz59c9__xm4FWBBW3fd12UgtVYZHbSE7Y" alt="Беринчик победил Менди единогласным решением судей и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Чемпион WBO International в легком весе Денис Беринчик (17-0, 9 КО) победил обладателя титула EBU француза Ивана Менди (47-6-1, 22 KO) в объединительном&nbsp;...</p></div>
            </div>
        </a><a href='https://sport.ua/news/606138-video-v-obraze-soldata-vsu-denis-berinchik-vyshel-v-ring'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ВИДЕО. В образе солдата ВСУ. Денис Беринчик вышел в ринг</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRZwLCUemp06YjvZWTyhAvyhLBw7wlADsU47_w-sybVouoALBp9kz0J9Q2K-Ub5sGSMYCn4X4EK" alt="ВИДЕО. В образе солдата ВСУ. Денис Беринчик вышел в ринг" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бой проходит в Лондоне ⋆ Бокс на Sport.ua.</p></div>
            </div>
        </a>
        </Template></>;
}