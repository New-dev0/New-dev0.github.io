import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Primark</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Primark"/>
        <meta name="description" content="Trending News about Primark" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Primark</h1>
            <Image width={800} height={500} src="https://www.nit.pt/wp-content/plugins/madmen-opengraph-image-v2/madmen-opengraph-image.php?post_id=982490&ts=20221115091116" alt="Primark"/>
            <h3>Recent News</h3>
            <a href='https://www.nit.pt/compras/lojas-e-marcas/e-loucura-primark-lancou-um-novo-servico-de-compras-online-e-o-site-foi-abaixo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>É a loucura: Primark lançou um novo serviço de compras online e o ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTM9OcKWHLMH9E1XoxSQ79LWDQIXxSasv_gCYsnY9o2hVnz8A_F4nNd9SDb-nkrM0O3bmo0NMvH" alt="É a loucura: Primark lançou um novo serviço de compras online e o ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Finalmente chegou o dia que tanto sonhávamos: comprar roupa da Primark online. Nesta segunda-feira, 14 de novembro, a marca lançou o novo serviço de compras&nbsp;...</p></div>
            </div>
        </a><a href='https://www.distribuicaohoje.com/retalho/primark-estreou-se-no-online-e-site-nao-aguentou-enchente/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Primark estreou-se no online e site não aguentou &#39;enchente ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTRYmOhgm9dgysyj9HGUh1QZAmWNZ97ArrhbNa4m3F3dEcjbAWqe2cEU2-D6IRoVA0G1uD0vOEi" alt="Primark estreou-se no online e site não aguentou &#39;enchente ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Primark lançou esta segunda-feira, 14 de novembro, a sua primeira experiência de compras online. A retalhista lançou-se com um site de e-commerce que&nbsp;...</p></div>
            </div>
        </a><a href='https://versa.iol.pt/coolhunting/roupa/primark-online-o-sucesso-foi-estrondoso-e-nos-juntamo-nos-a-festa/20221115/637366560cf27230dc1775c6'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Primark online: o sucesso foi estrondoso e nós juntamo-nos à festa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRZsR929XpLl1AKEm1YJnDr2zI41pypR5M4VzHjgNYYKYFEtgz-_nwVe2ZLV2Ph2Z0HKTbiu4lU" alt="Primark online: o sucesso foi estrondoso e nós juntamo-nos à festa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os clientes tanto pediram que receberam o presente de Natal antecipado: a Primark lançou uma plataforma online. O sucesso foi tal que o site foi abaixo.</p></div>
            </div>
        </a><a href='https://www.impala.pt/noticias/portugal-e-o-mundo/primark-lanca-servico-de-compras-online-e-site-vai-abaixo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Primark lança serviço de compras online e site vai abaixo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSY0C0HjMxfCRmhkgXQRNTbqTpYB8apl4Yg4hFX1XDAtwIHSFMT2Yc8Bk830_7ONH-Xc5iC__D1" alt="Primark lança serviço de compras online e site vai abaixo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Primark lançou, na segunda-feira, o novo serviço de compras online click and collect. Este serviço permite aos clientes fazerem as compras através do site&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}