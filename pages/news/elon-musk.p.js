import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Elon Musk</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Elon Musk"/>
        <meta name="description" content="Trending News about Elon Musk" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Elon Musk</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/_DAEcj8vAjbIdxYhs5oEUnvKnW4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/e/0/6Lz2mASNq3xBX4iJyodA/twitter-rip.png" alt="Elon Musk"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/tecnologia/noticia/2022/11/18/elon-musk-ironiza-possivel-saida-de-centenas-de-funcionarios-do-twitter.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elon Musk ironiza possível saída de centenas de funcionários do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRTLNtuzHjoCcpzyU9Sw-sPSrtDAn4vj4jxaYWqhK39LSEe8s_mV0_p3wcih_d_qe0Hz_t8LYXw" alt="Elon Musk ironiza possível saída de centenas de funcionários do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bilionário publicou frases e memes brincando com a situação no seu perfil na rede social.</p></div>
            </div>
        </a><a href='https://www.infomoney.com.br/consumo/twitter-tem-novo-pico-de-acessos-apos-despedidas-afirma-elon-musk/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter tem novo pico de acessos após despedidas, afirma Elon Musk</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSNsp1QUkdN9cb0X3rKjV0SGFe8hne0z5OzpCe-KJVymcSjS2NpSgroPRTwQrTawkFcnzaudMq-" alt="Twitter tem novo pico de acessos após despedidas, afirma Elon Musk" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Recorde de acessos e postagens foi atingido após usuários levantarem as hashtags #ByeTwitter e #RIPTwitter.</p></div>
            </div>
        </a><a href='https://valorinveste.globo.com/mercados/renda-variavel/empresas/noticia/2022/11/18/elon-musk-diz-que-vai-fechar-escritorios-do-twitter-e-usuarios-falam-em-morte-da-rede.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elon Musk diz que vai fechar escritórios do Twitter e usuários falam ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRSHIwA1OVuZQN-s7dIaH4IM_O666aJc2UWQA2fXF1ocO54ZzVycWCAMhic45jnxgOwid7pBcQw" alt="Elon Musk diz que vai fechar escritórios do Twitter e usuários falam ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Empresário afirmou que a rede social alcançou um novo número recorde de acessos na noite de quinta-feira.</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/mercado/2022/11/saida-de-1200-funcionarios-coloca-twitter-de-musk-em-xeque.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Saída de 1.200 funcionários coloca Twitter de Musk em xeque</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRqz0J4jpo8SH_7Y6V_ad9RbhKJNfk3j3hOHIzNsScgLyEhKJp-B6utI3mSRJ3gZFgyFVa4Qqb6" alt="Saída de 1.200 funcionários coloca Twitter de Musk em xeque" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bilionário pediu informações sobre sistemas da empresa após demissões em massa nas equipes de infraestrutura.</p></div>
            </div>
        </a><a href='https://www.seudinheiro.com/2022/empresas/ultimato-elon-musk-nao-funcionou-funcionarios-twitter-demissoes-miql/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O ultimato de Elon Musk não funcionou! Funcionários do Twitter se ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQB3MaGm7z9T0XpNSSgmT-1vyOdB2iCa0GaV5UEfd3j0a4wioPeYHEMZgls0HvdcJ56LvKNeL7h" alt="O ultimato de Elon Musk não funcionou! Funcionários do Twitter se ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Após Elon Musk solicitar um “ritmo extremamente hardcore&quot; dos trabalhadores, cerca de metade dos Tweeps decidiu abandonar o “Twitter 2.0”</p></div>
            </div>
        </a><a href='https://gauchazh.clicrbs.com.br/tecnologia/noticia/2022/11/apos-enxurrada-de-pedidos-de-demissao-elon-musk-ironiza-questionamentos-sobre-o-fim-do-twitter-clamjd06w003q01g7luw3d0bb.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Após enxurrada de pedidos de demissão, Elon Musk ironiza ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTkRIFJiTyC2RUxgGKLk5NGcX5nFoRfrcjgUsw63sYqLA30utreQSe_wRtMDAC23aUFqqKuMPDs" alt="Após enxurrada de pedidos de demissão, Elon Musk ironiza ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jornais americanos noticiaram que centenas de trabalhadores decidiram deixar a empresa após ultimado do empresário sobre entrega &quot;completa e incondicional&quot;</p></div>
            </div>
        </a><a href='https://neofeed.com.br/blog/home/scott-galloway-elon-musk-tem-complexo-de-deus-e-e-um-mau-exemplo-a-empreendedores/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Scott Galloway: Elon Musk tem &quot;complexo de Deus&quot; e é um mau ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSzfkoC-RxHcr_A9Ye_285gJAQ1mrXE4psu_rkPZ_VGDSVUMscZq-PCcaUD4PgaS96i6-4JVJze" alt="Scott Galloway: Elon Musk tem &quot;complexo de Deus&quot; e é um mau ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Escritor, professor da Universidade de Nova York e um dos gurus do Vale do Silício, Scott Galloway critica a forma como Elon Musk vem conduzindo o negócio e&nbsp;...</p></div>
            </div>
        </a><a href='https://piaui.folha.uol.com.br/herald/2022/11/18/depois-de-elon-musk-comprar-o-twitter-brasil-sugere-que-ele-compre-jovem-pan/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Depois de Elon Musk comprar o Twitter, Brasil sugere que ele ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ1yujN1I9F_04wRWQVAExH44GAasmEJv33XyJP26amJKjravqPdm2nrzp8N1p9_vuVDZK0qPr5" alt="Depois de Elon Musk comprar o Twitter, Brasil sugere que ele ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“O Augusto Nunes, o Guilherme Fiúza e o Caio Coppola já perderam o selinho de verificados. Só falta você terminar o trabalho, demitindo o Rodrigo Constantino.”.</p></div>
            </div>
        </a>
        </Template></>;
}