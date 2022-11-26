import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Annie Ernaux</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Annie Ernaux"/>
        <meta name="description" content="Trending News about Annie Ernaux" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Annie Ernaux</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=e90b1d5e-1b7e-42e8-960f-1cb5455f8cc7&w=800&h=420&watermark=true&t=20221125184900" alt="Annie Ernaux"/>
            <h3>Recent News</h3>
            <a href='https://www.dn.pt/cultura/livro-de-annie-ernaux-sobre-morte-dos-pais-reeditado-depois-de-20-anos-esgotado-15388667.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Livro de Annie Ernaux sobre morte dos pais reeditado depois de 20 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS_MbGuZysS857Fu4FVcOBzJcUbN6ExbWf5vdDQ5MpbcKU_nFzgqRLdKI8MKjIQNKwHCdxZz-rc" alt="Livro de Annie Ernaux sobre morte dos pais reeditado depois de 20 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Livros daa romancista francesa Annie Ernaux, laureada com o Prémio Nobel da Literatura 2022, são exibidos durante uma conferência de literatura no centro Villa&nbsp;...</p></div>
            </div>
        </a><a href='https://comunidadeculturaearte.com/nobel-da-literatura-vinte-anos-depois-um-lugar-ao-sol-seguido-de-uma-mulher-de-annie-ernaux-volta-as-livrarias/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nobel da Literatura. Vinte anos depois, “Um Lugar ao Sol seguido ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSJCZjSnkCfeYkvDDhaypzk3znI6mY8kvHyrJLvP3M1glyqCNSxWhAUoev72rSpZDWxmSbwL2E_" alt="Nobel da Literatura. Vinte anos depois, “Um Lugar ao Sol seguido ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Duas mortes, infinitamente marcantes, digeridas pela autora através da escrita. “Um Lugar ao Sol seguido de Uma Mulher” reúne os dois textos de Annie Ernaux&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}