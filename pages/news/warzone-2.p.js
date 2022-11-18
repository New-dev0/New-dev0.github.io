import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Warzone 2</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Warzone 2"/>
        <meta name="description" content="Trending News about Warzone 2" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Warzone 2</h1>
            <Image width={800} height={500} src="https://img.championat.com/news/social/7/47/4894787.jpg" alt="Warzone 2"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/cybersport/article-4894787-pervye-vpechatleniya-ot-call-of-duty-warzone-2-slishkom-medlenno-skuchno-i-sero.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>От багов до ярости игроков. Как прошёл запуск Call of Duty ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSm7BAMeZi42hqBLHl2amWF3s6B0kDATHorymR4YTknxK8Ak0FUQ5i3fZZM-gXlnt4M7qnBLsSX" alt="От багов до ярости игроков. Как прошёл запуск Call of Duty ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Трудности со стабильностью и работой начались у Steam, PlayStation Network и Xbox Live, а в Battle.net вообще пошли на полное отключение возможности загружать&nbsp;...</p></div>
            </div>
        </a><a href='https://www.igromania.ru/news/120796/Igroki_rugayut_Call_of_Duty_Warzone_2_za_vylety_bagi_i_drugie_problemy.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Игроки ругают Call of Duty: Warzone 2 за вылеты, баги и другие ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSKUPWOEyL4aNw6vMxvyyeHUDJlwVhUuLffv7rxUBiGOIcEt3njKl3LI3EodUY1PCY1vzjqr-ut" alt="Игроки ругают Call of Duty: Warzone 2 за вылеты, баги и другие ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В настоящий момент Modern Warfare II занимает третье место в списке самых популярных игр по текущему количеству игроков, уступая только Counter-Strike: Global&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/cybersport/news/startovala-polnocennaya-rabota-call-of-duty-warzone-2-1999036/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Стартовала полноценная работа Call of Duty: Warzone 2</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRabwF-oAPQGmY909Xso5wJowOxzI12vb4GMc87AifjuFxkTKUZsvWZxkUOJj5CzcJ9nF_oHC7w" alt="Стартовала полноценная работа Call of Duty: Warzone 2" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Состоялся официальный релиз нового киберспортивного шутера Call of Duty: Warzone 2. Игра бесплатно доступна по всему миру на ПК (Steam и Battle.net),&nbsp;...</p></div>
            </div>
        </a><a href='https://overclockers.ru/blog/Xmerc/show/79109/samoe-interesnoe-reliza-warzone-2-bonusy-dlya-veteranov-i-fleshmob-goodbye-warzone'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Самое интересное релиза Warzone 2: бонусы для ветеранов и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRDZ2JKidTPrNUHa4TR79-GepfODWzhLHtSN9Msh-ITaqhFDbmycfALUGZYoB4m0p1RaDBXu9HR" alt="Самое интересное релиза Warzone 2: бонусы для ветеранов и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>А теперь я предлагаю вам ознакомиться с самыми интересными новостями после релиза Warzone 2. | Overclockers.ru - крупнейший информационный сайт России&nbsp;...</p></div>
            </div>
        </a><a href='https://shazoo.ru/2022/11/17/135397/call-of-duty-modern-warfare-2-s-relizom-warzone-2-lidiruet-v-steam-po-cislu-igrokov'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Call of Duty: Modern Warfare 2 с релизом Warzone 2 лидирует в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTzbrgiU9hDIevwTVykbE-92YIv_bGl2GWdY-ttJOI5gmu5iHsefiQUv4FBRi3s4zka3nzkNGtk" alt="Call of Duty: Modern Warfare 2 с релизом Warzone 2 лидирует в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Activision можно поздравить с важным достижением — сейчас Call of Duty: Modern Warfare 2 лидирует в Steam по числу одновременных игроков.</p></div>
            </div>
        </a><a href='https://www.goha.ru/v-warzone-2-s-pervym-patchem-dobavlena-podderzhka-giroskopa-d23DZM'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Warzone 2 с первым патчем добавлена поддержка гироскопа</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTYn_hG1xXOwffnAFUt6eICCs18iOuYTFk4kgiI85ujnqhQDQiY0wWlrXdPJl2eyAcZdolnh-tc" alt="В Warzone 2 с первым патчем добавлена поддержка гироскопа" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Activision Blizzard кует железо, пока горячо: в Warzone 2 и Modern Warfare II добавлена поддержка гироскопического прицеливания на PS5, PS4 и ПК.</p></div>
            </div>
        </a><a href='https://3dnews.ru/1077471/sostoyalsya-zapusk-uslovno-besplatnoy-korolevskoy-bitvy-call-of-duty-warzone-2-0-poigrat-mozhno-i-v-rossiyskom-steam-no-ne-vsyo-tak-prosto'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Состоялся запуск условно-бесплатной королевской битвы Call of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRtjy8KhwenrG-rr_IDLuP14Vo3u2wM64_UppSY9T1bRFJudd-GMz197XKle6Hj_Qp8T7XTby5Z" alt="Состоялся запуск условно-бесплатной королевской битвы Call of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Издательство Activision и разработчики из студии Infinity Ward сообщили о запуске своей условно-бесплатной королевской битвы Call of Duty: Warzone 2.</p></div>
            </div>
        </a><a href='https://dtf.ru/gameindustry/1450403-pikovyy-onlayn-modern-warfare-ii-v-steam-posle-vyhoda-warzone-2-0-prevysil-450-tysyach-igrokov'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пиковый онлайн Modern Warfare II в Steam после выхода ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT4Jzz1b8J4fnxgtFICKGBloP43WRtQtIuAU2xpt3aTYZ7G9Ml7jvajHVyuusLvJcWkf3nOjXWn" alt="Пиковый онлайн Modern Warfare II в Steam после выхода ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Шутер Activision сейчас находится на третьем месте по числу ежедневных игроков, уступая только Dota 2 и CS:GO. Вместе с Warzone 2.0 стал&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}