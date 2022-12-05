import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>HIV nedir</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,HIV nedir"/>
        <meta name="description" content="Trending News about HIV nedir" /></Head><Template>
            <h1 style={{fontSize: "30"}}>HIV nedir</h1>
            <Image width={800} height={500} src="https://cdn1.ntv.com.tr/gorsel/wV7dwRPAxEmyGUJW3HuJsA.jpg?width=1080&mode=crop&scale=both" alt="HIV nedir"/>
            <h3>Recent News</h3>
            <a href='https://www.ntv.com.tr/n-life/saglikli-yasam/hiv-virusu-nedir-nasil-bulasir,D1An8rEL-UGJrR77f__Ccw'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HIV virüsü nedir, nasıl bulaşır?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTtMGDhDMFhP21VwU13sozK7ENTmUteDcXLvgCpIB7UI1ldMU8RwgT9Fv-2hYi3tAP9WnUcYejK" alt="HIV virüsü nedir, nasıl bulaşır?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>HIV (Human Immmunodeficiency Virus), Türkçe&#39;de İnsan Bağışıklık Yetmezliği Virüsü olarak adlandırılan bir hastalık etkenidir.</p></div>
            </div>
        </a><a href='https://www.mynet.com/hiv-virusu-nedir-nasil-bulasir-hiv-enfeksiyonu-nasil-kapilir-110107075903'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HIV virüsü nedir, nasıl bulaşır? HIV enfeksiyonu nasıl kapılır?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQD4RYJwLtJR2UmEF2grsWZ3RPxywUZwQefrKPt4fuUcSE4NMZIYcpYL5dNo2oVNaOMAf6C2e2L" alt="HIV virüsü nedir, nasıl bulaşır? HIV enfeksiyonu nasıl kapılır?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>HIV virüsünün son zamanlarda karşılaşılan en büyük hastalıklardan birisi olduğu belirtiliyor. Açılımı Human Immmunodeficiency Virus olan bu hastalık,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ulusal.com.tr/saglik/hiv-virusu-nedir-nasil-bulasir-hiv-enfeksiyonu-nasil-kapilir-hiv-virusu-tedavisi-nasil-olur-hiv-virusu-belirtileri-neler-15007670'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HIV virüsü nedir?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSXqR6SI5DFkR3h95z-euIZqSc-VNVajwNnfpjgEz5Fix4R9GMMwpwLjqhrJ1m3Tt1_K50dZVkv" alt="HIV virüsü nedir?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>HIV virüsünün son zamanlarda karşılaşılan en büyük hastalıklardan birisi olduğu belirtiliyor. Açılımı Human Immmunodeficiency Virus olan bu hastalık,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}