import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Тимофей Спивак</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Тимофей Спивак"/>
        <meta name="description" content="Trending News about Тимофей Спивак" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Тимофей Спивак</h1>
            <Image width={800} height={500} src="https://iv.kommersant.ru/SocialPics/5695625_26_2301434_978050301" alt="Тимофей Спивак"/>
            <h3>Recent News</h3>
            <a href='https://www.kommersant.ru/doc/5695625'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Умер актер Тимофей Спивак</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQAInXoqdVS5drSBOvM1zXDagygWOnAT7YBLCqzq10jGwVBGWc46mZYQjJSBNgUg5SaanbLJDVg" alt="Умер актер Тимофей Спивак" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На 76-м году жизни умер актер театра и кино Тимофей Спивак. Об этом сообщила его дочь Марьяна Спивак. Причина смерти актера неизвестна.</p></div>
            </div>
        </a><a href='https://argumenti.ru/society/2022/12/802015'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ушел из жизни актер и режиссер Тимофей Спивак - Аргументы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRiD5JlHnRQdCEaf-6EM5D3SKBK4l-8eypKar3Lyi3lQ6y8HO_4MTPjGJbjP1Iear641n9vf7Pf" alt="Ушел из жизни актер и режиссер Тимофей Спивак - Аргументы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Москве 30 ноября ушел из жизни актер театра и кино, кинорежиссер, сценарист Тимофей Спивак. О смерти артиста сообщила его дочь и коллега Марьяна Спивак.</p></div>
            </div>
        </a><a href='https://life.ru/p/1542692'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ушёл из жизни актёр &quot;Прощания славянки&quot; и &quot;Эпидемии ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcShB0hZwJockqlr4LC3RNEf83Uo02Tk4yi2b_vggvPsKnxDbekzAJ0lrkfrkpRCFW-zV76H1Bcn" alt="Ушёл из жизни актёр &quot;Прощания славянки&quot; и &quot;Эпидемии ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ушёл из жизни российский актёр театра и кино, режиссёр, сценарист Тимофей Спивак. Об этом в социальных сетях сообщила его дочь, известная актриса Марьяна&nbsp;...</p></div>
            </div>
        </a><a href='https://moika78.ru/news/2022-12-01/832580-akter-teatra-kino-i-dublyazha-timofej-spivak-umer-v-vozraste-75-let/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Актер театра, кино и дубляжа Тимофей Спивак умер в возрасте ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQon0dSshdxrvri5XIoITankRlGMXNSLNYnNpPcd4CSTAaY3DC0Waxocmgfqp6qHO51rWzEkQrE" alt="Актер театра, кино и дубляжа Тимофей Спивак умер в возрасте ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Советский и российский актер театра и кино Тимофей Спивак ушел из жизни в 75 лет. Он скончался в среду, 30 ноября. О смерти артиста сообщила его дочь&nbsp;...</p></div>
            </div>
        </a><a href='https://rtvi.com/news/akter-kino-i-dublyazha-timofej-spivak-umer-v-vozraste-75-let/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Актер кино и дубляжа Тимофей Спивак умер в возрасте 75 лет</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRxgQUSDWpWgqlsAQ5r1qFR5dg6nMNMLa8iavh1dwhQMiE2ecOzkwv9GYN4Rpfndq0aNf_OM0ee" alt="Актер кино и дубляжа Тимофей Спивак умер в возрасте 75 лет" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Москве в возрасте 75 лет умер советский и российский актер театра, кино и дубляжа, кинорежиссер и сценарист Тимофей Спивак. Об этом в Instagram* сообщила&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}