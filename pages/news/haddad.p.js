import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Haddad</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Haddad"/>
        <meta name="description" content="Trending News about Haddad" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Haddad</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/C1iCTq2zfnTpjcjtNu3ebaDy6Zc=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/9/l/OdwCkYRUm12FfhKPCJsg/haddad-mazui.jpeg" alt="Haddad"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/politica/noticia/2022/12/08/cotado-para-a-fazenda-haddad-se-reune-com-ministro-paulo-guedes-em-brasilia.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cotado para a Fazenda, Haddad se reúne com ministro Paulo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTUtOe8YY9xM50Reb3FHdvll8OIVSzM49gbqx5gm9lEdmZ_Ln92dirbOJszb-jrsSH4VhHVBU8C" alt="Cotado para a Fazenda, Haddad se reúne com ministro Paulo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Guedes já se reuniu, anteriormente, com Nelson Barbosa e Guilherme Melo, integrantes da Economia na transição. Transição quer dividir Ministério da Economia&nbsp;...</p></div>
            </div>
        </a><a href='https://www.suno.com.br/noticias/fernando-haddad-paulo-guedes-encontro-excelente/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Haddad se reúne com ministro Paulo Guedes: &quot;Excelente ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQB-XXVHi5hyrVV6pMkxFvNhwv3s5FKZcT0wI1OOcBL_vhQ5V3s_bfP3Rdg-pqWjAcdBD1_osnp" alt="Haddad se reúne com ministro Paulo Guedes: &quot;Excelente ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fernando Haddad (PT) se reuniu com o ministro da Economia, Paulo Guedes. O encontro, segundo ele, foi &quot;excelente&quot;. Saiba o que conversaram!</p></div>
            </div>
        </a><a href='https://economia.uol.com.br/noticias/estadao-conteudo/2022/12/08/haddad-sinaliza-apoio-mudanca-planejamento.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cotado para a Fazenda, Haddad sinaliza apoio a mudança no ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRSGven2qIqnDlBU2w-RjysDakVhSjsJXVPHXVpvjlLAVxz0XUg7iKnc3H1Z6Q2_5G5D00NIQxO" alt="Cotado para a Fazenda, Haddad sinaliza apoio a mudança no ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Antes de ser recriado, o ministério do Planejamento é alvo de disputa interna no governo eleito, com uma ala querendo turbiná-lo e, outra, desidratá-lo.</p></div>
            </div>
        </a><a href='https://valor.globo.com/politica/noticia/2022/12/08/haddad-est-reunido-com-guedes-na-esplanada.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Haddad e Paulo Guedes se reúnem em Brasília</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcStAB5GfW_P7RvHJs54kVzQobbtw6limah5zrEzRUoqsEgW12oKE8rSE-Up_tg-VB0d53Df92qO" alt="Haddad e Paulo Guedes se reúnem em Brasília" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Principal cotado para assumir o Ministério da Fazenda no governo de Luiz Inácio Lula da Silva, Fernando Haddad reuniu-se nesta manhã por 1h30 com o atual&nbsp;...</p></div>
            </div>
        </a><a href='https://veja.abril.com.br/coluna/radar-economico/o-esquenta-ao-nome-de-haddad-para-a-fazenda-no-mercado/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O esquenta ao nome de Haddad para a Fazenda no mercado</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS4MsRok8tWkZkqsjEBogOUv2XZD9mAK02a17Okz6tJ_258SSiKz0YK83Kewy3iwE5RA6BniIAW" alt="O esquenta ao nome de Haddad para a Fazenda no mercado" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>VEJA Mercado em vídeo: investidores repercutem o nome da vez para assumir a pasta no futuro governo Lula.</p></div>
            </div>
        </a><a href='https://oglobo.globo.com/economia/noticia/2022/12/cotado-para-a-fazenda-haddad-tem-primeira-reuniao-com-guedes-e-diz-que-tera-esforco-para-manter-servicos-publicos.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cotado para a Fazenda, Haddad tem primeira reunião com Guedes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQChhzWdgKrSQqpsl0uPiAb2DfB6ZfL5EyOAReQH0Y8cULOH1PqPb_xoXEvbHldJ5mEtspxg4e0" alt="Cotado para a Fazenda, Haddad tem primeira reunião com Guedes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Após encontro de cerca de uma hora e meia, ex-prefeito de São Paulo afirma que haverá esforço para manter serviços públicos.</p></div>
            </div>
        </a><a href='https://economia.uol.com.br/noticias/estadao-conteudo/2022/12/08/haddad-diz-que-lula-preferiu-nao-pegar-atalho-para-aprovar-pec-da-transicao.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Haddad diz que Lula preferiu não pegar &#39;atalho&#39; para aprovar PEC ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRkx85c_ekbEPOrij6LnQVXb-tjk4ff5jPRSxDletiBb6cGaMoBM_aiKr4x_TGMosgYofZmyJcH" alt="Haddad diz que Lula preferiu não pegar &#39;atalho&#39; para aprovar PEC ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo o ex-prefeito de São Paulo, o presidente eleito fez a opção pelo texto no Congresso para abrir diálogo com deputados e senadores.</p></div>
            </div>
        </a><a href='https://www.correiobraziliense.com.br/economia/2022/12/5057624-apos-encontro-com-haddad-guedes-reforca-defesa-de-novo-marco-fiscal.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Após encontro com Haddad, Guedes reforça defesa de novo marco ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSgmsbc0_rUu3AJQhHnqj0YgAgCLBXCPbl7AbdEhn0qyLVx00WzOf9R3WL-JRl-qkI9NleV4NA0" alt="Após encontro com Haddad, Guedes reforça defesa de novo marco ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo o ministro, pasta tem duas propostas que poderão ser debatidas com a equipe de transição, uma do Tesouro e outra da SPE, que está sendo elaborada.</p></div>
            </div>
        </a><a href='https://valorinveste.globo.com/mercados/brasil-e-politica/noticia/2022/12/08/lula-comeca-a-anunciar-ministros-amanha-haddad-deve-ser-confirmado-na-fazenda.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lula começa a anunciar ministros amanhã; Haddad deve ser ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ7RpS4VXwBa3jXz7qgKS6IhKGWLJnTxZ2eNkJK7TKjucWaKjQqaYvF8HBfFAGQ7rGkMG6eJF8e" alt="Lula começa a anunciar ministros amanhã; Haddad deve ser ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Presidente nacional do PT, Gleisi Hoffmann, sinalizou que partido deve também indicar nome para Casa Civil.</p></div>
            </div>
        </a><a href='https://www.poder360.com.br/congresso/negociacao-politica-e-o-maior-merito-da-pec-fura-teto-diz-haddad/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Negociação política é o maior mérito da PEC fura-teto, diz Haddad</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTMkoGNLz_l-l-2haBL0ow7Z7g20vpPxOOgUqQTD7VOwD81iHXv1epJtPiPM4jRUleU8DZN-Sn0" alt="Negociação política é o maior mérito da PEC fura-teto, diz Haddad" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Negociação política é o maior mérito da PEC fura-teto, diz Haddad ... O ex-prefeito de São Paulo Fernando Haddad (PT) defendeu nesta 5ª feira (8.dez.2022) a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}