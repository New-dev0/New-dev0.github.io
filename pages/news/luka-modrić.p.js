import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Luka Modrić</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Luka Modrić"/>
        <meta name="description" content="Trending News about Luka Modrić" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Luka Modrić</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/AhxoihGkb6nKNraR1Jz-eFZZNKY=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/W/F/4OrR8AQyOM2W71iCw2Zg/arte.png" alt="Luka Modrić"/>
            <h3>Recent News</h3>
            <a href='https://oglobo.globo.com/cultura/noticia/2022/12/luka-modric-ou-david-guetta-entenda-como-o-dj-foi-parar-nos-assuntos-mais-comentados-do-twitter.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Luka Modrić ou David Guetta? Entenda como o DJ foi parar nos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTk5dDBnlyuiF3skQEbBiEqZU0urz3_SUVCFVmgxE-H9MwhbEagTn_sBZmVkOZnwHU8sOb-zY0T" alt="Luka Modrić ou David Guetta? Entenda como o DJ foi parar nos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brasil foi eliminado da Copa do Mundo pela seleção da Croácia nesta sexta-feira (09)</p></div>
            </div>
        </a>
        </Template></>;
}