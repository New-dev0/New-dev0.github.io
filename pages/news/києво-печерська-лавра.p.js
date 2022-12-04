import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Києво-Печерська Лавра</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Києво-Печерська Лавра"/>
        <meta name="description" content="Trending News about Києво-Печерська Лавра" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Києво-Печерська Лавра</h1>
            <Image width={800} height={500} src="" alt="Києво-Печерська Лавра"/>
            <h3>Recent News</h3>
            <a href='https://borgexpert.com/news/ptsu-dala-roz-iasnennia-shchodo-reiestratsii-statutu-monastyria-kyievo-pecherska-lavra'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ПЦУ дала роз&#39;яснення щодо реєстрації статуту монастиря ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT-_pYsPWKVSjkgJH5NHCFjDcS0y9_0b5wjKSgNZcpG9YA-TGEze7nbmc_2C_ffc_c_NBIWXrvZ" alt="ПЦУ дала роз&#39;яснення щодо реєстрації статуту монастиря ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Реєстрація статуту монастиря, яка відбулася, сама собою не породжує змін у статусі майнового комплексу Лаври - цей комплекс був і є державною власністю.</p></div>
            </div>
        </a><a href='https://racurs.ua/ua/n177406-pcu-zareiestruvala-sviy-monastyr-u-kyievo-pecherskiy-lavri.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ПЦУ зареєструвала свій монастир у Києво-Печерській лаврі</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS7AOnei7ujqvtgd23qANhV-ZdvYI-wkHcH1Ktu8u_FrnnuHOOTCCA9QSI54HIlZbES8TdPlVVX" alt="ПЦУ зареєструвала свій монастир у Києво-Печерській лаврі" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Зареєстровано Свято-Успенську Києво-Печерську Лавру як монастир у складі Православної церкви України (ПЦУ). Про це 2 грудня повідомив прес-секретар ПЦУ&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.ua/society/epifaniy-zrobiv-zayavu-shchodo-kiyevo-pecherskoji-lavri-12065505.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Епіфаній зробив заяву щодо Києво-Печерської Лаври</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTqX9XAmkkuO_OUDG0QWAtDeCU-P-yDL82CPOuSa5xGb0rk7fV3Bd-efcJ1R6-5eU8na6_QQ6v-" alt="Епіфаній зробив заяву щодо Києво-Печерської Лаври" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Епіфаній заявив, що 2 грудня було зроблено вагомий крок для повернення української молитви до Києво-Печерської Лаври. Заява Епіфанія на УНІАН.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/12/2/7379045/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Свято-Успенську Києво-Печерську Лавру зареєстрували як ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSh8CFPZ1Zs9aNbLhuhbIL_OlhRWta6daHvv1MUy6ccHAQIWQpM1t82mtZkD3MUNDNgeCpfDrIw" alt="Свято-Успенську Києво-Печерську Лавру зареєстрували як ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1 грудня Києво-Печерську Лавру зареєстрували в якості монастиря у складі Православної церкви України.</p></div>
            </div>
        </a><a href='https://ipress.ua/news/ofitsiyno_kyievopechersku_lavru_zareiestrovano_u_skladi_ptsu_336668.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Офіційно: Києво-Печерську Лавру зареєстровано у складі ПЦУ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRVRml-BZuGk8gzlQkhvKeREVvQi8uEbff48BKR8YqCs3ceAe84IivsFSBCXdOds79fjHmPBkpx" alt="Офіційно: Києво-Печерську Лавру зареєстровано у складі ПЦУ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Свято-Успенську Києво-Печерську Лавру офіційно зареєстрували як монастир у складі Православної церкви України. Очолить її Митрополит Епіфаній.</p></div>
            </div>
        </a><a href='https://shpalta.media/2022/12/03/kiyevo-pechersku-lavru-zareyestruvali-yak-monastir-u-skladi-pcu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Києво-Печерську лавру зареєстрували як монастир у складі ПЦУ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQUsddy1FRDNjtQzdwc09qeKuV6sxvYvz0uVW7YjL0yRSnfxHJ_lLYW59jEew_fSsIk_mfCvwH3" alt="Києво-Печерську лавру зареєстрували як монастир у складі ПЦУ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У Мінкульті уточнюють, що йдеться не про передачу Києво-Печерської лаври, а про реєстрацію юридичної особи в тому ж монастирі, який перебуває в користуванні&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/ukrainian/news-63836739'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Нову &quot;Києво-Печерську лавру&quot; зареєстрували у складі ПЦУ. Що ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTrzFNX002Jr7IgzXGIx-Vei5F2yPXif0i11M1ZpTuPPNNJq9E7rZQJPC0VAsG584v-7Kxrc4GQ" alt="Нову &quot;Києво-Печерську лавру&quot; зареєстрували у складі ПЦУ. Що ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Києво-Печерську Лавру зареєстрували як монастир у складі Православної церкви України. Очолить монастир як юридичну особу митрополит Київський та всієї&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}