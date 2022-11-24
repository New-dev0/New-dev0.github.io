import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Південноукраїнська АЕС</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Південноукраїнська АЕС"/>
        <meta name="description" content="Trending News about Південноукраїнська АЕС" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Південноукраїнська АЕС</h1>
            <Image width={800} height={500} src="https://images.unian.net/photos/2022_09/thumb_files/1000_545_1662906829-8650.jpg?1" alt="Південноукраїнська АЕС"/>
            <h3>Recent News</h3>
            <a href='https://www.unian.ua/economics/energetics/pivdennoukrajinska-aes-vsi-energobloki-zupineni-v-chomu-prichina-12054798.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Південноукраїнська АЕС аварійно зупинена: стала відома причина</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSltpqS_IQzt3WMvtxp5GHksKXXwKGiOsVVHGNBRVtjmw-EmICuDX627onct4DuTE6WkDWultTI" alt="Південноукраїнська АЕС аварійно зупинена: стала відома причина" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У Миколаївській області аварійно зупинені всі енергоблоки Південноукраїнської атомної електростанції (АЕС), повідомив спікер &quot;Енергоатому&quot; Леонід Олійник.</p></div>
            </div>
        </a><a href='https://suspilne.media/323330-pivdennoukrainska-aes-so-na-mikolaivsini-vidklucena-vid-energosistemi-cerez-obstrili/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Миколаївщині Південноукраїнська АЕС відключена від ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSy6_mlkQTP4ao6rZk6wk9KqBWVfefOJ19sX6dPZvYg0Ae9RVYD_e0I26IIwczv9Om3xFhOymXf" alt="На Миколаївщині Південноукраїнська АЕС відключена від ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media 23 листопада о 14:36 через зниження частоти в мережі було відключено енергоблоки Південноукраїнської атомної електростанції — Суспільне&nbsp;...</p></div>
            </div>
        </a><a href='https://www.epravda.com.ua/news/2022/11/23/694176/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Усі енергоблоки Південноукраїнської АЕС аварійно зупинені</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSBroZztZ2_PPCS7J9WwnwEZ6ZCuRpqn-zC7ocguO68lJrtryvmCGjm1n8EyOqkhIWCiAxPCq3e" alt="Усі енергоблоки Південноукраїнської АЕС аварійно зупинені" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Так. Це пов&#39;язано з руйнуванням мереж. Зі станцією все добре. Нема куди видавати електроенергію&quot;, - сказав він. Нагадаємо: Внаслідок російських обстрілів&nbsp;...</p></div>
            </div>
        </a><a href='https://biz.nv.ua/ukr/markets/pivdenno-ukrainskaya-i-hmelnickaya-ayes-otklyucheny-ot-energosistemy-iz-za-obstrelov-50286170.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Аварійний захист. Усі енергоблоки Рівненської, Південно ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTEePUZZ-7A0G-FGyMYs7vNCVUUJlGhq50JI1O7XZ9WRxd4-d5Bv3y19hsXlNO8yteefTFk74x_Xw" alt="Аварійний захист. Усі енергоблоки Рівненської, Південно ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Аварійний захист. Усі енергоблоки Рівненської, Південно-Української та Хмельницької АЕС відключено — Енергоатом. 23 листопада, 15:15. Поділитися&nbsp;...</p></div>
            </div>
        </a><a href='https://zn.ua/ukr/ECONOMICS/pivdennoukrajinska-aes-ekstroenno-vidkljuchila-enerhobloki.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Південноукраїнська та Хмельницька АЕС екстренно відключили ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSkmGcYZIpJI7GCwJE2BOFXlblkJHyT5YjBiTgQ2CUaSQGjAYv27vjp-4h_d9GgIUWXixvN7O-7" alt="Південноукраїнська та Хмельницька АЕС екстренно відключили ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Під час російської ракетної атаки на енергетичні об&#39;єкти України аварійно зупинили свою роботу енергоблоки Південноукраїнської атомної електростанції,&nbsp;...</p></div>
            </div>
        </a><a href='https://glavcom.ua/country/incidents/pivdennoukrajinska-aes-avarijno-zupinila-robotu-detali--891064.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Південноукраїнська АЕС аварійно зупинила роботу: деталі</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSQ_Xk0UZSQFznZ5XNowy_S5GLM_ybE01QwodPSzApO2yu7eE0RXP2bC0LsnftU6wMoiDXzlYkt" alt="Південноукраїнська АЕС аварійно зупинила роботу: деталі" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Так. Це пов&#39;язано з руйнуванням мереж. Зі станцією все добре. Нема куди видавати електроенергію», – зазначив він. Нагадаємо, 23 листопада Росія завдала&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}