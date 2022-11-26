import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dell</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dell"/>
        <meta name="description" content="Trending News about Dell" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dell</h1>
            <Image width={800} height={500} src="https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/11/amazon-na-black-friday-notebook-dell-com-precor-700-off-1000x600.jpg" alt="Dell"/>
            <h3>Recent News</h3>
            <a href='https://gizmodo.uol.com.br/amazon-na-black-friday-notebook-dell-com-preco-r-700-off/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon na Black Friday: notebook Dell com preço R$ 700 off</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSNfSUdf67hiLk-79QQkCpQmXu36Zx4-Y7pUg0MAA1jbMGN3Gnv-Gzr0xBQDqju2KlRgP1db2jL" alt="Amazon na Black Friday: notebook Dell com preço R$ 700 off" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Notebook tem chip Intel Core i3, tela de 15,6 polegadas e SSD de 128 GB. Aproveite a oferta de Black Friday.</p></div>
            </div>
        </a><a href='https://www.tecmundo.com.br/produto/255007-dell-inspiron-15-3000-configuracoes-diferentes-usuarios.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dell Inspiron 15 3000: configurações para diferentes usuários</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS3VwfhCvWm5G24GXu3eAy8_Dfp7v8GA04vhntUMXaf_Ar_1MZ3GqbsDRj41Dpgv7MQ_lKutYP5" alt="Dell Inspiron 15 3000: configurações para diferentes usuários" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aproveite a Black Friday 2022 para investir em um notebook de qualidade como o Dell Inspiron 15 3000.</p></div>
            </div>
        </a>
        </Template></>;
}