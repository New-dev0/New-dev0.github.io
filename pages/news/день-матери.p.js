import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>День матери</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,День матери"/>
        <meta name="description" content="Trending News about День матери" /></Head><Template>
            <h1 style={{fontSize: "30"}}>День матери</h1>
            <Image width={800} height={500} src="https://api.bashinform.ru/attachments/f730cf59fc4c42b7476d1e43ddc4b93c6ca48274/store/crop/0/0/1600/1066/1600/1066/35/f55b2866f9359b3e158bef3d4bdfc34550096627e20d3f1bfb1508860225/Shakhov_IMG_7090.JPG" alt="День матери"/>
            <h3>Recent News</h3>
            <a href='https://www.bashinform.ru/news/culture/2022-11-21/stalo-izvestno-kak-v-ufe-otprazdnuyu-den-materi-3039678'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Стало известно, как в Уфе отпразднуют День матери</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTfRjwEa4M8mBlvqo2H4ibLkIdaNKMR2pt3T-xOG-XruqAO74MhaQIGV_0gKjfaJOzGOr3MSgUu" alt="Стало известно, как в Уфе отпразднуют День матери" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В башкирской столице подготовили праздничную программу ко Дню матери, который отмечается в последнее воскресенье ноября. 25 ноября в 18.30 в центральной&nbsp;...</p></div>
            </div>
        </a><a href='https://admnvrsk.ru/podrazdeleniya/vnutrigorodskie-rayony/vostochnyy-rayon/novosti/news-21112022165926-115777/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День матери в Восточном районе отметили творческим мастер ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTBywp1cmfoaGnBLtpW5iZNbZcDvL0F_dGB-qOZ74ZbyibSIyN50Ztvgc4EBkm8kDC7xuYUmkqe" alt="День матери в Восточном районе отметили творческим мастер ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В качестве формата мероприятия был выбран мастер-класс. Совместно со студией «Раисон» дети подготовили сувениры для своих мам. Пока ребята были заняты с&nbsp;...</p></div>
            </div>
        </a><a href='https://www.proural.info/society/stalo-izvestno-kak-ufa-otprazdnuet-den-materi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Стало известно, как Уфа отпразднует День матери</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQici9qGHyAEk5eoIRp3s5kgaSxbNUCPpiCnEiRd6RKuBKy9IJVAXnuL1Il-6_M5y5JufqiR6Zd" alt="Стало известно, как Уфа отпразднует День матери" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Праздничные концерты и мастер-классы пройдут по всему городу. Стало известно, какие мероприятия, посвященные Дню матери, пройдут в Уфе. Праздник ежегодно&nbsp;...</p></div>
            </div>
        </a><a href='https://gorodkirov.ru/news/kak-budut-prazdnovat-den-materi-v-kirove-afisha/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Как будут праздновать День матери в Кирове: афиша</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSorpx_ExOQ0DDHjDvugF2NwYQpK4vhnRdCYLr68YWQO_JzrG8jwC41j61sW2x8gomsZH3h-fCt" alt="Как будут праздновать День матери в Кирове: афиша" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В последнее воскресенье ноября в России уже более 20 лет празднуют День матери. В связи с этим для кировчан подготовили.</p></div>
            </div>
        </a><a href='https://vestirama.ru/novosti/20221121-19.56.10.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День матери в Оренбурге отметят праздничными мероприятиями</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRA6Atume5jHpnhdepBzKFHdBUHgy2QLSob-Jo98nPaljfwcg-vd62tk0ZQNL8jB4XNyxkoDSeq" alt="День матери в Оренбурге отметят праздничными мероприятиями" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В преддверии Дня матери, который отмечается в России в последнее воскресенье ноября, в Оренбурге пройдут праздничные мероприятия.</p></div>
            </div>
        </a><a href='https://resbash.ru/news/cotsium/2022-11-21/v-bashkirii-otmetyat-den-materi-programma-meropriyatiy-3039402'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Башкирии отметят День матери: программа мероприятий</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQSQZpwQ1scAYutxmoHGMVWvXK7C801gj7IUmPqiSMFYGqhKAK9Imw7wAFXB0oJO-ADdlcq6yOM" alt="В Башкирии отметят День матери: программа мероприятий" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Праздники и акции, посвященные мамам, состоятся в республике с 23 по 27 ноября, сообщили в министерстве семьи, труда и соцзащиты населения.</p></div>
            </div>
        </a><a href='https://www.mk-kirov.ru/social/2022/11/21/v-kirove-k-dnyu-materi-podgotovili-okolo-60-meropriyatiy.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Кирове к Дню матери подготовили около 60 мероприятий</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRGzmMqUtWj6ZRzlGWDuYDPJ26fBloqGBCdae3uKZrRVe1sOEU9qVSYIkZsTd1_pb1Pywifc2gy" alt="В Кирове к Дню матери подготовили около 60 мероприятий" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Все права на материалы, опубликованные на сайте mk-kirov.ru, принадлежат редакции и охраняются в соответствии с законодательством РФ. Использование материалов,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}