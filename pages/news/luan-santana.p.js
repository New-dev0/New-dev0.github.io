import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Luan Santana</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Luan Santana"/>
        <meta name="description" content="Trending News about Luan Santana" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Luan Santana</h1>
            <Image width={800} height={500} src="https://uploads.metropoles.com/wp-content/uploads/2022/06/30120448/joaosilva_277694047_3040557656258928_478587990827713388_n.jpg" alt="Luan Santana"/>
            <h3>Recent News</h3>
            <a href='https://www.metropoles.com/celebridades/filho-de-faustao-se-declara-a-luan-santana-especial-na-minha-vida'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Filho de Faustão se declara a Luan Santana: “Especial na minha vida”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRCNtEWbV-0t2uxG3plrx1nEjQ2NzO6ty2R5SVkqyl7L7wrLMucNug4s2KpHScGSPZKzRqpTkMo" alt="Filho de Faustão se declara a Luan Santana: “Especial na minha vida”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>João Guilherme falou sobre sua relação com Luan Santana durante a participação do artista na pizzaria do Faustão, nessa segunda-feira (28/11), na Band.</p></div>
            </div>
        </a><a href='https://emoff.ig.com.br/televisao/luan-santana-e-surpreendido-com-declaracao-de-amor-de-filho-de-faustao/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Luan Santana é surpreendido com declaração de amor de filho de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRPdUbsnNoBwiK1xavp5cVbv0X45rPtuHbWw5K5swGGinkws0GkW4A8DqIDW7QoiQMDWGyhyTQu" alt="Luan Santana é surpreendido com declaração de amor de filho de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Durante o programa de Fausto Silva na Band, o co-apresentador não poupou palavras para descrever o carinho que sente pelo cantor.</p></div>
            </div>
        </a><a href='https://aaronturatv.ig.com.br/luan-santana-e-surpreendido-com-declaracao-do-filho-do-faustao/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Luan Santana é surpreendido com declaração de amor do filho do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS3oJo2ln_cgv44bvPd7dEcpEMdHW-7bT4nv1uoU0yCsm0kme7v5c45rlSzVNkCKtloAPzTHMfc" alt="Luan Santana é surpreendido com declaração de amor do filho do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Durante o programa Faustão na Band, o herdeiro do apresentador não poupou elogios e se declarou para o cantor.</p></div>
            </div>
        </a><a href='https://bahiaeconomica.com.br/wp/2022/11/29/luan-santana-e-surpreendido-com-declaracao-de-amor-de-joao-guilherme/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LUAN SANTANA É SURPREENDIDO COM DECLARAÇÃO DE ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ3vIlsu1npUpzfGLo-QDC9a0X_9KMh1TYTQz5PWXnYdGyxjqsAOxnZHOzK0wdXaE158a8yo7wI" alt="LUAN SANTANA É SURPREENDIDO COM DECLARAÇÃO DE ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Convidado especial do &#39;Faustão na Band&#39;, Luan Santana foi surpreendido com uma declaração de amor feita por João Guilherme Silva, filho do apresentador.</p></div>
            </div>
        </a><a href='https://acontecendoaqui.com.br/propaganda/luan-santana-estrela-nova-campanha-da-alelo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Luan Santana estrela nova campanha da Alelo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSiCHx4Ov-0NrSiz39qeIPmvUEj3ZNytP4mVw2ri89RnyBfT0nfKA1mkkIWRWt0drZB0pa8y3gi" alt="Luan Santana estrela nova campanha da Alelo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Alelo está lançando uma nova Campanha Institucional da marca e conta com um nome de peso para compor esse novo momento da companhia.</p></div>
            </div>
        </a>
        </Template></>;
}