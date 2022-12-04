import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Globoplay</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Globoplay"/>
        <meta name="description" content="Trending News about Globoplay" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Globoplay</h1>
            <Image width={800} height={500} src="https://noticiasdatv.uol.com.br/media/uploads/artigos_2021/copa-4k-sportv.jpg" alt="Globoplay"/>
            <h3>Recent News</h3>
            <a href='https://noticiasdatv.uol.com.br/noticia/tecnologia/copa-em-4k-no-globoplay-tem-alta-nitidez-mas-gol-com-16-segundos-de-atraso-93738'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Copa em 4K no Globoplay tem alta nitidez, mas gol com 16 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRmbV8xbU9uzi_Cshbq1d6ZcvG-rcNUc8GF6pCQUX4xGrq89FoMARZQeRUlf8MNBG9N9navO-7j" alt="Copa em 4K no Globoplay tem alta nitidez, mas gol com 16 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com resolução quatro vezes superior à da Globo na TV digital aberta e à do SporTV HD na TV paga, a transmissão da Copa pelo SporTV 4K para assinantes do&nbsp;...</p></div>
            </div>
        </a><a href='https://mundoconectado.com.br/noticias/v/30028/globoplay-todos-os-lancamentos-de-dezembro-de-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Globoplay: todos os lançamentos de dezembro de 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQGll2rNWU4tejo2aEo0Swg0eCrsqutFAutJlIzS51Q7HJA5lAwZzOGAjJVjwtSQpI0BIS1iJV3" alt="Globoplay: todos os lançamentos de dezembro de 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Entre os destaques do mês estão a novela O Beijo do Vampiro, a série Downton Abbey e o documentário Sou Corinthians.</p></div>
            </div>
        </a><a href='https://www.audienciacarioca.com.br/2022/12/03/confira-a-escala-de-narradores-da-globo-nos-jogos-da-copa-do-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Confira a escala de narradores da Globo e sportv nos jogos da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSdBr68RrrnYkoN8ukyt8kJkNB1JndOAK2sMjzc_hTiVDAx5_bF5_sO81reRy4Yl5txDgQuZJn9kg" alt="Confira a escala de narradores da Globo e sportv nos jogos da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Saiba quem serão os narradores da Globo, Globoplay e sportv nos jogos da da Copa do Mundo neste domingo, 4 de dezembro. Ao todo, serão dois jogos,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nerdmaldito.com/2022/12/disney-plus-dezembro-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Disney Plus | Lista de lançamentos completa de Dezembro de 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQfMmGOvNL8fMYq6j1H-Uw0g1bMp-2r1wWsk2iNEx-yg8lZQUTsGs0U-WQrgzJWc6snduZ1nufb" alt="Disney Plus | Lista de lançamentos completa de Dezembro de 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mensalmente a Disney+ faz sua atualização com as novidades da plataforma e não são apenas produtos da Disney, mas sim os mais variados tipos!</p></div>
            </div>
        </a>
        </Template></>;
}