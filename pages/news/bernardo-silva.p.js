import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bernardo Silva</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bernardo Silva"/>
        <meta name="description" content="Trending News about Bernardo Silva" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bernardo Silva</h1>
            <Image width={800} height={500} src="https://imagens.publico.pt/imagens.aspx/1753017?tp=UH&db=IMAGENS&type=JPG&share=1&o=BarraFacebook_Publico.png" alt="Bernardo Silva"/>
            <h3>Recent News</h3>
            <a href='https://www.publico.pt/2022/11/19/desporto/noticia/bernardo-silva-centrase-seleccao-demarcase-novela-ronaldo-2028417'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bernardo Silva centra-se na selecção e demarca-se da “novela ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTpiexqAjtvIqxcRhdUfC8hoBGBVhUST6uPXcHXj5wwuVGBnTjWnDj8966QF4luOyEjX56LNrD5" alt="Bernardo Silva centra-se na selecção e demarca-se da “novela ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Médio do Manchester City mostrou-se surpreendido pela obsessão em torno do “capitão” quando há um Mundial para disputar.</p></div>
            </div>
        </a><a href='https://www.tsf.pt/desporto/bernardo-silva-na-primeira-conferencia-de-imprensa-da-selecao-nacional-no-catar-15368287.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Acreditamos nos direitos humanos.&quot; Bernardo Silva diz que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQY1KBHY277EFgFwxcCjmBVikEw-jEDDIBdRxHxYjGViiw-xccxAmHGbtHHJebZpoPPG9izYxX1" alt="&quot;Acreditamos nos direitos humanos.&quot; Bernardo Silva diz que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em conferência de imprensa, o internacional português garante que a seleção nacional vai ″estar à procura″ de ″somar″ para ″passar aos oitavos″ do Mundial&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/internacional/selecao/noticias/bernardo-silva-e-as-noticias-sobre-ronaldo-nao-tem-nada-a-ver-com-a-selecao-15368395.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bernardo Silva e as notícias sobre Ronaldo: &quot;Não têm nada a ver ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQY1KBHY277EFgFwxcCjmBVikEw-jEDDIBdRxHxYjGViiw-xccxAmHGbtHHJebZpoPPG9izYxX1" alt="Bernardo Silva e as notícias sobre Ronaldo: &quot;Não têm nada a ver ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Acaba por jogar de uma forma diferente, quase todos os jogadores jogam em grandes clubes, nas melhores ligas... A seleção conta com o Cristiano, ele faz parte..</p></div>
            </div>
        </a><a href='https://www.jn.pt/desporto/todos-nos-acreditamos-nos-direitos-humanos-diz-bernardo-silva-15368627.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Todos nós acreditamos nos direitos humanos&quot;, diz Bernardo Silva</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRCV6SQ78QFY3w8n29ochzt6ioXuVQESE-PWacuNyEcA2_6BhAlaRD7Al9pYn5oy9vNgr_tQMHR" alt="&quot;Todos nós acreditamos nos direitos humanos&quot;, diz Bernardo Silva" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O futebolista Bernardo Silva considerou hoje que &quot;algumas situações da organização não foram as melhores&quot; no Mundial2022, no Qatar, que recebeu várias&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/copa-do-mundo/noticia/2022/11/19/bernardo-silva-rebate-pressao-em-portugal-por-situacao-de-cristiano-ronaldo-nao-tem-nada-a-ver-com-a-selecao.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo domina entrevista de Bernardo Silva, que diz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQpMvWpnPWz61LBhCJaeXtUJPnL0w0ctm9iL2hrgJUnDeVVeNJscnJ9mCfCaoXeGqjAYRR-Wstj" alt="Cristiano Ronaldo domina entrevista de Bernardo Silva, que diz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meia do Manchester City é questionado cinco vezes sobre ambiente após polêmica entrevista de companheiro: &quot;Não sou do Manchester United.</p></div>
            </div>
        </a>
        </Template></>;
}