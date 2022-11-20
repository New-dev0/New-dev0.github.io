import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sérgio Praia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sérgio Praia"/>
        <meta name="description" content="Trending News about Sérgio Praia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sérgio Praia</h1>
            <Image width={800} height={500} src="https://sic.pt/wp-content/uploads/2022/11/latas-de-atum-1024x583.png" alt="Sérgio Praia"/>
            <h3>Recent News</h3>
            <a href='https://sic.pt/sic/fiz-uma-mochila-com-umas-latas-de-atum-sergio-praia-relembra-a-primeira-vez-que-fugiu-de-casa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Fiz uma mochila com umas latas de atum&quot; - Sérgio Praia relembra ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTwrudt32LvCteH6ElwVQ-A483eic9KGg46JG1mzcPXAiA8HWpJsgzYgW6d-SyzOcVgtnAPw4EF" alt="&quot;Fiz uma mochila com umas latas de atum&quot; - Sérgio Praia relembra ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com uma paixão imensa pelo ballet, algo que a família não aceitava, cedo o ator percebeu que a única forma de seguir os seus sonhos seria saindo de casa.</p></div>
            </div>
        </a><a href='https://www.novagente.pt/sergio-praia-dura-historia-ator-passou-fome-e-trabalhou-nas-obras-nao-tinha-onde-dormir'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sérgio Praia - Dura história: Ator passou fome e trabalhou nas obras ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQpv3QUyrznBocpM1ob5ZwLYHHIRypPUg3ij-t_az7d1SYbr9iymKlkBXICwAtfx9sAyr02aNbY" alt="Sérgio Praia - Dura história: Ator passou fome e trabalhou nas obras ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sérgio Pinho relatou a Daniel Oliveira as dificuldades que passou para concretizar o sonho de ser ator. No Porto, com apenas 16 anos, o ator chegou a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.maria.pt/noticias-e-tv/sergio-praia-dormiu-na-rua-trabalhou-nas-obras-e-roubou-para-comer-nao-tinha-onde-dormir/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sérgio Praia dormiu na rua, trabalhou nas obras e roubou para ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSRlHX7cl35vfZ2E5U-6RuRRZBKw44l7ohDpFc8Z7Bv9ZvHGJjoROZNxzMD-7llV0ui67s6l4my" alt="Sérgio Praia dormiu na rua, trabalhou nas obras e roubou para ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sérgio Praia, Tojó em Sangue Oculto, SIC, conta que passou fome, dormiu na rua, roubou para comer e trabalhou nas obras, enquanto estudava teatro.</p></div>
            </div>
        </a><a href='https://www.atelevisao.com/sic/sergio-praia-revela-dura-historia-de-vida-nao-tinha-onde-dormir/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sérgio Praia revela dura história de vida: &quot;Não tinha onde dormir&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSKSunnV5NKM3el0rW5H6h_wvz-Nnz2CxC1RO7yFw7Y-BeUl_PBbB-7KhVpVodkZlZjBCbgwNW6" alt="Sérgio Praia revela dura história de vida: &quot;Não tinha onde dormir&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sérgio Praia &#39;abriu o coração&#39; a Daniel Oliveira para o programa &#39;Alta Definição&#39;. O ator voltou a revelar pormenores da sua dura história de vida.</p></div>
            </div>
        </a>
        </Template></>;
}