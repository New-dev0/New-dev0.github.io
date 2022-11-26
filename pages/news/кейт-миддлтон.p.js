import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Кейт Миддлтон</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Кейт Миддлтон"/>
        <meta name="description" content="Trending News about Кейт Миддлтон" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Кейт Миддлтон</h1>
            <Image width={800} height={500} src="https://focus.ua/static/storage/thumbs/1200x630/f/e3/1c4a11ae-aa03efc4aac9bbb007add804caa20e3f.jpg?v=8787_1" alt="Кейт Миддлтон"/>
            <h3>Recent News</h3>
            <a href='https://focus.ua/uk/lifestyle/538517-keyt-middlton-rasskazala-kakie-metody-vospitania-perenyala-u-sobstvennyh-roditeley'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кейт Міддлтон розповіла, які методи виховання перейняла у ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTedNZrsb8Hn44g9BgQJc1KzpYa9gV2M9zHsZfd4ykyBKXtGYBIQwPYLCJ20MnMsk8SyT-ZuYPy" alt="Кейт Міддлтон розповіла, які методи виховання перейняла у ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Кейт Міддлтон та принц Вільям виховують трьох спадкоємців — принца Джорджа, принцесу Шарлотту та принца Луї.</p></div>
            </div>
        </a><a href='https://focus.ua/lifestyle/538517-keyt-middlton-rasskazala-kakie-metody-vospitaniya-perenyala-u-sobstvennyh-roditeley'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кейт Миддлтон рассказала, какие методы воспитания переняла ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTedNZrsb8Hn44g9BgQJc1KzpYa9gV2M9zHsZfd4ykyBKXtGYBIQwPYLCJ20MnMsk8SyT-ZuYPy" alt="Кейт Миддлтон рассказала, какие методы воспитания переняла ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Кейт Миддлтон и принц Уильям воспитывают трех наследников — принца Джорджа, принцессу Шарлотту и принца Луи.</p></div>
            </div>
        </a><a href='https://ua.korrespondent.net/lifestyle/4538598-keit-middlton-podilylasia-metodamy-vykhovannia-ditei'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кейт Міддлтон поділилася методами виховання дітей</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTJEvBsEYKlKLVUvv-EcoyVHQLp-0B6apnKs17nc9OtihViB2l1pIUYN7e2zzdPiz3E7_DU6MBA" alt="Кейт Міддлтон поділилася методами виховання дітей" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вона виховує трьох спадкоємців королівської родини. Деякі методи принцеса перейняла від своїх батьків.</p></div>
            </div>
        </a><a href='https://focus.ua/uk/lifestyle/538511-koroleva-belgii-matilda-skopirovala-obraz-keyt-middlton'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Королева Бельгії Матильда скопіювала образ Кейт Міддлтон</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSizhhE9vsolI9PTvNVTVVhYE1Ncn3_kC43SEwzHnABu7B03u5OuA3Xh4h4J_N2-TX7e9XTQNtm" alt="Королева Бельгії Матильда скопіювала образ Кейт Міддлтон" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Королева Бельгії з&#39;явилася на офіційному прийомі у білій сукні з кейпом.</p></div>
            </div>
        </a><a href='https://focus.ua/uk/lifestyle/538462-u-keyt-middlton-poyavilos-novoe-lyubimoe-ukrashenie'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Кейт Міддлтон з&#39;явилася нова улюблена прикраса</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQn6zhBib8d3IleCrokWf7qJIcNi3ABU2-BSAaXeKSNgnrbu99NaBWLEFfvIMoT30RVGoNm8RXp" alt="У Кейт Міддлтон з&#39;явилася нова улюблена прикраса" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Брошка в стилі ар-деко за 14 500 фунтів стерлінгів була зроблена ювелірним будинком Bentley &amp; Skinner. Вважається, що Кейт отримала брошку в подарунок на своє&nbsp;...</p></div>
            </div>
        </a><a href='https://korrespondent.net/lifestyle/4538598-keit-myddlton-podelylas-metodamy-vospytanyia-detei'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кейт Миддлтон поделилась методами воспитания детей</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTJEvBsEYKlKLVUvv-EcoyVHQLp-0B6apnKs17nc9OtihViB2l1pIUYN7e2zzdPiz3E7_DU6MBA" alt="Кейт Миддлтон поделилась методами воспитания детей" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Она воспитывает троих наследников королевской семьи. Некоторые методы принцесса переняла у своих родителей.</p></div>
            </div>
        </a><a href='https://www.kiz.ru/content/sekrety-zvezd/mne-povezlo-s-semey-keyt-middlton-perechislila-kak-roditeli-delali-ee-detstvo-schastlivym/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Мне повезло с семьей»: Кейт Миддлтон перечислила, как ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="«Мне повезло с семьей»: Кейт Миддлтон перечислила, как ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Жена принца Уильяма не скрывает, что в плане воспитания детей она часто советуется с собственной матерью. Уэльская убеждена: если ей удалось вырасти&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}