import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Буржуйка</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Буржуйка"/>
        <meta name="description" content="Trending News about Буржуйка" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Буржуйка</h1>
            <Image width={800} height={500} src="https://telegraf.com.ua/static/storage/thumbs/1200x630/4/56/4497d3ca-ca75bb9fb637fce1c591c5c2a6206564.jpg?v=1430_1" alt="Буржуйка"/>
            <h3>Recent News</h3>
            <a href='https://telegraf.com.ua/ukraina/2022-11-17/5723172-plan-b-dlya-obigrivu-vzimku-yak-pravilno-obrati-burzhuyku'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;План Б&quot; для обогрева зимой. Как правильно выбрать буржуйку</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQU2UGuV2bS1-ei8H-PSxkzlI8p7_KAjq1rt47J0F5JAi6UUX1_KyEIb25RqNdkVFWY125D89Ae" alt="&quot;План Б&quot; для обогрева зимой. Как правильно выбрать буржуйку" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Современные буржуйки можно стильно подстроить под интерьер. Фото Открытые источники. Безопаснее всего устанавливать такую печь в частном доме или гараже.</p></div>
            </div>
        </a><a href='https://sobor.com.ua/news/burzhuiki'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;План Б&quot; для обігріву взимку. Як правильно обрати буржуйку</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSN1KD2SUimWix5EMhnYMyGMoU_7apT59vww05ZcLiBN0LFOmfmH0QRHGx122_FTt4_Gi4CdnEQ" alt="&quot;План Б&quot; для обігріву взимку. Як правильно обрати буржуйку" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Найбезпечніше встановлювати таку піч у приватному будинку або гаражі. В Україні випав перший сніг, продовжували падати також і російські ракети,&nbsp;...</p></div>
            </div>
        </a><a href='https://podillyanews.com/2022/11/19/burzhujky-dlya-meshkantsiv-bagatopoverhivok-vy-gotovlyayut-u-hmel-ny-ts-komu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Буржуйки для мешканців багатоповерхівок виготовляють у ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSZcveZ_DKnDNpvsl0UdBOW3KM-yrC6lxet8iGxDtzrs6nAyIgNRnVb1thPMqm0_55fDUi7c8dQ" alt="Буржуйки для мешканців багатоповерхівок виготовляють у ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Для прибудинкових територій багатоповерхівок за кошти з бюджету Хмельницького виготовляють буржуйки. Та чи для всіх?</p></div>
            </div>
        </a><a href='https://tsn.ua/video/video-novini/uteplyayemos-yak-mozhemo-populyarnosti-nabirayut-burzhuyki.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Утепляємось як можемо – популярності набирають буржуйки</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRaSfTTRz-el8vIKOHrlqwDVQ136xQT_u8_0hlXdhXCbdeTUxDpkiPYDNQ-yw6kvFeClD0fKteY" alt="Утепляємось як можемо – популярності набирають буржуйки" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ажіотаж з утепленням власного житла не збавляє темпів. Українці намагаються підготуватися до холодів і можливої відсутності електро- та газопостачання&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}