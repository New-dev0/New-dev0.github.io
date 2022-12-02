import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Мария Колесникова</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Мария Колесникова"/>
        <meta name="description" content="Trending News about Мария Колесникова" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Мария Колесникова</h1>
            <Image width={800} height={500} src="" alt="Мария Колесникова"/>
            <h3>Recent News</h3>
            <a href='https://meduza.io/feature/2022/11/30/mariya-kolesnikova-stavshaya-litsom-belorusskih-protestov-v-2020-m-i-osuzhdennaya-na-11-let-popala-v-reanimatsiyu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мария Колесникова, ставшая лицом белорусских протестов в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRRido4xamCR7YX1oDKTPSGnozTfVtvYqt7jqY7_LT9bhAVM7OS-Q7B8vOt9WolgqeziOCyvKXA" alt="Мария Колесникова, ставшая лицом белорусских протестов в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мария Колесникова, ставшая одной из самых узнаваемых фигур белорусских протестов 2020 года и осужденная из-за них, попала в реанимацию.</p></div>
            </div>
        </a><a href='https://www.bbc.com/russian/news-63798477'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мария Колесникова доставлена в больницу, ей сделали ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcScJ2L_9xnl5PA_LFD5DcGBqVQusxwNAXtJGScRfMgPsNyL8tJ3kIODjm1EOFdXN46Ov0RvBHZy" alt="Мария Колесникова доставлена в больницу, ей сделали ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Одна из лидеров оппозиции Беларуси Мария Колесникова, которая уже более двух лет находится в тюрьме по политическим обвинениям, доставлена в больницу,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.interfax.ru/world/874829'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У осужденной в Белоруссии Марии Колесниковой выявили ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTUDY0RABEpAvRf7TJme6NE1w-F9TsKhtTHletrgzZX5IKw4PLy5BTKJxFq9l5B-fBv-hfQJc4o" alt="У осужденной в Белоруссии Марии Колесниковой выявили ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>30 ноября. INTERFAX.RU - Отбывающая срок в гомельской колонии оппозиционерка Мария Колесникова, по неподтвержденной информации, попала в больницу с прободной&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5694286'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Белорусская оппозиционерка Колесникова попала в реанимацию</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQU8ii-a7QTV16BjXxD0n7Wb2JfUjORyZfbIkUdXUpbeKv20fjTCF7YzG_RjCWhQqwpkckZaOsv" alt="Белорусская оппозиционерка Колесникова попала в реанимацию" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мария Колесникова, отбывающая 11-летний тюремный срок по делу о заговоре с целью захвата власти в Белоруссии, попала в реанимацию, сообщила пресс-служба&nbsp;...</p></div>
            </div>
        </a><a href='https://www.golosameriki.com/a/belarus-maria-kolesnikova/6855031.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Беларусь: Мария Колесникова – в реанимации</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQSqFJvQsaNidsx1uI6ArHXDslcZtPubXEG2fB24av74GuGciTzFcKPdjUE4VjQnUD8StRdJhB5" alt="Беларусь: Мария Колесникова – в реанимации" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Одна из лидеров протестного движения в Беларуси Мария Колесникова, находящаяся в заключении, была доставлена в реанимационное отделение клиники в Гомеле.</p></div>
            </div>
        </a><a href='https://www.svoboda.org/a/shtab-belorusskogo-oppozitsionera-soobschil-o-gospitalizatsii-marii-kolesnikovoy/32154281.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лидер протестов против Лукашенко госпитализирована в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQzxsgNjMQNlB1SKHh2f-cnvBweon_ozm1nNmKnK4XCRN8uV-vf5B9usIZ_KvwlCwwBtr-5mtGg" alt="Лидер протестов против Лукашенко госпитализирована в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В сообщении штаба, который Колесникова возглавляла перед выборами, говорится, что оппозиционер была доставлена в больницу в понедельник, 28 ноября. Она была&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}