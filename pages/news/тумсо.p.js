import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Тумсо</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Тумсо"/>
        <meta name="description" content="Trending News about Тумсо" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Тумсо</h1>
            <Image width={800} height={500} src="https://golosislama.com/uploads/images/thumbs/gi/2022/12/1b1743b1df651f2b832da5e4a02cefed.jpg" alt="Тумсо"/>
            <h3>Recent News</h3>
            <a href='https://golosislama.com/news.php?id=41229'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зиявутдин Магомедов, Доного, Тумсо: империя должна умереть</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSdsCAjwVpToOv2EcEgDTM-cd2i3CEFZp2YPvgG9NIPqQYUTY6YsGgBxLVW3cppV4e7eSSO5ZBt" alt="Зиявутдин Магомедов, Доного, Тумсо: империя должна умереть" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>19 лет колонии строгого режима миллиардеру Зиявутдину Магомедову и 18 лет его брату, бывшему члену Совета Федерации Магомеду Магомедову, обыск у одного из&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}