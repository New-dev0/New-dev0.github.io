import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Van Dijk</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Van Dijk"/>
        <meta name="description" content="Trending News about Van Dijk" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Van Dijk</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/2jl99l5KMvBwP0dVCgUMVNOhRsU=/1200x/smart/filters:cover():strip_icc()/s04.video.glbimg.com/x720/11143491.jpg" alt="Van Dijk"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/futebol/copa-do-mundo/noticia/2022/11/21/que-cena-torcedor-admira-van-dijk-antes-de-entrar-em-campo-e-recebe-carinho-do-jogador-assista.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Que cena! Torcedor admira van Dijk antes de entrar em campo e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRiWEXSx9pcjocCGie-eu5IE_sJLxaHHiOhhiI00GvtRJ9ZR5sIDDdjye9ZuNGp99qlpp_zzwDK" alt="Que cena! Torcedor admira van Dijk antes de entrar em campo e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O jogador do Liverpool percebeu o encantamento do jovem torcedor e cumprimentou o garotinho.</p></div>
            </div>
        </a><a href='https://www.espn.com.br/futebol/copa-do-mundo/artigo/_/id/11259073/van-dijk-direto-ausencia-firmino-copa-reacao-impagavel-responder-sobre-brasil'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Van Dijk é direto sobre ausência de Firmino na Copa e tem reação ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSWl246W6yhY2XvLOKieZys6tulQKuDpZ5NYLNloVcfbVzUogDPJ2ogZAVWQrG_MM-z2wFdbB6n" alt="Van Dijk é direto sobre ausência de Firmino na Copa e tem reação ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O capitão da seleção holandesa, Virgil van Dijk, fez o seu primeiro jogo em Copas do Mundo nesta segunda-feira (21). E a estreia foi em grande estilo. Contra a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/alerta-fofura-crianca-se-encanta-com-van-dijk-antes-de-entrar-em-campo-e-zagueiro-retribui,99dcc93d87a63cd520b25f0a2977ace1fgdv0fmi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alerta fofura! Criança se encanta com Van Dijk antes de entrar em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQKchcLt0mqpqHW5KEEdymCaPV4okj8652BIouRI14g8Nqn3fR8dzuMpndUN4DO0Q9cAO6S4ZI6" alt="Alerta fofura! Criança se encanta com Van Dijk antes de entrar em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Antes do duelo entre Holanda e Senegal, nesta segunda-feira, uma cena chamou atenção ainda nos túneis de vestiário que levam ao campo do estádio Al Thumama.</p></div>
            </div>
        </a><a href='https://midianinja.org/news/virgil-van-dijk-a-historia-de-superacao-e-ambicao-do-capitao-holandes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Virgil Van Dijk: a história de superação e ambição do capitão ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS4NNFg4snSGch5P9hw20di0C-Y-4skQvOwiosuiBXDYClZSkSURfOtDTF-FbbERZ5Mp1egwSSs" alt="Virgil Van Dijk: a história de superação e ambição do capitão ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogador enfrentou uma doença grave no início da carreira e hoje lidera a seleção holandesa em busca de título inédito. Foto: Laurence Griffiths/ Getty&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}