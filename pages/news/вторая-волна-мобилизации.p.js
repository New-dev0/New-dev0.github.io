import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Вторая волна мобилизации</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Вторая волна мобилизации"/>
        <meta name="description" content="Trending News about Вторая волна мобилизации" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Вторая волна мобилизации</h1>
            <Image width={800} height={500} src="https://gdb.rferl.org/04020000-0aff-0242-99a6-08daa161a2ca_cx0_cy3_cw0_w1200_r1.jpg" alt="Вторая волна мобилизации"/>
            <h3>Recent News</h3>
            <a href='https://www.svoboda.org/a/s-pesney-na-uboy-propaganda-i-realjnostj-chastichnoy-mobilizatsii-v-krymu/32154166.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>С песней на убой. Пропаганда и реальность мобилизации в Крыму</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSEcI_TL9i8wfcESeokHqf81WcaJg9JHONVe-ckS22KB_ejwv9LGOtjWbUwNcR7kZ9oE-VfjzS2" alt="С песней на убой. Пропаганда и реальность мобилизации в Крыму" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Осенью около двух тысяч крымчан отправились на войну с Украиной после объявленной Владимиром Путиным &quot;частичной&quot; мобилизации.</p></div>
            </div>
        </a>
        </Template></>;
}