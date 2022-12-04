import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>4 декабря праздник</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,4 декабря праздник"/>
        <meta name="description" content="Trending News about 4 декабря праздник" /></Head><Template>
            <h1 style={{fontSize: "30"}}>4 декабря праздник</h1>
            <Image width={800} height={500} src="https://static.mk.ru/media/img/mk.ru/mkru_og_tag_1200x720.jpg" alt="4 декабря праздник"/>
            <h3>Recent News</h3>
            <a href='https://www.mk-pskov.ru/social/2022/12/03/prazdnik-vvedeniya-vo-khram-presvyatoy-bogorodicy-otmechaetsya-4-dekabrya.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Праздник введения во храм Пресвятой Богородицы отмечается ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQOw3qiQ8jX1LxXYLWb-E9CFPUad-DWkMTAZ-Z5r6QSYEO_45-IISLwptx1zs2RJ88TMw3ZMLU_" alt="Праздник введения во храм Пресвятой Богородицы отмечается ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Все права на материалы, опубликованные на сайте mk-pskov.ru, принадлежат редакции и охраняются в соответствии с законодательством РФ. Использование материалов,&nbsp;...</p></div>
            </div>
        </a><a href='https://tvsamara.ru/news/kak-pravilno-prozhit-den-4-dekabrya-prazdnik-vvedeniya-v-khram-presvyatoi-bogorodicy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Как правильно прожить 4 декабря — праздник Введения в храм ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRTcBIQYDR8YLX-JllG1CtXkkJUolYcXqVVM5lgMRr47PvrA3NmO0bOPTbI_v1lBFEpC3szdwzf" alt="Как правильно прожить 4 декабря — праздник Введения в храм ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>4 декабря 2022 года православные верующие отмечают праздник Введение во храм Пресвятой Богородицы. Повсеместно его начали отмечать в IX веке, после Крещения&nbsp;...</p></div>
            </div>
        </a><a href='https://vestinn.ru/news/society/210728/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Народные приметы. Сделайте это 4 декабря, и вы сможете ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS2xKyVfEJqLthDdv9plrhlcEKl7bcb13luOcJHdk6cHdQhspOSSHrTUpAcAREHfBex0ma6LWtq" alt="Народные приметы. Сделайте это 4 декабря, и вы сможете ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>4 декабря верующие отмечают двунадесятый праздник – Введение во храм Пресвятой Богородицы. В народе это день отождествляли с полным приходом морозной зимы.</p></div>
            </div>
        </a><a href='https://dni.ru/society/2022/12/4/513784.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Введение в храм Пресвятой Богородицы: что нельзя делать 4 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTLFFadZNpWpU8pMlrseMAr_SztH5fUiOMW_tqiZdZTMwFyZ5A4lF7VKCX23AwIi6sPdfpqEu-e" alt="Введение в храм Пресвятой Богородицы: что нельзя делать 4 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>4 декабря 2022 года православные верующие отмечают праздник – введение в храм Пресвятой Богородицы. Введение во храм Пресвятой Богородицы – большой праздник,&nbsp;...</p></div>
            </div>
        </a><a href='https://zn.ua/UKRAINE/tretja-prechistaja-istorija-prazdnika.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Третья Пречистая: история праздника</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQQgFjKkhtMGVp6gC9R6ds68dXIEDK6p-0A61Y0Jufl91cV64ip-3V113ZZEeuvP1tpAkNWtnPz" alt="Третья Пречистая: история праздника" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Согласно Писанию, у Иоакима и Анны, родителей Девы Марии, долгое время не было детей. Они молили Бога, чтобы он послал им дитя. Бог услышал молитвы и исполнил&nbsp;...</p></div>
            </div>
        </a><a href='https://tolknews.ru/obsestvo/135674-narodnie-primeti-dekabrya-chto-oznachayut-sneg-i-moroz-v-etot-den'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Народные приметы 4 декабря 2022. Что означают снег и мороз ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTxyeZfkG4xYX90B4LPgQ1AHle3AEChdjcO6lkdG6AIews16ZY3LnxkZ0Gjoz22VEc_jkJcDyHr" alt="Народные приметы 4 декабря 2022. Что означают снег и мороз ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>4 декабря верующие отмечают большой праздник - Введение во храм Пресвятой Богородицы. Это один из двенадцати важнейших праздников православной церкви.</p></div>
            </div>
        </a><a href='https://ntr.city/news/society/111216/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Введение во храм Пресвятой Богородицы: что можно и нельзя ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQtQWx4LEU0aRzB4GqBPuMv2gdaKyjWvbA4ccd1aZ-l1S-2c7b3FqNSDAPhfn-bYI_OGjGX5r0q" alt="Введение во храм Пресвятой Богородицы: что можно и нельзя ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В основе праздника лежит церковное предание о введении Девы Марии в Иерусалимский храм для посвящения Богу. Согласно этому преданию, родители Пресвятой&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}