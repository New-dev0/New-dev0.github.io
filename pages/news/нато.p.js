import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>НАТО</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,НАТО"/>
        <meta name="description" content="Trending News about НАТО" /></Head><Template>
            <h1 style={{fontSize: "30"}}>НАТО</h1>
            <Image width={800} height={500} src="https://online47.ru/media/photo/article/__159559.jpg" alt="НАТО"/>
            <h3>Recent News</h3>
            <a href='https://online47.ru/2022/11/19/shef-pentagona-ostin-nato-ne-ishchet-konfrontatsii-s-rf-no-prodolzhit-pomogat-ukraine-168858'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Шеф Пентагона Остин: НАТО не ищет конфронтации с РФ, но ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQNKFjSIxLt4-FYvO35KP3A4m7XazMD2rrDqVZ2kH1JQiYLUg-8hIh1DLECi55wwZSZcf0Ym03" alt="Шеф Пентагона Остин: НАТО не ищет конфронтации с РФ, но ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;НАТО — это оборонительный альянс&quot;, - подчеркнул Остин.</p></div>
            </div>
        </a><a href='https://klops.ru/news/2022-11-20/261661-komandovanie-morskih-sil-nato-obvinilo-rossiyskih-lyotchikov-v-nebezopasnyh-manyovrah-na-baltike'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Командование морских сил НАТО обвинило российских лётчиков ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTdLtObyh53mRfUX4hcjMFqqBilYzT68A48OL3CpVUo1himD-ErEM67XYckg_mtMl7zbnnAxjoT" alt="Командование морских сил НАТО обвинило российских лётчиков ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Инцидент произошёл 17 ноября. Два российских истребителя якобы пролетели над участвовавшими в учениях кораблями НАТО на высоте 300 футов (91 метр — ред.) и&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5679272'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В НАТО назвали небезопасным облет кораблей российскими ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="В НАТО назвали небезопасным облет кораблей российскими ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В НАТО заявили, что облет их кораблей в Балтийском море со стороны российских летчиков был небезопасным и непрофессиональным. Заявление об этом опубликовано&nbsp;...</p></div>
            </div>
        </a><a href='https://www.apsny.ge/2022/pol/1668950953.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Вице-президент ПА НАТО: Мы приветствуем и поддерживаем ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Вице-президент ПА НАТО: Мы приветствуем и поддерживаем ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мы всегда встречаемся с нашими грузинскими партнерами, мы используем для этого все форматы и площадки, мы приветствуем и поддерживаем стремление Грузии в&nbsp;...</p></div>
            </div>
        </a><a href='https://www.golosameriki.com/a/nato-says-russian-jets-conduct-unsafe-baltic-ship-overflight/6841000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Российские самолеты совершили «небезопасный» облет ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTd579_WHO7FCTVIa62PBVFwY4CQ7vYO6ECDmuv25D_hqIQUpkzH2SXkDnYg68ZI_9-EYyRO02y" alt="Российские самолеты совершили «небезопасный» облет ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Два российских истребителя приблизились к кораблям альянса на небезопасное расстояние от 73 до 91 метра.</p></div>
            </div>
        </a><a href='https://www.apsny.ge/2022/pol/1668968837.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Парламентская делегация Грузии проводит двусторонние ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Парламентская делегация Грузии проводит двусторонние ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В рамках проходящей в Мадриде Парламентской ассамблеи НАТО парламентская делегация Грузии во главе председателя парламентского комитета по обороне и&nbsp;...</p></div>
            </div>
        </a><a href='https://vologda-poisk.ru/news/politika/glava-pentagona-skazal-chto-nato-ukrainu-v-bede-ne-brosit'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Глава Пентагона сказал, что НАТО Украину в беде не бросит</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQpoOmYxtTanxoNk2KkbeYHHz3eGo3CwRnSghkdJc9AdpZxCwQ43Cn-SEIvc8yAquFtZR2rbAmI" alt="Глава Пентагона сказал, что НАТО Украину в беде не бросит" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Глава Пентагона Ллойд Остин во время выступления в Галифаксе на ежегодном Форуме по безопасности признал, что у России многочисленная армия и впечатляющее&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rosbalt.ru/world/2022/11/19/1979250.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Глава Пентагона заявил, что НАТО не ищет конфликта с РФ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-FS1XB4WY0ceEOpq3PifPj_DK17hxYnSQxxL7sb5gaQ_hJBFlwrNDp2ZXwguaoQI-AYq2D6Ol" alt="Глава Пентагона заявил, что НАТО не ищет конфликта с РФ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Шеф Пентагона Ллойд Остин заявил, что НАТО не ищет конфликта с РФ. Как передает «РИА Новости», об этом Остин заявил, выступая на конференции в Канаде. «НАТ.</p></div>
            </div>
        </a><a href='https://www.unian.net/world/v-pentagone-zayavli-chto-nato-ne-predstavlyaet-nikakoy-ugrozy-dlya-rossii-12051006.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Пентагоне заявли, что НАТО не представляет никакой угрозы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcROHaCdhPB1BIJLrb-vVbgP2PDMI03QF8Y_hUNGwSTDKE6gjjzxbujZCNaPoqN4gijpTnH8M1qN" alt="В Пентагоне заявли, что НАТО не представляет никакой угрозы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Остин заявил, что вторжение РФ в Украину угроза не только для Европы, однако Путину не удастся втянуть в войну НАТО, которое будет защищаться в случае чего.</p></div>
            </div>
        </a><a href='https://news.ru/world/nato-pozhalovalas-na-povedenie-rossijskih-pilotov-v-vodah-baltijskogo-morya/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>НАТО пожаловалась на маневры российских пилотов в водах ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTh3Y5ZGAdn7L4biE-PcGfbr_ar8UFzYm0_bhBiZaxGFmceLl0XjoVN1-nkbAvw0yeUGAyPKBDV" alt="НАТО пожаловалась на маневры российских пилотов в водах ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Командование НАТО обвинило пилотов ВВС России в непрофессиональных действиях в Балтийском море. Пилоты совершили облет кораблей альянса, которые проводили&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}