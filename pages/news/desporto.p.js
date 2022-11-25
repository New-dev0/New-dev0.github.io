import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Desporto</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Desporto"/>
        <meta name="description" content="Trending News about Desporto" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Desporto</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=f1359318-56ad-44de-8234-955510753714&w=800&h=420&watermark=true&t=20221124160100" alt="Desporto"/>
            <h3>Recent News</h3>
            <a href='https://www.dn.pt/desporto/investimento-publicitario-aumenta-no-desporto-feminino-e-nos-esports--15384124.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Investimento publicitário aumenta no desporto feminino e nos eSports</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSAMmKTK4YQ-Z1Huwpdv5c2ZvQf1edFXFcJ0rt2Lp6uCidhAZX0DUU-4sZMJ2BQs092P5HDRFDC" alt="Investimento publicitário aumenta no desporto feminino e nos eSports" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O estudo da Nielsen indica que o desporto feminino assistiu a um aumento de 146% do investimento em patrocínios, tomando como referência os investimentos na&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fpb.pt/noticia/miguel-reis-a-forma-com-que-se-vive-aqui-o-desporto-adaptado-e-diferente/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Miguel Reis: “A forma como se vive aqui o desporto adaptado é ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQnW6lyfGEhJecXMNfmqPI4qJeOzwYsSOYzjtGp8DfMzkP_3cTlm0UcX5NjIwahYwDrghSy5SGt" alt="Miguel Reis: “A forma como se vive aqui o desporto adaptado é ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Figura central dos êxitos do BC Gaia, onde nasceu para a modalidade, Miguel Reis rumou ao BCR profissional para representar o Unes FC Barcelona.</p></div>
            </div>
        </a><a href='https://marketeer.sapo.pt/investimento-em-patrocinios-no-desporto-feminino-aumentou-146/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Investimento em patrocínios no desporto feminino aumentou 146%</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT_nWICERFfhqwpnLgBvgtzv24oAfoTQRq5mqsAORjnG4EJXew5DGiJIUePw6KEuBSbuuzvXApF" alt="Investimento em patrocínios no desporto feminino aumentou 146%" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uma nova análise da Nielsen revela de que forma os hábitos de consumo dos adeptos têm impacto nos investimentos desportivos, sem esquecer a transformação&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jornaldeleiria.pt/noticia/leiria-e-municipio-amigo-do-desporto-pelo-quinto-ano-consecutivo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leiria é &#39;Município Amigo do Desporto&#39; pelo quinto ano consecutivo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTlszkyNshh_c0H0YSplXfZ6nYPwQKDAME7qlWoX2kY6W0VnrbcxTaKiVq6WfvNuMcXT5hm6tXw" alt="Leiria é &#39;Município Amigo do Desporto&#39; pelo quinto ano consecutivo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Galardão premeia a implementação de boas práticas desportivas na promoção e fomento do desporto no concelho.</p></div>
            </div>
        </a><a href='https://www.diariodominho.pt/2022/11/24/povoa-de-lanhoso-e-municipio-amigo-do-desporto-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Póvoa de Lanhoso é “Município Amigo do Desporto 2022” - DM</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ4ZVIt3m1TJaWM1kne14-XzGs5um3-zavTfAQm9Pj30ksG-0HOR8E7pfW-ePlT9RvEXPfhv_WG" alt="Póvoa de Lanhoso é “Município Amigo do Desporto 2022” - DM" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O vereador Ricardo Alves e Gracinda Carvalho receberam o galardão. 24 Nov 2022. A Câmara da Póvoa de Lanhoso&nbsp;...</p></div>
            </div>
        </a><a href='https://www.asbeiras.pt/2022/11/soure-camara-recebe-galardao-municipio-amigo-do-desporto/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Soure: Câmara recebe galardão “Município Amigo do Desporto”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQUL1evJ2I15s9qQrbV_VMO5G_BAXsNObE3gj2ZA6oqAabOe5QE8n8o8rFWqKr5ocxFM1fBjS9o" alt="Soure: Câmara recebe galardão “Município Amigo do Desporto”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pelo quinto ano consecutivo, o Município de Soure foi distinguido como “Município Amigo do Desporto”, galardão atribuído pela plataforma Cidade Social.</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/mundo/2119852/espanha-desmantela-organizacao-de-dopping-no-desporto-portugal-envolvido'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Espanha desmantela organização de doping no desporto. Portugal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSYad5N9vpSKyxP5362LmzV750G764BdlmstHbO5H5u_xkt5KTlkXl1dQv6zgmzKWF_k9LGMhLm" alt="Espanha desmantela organização de doping no desporto. Portugal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chegaram a cobrar até 3.000 euros por temporada em função dos resultados alcançados pelos atletas nas competições.</p></div>
            </div>
        </a><a href='https://omirante.pt/desporto/2022-11-24-Torres-Novas-e-Amiga-do-Desporto-pelo-7.-ano-consecutivo-fafff497'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Torres Novas é Amiga do Desporto pelo 7.º ano consecutivo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRQ1BDPqpnLoYhpxV3KDzE8b9xm_WlhQGfW40CF1zuWMg64Q0MYsnBfTZUisUbAprtxvqjKzhFV" alt="Torres Novas é Amiga do Desporto pelo 7.º ano consecutivo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Distinção foi feita no passado dia 19 de Novembro na Central das Artes, em Porto de Mós.</p></div>
            </div>
        </a><a href='https://www.sapo.pt/noticias/desporto/ministra-considera-historica-equiparacao-de_637fe781e161f5430f55caa9'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ministra considera &quot;histórica&quot; equiparação de apoios entre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRVZPswQUzL-ioClq8DUPrsxP51qQ_nR8Img56d8OTjJpfteNB-CmbkZdXpBJ6M0ZRuyZWir2v3" alt="Ministra considera &quot;histórica&quot; equiparação de apoios entre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A ministra Adjunta e dos Assuntos Parlamentares considerou hoje &quot;histórica&quot; a convergência dos meios financeiros disponibilizados aos atletas com&nbsp;...</p></div>
            </div>
        </a><a href='http://www.jornaldamealhada.com/noticia/11464'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mealhada recebe Gala dos Municípios Amigos do Desporto e das ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTa9WUCDVnviaAqfokuJU7WvF61yxPAkH5m9ykqnLKqXr36K1UGpWPEYB1ugWbUtrSaLdSE2WyU" alt="Mealhada recebe Gala dos Municípios Amigos do Desporto e das ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Cineteatro Messias, na Mealhada, será palco da Gala de Entrega dos Galardões dos Municípios Amigos do Desporto e das Autarquias Solidárias,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}