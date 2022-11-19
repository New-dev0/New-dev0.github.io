import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Projac</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Projac"/>
        <meta name="description" content="Trending News about Projac" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Projac</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/entretenimento/43/2022/11/18/incendio-atinge-estudios-globo-no-rio-1668787484893_v2_615x300.png" alt="Projac"/>
            <h3>Recent News</h3>
            <a href='https://www.uol.com.br/splash/noticias/ooops/2022/11/18/cidade-cenografica-de-todas-as-flores-pega-fogo.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fogo no Projac consome equipamentos; Globo diz que está ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS663J73AGKcPj65zGF0mu7uAFEnAK-t0hVTGsj806UgdvCjX-Gg28WOsgnfB9dkK8HsN2-45WH" alt="Fogo no Projac consome equipamentos; Globo diz que está ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O incêndio que atinge nesta tarde (18) a cidade cenográfica de &quot;Todas As Flores&quot;, seriado do Globoplay, que é gravada no Projac, Rio, pode custar.</p></div>
            </div>
        </a><a href='https://gauchazh.clicrbs.com.br/geral/noticia/2022/11/incendio-atinge-cenario-de-novela-no-projac-da-rede-globo-no-rio-clamtd729000i01g2fbyspioa.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Incêndio atinge cenário de novela no Projac, da Rede Globo, no Rio</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Incêndio atinge cenário de novela no Projac, da Rede Globo, no Rio" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em nota, a Globo informou que não havia profissionais no local no momento do incêndio e ninguém ficou ferido. Segundo a emissora, o fogo foi controlado pela&nbsp;...</p></div>
            </div>
        </a><a href='https://cbn.globoradio.globo.com/media/audio/392960/incendio-no-projac-atinge-cenario-de-novela-da-glo.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Incêndio no Projac atinge cenário de novela da Globo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcThPQ1vrGhxcsH1dRROJvMyJZ7OslTBf6jtEhVXwdx32KqQ_V2cI2Va6g47E6JwiYbcvhkWOetU" alt="Incêndio no Projac atinge cenário de novela da Globo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>De acordo com a TV Globo, não havia profissionais no local; logo, não houve feridos pelo fogo, que começou na manhã desta sexta-feira e queimou um dos&nbsp;...</p></div>
            </div>
        </a><a href='https://www.metropoles.com/entretenimento/televisao/veja-o-cenario-de-todas-as-flores-atingido-por-incendio-no-projac'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Veja o cenário de Todas as Flores atingido por incêndio no Projac</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQElbcPnp0HMM96qDinJN0jEz_FAVv2oaUccefcInu1lrvlsA-1hpVOVCe4WkF4XnsALPdXlf54" alt="Veja o cenário de Todas as Flores atingido por incêndio no Projac" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O fogo se alastrou na loja fictícia Rhodes, em que se desenvolve parte do folhetim de João Emanuel Carneiro.</p></div>
            </div>
        </a><a href='https://revistaoeste.com/brasil/incendio-destroi-parte-do-projac-estudio-da-rede-globo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Incêndio destrói parte do Projac, estúdio da Rede Globo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRfSaEIDRNSRPB7h0197P6dWPkHGfE_oZdGe9ze9BDYg7qlk1zVMBrgwMolNhQqAEVT9b43OW6u" alt="Incêndio destrói parte do Projac, estúdio da Rede Globo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fogo atingiu set de gravações da novela Todas as Flores, no estúdio da TV Globo, localizado no Rio de Janeiro. Clique aqui para saber mais.</p></div>
            </div>
        </a>
        </Template></>;
}