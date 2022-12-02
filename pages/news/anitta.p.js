import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Anitta</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Anitta"/>
        <meta name="description" content="Trending News about Anitta" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Anitta</h1>
            <Image width={800} height={500} src="https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/10/20/615x300/1_anitta_esta_doente__o_que_tem_anitta__fas_se_preocupam_com_a_cantora_apos_video-21908997.jpg" alt="Anitta"/>
            <h3>Recent News</h3>
            <a href='https://jc.ne10.uol.com.br/colunas/saude-e-bem-estar/2022/12/15132968-anitta-esta-doente-saiba-como-o-estado-de-saude-de-anitta-cantora-de-entrada-em-hospital-nesta-quinta-feira-01.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ANITTA ESTÁ DOENTE? Saiba como está o estado de saúde de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQrqWORIxUEuATRjR7V7BIV9laxvgwG5KJRKjh2im6PKokK7EQi-9jEbfOyKVIeRIr9KpogEZb1" alt="ANITTA ESTÁ DOENTE? Saiba como está o estado de saúde de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cantora Anitta, de 29 anos, precisou dar entrada no ambulatório do Hospital Albert Einstein, na Zona Sul de São Paulo, nesta quinta-feira (1º).</p></div>
            </div>
        </a><a href='https://g1.globo.com/pop-arte/noticia/2022/12/01/anitta-da-entrada-em-hospital-em-sao-paulo.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anitta dá entrada em hospital em São Paulo; cantora diz que está bem</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ_Q0GFYM7VdLk6CFTZ7NlZrKoCLtsw7iHLendEDRj2m3CECIh7DvtrxpwOmvpSh1he_pxwl-3o" alt="Anitta dá entrada em hospital em São Paulo; cantora diz que está bem" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Informação foi confirmada pela assessoria da artista. Pelo Twitter, a cantora informou que em breve estará em casa e tem show marcado para sexta-feira (2).</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/ilustrada/2022/12/anitta-soa-distante-demais-do-brasil-em-disco-novo-em-portugues.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anitta soa pouco envolvente em disco fraco em português</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTSOrO1g83X3y9KRnJsBJjMQ46lP67_vY2C7VoyBavHz8tDP-B8B1uCZCC9IXunKidBv6Kgo_MV" alt="Anitta soa pouco envolvente em disco fraco em português" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;À Procura da Anitta Perfeita&#39;, disco posterior a &#39;Versions of Me&#39;, mostra que a cantora não contagia como antes.</p></div>
            </div>
        </a><a href='https://veja.abril.com.br/saude/anitta-e-internada-em-sao-paulo-cantora-tranquiliza-os-fas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anitta é internada em São Paulo; cantora tranquiliza os fãs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR0ZZaZpj2gh9HNoKJqFivI9dcHxCQYtYSDEIfemYxuyb60qOpwQSTpmFPdC15G2kJ5bLX_y51z" alt="Anitta é internada em São Paulo; cantora tranquiliza os fãs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>De acordo com a assessoria da artista, que está no Hospital Albert Einstein, é apenas para a realização de exames.</p></div>
            </div>
        </a><a href='https://g1.globo.com/pop-arte/musica/blog/mauro-ferreira/post/2022/12/01/anitta-convoca-a-tropa-nacional-e-volta-para-o-front-brasileiro-com-ep-de-municao-certeira.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anitta convoca a tropa nacional e volta para o front brasileiro com ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ1b8phgcikz3CS8B48Hxj966MIZNQExIkYzYrU-UBtczxI924tZ_VSwdIoWP2VyED8euu6nG5W" alt="Anitta convoca a tropa nacional e volta para o front brasileiro com ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cantora cai no piseiro com Wesley Safadão, reforça a sororidade feminina com Maiara &amp; Maraisa e celebra a força no funk com Lexa, Pocah e Rebecca em disco&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ofuxico.com.br/hospital/anitta-esta-bem-e-deve-receber-alta-de-hospital-ainda-hoje/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anitta está bem e deve receber alta de hospital ainda hoje</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQUZyPPScEIwYVweLm0MAfaqDpQZJZ_zoapG6glNVapBBddDOkl5EDE6gp7z_XMjxISfrmvdTYl" alt="Anitta está bem e deve receber alta de hospital ainda hoje" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com seis faixas totalmente em português, o projeto apresenta uma mistura de ritmos dançantes brasileiros, como forró, brega, funk e sertanejo, além de elementos&nbsp;...</p></div>
            </div>
        </a><a href='https://www.correiobraziliense.com.br/diversao-e-arte/2022/12/5055949-anitta-e-internada-as-pressas-em-hospital-de-sao-paulo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anitta é internada às pressas em hospital de São Paulo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS8MHWqbKJ6X5yBWdzbPLgI9qCVgLW7f9WSIssnLRl46IzM8tjvNslCi5MyWPijLQpPMNsoguVL" alt="Anitta é internada às pressas em hospital de São Paulo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A informação foi divulgada pelo jornalista Lucas Pasin, da coluna Splash, do UOL, e a assessoria de imprensa da cantora foi quem confirmou a notícia. Até então,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/entretenimento/anitta-da-entrada-em-hospital-em-sao-paulo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anitta dá entrada em hospital em São Paulo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSkuM6MAMOC1LbVscIFY6Z8Mnapysbf6SpeSeEV1khz2MbRKbz9JZGSGABV-iRPPEQgMWaqDf3N" alt="Anitta dá entrada em hospital em São Paulo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cantora Anitta deu entrada no Hospital Albert Einstein, em São Paulo, nesta quinta-feira (1º). A artista usou seu perfil no Twitter para tranquilizar os&nbsp;...</p></div>
            </div>
        </a><a href='https://extra.globo.com/tv-e-lazer/apos-internacao-anitta-tranquiliza-fas-tudo-certo-segue-baile-cantora-confirmou-que-agenda-de-shows-sera-mantida-25619610.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Após internação, Anitta tranquiliza fãs: &#39;Tudo certo, segue o baile ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS7wMGhd7i_noQ9cOEEPgFV9NBQKseos5uvbHfCIPNAgfxBKAi02_lflvE9ucin5IZFMli9-pRa" alt="Após internação, Anitta tranquiliza fãs: &#39;Tudo certo, segue o baile ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Após a notícia de que havia sido internada, a cantora Anitta usou sua conta no Twitter para se pronunciar sobre seu estado de saúde.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/splash/noticias/2022/12/01/gabily-assume-que-briga-com-anitta-e-fruto-de-suposto-plagio.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gabily confirma briga com Anitta e revela motivo: &#39;Não nos falamos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTcIcrOyuvAnUr5JxmMGPbu4z84aP-WuwOVV3zJ_wzBR2n8LB5oBnoIePgq3cegrfoTNhTmxFou" alt="Gabily confirma briga com Anitta e revela motivo: &#39;Não nos falamos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em entrevista ao Podcats, Gabily contou que a briga com Anitta surgiu após um suposto plágio. A seguir, entenda o que aconteceu e a repercussão.</p></div>
            </div>
        </a>
        </Template></>;
}