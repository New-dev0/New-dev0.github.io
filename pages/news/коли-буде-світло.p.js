import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Коли буде світло</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Коли буде світло"/>
        <meta name="description" content="Trending News about Коли буде світло" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Коли буде світло</h1>
            <Image width={800} height={500} src="https://i-visti.com/uploads/posts/2022-11/medium/1669290596_211281_light-bulb-503881_960_720_new_960x380_0.jpg" alt="Коли буде світло"/>
            <h3>Recent News</h3>
            <a href='https://i-visti.com/news/12395-koli-budut-svtlo-voda-y-teplo-vdpovdaye-borisplskiy-mskiy-golova.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Коли будуть світло, вода й тепло? Відповідає Бориспільський ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT12i-mYDXX25oaJje84NPUtjNtnSM1PidMjybRO7pF4ao3QfCybOups9RymR3fgRWHew05-QaH" alt="Коли будуть світло, вода й тепло? Відповідає Бориспільський ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вчора ввечері Бориспіль, як і багато інших українських міст, після масованих ракетних ударів залишився без світла і, як наслідок, без інших комунікацій не&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}