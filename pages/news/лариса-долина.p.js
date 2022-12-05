import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Лариса Долина</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Лариса Долина"/>
        <meta name="description" content="Trending News about Лариса Долина" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Лариса Долина</h1>
            <Image width={800} height={500} src="https://s6.cdn.eg.ru/wp-content/uploads/2022/10/larisa-dolina095921-1024x512.jpg" alt="Лариса Долина"/>
            <h3>Recent News</h3>
            <a href='https://www.eg.ru/showbusiness/2800392-dolina-oblaskala-izvestnuyu-pevicu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Волшебно»: Лариса Долина публично обласкала известную ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSwBdvh465jDfJK_bjp47mFuSRFr6p32SwmOOi4pjr0TN21oufBzFchgnwrhSFL-lDiKW0jzF6B" alt="«Волшебно»: Лариса Долина публично обласкала известную ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Артистка осталась в восторге от Этери Бериашвили. Они встретились с Долиной в эфире федерального канала.</p></div>
            </div>
        </a>
        </Template></>;
}