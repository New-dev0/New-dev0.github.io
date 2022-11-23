import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Queer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Queer"/>
        <meta name="description" content="Trending News about Queer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Queer</h1>
            <Image width={800} height={500} src="https://www.rbsdirect.com.br/filestore/9/1/8/7/5/2/4_8b1d08c6565ca48/4257819_51349e57fcf0574.jpg?w=1200&h=630&a=c&version=1575255600" alt="Queer"/>
            <h3>Recent News</h3>
            <a href='https://gauchazh.clicrbs.com.br/donna/gente/noticia/2022/11/tadeu-schmidt-sobre-ter-descoberto-sexualidade-da-filha-pelas-redes-sociais-nao-fez-a-menor-diferenca-clasm7g52000v014uthoqmngd.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tadeu Schmidt sobre ter descoberto sexualidade da filha pelas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRqPss8OmhWeG1lItoYYsqExhMY4bQQFtyb3btcUBF0raRBrYUfml-2xIJ_bucFBFccs9tuASAj" alt="Tadeu Schmidt sobre ter descoberto sexualidade da filha pelas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O jornalista Tadeu Schmidt, 48 anos, falou sobre a filha mais velha, Valentina, 20 anos, ter se declarado como uma pessoa queer nas redes sociais.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/splash/noticias/2022/11/22/tadeu-schmidt-comenta-sobre-a-filha-valentina-ter-se-declarado-queer.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tadeu Schmidt comenta sobre a filha Valentina ter se declarado queer</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRtEFXeiAk66DlS974bz8AJz4rQjcWy1wX-9u4I92ePCb9nqtILNPhf-_wEr4_8ApolGxYxSwzG" alt="Tadeu Schmidt comenta sobre a filha Valentina ter se declarado queer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No &quot;Papo de segunda&quot;, do GNT, o apresentador do &quot;Big Brother Brasil&quot; (TV Globo) afirmou sobre a descoberta não ter mudado quase nada na relação entre os&nbsp;...</p></div>
            </div>
        </a><a href='https://oglobo.globo.com/kogut/noticia/2022/11/tadeu-schmidt-fala-sobre-a-filha-valentina-ter-se-declarado-pessoa-queer.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tadeu Schmidt fala sobre a filha Valentina ter se declarado &#39;queer&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQXrvuqE0nvA3b74aqnJeyVvlI26FCKmzzazj5oGpy3liJZVoR-djwk8qAYv2fPKlU7dUmzd7FI" alt="Tadeu Schmidt fala sobre a filha Valentina ter se declarado &#39;queer&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tadeu Schmidt falou no &quot;Papo de segunda&quot;, do GNT, sobre sua filha mais velha, Valentina, ter se declarado uma pessoa queer.</p></div>
            </div>
        </a><a href='https://noticiasdatv.uol.com.br/noticia/celebridades/tadeu-schmidt-revela-como-descobriu-sobre-filha-queer-nao-muda-nada-93166'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tadeu Schmidt revela como descobriu sobre filha queer: &#39;Não muda ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQa7f63VHRwo8G5-LPUx-fFNL92no7hx3TfBNNxl2xvobipDUm7IjXpsbpPiJz2OheN978Q4zEV" alt="Tadeu Schmidt revela como descobriu sobre filha queer: &#39;Não muda ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tadeu Schmidt abriu o jogo sobre a sexualidade da filha. Valentina, com 20 anos, se assumiu queer em 2021 por meio das redes sociais.</p></div>
            </div>
        </a><a href='https://caras.uol.com.br/atualidades/tadeu-schmidt-fala-sobre-filha-ter-se-declarado-como-pessoa-queer.phtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tadeu Schmidt fala sobre a filha ter se declarado como pessoa queer</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSKM1l-oDgDSkYCrK02oOVaoey0HZpYu71Epi0pvJOGBfrGm6YE5X1KMmbALbbxK4cRXtxf1ljL" alt="Tadeu Schmidt fala sobre a filha ter se declarado como pessoa queer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tadeu Schmidt entrega o que pensou após a filha mais velha falar de sua sexualidade na internet.</p></div>
            </div>
        </a><a href='https://vejasp.abril.com.br/coluna/pop/tadeu-schmidt-fala-sobre-sua-reacao-apos-filha-se-assumir-queer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tadeu Schmidt conta como reagiu ao saber que sua filha é queer</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQV1dunJh__FSUjVGTLJ6ZjlxzbYYK5ceest7ucBjjh2i4_DIxh3DSOIJ7nOzmuKqVHsUmRjg2F" alt="Tadeu Schmidt conta como reagiu ao saber que sua filha é queer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Não fez diferença”, disse o apresentador durante participação em programa do GNT.</p></div>
            </div>
        </a><a href='https://www.estadao.com.br/emais/gente/tadeu-schmidt-fala-sobre-relacao-com-sua-filha-valentina/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Minha filha continuou sendo a mesma&#39;, diz Tadeu Schmidt sobre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRnPgeG2XI3cqThbZXExSGphTjiQLYAX9ZGPzBj-DIrQEqVkHdd_xBwMAZTRnK377BSH5pglvFN" alt="&#39;Minha filha continuou sendo a mesma&#39;, diz Tadeu Schmidt sobre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tadeu Schmidt falou nesta segunda-feira, 21, durante o programa Papo de Segunda do GNT sobre sua relação com a filha Valentina, que recentemente se assumiu&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}