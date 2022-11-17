import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Farense</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Farense"/>
        <meta name="description" content="Trending News about Farense" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Farense</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=4501d56a-70c0-4964-9cb3-302fb2d3c5eb&w=800&h=420&watermark=true&t=20221116234700" alt="Farense"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/futebol/2a-liga/noticias/farense-bate-trofense-reduzido-a-dez-e-reforca-segundo-lugar-na-liga-sabseg-15359750.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Farense bate Trofense reduzido a dez e reforça segundo lugar na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQnDNLc-I5ubgwI4Nro8bzogUGtK4pT8Q5G4G1B5hc-CihBsH2cbRyqy59mncQRvXEun3ZWFuRQ" alt="Farense bate Trofense reduzido a dez e reforça segundo lugar na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Triunfo por 3-1 em jogo em atraso da nona jornada da II Liga.</p></div>
            </div>
        </a><a href='https://www.sulinformacao.pt/2022/11/farense-vence-jogo-em-atraso-e-assegura-boas-festas-no-2o-lugar-do-campeonato/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Farense vence jogo em atraso e assegura Boas Festas no 2º lugar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTq8ZGj3yjGjaSWPBzWKmVsz_WMYw0-zCQYs0R0JNIDNi9Tclwm8XvmeKYzt8aaSYPbmEe5htJ0" alt="Farense vence jogo em atraso e assegura Boas Festas no 2º lugar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Algarvios aproximaram-se do 1º classificado, o Moreirense, e fugiram ao Estrela da Amadora, o 3º classificado da II Liga.</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/bola-branca/noticia/futebol-nacional/2022/11/16/farense-derrota-trofense-e-aproxima-se-da-lideranca/308384/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Farense derrota Trofense e aproxima-se da liderança - Renascença</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR8y-LBXcwC68-qhpcOtPibcnSs7U0ed6ud3cyveBe9Re8Wxh_P--o79mYEwZcK-V4PhgZllFnw" alt="Farense derrota Trofense e aproxima-se da liderança - Renascença" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Sp. Farense venceu o Trofense por 3-1, em jogo em atraso da jornada 9 da II Liga. Os golos dos algarvios foram apontados por Velásquez, Rui Costa e Pedro&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nacional/2022-11-16/liga-2-farense-derrota-trofense-e-consolida-segunda-posicao/965004'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Farense derrota Trofense e consolida segunda posição</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR2j6L6Zk_044aanic86kEvAdAaXpnsTxYmN2WWRMDx9vVgUBEX8yEYYcsx7Z1dx8kZ25gDVPyi" alt="Farense derrota Trofense e consolida segunda posição" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Farense venceu, esta quarta-feira, o Trofense, por 3-1, em jogo em atraso da nona jornada da Liga 2. Jhon Velasquez (38&#39;), Rui Costa (47&#39;) e Pedro&nbsp;...</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/desporto/2114608/farense-da-mais-um-passo-rumo-ao-ceu-trofense-mais-perto-do-inferno'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Farense dá mais um passo rumo ao céu. Trofense mais perto do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSWj59W4XCh9uOniBSQuq3uBSwxWW-nxq9bDomkUQgP8V8h76yTgHSyB-wV8sJaiPtMNCSDpBGK" alt="Farense dá mais um passo rumo ao céu. Trofense mais perto do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Farense venceu, esta quarta-feira, o Trofense, por 3-1, no sotavento algarvio, num duelo em atraso da nona jornada da II Liga.</p></div>
            </div>
        </a><a href='https://tabelaesportiva.com/farense-x-trofense-ao-vivo-segunda-liga/11/2022/211446/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Onde assistir Farense x Trofense AO VIVO – Segunda Liga</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRLMCqtrhQAh50NCtLXIAHGgU-pz-MglCgLD3ar0sxdvOi21aiMZvzQevmn-Rm65W68RCR11YXx" alt="Onde assistir Farense x Trofense AO VIVO – Segunda Liga" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Onde assistir Farense x Trofense AO VIVO – Segunda Liga hoje quarta-feira (16), de novembro, às 17h15 pela Segunda Liga na sua edição 2022/23.</p></div>
            </div>
        </a>
        </Template></>;
}