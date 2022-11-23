import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Когда День сыновей</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Когда День сыновей"/>
        <meta name="description" content="Trending News about Когда День сыновей" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Когда День сыновей</h1>
            <Image width={800} height={500} src="https://www.zdorovieinfo.ru/wp-content/uploads/2022/11/2-10.jpg" alt="Когда День сыновей"/>
            <h3>Recent News</h3>
            <a href='https://www.zdorovieinfo.ru/zhitzdorovo/life/programma-zhit-zdorovo-ot-22-11-2022-papy-malchiki-den-synovej/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Программа «Жить здорово» от 22.11.2022: Папы-мальчики. День ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQq1BK9BtpS1QiNW6ONrEQU_bk4eAqXmRfgl8QYUIqtiuNI-NPYCB_6QnOIGdQdFq-SLgTeZVMr" alt="Программа «Жить здорово» от 22.11.2022: Папы-мальчики. День ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Родителям важно сделать сыновья в возрасте 12-15 месяцев, а затем в 6 лет сделать прививку от эпидемического паротита. Это заболевание может перерасти в&nbsp;...</p></div>
            </div>
        </a><a href='https://omskzdes.ru/society/79685.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День сыновей, Чемпионат мира по футболу и День психолога ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQkkEBZwAhFH3ASGB9_DGTewFrnAEQD_ENpzbmVbWvTm9HfQ3imeonLKkjBpqksNOH43iNPuggS" alt="День сыновей, Чемпионат мира по футболу и День психолога ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Рассказываем о самых актуальных поисковых запросах в интернете среди жителей нашего региона. В данной рубрике мы рассказываем о темах, которые интересовали&nbsp;...</p></div>
            </div>
        </a><a href='https://infryazino.ru/novosti/den_kalendarya/den-synovey-otmechaetsya-v-mire-22-noyabrya'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День сыновей отмечается в мире 22 ноября</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSrQ2l7Pa6_pXIb29e8GTbB_RB6yuC7bEOfC2HLPBvCuzOvl5Gwf1_gU7Z4NDIhNjDYoBqa25ud" alt="День сыновей отмечается в мире 22 ноября" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Хотя праздник пока не имеет официального статуса, он получает всё больше поклонников. В этот день всех сыновей – и маленьких, и взрослых – родители радуют&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}