import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pepe</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pepe"/>
        <meta name="description" content="Trending News about Pepe" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pepe</h1>
            <Image width={800} height={500} src="https://www.atribuna.com.br/storage/Esportes/Copa_2022/censurado3426800111633.webp" alt="Pepe"/>
            <h3>Recent News</h3>
            <a href='https://www.atribuna.com.br/esportes/copa-2022/bicampeao-com-a-selecao-brasileira-pepe-assiste-ao-jogo-com-funcionarios-de-empresa-em-santos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bicampeão com a seleção brasileira, Pepe assiste ao jogo com ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcROhm3WhoFnuLeblzdRf6VJ3zBMwL_koGJxTBBpfptKFBQhb9Lur5stOYb7W7xM1EI_AZ-Hwxlb" alt="Bicampeão com a seleção brasileira, Pepe assiste ao jogo com ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No clima da Copa do Mundo de Futebol, os colaboradores de uma empresa de Santos receberam a visita do bicampeão mundial das Copas de 58 e 62, José Macia,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.otempo.com.br/copa-do-mundo/2022/cristiano-ronaldo-e-pepe-buscam-brindar-20-anos-de-amizade-com-titulo-da-copa-1.2775689'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo e Pepe buscam brindar 20 anos de amizade com ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRyN70tvrk6LBAsLms1yQSI5_eLTLP47KqkfUc7n-ZiJY4IaJMyDIjWeBA3SSW6_4v4MgxGjUvS" alt="Cristiano Ronaldo e Pepe buscam brindar 20 anos de amizade com ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Enquanto os asiáticos precisam vencer para avançar, os europeus buscam um empate para confirmar a liderança do Grupo H.</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/internacional/selecao/noticias/salada-da-selecao-o-segredo-e-apenas-este-bom-produto-tempo-e-conhecimento-15415063.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Salada da Seleção? O segredo é apenas este: bom produto, tempo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTYVHNiXpI_KqpczDfxBlCjDshonLPGQlsBCUzOnCXsrBm7ggGj_3xqoU02HV9s7PnLSRIYuDDg" alt="&quot;Salada da Seleção? O segredo é apenas este: bom produto, tempo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>COMENTÁRIO DE HÉLIO LOUREIRO - Chef de cozinha desafiado por O JOGO a fazer a salada da Seleção, por inspiração de Fernando Santos e Pepe.</p></div>
            </div>
        </a>
        </Template></>;
}