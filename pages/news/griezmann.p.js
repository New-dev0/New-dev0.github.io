import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Griezmann</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Griezmann"/>
        <meta name="description" content="Trending News about Griezmann" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Griezmann</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/esporte/d6/2022/12/02/antoine-griezmann-da-franca-em-coletiva-de-imprensa-nesta-sexta-feira-02-1669994336497_v2_615x300.jpg" alt="Griezmann"/>
            <h3>Recent News</h3>
            <a href='https://www.uol.com.br/esporte/futebol/copa-do-mundo/2022/12/04/griezmann-tem-tres-filhos-que-nasceram-no-mesmo-dia-em-anos-diferentes.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Griezmann tem três filhos que nasceram no mesmo dia em anos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQa19C_3c3FYph_iuTTL9c68gxMLudwf1SbpyRttXCtVaNRuuw5ONE4kL7IyIkmnG86OHO1l4nK" alt="Griezmann tem três filhos que nasceram no mesmo dia em anos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Antoine Griezmann tem uma data mais que especial em sua vida: 8 de abril. Os três filhos do atacante da seleção francesa nasceram no mesmo dia, mas em anos&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}