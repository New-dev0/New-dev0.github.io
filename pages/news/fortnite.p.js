import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fortnite</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fortnite"/>
        <meta name="description" content="Trending News about Fortnite" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fortnite</h1>
            <Image width={800} height={500} src="https://img.championat.com/news2/social/0/0f/4916175.jpg" alt="Fortnite"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/cybersport/news-4916175-vedmak-doom-novaya-karta-i-massa-novovvedenij-segodnya-startuet-4-ya-glava-fortnite.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Ведьмак», DOOM, новая карта и масса нововведений. Сегодня ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSsxhqQBc9ttGUO5H_rO6dYZPyvaedIolzZL7qZYPZuR3BxgUxo8bmV73arCc-OljSPZ4iwkiF-" alt="«Ведьмак», DOOM, новая карта и масса нововведений. Сегодня ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ночью прошёл не очень громкий финал третьей главы Fortnite, где игроки очень долго выполняли не очень интересные задачи и посмотрели пару роликов,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ixbt.com/news/2022/12/04/fortnite-unreal-engine-5-1-windows-7-windows-8-1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fortnite перешла на Unreal Engine 5.1 с выходом первого сезона ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRCGLMImzQMudV7aGImynmu3gisIBPLz8Kty0Ol7nEokXLhgQi1_G3mPU3vKF6kl1Y_C9mKSbYL" alt="Fortnite перешла на Unreal Engine 5.1 с выходом первого сезона ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня Epic Games анонсировала первый сезон четвертой главы «Королевская битвы» Fortnite. Новшеств в игре очень много, но, пожалуй, самое главное&nbsp;...</p></div>
            </div>
        </a><a href='https://gamemag.ru/news/173795/welcome-to-fortnite-battle-royale-chapter-4-season-1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Геральт и Палач Рока врываются в Fortnite – стартовала 4 глава ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTvkavy4In0SxnZcgROaVJOXDSmx3xWzgoCqAhmdrH_37ALKjxw-FkTRDE24QXcJ11YdbIpp9V4" alt="Геральт и Палач Рока врываются в Fortnite – стартовала 4 глава ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Компания Epic Games в очередной раз масштабно обновила Fortnite, запустив в популярной королевской битве четвертую главу с новой картой и множеством других&nbsp;...</p></div>
            </div>
        </a><a href='https://dtf.ru/games/1483466-dumgay-geralt-novaya-karta-i-perehod-na-ue-5-1-s-podderzhkoy-nanite-i-lumen-detali-chetvertoy-glavy-fortnite'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Думгай, Геральт, новая карта и переход на UE 5.1 с поддержкой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRB0qriFxS3XEBoL5YD5tQ_fuYwuOZnxNBdFydI-DfCVhcUACmTP3ai0_qc1jjH9_uMkIneW9e8" alt="Думгай, Геральт, новая карта и переход на UE 5.1 с поддержкой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>3 декабря 2022 года Epic Games провела большой ивент в Fortnite, в рамках которого игрокам пришлось по кускам собирать новую карту королевской битвы — в том&nbsp;...</p></div>
            </div>
        </a><a href='https://shazoo.ru/2022/12/04/136182/geralt-iz-rivii-dumsleer-i-motocikly-v-novoi-glave-fortnite'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Геральт из Ривии, Думслеер и мотоциклы в новой главе Fortnite</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSPO81Z6Xqb6FPBvqfY3g_ippKjy_Whd83kN7HozLl93VDB_FlBtEIlAwn7dEWlaxnYNOiyvQmQ" alt="Геральт из Ривии, Думслеер и мотоциклы в новой главе Fortnite" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Fortnite стартовала четвертая глава со множеством геймплейных и технических нововведений и улучшений. В первую очередь стоит глянуть сюжетный ролик с тем,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.playground.ru/fortnite/news/fortnite_pereshla_na_unreal_engine_5_1_i_teper_ispolzuet_nanite_i_lumen-1250090'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fortnite перешла на Unreal Engine 5.1 и теперь использует ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS7cmRZE_VExRox2VHsMJb8s78j71z6Uy0-4PfS0ZIrZ6qhLp1pfs26_yps72_C957oTx8ApEkl" alt="Fortnite перешла на Unreal Engine 5.1 и теперь использует ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Компания Epic Games запустила Fortnite Chapter 4, открыв новый сезон популярной бесплатной игры. Это не просто новый сезон, так как образовался совершенно&nbsp;...</p></div>
            </div>
        </a><a href='https://cyber.sports.ru/games/1113936511-v-fortnite-dobavyat-xalka-geralta-i-yutubera-mrbeast.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Fortnite добавят Халка, Геральта и ютубера MrBeast</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTxv3fFYeEBFxtwU8ikhaYejpJR9VMO78EvuwtZnBnb3HyxPEzckTRHCMrY8Kfv1cbDrFHiWsGz" alt="В Fortnite добавят Халка, Геральта и ютубера MrBeast" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Epic Games показали трейлер 1-го сезона 4-й главы Fortnite. В ролике старая карта королевской битвы разрушается с помощью космических сил и складываться&nbsp;...</p></div>
            </div>
        </a><a href='https://www.playground.ru/fortnite/news/gejmplejnyj_trejler_chetvyortoj_glavy_fortnite-1250047'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Геймплейный трейлер четвёртой главы Fortnite</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSovhQovrSsZWUq0dDJ-oAEZzypYbbVvVT8tZFIm-V9U7XHsFJX4hp1CDl8ponPSuNF49-X-dKB" alt="Геймплейный трейлер четвёртой главы Fortnite" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Четвёртая глава Fortnite стала доступна сегодня, 4 декабря 2022 года, с новой картой от Epic Games, на которой можно получить полностью новый опыт.</p></div>
            </div>
        </a>
        </Template></>;
}