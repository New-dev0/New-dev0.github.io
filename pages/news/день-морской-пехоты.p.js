import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>День морской пехоты</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,День морской пехоты"/>
        <meta name="description" content="Trending News about День морской пехоты" /></Head><Template>
            <h1 style={{fontSize: "30"}}>День морской пехоты</h1>
            <Image width={800} height={500} src="https://s.ura.news/images/news/upload/smm/2022/11/27/facebook_d116712b3d76da76b58589eafba48165.jpg" alt="День морской пехоты"/>
            <h3>Recent News</h3>
            <a href='https://ura.news/news/1052606243'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пермские морпехи рассказали о погибшем в ходе СВО боевом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTNHdCr66K7Mbxn85QkyGc4uviuh1NXAkRfsSbkZnltphCkBVUcjTh_FcEAwurSOUZo9W-J7ExQ" alt="Пермские морпехи рассказали о погибшем в ходе СВО боевом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Они возложили цветы к памятнику «Солдат России» и вспомнили погибших в ходе выполнения спецоперации товарищей, передает корреспондент URA.RU. В мероприятии&nbsp;...</p></div>
            </div>
        </a><a href='https://ntr-24.ru/101743-v-nizhnekamske-v-odin-den-otmetili-dva-prazdnika-den-materi-i-den-morskoj-pehoty.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Нижнекамске в один день отметили два праздника: День ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRA8FWtwIuCzH5sXBF5IQojN8WFLPq-Xj1Ak8iqcblKHnx7o2FZ2SrLB6GcalsalodgiEywnuNS" alt="В Нижнекамске в один день отметили два праздника: День ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В России 27 ноября поздравляют и чествуют ветеранов и действующих военнослужащих с Днем морской пехоты.</p></div>
            </div>
        </a>
        </Template></>;
}