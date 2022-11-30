import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Margot Robbie</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Margot Robbie"/>
        <meta name="description" content="Trending News about Margot Robbie" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Margot Robbie</h1>
            <Image width={800} height={500} src="https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/11/unnamed-1-1000x667.jpg" alt="Margot Robbie"/>
            <h3>Recent News</h3>
            <a href='https://gizmodo.uol.com.br/babilonia-filme-com-margot-robbie-brad-pitt-e-tobey-maguire-ganha-trailer-assista/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Babilônia&quot;, filme com Margot Robbie, Brad Pitt e Tobey Maguire ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRuV_Yped3r8GFt5ZHWojQ_NMP1MtKjo5vPeGap7DIj75mvyqc6vASYCI6To1HVlXNT6faTqQqx" alt="&quot;Babilônia&quot;, filme com Margot Robbie, Brad Pitt e Tobey Maguire ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Escrito e dirigido por Damien Chazelle, vencedor do Oscar de Melhor Direção em 2017, &quot;Babilônia&quot; estreia em 19 de janeiro.</p></div>
            </div>
        </a><a href='https://www.magazine-hd.com/apps/wp/babylon-robbie-pitt-hollywood/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Babylon leva Margot Robbie e Brad Pitt aos loucos anos 20 | MHD</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT9vuq0I0ubHIYpdqSkKi3lbxeht2zy2MLAs7ul5TnrbYoNdaZZldYB9m1-4I8G7beuIgLxnNVk" alt="Babylon leva Margot Robbie e Brad Pitt aos loucos anos 20 | MHD" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Paramount Pictures vai lançar &quot;Babylon&quot; um filme nos loucos anos 20, em Hollywood. Margot Robbie e Brad Pitt são as estrelas.</p></div>
            </div>
        </a><a href='https://mundoconectado.com.br/noticias/v/29927/babilonia-filme-estrelado-por-margot-robbie-e-brad-pitt-ganha-novo-trailer'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Babilônia: filme estrelado por Margot Robbie e Brad Pitt ganha novo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTO5bPKHZA0oRFTpiN7pyFT9k_SxWZTtD7TbyOssbTEzfGgC5hbWMbnYkAeU08t4jRS8AOdbXl1" alt="Babilônia: filme estrelado por Margot Robbie e Brad Pitt ganha novo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nesta terça-feira (29), a Paramount Pictures divulgou um novo trailer de Babilônia, filme dirigido por Damien Chazelle, vencedor do Oscar por La La Land.</p></div>
            </div>
        </a><a href='https://comunidadeculturaearte.com/ja-se-pode-ver-o-novo-trailer-de-babylon-filme-com-brad-pitt-margot-robbie-e-diego-calva/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Já se pode ver o novo trailer de “Babylon”, filme com Brad Pitt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRASPwTJFWDK4zbQ_gmJPdlEOXlG-s2jBu4MbNhQsvV9M2W1t5UkLN19q5Trc8btp0-_d-si-Wr" alt="Já se pode ver o novo trailer de “Babylon”, filme com Brad Pitt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uma ousada homenagem à história do cinema, na louca Hollywood dos anos 20, protagonizada por Brad Pitt, Margot Robbie, Diego Calva, entre outras estrelas como&nbsp;...</p></div>
            </div>
        </a><a href='https://espalhafactos.com/2022/11/29/babylon-trailer-mostra-brad-pitt-e-margot-robbie-aos-loucos-anos-20-em-hollywood/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Babylon&#39;. Trailer mostra Brad Pitt e Margot Robbie nos loucos anos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSXnYzyZb2KnAYwn_Y6agexUaYQQ43kgweO_EPPW22NW3GW_ZG06dk0YqGcDQrHZmT5LWD9MjgX" alt="&#39;Babylon&#39;. Trailer mostra Brad Pitt e Margot Robbie nos loucos anos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Paramount Pictures acaba de divulgar o novo trailer de &#39;Babylon&#39;, protagonizado por Brad Pitt, Margot Robbie, e o novato Diego Calva.</p></div>
            </div>
        </a><a href='https://www.comboinfinito.com.br/principal/babilonia-margot-robbie-transforma-hollywwood-em-uma-grande-festa-em-novo-trailer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Babilônia: Margot Robbie transforma Hollywwood em uma grande ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSQQLCAnoB9GKaxgKgZxR5ge9sZ2zrFJplueObEX_tZrrkpYJS1ZX0p2-14nIm5_3BYo5Ha42Mz" alt="Babilônia: Margot Robbie transforma Hollywwood em uma grande ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Babilônia promete nos mostrar uma Hollywood nunca antes vista nas telas dos cinemas, o filme que conta com ninguém menos do que Margot.</p></div>
            </div>
        </a><a href='https://hollywoodforevertv.com.br/noticias/filmes/babilonia-filme-com-margot-robbie-e-brad-pitt-ganha-novo-trailer.phtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Babilônia: filme com Margot Robbie e Brad Pitt ganha novo trailer</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcREe4al86O_VH5lsf6G26dphUZnJR8ZZLTMr0KEuvLKRqsE3jyVmY-ZfK9tnjRDC_hJm-0QOSKX" alt="Babilônia: filme com Margot Robbie e Brad Pitt ganha novo trailer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Margot Robbie vive os prazeres da fama na Era de Ouro de Hollywood em novo trailer de Babilônia; assista!</p></div>
            </div>
        </a>
        </Template></>;
}