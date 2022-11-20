import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Война</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Война"/>
        <meta name="description" content="Trending News about Война" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Война</h1>
            <Image width={800} height={500} src="https://gdb.rferl.org/01af0000-0aff-0242-47fd-08dac7ed1beb_cx0_cy14_cw0_w1200_r1.jpg" alt="Война"/>
            <h3>Recent News</h3>
            <a href='https://www.svoboda.org/a/po-raznye-storony-grazhdanskaya-voyna-odnoy-semji/32133913.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>По разные стороны. Гражданская война одной российской семьи</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQBihVDJo4C1DuKFXa9L1zUN2kHKEPGU6bJTaRL7jyaZHqHG1rdCwVvo5bu3kGsOL2mC05MvNTd" alt="По разные стороны. Гражданская война одной российской семьи" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сто лет назад, на исходе 1922 года, закончилась Гражданская война на территории бывшей Российской империи. Дата эта достаточно условна: ее связывают с&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}