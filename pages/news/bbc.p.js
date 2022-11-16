import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>BBC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,BBC"/>
        <meta name="description" content="Trending News about BBC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>BBC</h1>
            <Image width={800} height={500} src="https://comunidadeculturaearte.com/wp-content/uploads/2022/11/Douglas-Stuart-600x315.jpg" alt="BBC"/>
            <h3>Recent News</h3>
            <a href='https://comunidadeculturaearte.com/shuggie-bain-livro-de-douglas-stuart-man-booker-prize-de-2020-sera-adaptado-para-serie-pela-bbc/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Shuggie Bain”. Livro de Douglas Stuart, Man Booker Prize de 2020 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ_B-kdc_8IgZYz_fqtsKRHPYXUm6NzZApBYGGF6fY1FSuqjBOPtUTKooLO7putXg_ZBaC1TIPE" alt="“Shuggie Bain”. Livro de Douglas Stuart, Man Booker Prize de 2020 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Douglas Stuart terá o seu livro,”Shuggie Bain”, adaptado para formato série pela BBC, iPlayer e com produção da A24, anunciou a própria BBC.</p></div>
            </div>
        </a><a href='https://www.bbc.com/portuguese/internacional-63630293'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bélgica: perfil do país que abriga a sede da União Europeia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT6i-WhtGaTnLmmGdkEUugbERotcos_8oL7f0Jqgu7Z902Kc_5J9KQw-yNEppvp-iTX8PfEjFMe" alt="Bélgica: perfil do país que abriga a sede da União Europeia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um dos episódios mais infames foi a participação do governo belga na captura e execução de Patrice Lumumba, primeiro primeiro-ministro do Congo logo após sua&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/portuguese/internacional-63629754'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A realidade por trás da imagem do lago verde da Guatemala que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRvKCgsm3bBdMAzV9BMGyDvvtZJ3H1Cu-9yrZQ1920WQxMbGXOw_NVpuCADAt0yeuH7VBgnMpMR" alt="A realidade por trás da imagem do lago verde da Guatemala que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A fotografia, premiada pelo Museu de História Natural de Londres, mostra como a poluição da água ativam uma alga verde fosforescente.</p></div>
            </div>
        </a>
        </Template></>;
}