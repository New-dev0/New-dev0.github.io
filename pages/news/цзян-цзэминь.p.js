import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Цзян Цзэминь</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Цзян Цзэминь"/>
        <meta name="description" content="Trending News about Цзян Цзэминь" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Цзян Цзэминь</h1>
            <Image width={800} height={500} src="" alt="Цзян Цзэминь"/>
            <h3>Recent News</h3>
            <a href='https://www.fmprc.gov.cn/rus/zxxx/202212/t20221201_10983815.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Цзян Цзэминь скончался</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTJdHOZ3n9CNBUtrYiC5EWtiwxXfL4a2Pumq7uNo9POrOW3pWpvHEaGWuALi4Gms4evoqFUCzH0" alt="Цзян Цзэминь скончался" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Цзян Цзэминь скончался в городе Шанхай в 12:13 30 ноября 2022 года в возрасте 96 лет от лейкемии и полиорганной недостаточности. Об этом сообщили в среду.</p></div>
            </div>
        </a><a href='https://www.bbc.com/russian/news-63806185'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бывший китайский лидер Цзян Цзэминь скончался в возрасте 96 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQCpa1rI2C5iiuxA9u_UehtIuoIQi-wO-HLfFTdkbeQLl8Cb5Syw4VGBoyeepBxsMgIkYGfrAMB" alt="Бывший китайский лидер Цзян Цзэминь скончался в возрасте 96 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бывший лидер КНР Цзян Цзэминь, пришедший к власти после кровавого разгона протестов на площади Тяньаньмэнь, скончался в возрасте 96 лет,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5694582'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Умер бывший председатель КНР Цзян Цзэминь</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSmZTCDGORuce-my465QPuNgKvDQt50rF0y2Gy9OCapMqsP_ypFFonHDnfG4eTve9DxWLpRQU8J" alt="Умер бывший председатель КНР Цзян Цзэминь" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бывший председатель КНР Цзян Цзэминь умер в возрасте 96 лет в Шанхае. Он стал председателем КНР в 1993 году, а покинул свой пост в 2003-м.</p></div>
            </div>
        </a><a href='https://www.interfax.ru/world/874782'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Экс-председатель КНР Цзян Цзэминь скончался на 97-м году ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ9KeKX_393wq7py_1Tlm5Y1IzNTy2J6jm0ujGcyYOXRDRv6n2biKy11gEKguSNXCg6Tc19B64Z" alt="Экс-председатель КНР Цзян Цзэминь скончался на 97-м году ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Москва. 30 ноября. INTERFAX.RU - Бывший председатель КНР Цзян Цзэминь ушел из жизни в возрасте 96 лет, передает &quot;Синьхуа&quot;. &quot;Цзян Цзэминь скончался из-за&nbsp;...</p></div>
            </div>
        </a><a href='https://www.svoboda.org/a/v-shanhae-umer-byvshiy-lider-kitaya-tszyan-tszeminj/32155343.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Шанхае умер бывший председатель КНР Цзян Цзэминь</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR2XCjDU-p0tgj0O_mgxz8C6ZJbwExpiqjfYfCm_BiQvrnjFtboDd9jvqVPfx2RBH1_vM8lolzn" alt="В Шанхае умер бывший председатель КНР Цзян Цзэминь" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ему было 96 лет. Он занимал пост председателя КНР в 1993–2003 годы.</p></div>
            </div>
        </a><a href='https://klops.ru/news/2022-11-30/262192-skonchalsya-eks-predsedatel-knr-tszyan-tszemin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Скончался экс-председатель КНР Цзян Цзэминь</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSkfj8Q5Yisg9ANMX15PmF11q2JrJM2MG27Zmhy3fzGGjhlESzVluNJ_bvzanUyINvvgGQQ-RHt" alt="Скончался экс-председатель КНР Цзян Цзэминь" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Наш глубокоуважаемый товарищ Цзян Цзэминь страдал от лейкемии, осложненной полиорганной недостаточностью, спасти его было невозможно, 30 ноября 2022 года в 12&nbsp;...</p></div>
            </div>
        </a><a href='https://bobruisk.ru/news/2022/11/30/byvshij-lider-kitaya-czyan-czemin-skonchalsya-v-vozraste-96-let'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бывший лидер Китая Цзян Цзэминь скончался в возрасте 96 лет</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTaHmQnzRpIvNx1TJAzXzDbyfa_zRDKmBvZJpMvjV4ZI3eaRT4OZ6aKG-3Yha1e07pdwwwGoFXK" alt="Бывший лидер Китая Цзян Цзэминь скончался в возрасте 96 лет" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Его называют «китайским коммунистическим лидером, проложившим путь к превращению страны в глобальную сверхдержаву».</p></div>
            </div>
        </a>
        </Template></>;
}