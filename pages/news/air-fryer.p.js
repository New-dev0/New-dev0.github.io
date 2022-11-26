import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Air fryer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Air fryer"/>
        <meta name="description" content="Trending News about Air fryer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Air fryer</h1>
            <Image width={800} height={500} src="https://www.cidademarketing.com.br/marketing/wp-content/uploads/2022/11/airfryer_shoppinggoogle.jpeg" alt="Air fryer"/>
            <h3>Recent News</h3>
            <a href='https://www.cidademarketing.com.br/marketing/2022/11/26/air-fryer-e-a-busca-com-maior-crescimento-em-cliques-no-google-shopping/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Air Fryer é a busca com maior crescimento em cliques no Google ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQKvMZ7SKKNlQK0FYJk0dnci1Y2KtecOOEVte-LRYmR1pKOYL2fXJ0Yym5t6aP-wcWXjojPXeJF" alt="Air Fryer é a busca com maior crescimento em cliques no Google ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A fritadeira elétrica sem óleo vem se destacando na lista de compras dos brasileiros nesta Black Friday. Desde as 8h até as 14h desta sexta-feira,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}