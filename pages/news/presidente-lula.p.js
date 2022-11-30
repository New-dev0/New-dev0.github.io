import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Presidente Lula</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Presidente Lula"/>
        <meta name="description" content="Trending News about Presidente Lula" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Presidente Lula</h1>
            <Image width={800} height={500} src="https://images.jota.info/wp-content/uploads/2022/11/lula.jpg" alt="Presidente Lula"/>
            <h3>Recent News</h3>
            <a href='https://www.jota.info/eleicoes/lula-deve-antecipar-diplomacao-como-presidente-para-dia-12-29112022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lula deve antecipar diplomação como presidente para dia 12</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSdq5gF5r_tbAwHsE5H7GLsqv8oYLJCtIepxqKrt7XkFF4-Z-W4r1QODUAU4YRi5Kc5oHQLgM-e" alt="Lula deve antecipar diplomação como presidente para dia 12" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na conversa, o petista teria indicado que a cerimônia ocorreria no dia 12 de dezembro. A data original prevista no Tribunal Superior Eleitoral (TSE) era 19 de&nbsp;...</p></div>
            </div>
        </a><a href='https://noticias.uol.com.br/ultimas-noticias/agencia-estado/2022/11/29/diplomacao-de-lula-no-tse-deve-ser-antecipada-para-o-dia-12.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Diplomação de Lula no TSE deve ser antecipada para o dia 12</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQGCUe_F3pXPl0qEtAJUvJJ1BrAgKeWhJ8XL7pV8sQ0VGcuUguTAnDHbu-2mCllipS6B20ikpM0" alt="Diplomação de Lula no TSE deve ser antecipada para o dia 12" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O prazo limite para a Corte atestar oficialmente a vitória do candidato eleito é dia 19, segundo o cronograma da Justiça Eleitoral.</p></div>
            </div>
        </a><a href='https://g1.globo.com/politica/eleicoes/2022/noticia/2022/11/29/tse-diz-que-diplomacao-de-lula-sera-no-dia-12-de-dezembro.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TSE diz que diplomação de Lula será no dia 12 de dezembro</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQHY_Q_8mrfNrSdWmfQSbqEDT8kJx6ameVSAX4oBQ50TGFxZBY08BUSdRMESVQaadLBfdyYPUKw" alt="TSE diz que diplomação de Lula será no dia 12 de dezembro" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Diplomação é a última etapa do processo eleitoral e habilita o presidente eleito para o mandato.</p></div>
            </div>
        </a><a href='https://valor.globo.com/politica/noticia/2022/11/29/lula-diz-que-sera-diplomado-em-12-de-dezembro-e-so-anunciara-ministros-depois.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lula diz que só indicará ministros após ser diplomado</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSPdxkmvjX4iN1qphfnVvIzv6uuV6VVR_jLp0p0E5lBQqfBwLdvibrymBM0BCCqj7w136kIT1SU" alt="Lula diz que só indicará ministros após ser diplomado" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Tribunal Superior Eleitoral (TSE) marcou a diplomação do presidente eleito Luiz Inácio Lula da Silva (PT) e de seu vice, Geraldo Alckmin (PSB),&nbsp;...</p></div>
            </div>
        </a><a href='https://www.metropoles.com/colunas/igor-gadelha/moraes-atende-pedido-de-lula-e-marca-diplomacao-para-12-de-dezembro'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Moraes atende pedido de Lula e marca diplomação para 12 de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT6JF5bzFfcvt1l7qWf7up15W1Vsp0rSuvVEzDlm6EOmT64pmcszls00QvSopsX0oq9jnN2Gyg1" alt="Moraes atende pedido de Lula e marca diplomação para 12 de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Presidente do TSE marca diplomação do presidente eleito para o dia 12 de dezembro, conforme desejava Lula.</p></div>
            </div>
        </a><a href='https://veja.abril.com.br/coluna/radar/tse-marca-data-da-diplomacao-de-lula-e-alckmin/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TSE marca data da diplomação de Lula e Alckmin</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTife39vLRN24oS8RhQYelShH5RxacBKimBzu7TsPWIRPe22z2uf0KHaAxni0uP6IxKhWhh2ARP" alt="TSE marca data da diplomação de Lula e Alckmin" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O evento marca o encerramento do processo eleitoral. Lula e Alckmin receberão os respectivos diplomas assinados pelo presidente do TSE, o ministro Alexandre de&nbsp;...</p></div>
            </div>
        </a><a href='https://oglobo.globo.com/blogs/malu-gaspar/post/2022/11/por-que-o-pt-quer-acelerar-a-diplomacao-de-lula-pelo-tse.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Por que o PT quer &#39;acelerar&#39; a diplomação de Lula pelo TSE</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTKqxTs9XJp99oAQsfhgzcpv1gy75cLKIgML4TVsWXlbmbHDfCVoBkwGnEjHfQzElkp7V7rMDbz" alt="Por que o PT quer &#39;acelerar&#39; a diplomação de Lula pelo TSE" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O presidente eleito Luiz Inácio Lula da Silva e integrantes da equipe de transição querem “acelerar” a diplomação do petista e de seu vice, Geraldo Alckmin,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}