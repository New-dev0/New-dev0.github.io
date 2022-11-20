import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ölü Ozanlar Derneği</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ölü Ozanlar Derneği"/>
        <meta name="description" content="Trending News about Ölü Ozanlar Derneği" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ölü Ozanlar Derneği</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/19/2004269/kapak_122954.jpg" alt="Ölü Ozanlar Derneği"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/yasam/olu-ozanlar-dernegi-filminin-konusu-ne-oyunculari-kim-2004269'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ölü Ozanlar Derneği filminin konusu ne, oyuncuları kim?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRe6H5m5_WqOqS2MXjYvC_PYLZsMH-j3FwWJNvjiQujsACoasQEZb4Sai17PficS0P1BQwTLmpu" alt="Ölü Ozanlar Derneği filminin konusu ne, oyuncuları kim?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1959 yılında geçen film, John Keating (Robin Williams) adlı çok başarılı ve bir o kadar da farklı olan edebiyat öğretmeninin çok disiplinli bir erkek okulu olan&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aksam.com.tr/sinema/olu-ozanlar-dernegi-19-kasimda-trt-2de-o-onlarin-ilham-kaynagiydi-hayatlarini-olaganustu-kildi/haber-1320723'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Ölü Ozanlar Derneği&#39; 19 Kasım&#39;da TRT 2&#39;de: &#39;O, onların ilham ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQntt1uzsmf_GYZrdLlqOU81EBXeZN1XrrtLLk4lS4pK9WkSXsXEVGdKirW6yU56M-KFXuoiVlG" alt="&#39;Ölü Ozanlar Derneği&#39; 19 Kasım&#39;da TRT 2&#39;de: &#39;O, onların ilham ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En İyi Özgün Senaryo Akademi Ödülü&#39;nü alan 1989 yapımı &#39;Ölü Ozanlar Derneği&#39; (Dead Poets Society) 19 Kasım&#39;da TRT 2&#39;de kendini hatırlatacak.</p></div>
            </div>
        </a><a href='https://www.fotospor.com/guncel/olu-ozanlar-dernegi-filmi-kac-yilinda-cekildi-olu-ozanlar-dernegi-filmi-konusu-ne-540283'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ölü Ozanlar Derneği filmi kaç yılında çekildi? Ölü Ozanlar Derneği ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRJzFWnqTQhdpsH5jqw0yyv20xHQaSuZcAKbZh3wK-f1A6RgorkjkpcmsXIFkR0x8QnbWsEfvGG" alt="Ölü Ozanlar Derneği filmi kaç yılında çekildi? Ölü Ozanlar Derneği ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ancak Welton Akademisinin felsefesine tam örtüşmeyen bu ders anlatımı akademi yönetimi tarafından da gözden kaçmayacaktır. Okul müdürü Bay Nolan (Norman Lloyd)&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}