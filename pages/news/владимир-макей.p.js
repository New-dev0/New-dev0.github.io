import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Владимир Макей</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Владимир Макей"/>
        <meta name="description" content="Trending News about Владимир Макей" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Владимир Макей</h1>
            <Image width={800} height={500} src="https://online47.ru/media/photo/article/__160067.jpg" alt="Владимир Макей"/>
            <h3>Recent News</h3>
            <a href='https://online47.ru/2022/11/26/glava-mid-belorussii-vladimir-makey-skoropostizhno-skonchalsya-na-65-m-godu-zhizni-169353'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Глава МИД Белоруссии Владимир Макей скоропостижно ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRv7RXjSWkqO8UoeafvgzhTX8f_kxrI7KWDQeax-qhuPUe7FtKP0WSfXhniCg33k81xpNOHXpa7" alt="Глава МИД Белоруссии Владимир Макей скоропостижно ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ранее Online47 сообщал, что ушел из жизни раненный в зоне СВО псковский священник Александр Цыганов. Фото: Telegram.org/Russia in Belarus. Новости Online47- в&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/russian/news-63767333'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Министр иностранных дел Беларуси Владимир Макей внезапно ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQJ8MoFO0fcUmVYW-ntMEZ1rYTkXlCw0rfezr6cCo1KAl_wKyZIhixYSlXgU2L_jsEip1abOFwR" alt="Министр иностранных дел Беларуси Владимир Макей внезапно ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>МИД Беларуси сообщил о скоропостижной смерти министра, который буквально накануне появлялся на официальных мероприятиях.</p></div>
            </div>
        </a><a href='https://meduza.io/news/2022/11/26/umer-ministr-inostrannyh-del-belarusi-vladimir-makey'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Умер министр иностранных дел Беларуси Владимир Макей ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTgC_ryCF7dtT7KOdRlNeJHXuzB3JYrq-7768pgldJq4lB1OuNVILOLtDEyQ2k0F7-qqUnsXx0u" alt="Умер министр иностранных дел Беларуси Владимир Макей ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Министр иностранных дел Беларуси Владимир Макей умер, сообщает агентство «Белта» со ссылкой на пресс-секретаря ведомства.</p></div>
            </div>
        </a><a href='https://www.forbes.ru/society/481659-umer-ministr-inostrannyh-del-belorussii-vladimir-makej'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Умер министр иностранных дел Белоруссии Владимир Макей</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTtgo4nwJxZj3AqKW9RujKhD_s5rc12Lbd4PW03eFCfaenWWAeB7Xxf-1TrA9-oCQz-jZXDFABX" alt="Умер министр иностранных дел Белоруссии Владимир Макей" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Умер министр иностранных дел Белоруссии Владимир Макей, сообщило «БелТА». Оно не уточнило причину смерти. Еще накануне МИД Белоруссии сообщал об официальной&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5692461'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Умер глава МИД Белоруссии Владимир Макей</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQYDsoIiJHQBjCISBeL9CaQXnkKvLwDzCpIkJ1nXfBQARkxnj3SiJc2QK_3gpCpHJcnmhsV119K" alt="Умер глава МИД Белоруссии Владимир Макей" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Умер министр иностранных дел Белоруссии Владимир Макей. Ему было 64 года. О его смерти сообщило агентство БЕЛТА со ссылкой на пресс-секретаря министерства&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}