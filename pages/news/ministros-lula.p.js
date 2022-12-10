import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ministros Lula</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ministros Lula"/>
        <meta name="description" content="Trending News about Ministros Lula" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ministros Lula</h1>
            <Image width={800} height={500} src="https://amazonas1.com.br/wp-content/uploads/2022/12/Lula-anunciara-ministros.jpg" alt="Ministros Lula"/>
            <h3>Recent News</h3>
            <a href='https://amazonas1.com.br/charge_do_dia/lula-anunciara-ministros-nesta-sexta-feira-diz-gleisi-hoffmann/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lula anunciará ministros nesta sexta-feira, diz Gleisi Hoffmann</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRw6XSZVqqc8IKmH0by2fbk3pTp0mtcP4gov4arZaVpTFT8DqIMeUjLprnTtDOeqqcEh59m6Lyn" alt="Lula anunciará ministros nesta sexta-feira, diz Gleisi Hoffmann" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A presidente do PT, Gleisi Hoffmann, afirmou que o presidente eleito Luiz Inácio Lula da Silva deve divulgar nomes de ministros já nesta sexta-feira (9).</p></div>
            </div>
        </a><a href='https://www.bbc.com/portuguese/brasil-63920495'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quem são os ministros anunciados por Lula</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ3VIJ9QQimXy9t71ZYN9zCu94HP2KJ1cHMiCwhDcu6Xe7cXPSJvyVdX9I49uep-RpxLSkJbb_0" alt="Quem são os ministros anunciados por Lula" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ex-prefeito de São Paulo assumirá a pasta da Fazenda. Haddad foi ministro da Educação no governo de Dilma Rousseff (PT) e candidato do PT à Presidência em&nbsp;...</p></div>
            </div>
        </a><a href='https://valorinveste.globo.com/mercados/brasil-e-politica/noticia/2022/12/09/lula-anuncia-5-ministros-haddad-na-fazenda-mcio-na-defesa-rui-costa-casa-civil-e-flvio-dino-justia-mauro-vieira-relaes-exteriores.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lula anuncia 5 ministros: Haddad na Fazenda, Múcio, na Defesa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTB20VqQbNvuVdDL4Xp1L0FBXCssmvzCQgsbY30gNVY3_27ecz9RPCLJM89X14OXoClxoTTbkFv" alt="Lula anuncia 5 ministros: Haddad na Fazenda, Múcio, na Defesa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Presidente eleito anunciou oficialmente os ministros no Centro Cultural Banco do Brasil (CCBB), em Brasília.</p></div>
            </div>
        </a><a href='https://agenciabrasil.ebc.com.br/politica/noticia/2022-12/lula-anuncia-cinco-ministros-do-futuro-governo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lula anuncia cinco ministros do futuro governo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQFdB3-3Dp5Us5ztcmX1pLkmz30-obG6WC14-IhW1ju7RNazrbxhXl2ntm2re7gcHIEoLKU1WRX" alt="Lula anuncia cinco ministros do futuro governo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ouvir: O presidente eleito Luiz Inácio Lula da Silva anunciou os cinco primeiros ministros do futuro governo. Os nomes foram apresentados no Centro Cultural&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/politica/noticia/2022/12/09/ministros-de-lula-veja-quais-sao-os-nomes-ja-anunciados.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ministros de Lula: veja quais são os nomes já anunciados</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRAX4BGIgdRjFYa2qs9IXm7oy2TvyhGSYIemaKKF-rO5HlFOynP2OcOG8-gqA_7bZwG4s3bVE3_" alt="Ministros de Lula: veja quais são os nomes já anunciados" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fernando Haddad (Fazenda), Rui Costa (Casa Civil), Flávio Dino (Justiça e Segurança Pública), José Múcio Monteiro (Defesa) e Mauro Vieira (Itamaraty) foram&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jota.info/eleicoes/lula-confirma-haddad-no-ministerio-da-fazenda-e-anuncia-mais-quatro-ministros-09122022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lula confirma Haddad no ministério da Fazenda e anuncia mais ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRzr-9SjvJmdx7-KA8YC6jzv32hcpkF_Lk8i8C_A51MDjbOKkBh1yHiHYpIlEjB36nylAt6MjZT" alt="Lula confirma Haddad no ministério da Fazenda e anuncia mais ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Presidente eleito anunciou ainda os nomes de Rui Costa (Casa Civil), Flávio Dino (Justiça), Múcio (Defesa) e Mauro Vieira (Relações Exteriores)</p></div>
            </div>
        </a><a href='https://economia.uol.com.br/noticias/reuters/2022/12/09/repercussao-lula-confirma-haddad-e-outros-futuros-ministros.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>REPERCUSSÃO-Lula confirma Haddad e outros futuros ministros</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="REPERCUSSÃO-Lula confirma Haddad e outros futuros ministros" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>(Reuters) - O presidente eleito Luiz Inácio Lula da Silva anunciou nesta sexta-feira Fernando Haddad para o comando do Ministério da Fazenda em decisão&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/nacional/mercados-comecam-sexta-feira-a-espera-de-anuncio-sobre-ministros-de-lula/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mercados começam sexta-feira à espera de anúncio sobre ministros ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQUqX7UFgzONPyYQ4C2fTnU8_v6_vtnLCnMwpYoK7YFsLqXNvE23hyw8vXkyyn_cJOilIqAt2BJ" alt="Mercados começam sexta-feira à espera de anúncio sobre ministros ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Como antecipado ontem, o governo eleito de Luiz Inácio Lula da Silva (PT) deve começar a anunciar alguns de seus ministros — e o petista Fernando Haddad, ex-&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/jornal-nacional/noticia/2022/12/09/lula-anuncia-haddad-na-fazenda-e-mais-quatro-ministros.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lula anuncia Haddad na Fazenda e mais quatro ministros</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRw8FCZevrwnCgfmUaxBktbZEJ0yuih2XY_iDb5bFUws4ctdA30Prx8CNBK_ERegNbFEdmwNBna" alt="Lula anuncia Haddad na Fazenda e mais quatro ministros" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Flávio Dino será ministro da Justiça e Segurança Pública; Rui Costa, da Casa Civil; José Múcio Monteiro, da Defesa; e Mauro Vieira, das Relações Exteriores.</p></div>
            </div>
        </a><a href='https://diariocampineiro.com.br/lula-confirma-haddad-na-fazenda-e-mais-quatro-ministros/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lula confirma Haddad na Fazenda e mais quatro ministros ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQJTaJMBzdPA9QREdi-MYy9ycasd7OCNu00eF6C8-EZ7ayYPsykVz2G0KoCr5cBfrpbDjPspmWO" alt="Lula confirma Haddad na Fazenda e mais quatro ministros ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O presidente eleito do Brasil Luiz Inácio Lula da Silva (PT) confirmou o ex-prefeito de São Paulo e ex-ministro da Educação Fernando Haddad como ministro&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}