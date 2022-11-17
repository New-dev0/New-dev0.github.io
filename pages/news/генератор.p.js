import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Генератор</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Генератор"/>
        <meta name="description" content="Trending News about Генератор" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Генератор</h1>
            <Image width={800} height={500} src="" alt="Генератор"/>
            <h3>Recent News</h3>
            <a href='https://suspilne.media/318238-u-zitomiri-rozpodilili-60-miljoniv-griven-na-dizelni-generatori-dla-pidpriemstv-persa-partia-vze-na-mitnici/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Житомирі розподілили 60 мільйонів гривень на дизельні ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTF6m2gRsmhL8qAfTGk5fGrUss5YmCCA7k3UvjE-jEJX2yuP56fVXnFWkDaGT6snFXqv14v-JljFA" alt="У Житомирі розподілили 60 мільйонів гривень на дизельні ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media На засіданні виконкому Житомирської міськради розподілили 60 мільйонів гривень на дизельні генератори для підприємств критичної&nbsp;...</p></div>
            </div>
        </a><a href='https://vsim.ua/Groshi/hto-y-za-skilki-pridbav-generatori-u-hmelnitskomu-oglyad-zakladiv-i-pi-11711014.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Хто й за скільки придбав генератори у Хмельницькому: огляд ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRRlmruTu0NoW4oMNJGZDz3eTNjGSSh_e34MaGyepw5YXLlYnDIMvuBiiHDbq9HqIab22VdsgKe" alt="Хто й за скільки придбав генератори у Хмельницькому: огляд ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[16:11:2022] Хто й за скільки придбав генератори у Хмельницькому: огляд закладів і підприємств ✓Новини від vsim.ua ✓ Тільки свіжі новини - слідкуйте разом&nbsp;...</p></div>
            </div>
        </a><a href='https://sud.ua/ru/news/publication/254398-v-vysshem-sovete-pravosudiya-do-sikh-por-net-generatorov-i-starlink'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Высшем совете правосудия до сих пор нет генераторов и Starlink</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ7BW1Kz1wddy-6ceLzth52efLUYCpzB4KWjh7dvpD_GrFR0aZBRdRY9HyvoW3j1Uhu7CsHeBrP" alt="В Высшем совете правосудия до сих пор нет генераторов и Starlink" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Что касается терминалов Starlink, то по состоянию на ноябрь 2022 года в распоряжении ВККС нет ни одного терминала Starlink. Напомним, что ранее «Судебно-&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}