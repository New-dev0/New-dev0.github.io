import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Preço combustiveis</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Preço combustiveis"/>
        <meta name="description" content="Trending News about Preço combustiveis" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Preço combustiveis</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=6563cacc-2766-485f-8bcd-23493ceef7f2&w=800&h=420&watermark=true&t=20221127112400" alt="Preço combustiveis"/>
            <h3>Recent News</h3>
            <a href='https://www.dn.pt/dinheiro/preco-dos-combustiveis-volta-a-niveis-pre-guerra-15392220.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Preço dos combustíveis volta a níveis pré-guerra</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQZ0014kV8IHh4Zz2D7TDfY3a0gGassT3YYpNMaNx4hk_k_hooOuNCNbYkErogDNT0Pd5Qk8sU2" alt="Preço dos combustíveis volta a níveis pré-guerra" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Descida verifica-se há seis semanas consecutivas no gasóleo e há três na gasolina. Nova baixa a partir desta segunda-feira.</p></div>
            </div>
        </a><a href='https://expresso.pt/economia/2022-11-27-Combustiveis-com-precos-pre-guerra-667e0fd0'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Combustíveis com preços pré-guerra</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR6AwIrIymu03vHBoHtaOK121DAoVys0vFR0MtHVWcNQ67vGuAJL25oQSB3Lnws5sTa6S2qbjFZ" alt="Combustíveis com preços pré-guerra" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segunda-feira traz nova descida no gasóleo e na gasolina. Valores vão ficar abaixo dos praticados antes da invasão da Ucrânia.</p></div>
            </div>
        </a><a href='https://portocanal.sapo.pt/noticia/315771'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Precisa de abastecer o depósito? Preço dos combustíveis volta a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRD3I55U7-vpAYI27FQSDYuVVKMDKH5n8bybHb5ul94WGDqnL-dZrpASHC9b-cJZQo1Z2EvthRP" alt="Precisa de abastecer o depósito? Preço dos combustíveis volta a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>De acordo com o portal da Direção-Geral da Energia e Geologia (DGEG), o gasóleo deverá passar a custar 1,651 euros por litro e a gasolina deverá baixar para os&nbsp;...</p></div>
            </div>
        </a><a href='https://www.noticiasdecoimbra.pt/boas-noticias-preco-dos-combustiveis-vai-voltar-a-descer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Boas notícias: Preço dos combustíveis vai voltar a descer</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSQ-HG1VgRhH-fjRPD0Hq068NMH7tHOCVbF2HStubhnkb47cXgoyp2g5QlFI1bGgGDYnSIMws2m" alt="Boas notícias: Preço dos combustíveis vai voltar a descer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tendo em conta os preços médios praticados no início da última semana, de acordo com o portal da Direção-Geral de Energia e Geologia (DGEG), o gasóleo deverá,&nbsp;...</p></div>
            </div>
        </a><a href='https://away.iol.pt/combustiveis/energia/combustiveis-vais-abastecer-hoje-espera-precos-amanha-descem-5-centimos/20221127/63834b440cf2aea7857efdf9'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Combustíveis: Vais abastecer hoje? Espera! Preços amanhã ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSEqDmfRBsxF5algvjOzAJQKw4trIbChEHPhERNU-b0d-wxxlJrMLNmOorN34GZ9-HJq9-NpyRr" alt="Combustíveis: Vais abastecer hoje? Espera! Preços amanhã ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O preço do gasóleo simples deverá descer entre 5 a 6 cêntimos por litro e o preço da gasolina deverá descer 4 a 5 cêntimos. Ou seja, terás descidas a rondar os&nbsp;...</p></div>
            </div>
        </a><a href='https://famatv.pt/pais/11/27/combustiveis-voltam-a-descer-a-partir-desta-segunda-feira/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Combustíveis voltam a descer a partir desta segunda-feira</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTgOWUDQHA9mS-LjbeJR7eAFItla7E8qAoKOdBYZ-uCjy8n6ezO8jy8p2Mk-R1NdFUWjzzsWV07" alt="Combustíveis voltam a descer a partir desta segunda-feira" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Está a decorrer este fim de semana uma campanha de recolha de alimentos para o Banco Alimentar Contra Fome. À porta de super e hipermercados, centenas de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nit.pt/fora-de-casa/na-cidade/boas-noticias-combustiveis-voltam-a-baixar-e-regressam-aos-valores-antes-da-guerra'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Boas notícias: combustíveis voltam a baixar e regressam aos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSp-axnDe1xyjyhEsCxzuieOfH8lnIhPAHJENP5jOfJ1s3jbmKK6cm9C2BfNDGZChSaRg8uSiu3" alt="Boas notícias: combustíveis voltam a baixar e regressam aos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os preços continuam em queda e deve voltar a sentir-se nova descida já a partir desta segunda-feira, 28 de novembro. 27/11/2022 às 11:02. São boas notícias.</p></div>
            </div>
        </a>
        </Template></>;
}