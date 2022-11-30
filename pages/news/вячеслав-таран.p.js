import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Вячеслав Таран</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Вячеслав Таран"/>
        <meta name="description" content="Trending News about Вячеслав Таран" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Вячеслав Таран</h1>
            <Image width={800} height={500} src="https://www.interfax.ru/aspimg/874483.jpg" alt="Вячеслав Таран"/>
            <h3>Recent News</h3>
            <a href='https://www.interfax.ru/world/874483'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Основатель Forex Club Вячеслав Таран погиб при крушении ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSjJWLWG8bv70dp2bdR70V07OyMCY359oRNvTotgzd3HWx5lKI5lPUAiG3tIfOqwqUJvudV9LMA" alt="Основатель Forex Club Вячеслав Таран погиб при крушении ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Москва. 28 ноября. INTERFAX.RU - Проживавший в Монако предприниматель российского происхождения Вячеслав Таран, основавший в 1997 году Forex Club (в&nbsp;...</p></div>
            </div>
        </a><a href='https://www.banki.ru/news/lenta/?id=10976329'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Основатель Forex Club Вячеслав Таран погиб на пути в Монако</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSjYI5bp9UpRZQj1_DpQ-AwGj2GIpW92i1XHdJmcbkchCE1ulUra__ElfN2eKfm-JkEsjBZFNBl" alt="Основатель Forex Club Вячеслав Таран погиб на пути в Монако" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Основатель Forex Club, президент инвестиционной компании Libertex Group Вячеслав Таран погиб при крушении вертолета по пути в Монако, рассказал Monaco Daily&nbsp;...</p></div>
            </div>
        </a><a href='https://abnews.ru/2022/11/28/pogib-osnovatel-forex-club-vyacheslav-taran'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Погиб основатель Forex Club Вячеслав Таран</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTIiBtcteI2ZyIdRpbsih2X7grR0aAojfOWOy2f-ns4KYzbw5NjuUd1QjxITOOlvwSJGMICXsFB" alt="Погиб основатель Forex Club Вячеслав Таран" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Известный российский предприниматель, основатель компании Forex Club Вячеслав Таран погиб в авиакатастрофе в Монако. Вертолет с предпринимателем из РФ на&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vedomosti.ru/society/news/2022/11/28/952413-sozdatel-forex-club-vyacheslav-taran-pogib'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Создатель Forex Club Вячеслав Таран погиб при крушении ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS1YznDFwXoaPkY1eIPGY47g1ZNgZ8xLpgWNZYFxnZbIYdNfXVnu0xlWdmzO9z4zaEBNRe3592I" alt="Создатель Forex Club Вячеслав Таран погиб при крушении ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Пассажиром разбившегося 25 ноября вертолета в Монако был президент инвестиционной компании Libertex Group, основатель Forex Club Вячеслав Таран.</p></div>
            </div>
        </a><a href='https://www.pravmir.ru/pogib-vyacheslav-taran-odin-iz-osnovatelej-fonda-izmeni-odnu-zhizn/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Погиб Вячеслав Таран, один из основателей фонда «Измени ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTHj2rSWHZwGi-GEQtZZndktYjETy1aGFih-I_2BlzFfzUsXodEskWSJga9Q_oZJA4QhHexaksj" alt="Погиб Вячеслав Таран, один из основателей фонда «Измени ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ранее о трагедии также сообщало местное издание Monaco Daily News. «С большой печалью Libertex Group подтверждает смерть своего соучредителя и председателя&nbsp;...</p></div>
            </div>
        </a><a href='https://incrussia.ru/news/osnovatel-forex-club-pogib/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Новости</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ5DB0tVJ7gMOWaje-cNW5uo3qrZEFH7CQTHYdDEykB8nWDV5D9vha5NKZLIRf5-cr1CGvXW8_6" alt="Новости" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Смерть Вячеслава Тарана подтвердили в инвестиционной компании Libertex Group, где он занимал пост президента. Вместе с ним погиб 53-летний пилот.</p></div>
            </div>
        </a><a href='https://www.miloserdie.ru/news/osnovatel-bf-izmeni-odnu-zhizn-vyacheslav-taran-pogib-v-aviakatastrofe/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Основатель БФ «Измени одну жизнь» Вячеслав Таран погиб в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQi6RfyWwQVA1asYFbgOHCMI_7RGJmp3h3-DkEhmrBB73CbCA0Qm0Vb2j1jrPNBKvsKH54ySe_J" alt="Основатель БФ «Измени одну жизнь» Вячеслав Таран погиб в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Предприниматель и филантроп, основатель компании Forex Club и помогающего семейному устройству сирот благотворительного фонда «Измени одну жизнь» 53-летний&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}