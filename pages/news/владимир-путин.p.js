import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Владимир Путин</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Владимир Путин"/>
        <meta name="description" content="Trending News about Владимир Путин" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Владимир Путин</h1>
            <Image width={800} height={500} src="" alt="Владимир Путин"/>
            <h3>Recent News</h3>
            <a href='https://meduza.io/feature/2022/11/24/vladimir-putin-mnogo-govorit-o-borbe-s-zapadnym-neokolonializmom-odna-iz-zhertv-ego-borby-rossiyskaya-nauka'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин много говорит о борьбе с западным ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSNnwnM4EyLIq9n8JDdJYzZE2tLpxwY7yxV0CKrM9J3qq8UnluTFDGYoFoAA3el0qmkPCG7xAiF" alt="Владимир Путин много говорит о борьбе с западным ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Среди множества видов глобального неравенства — неравенство в производстве научного знания. Страны «глобального Юга», среди которых много бывших колоний,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.net/world/igor-eydman-nazval-glavnye-paranoidalnye-idei-kollektivnogo-putina-12054588.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Социолог назвал главные параноидальные идеи коллективного ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSorKSTQhS2gXthxfvxb5Q9l2iOEd3c3-nWKKcHYQ2Kw5oNBaXjWWi9mL5194504iKAu6etyYqn" alt="Социолог назвал главные параноидальные идеи коллективного ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На каких бредовых идеях основывается мировоззрение коллективного президента РФ. Очень важная новость. Это стоит прочитать и знать сегодня в условиях войны.</p></div>
            </div>
        </a>
        </Template></>;
}