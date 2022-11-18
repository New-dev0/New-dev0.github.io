import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Новоград-Волынский</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Новоград-Волынский"/>
        <meta name="description" content="Trending News about Новоград-Волынский" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Новоград-Волынский</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/_/v/_volinskiy_wikipedia_org_1300x820.jpg" alt="Новоград-Волынский"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/novograd-volinskomu-povernuli-istorichnu-1668609242.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Новоград-Волынскому вернули историческое название: как ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRSnV_sV9CDvuSO0zk6F5owaeVq1pIXrXjXjzCLF-jF2Uvf7WlK4zFXE13IWY0Kl_-8AZiDkbEr" alt="Новоград-Волынскому вернули историческое название: как ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Кроме того, Новоград-Волынский район был переименован в Звягельский район. Добавим, что название Звягель город имел с ХV века. В 1793 году после второго раздела&nbsp;...</p></div>
            </div>
        </a><a href='https://delo.ua/ru/society/rada-pereimenovala-gorod-novograd-volynskii-406954/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Рада переименовала город Новоград-Волынский</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ7dhNisSTeNDmKCMqk3wHEVvdtwbPsj7LlZQ1rcl47RM1AGzRoi8rAt0VbmeDIvdSQ4kSTxUu9" alt="Рада переименовала город Новоград-Волынский" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Верховная Рада Украины 16 ноября официально вернула городу Новоград-Волынский Житомирской области историческое название - Звягель. Об этом сообщил народный&nbsp;...</p></div>
            </div>
        </a><a href='https://hromadske.radio/ru/news/2022/11/16/horod-novohrad-vol-nskyy-v-zhytomyrskoy-oblasty-pereymenovaly-v-zviahel'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Город Новоград-Волынский в Житомирской области ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQSCB4oKZtOVciBMjEIa0ac2QWwBNPGb6dsmp82mu-NITuuLad5vH2Ffh0FsDVfNKtvf_Sm4NW1" alt="Город Новоград-Волынский в Житомирской области ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Населенный пункт впервые упоминается в письменном упоминании ХІІІ ст. Как «Возвягель», позже с XV в. город носил название «Звягель». В 1793 году после второго&nbsp;...</p></div>
            </div>
        </a><a href='https://nv.ua/ukraine/events/rada-pereimenovala-novograd-volynskiy-50284537.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Рада переименовала Новоград-Волынский в Звягель</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQae-UWyGOfVPB4tVWia5ycmgWn9iWaascOcMzUWcBBe-KPWCpEEiUCHbGqhRGF6xO4JYSiohaS" alt="Рада переименовала Новоград-Волынский в Звягель" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Также парламент переименовал Новоград-Волынский район Житомирской области в Звягельский район. За такое решение проголосовали 260 нардепов.</p></div>
            </div>
        </a><a href='https://www.svoboda.org/a/32133860.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Украине Новоград-Волынскому вернули название Звягель</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSc5CBJ1j_G2FOErk0n_VB-HesjUA6E_NVXQ_8YoBIs1B3oXJa_U7V2MAQbjuDOMBxlxKkpYIGC" alt="В Украине Новоград-Волынскому вернули название Звягель" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Верховная рада Украины 16 ноября вернула городу Новоград-Волынский Житомирской области его историческое название Звягель. За постановление проголосовали 260&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.net/politics/v-ukrajini-pereymenuvali-misto-novograd-volinskiy-shcho-na-zhitomirshchini-12047601.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Верховная Рада переименовала город Новоград-Волынский на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSrJBT3Z9k05g-iWf_YwlunbxBfvvIJfVTYhM8WztS4cShb6XOSSQS6XO4H5unvM6p29YvaMX8q" alt="Верховная Рада переименовала город Новоград-Волынский на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Верховная Рада Украины в среду, 16 ноября, переименовала город Новоград-Волынский Житомирской области на Звягель. Городу вернули историческое название.</p></div>
            </div>
        </a><a href='https://www.currenttime.tv/a/verhovnaya-rada-ukrainy-vernula-gorodu-novograd-volynskiy-ego-istoricheskoe-nazvanie-zvyagel/32133899.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Верховная Рада Украины вернула городу Новоград-Волынский ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSc5CBJ1j_G2FOErk0n_VB-HesjUA6E_NVXQ_8YoBIs1B3oXJa_U7V2MAQbjuDOMBxlxKkpYIGC" alt="Верховная Рада Украины вернула городу Новоград-Волынский ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Верховная Рада Украины вернула городу Новоград-Волынский Житомирской области его историческое название Звягель. За это решение проголосовали 260 депутатов.</p></div>
            </div>
        </a>
        </Template></>;
}