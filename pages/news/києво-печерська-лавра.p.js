import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Києво-Печерська лавра</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Києво-Печерська лавра"/>
        <meta name="description" content="Trending News about Києво-Печерська лавра" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Києво-Печерська лавра</h1>
            <Image width={800} height={500} src="" alt="Києво-Печерська лавра"/>
            <h3>Recent News</h3>
            <a href='https://www.mkip.gov.ua/news/8212.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Роз&#39;яснення щодо реєстрації статуту монастиря «Києво ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Роз&#39;яснення щодо реєстрації статуту монастиря «Києво ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Інформація про нібито передачу Києво-Печерської Лаври Православній Церкві України не відповідає дійсності. Наразі мова не йде про передачу монастиря ПЦУ.</p></div>
            </div>
        </a><a href='https://borgexpert.com/news/ptsu-dala-roz-iasnennia-shchodo-reiestratsii-statutu-monastyria-kyievo-pecherska-lavra'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ПЦУ дала роз&#39;яснення щодо реєстрації статуту монастиря ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT-_pYsPWKVSjkgJH5NHCFjDcS0y9_0b5wjKSgNZcpG9YA-TGEze7nbmc_2C_ffc_c_NBIWXrvZ" alt="ПЦУ дала роз&#39;яснення щодо реєстрації статуту монастиря ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Реєстрація статуту монастиря, яка відбулася, сама собою не породжує змін у статусі майнового комплексу Лаври - цей комплекс був і є державною власністю.</p></div>
            </div>
        </a><a href='https://konkurent.ua/publication/108006/kievo-pechersku-lavru-ne-peredavali-do-ptsu-tkachenko/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Києво-Печерську Лавру не передавали до ПЦУ, – Ткаченко</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTS9_tcTKEynM9_g4z8d71HK-tJLTDLkiPfEp_snSlfWg7VDlGGJ3vE5ZVoGT7kbaDO2mb4d069" alt="Києво-Печерську Лавру не передавали до ПЦУ, – Ткаченко" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Києво-Печерську Лавру не передавали до ПЦУ. Відбулася реєстрація юридичної особи ПЦУ на території національного заповідника «Києво-Печерська лавра».</p></div>
            </div>
        </a><a href='https://hromadske.radio/news/2022/12/03/bytva-za-lavru-v-upts-mp-nazvaly-feykom-perekhid-sviatyni-do-ptsu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В УПЦ МП назвали &quot;фейком&quot; перехід Києво-Печерської лаври до ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQMQpSPY2luQ56kI7NZMKq4RzQyq71Xx6Xwb8wJWGCxXxPVgofGAFFLRT2-4IfBpqhcB2FPod0j" alt="В УПЦ МП назвали &quot;фейком&quot; перехід Києво-Печерської лаври до ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2 грудня представник ПЦУ Євстратій Зоря повідомив, що Свято-Успенську Києво-Печерську Лавру зареєстрували як монастир у складі ПЦУ.</p></div>
            </div>
        </a><a href='https://shpalta.media/2022/12/03/kiyevo-pechersku-lavru-zareyestruvali-yak-monastir-u-skladi-pcu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Києво-Печерську лавру зареєстрували як монастир у складі ПЦУ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQUsddy1FRDNjtQzdwc09qeKuV6sxvYvz0uVW7YjL0yRSnfxHJ_lLYW59jEew_fSsIk_mfCvwH3" alt="Києво-Печерську лавру зареєстрували як монастир у складі ПЦУ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У Мінкульті уточнюють, що йдеться не про передачу Києво-Печерської лаври, а про реєстрацію юридичної особи в тому ж монастирі, який перебуває в користуванні&nbsp;...</p></div>
            </div>
        </a><a href='https://nikopolnews.net/ukraina/kyievo-pecherska-lavra-do-ptsu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чи перейшла Києво-Печерська лавра до ПЦУ – роз&#39;яснення</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQRh_na_APARSEN11MiMBSaf62USOTv-kRZn28z7XSjmNziPBZFdEaVkEBVRzRXRXcGP9JAApl_" alt="Чи перейшла Києво-Печерська лавра до ПЦУ – роз&#39;яснення" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Чи перейшла Києво-Печерська лавра до ПЦУ. Що сталося 2 грудня? Роз&#39;яснення і коментарі компетентних осіб.</p></div>
            </div>
        </a>
        </Template></>;
}