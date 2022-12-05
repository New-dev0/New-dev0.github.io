import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>B-21 Raider</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,B-21 Raider"/>
        <meta name="description" content="Trending News about B-21 Raider" /></Head><Template>
            <h1 style={{fontSize: "30"}}>B-21 Raider</h1>
            <Image width={800} height={500} src="https://racurs.ua/content/images/Publication/News/17/74/66/preview_w696zc1.jpg" alt="B-21 Raider"/>
            <h3>Recent News</h3>
            <a href='https://racurs.ua/ua/n177466-pentagon-pokazav-pershyy-u-sviti-bombarduvalnyk-shostogo-pokolinnya-b-21-raider-obhodyt-ppo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пентагон показав перший у світі бомбардувальник шостого ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-OmcJn50PvddreylRynpFYIkOkwlbwEOwFb7y_rcqcQO7CpbD-sBP-LD2C6KO6LKxAbR2NPty" alt="Пентагон показав перший у світі бомбардувальник шостого ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У США представили новий винищувач — бомбардувальник-невидимку B-21 Raider. Винищувач був представлений американським виробником Northrop Grumman та особисто&nbsp;...</p></div>
            </div>
        </a><a href='https://defence-ua.com/people_and_company/jak_vdalos_zberegti_v_tajemnitsi_programu_b_21_raider_i_skilki_bombarduvalnikiv_planuje_zamovljati_pentagon-9869.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Як вдалось зберегти в таємниці програму B-21 Raider, і скільки ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS0VawdixlNwkV3CQak7AYcijYr6mbNm7MPrEmieW1-OsoI87qhz_bGhWWoO6hl9Njmq2cHdX8Z" alt="Як вдалось зберегти в таємниці програму B-21 Raider, і скільки ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Пентагон в п&#39;ятницю 2 грудня 2022 року провів презентацію B-21 Raider розробки корпорації Northrop Grumman. Цей літак став першим стратегічним бомбардувальником&nbsp;...</p></div>
            </div>
        </a><a href='https://espreso.tv/ssha-predstavili-bombarduvalnik-nevidimku-novogo-pokolinnya-b-21-raider'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США представили бомбардувальник-невидимку нового покоління ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRjhB8vhJwnMzFyJMBl_QOz8OClEIVPyavMizWRBvadWFEJ8JHmA0YhiRaZn-PWL2gbZY4yfJvZ" alt="США представили бомбардувальник-невидимку нового покоління ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>B-21 Raider представили під час церемонії у п&#39;ятницю на заводі виробника Northrop Grumman в Каліфорнії. Читайте також: Американські сенатори проведуть секретний&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/ukrainian/news-63846465'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>B-21 Raider: США представили бомбардувальник-невидимку</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTFQygUlfxpLbAnipmJYnBJPXQrn19w2cadQCPCVsypV6m6NuG4b1e4c-y6OsmTiaaxQqzFDaMP" alt="B-21 Raider: США представили бомбардувальник-невидимку" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>B-21 Raider представили під час церемонії у п&#39;ятницю на заводі виробника Northrop Grumman в Каліфорнії. Остін відзначив, що цей літак забезпечить значні&nbsp;...</p></div>
            </div>
        </a><a href='https://novynarnia.com/2022/12/03/u-ssha-prezentuvaly-najsuchasnishyj-strategichnyj-bombarduvalnyk-b-21-raider/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У США презентували найсучасніший стратегічний ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSAjcLWcjACxjZV20ri6xi6s3eGRkL7bLXe_non7jH1FHzNxFEEtlT-iewajOSc5qQg0u6PRk2F" alt="У США презентували найсучасніший стратегічний ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Американська компанія Northrop Grumman презентувала стратегічний бомбардувальник B-21 Raider, який є найсучаснішим літаком військово-повітряних сил США.</p></div>
            </div>
        </a><a href='https://www.bbc.com/russian/news-63846691'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США представили бомбардировщик-невидимку нового ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ1Hbx0w7Qegvxczvc5G8v4TR5gUtvPQ-pqb35LnvnhIZ6B-fcuv-k_yf1fjyK0J60n6ujOKISc" alt="США представили бомбардировщик-невидимку нового ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Презентация прошла в пятницу на заводе производителя Northrop Grumman в Калифорнии. В-21 - первый бомбардировщик, построенный в США за последние 30 лет. Его&nbsp;...</p></div>
            </div>
        </a><a href='https://www.golosameriki.com/a/b21-raider-bomber-introduction/6861070.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>B-21 Raider: основа американской военно-воздушной мощи на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRFburbdxaCwWhKiRsGGHWzbGoNp6uIY1cffPjIvZvDCy1zSNsLso3M2TGlCAPD8qHrqaCdGlRl" alt="B-21 Raider: основа американской военно-воздушной мощи на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Новый американский бомбардировщик-невидимка B-21 корпорации Northrop Grumman представлен министром обороны США Ллойдом Остином (Lloyd Austin) в разгар&nbsp;...</p></div>
            </div>
        </a><a href='https://prm.ua/u-ssha-prezentuvaly-novitniy-bombarduvalnyk-nevydymku-b-21-raider-zdatnyy-nesty-iadernu-zbroiu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У США презентували новітній бомбардувальник-невидимку B-21 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRrYPtBypvQMlNptYqVErvUqUmL_wMvzY7f3ueQVF-LupCVnEcAPPHgR15G7d6u6wi-sU1IvChb" alt="У США презентували новітній бомбардувальник-невидимку B-21 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Міністерство оборони США презентувало новітній бомбардувальник-невидимку B-21 Raider, здатний нести ядерну зброю.</p></div>
            </div>
        </a><a href='https://bobruisk.ru/news/2022/12/03/v-ssha-predstavili-novejshij-yadernyj-bombardirovshik-nevidimku-b-21-raider-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В США представили новейший ядерный бомбардировщик ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTFXkyOwmU_A1_g3qFOaaNATiuR3B0-fQINSuwjeO5UYLj4ZD1VGsmH_VQ2HIVhALRkrvOzL_uc" alt="В США представили новейший ядерный бомбардировщик ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ядерный бомбардировщик-невидимка B-21 Raider, как предполагается, поднимется в небо в следующем году. Это первый новый американский бомбардировщик за более&nbsp;...</p></div>
            </div>
        </a><a href='https://prm.ua/ru/v-ssha-prezentovaly-noveyshyy-bombardyrovshchyk-nevydymku-b-21-raider-sposobn-y-nesty-iadernoe-oruzhye/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В США презентовали новейший бомбардировщик-невидимку B ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRrYPtBypvQMlNptYqVErvUqUmL_wMvzY7f3ueQVF-LupCVnEcAPPHgR15G7d6u6wi-sU1IvChb" alt="В США презентовали новейший бомбардировщик-невидимку B ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Министерство обороны США представило новейший бомбардировщик-невидимку B-21 Raider, способный нести ядерное оружие, это первый американский бомбардировщик,</p></div>
            </div>
        </a>
        </Template></>;
}