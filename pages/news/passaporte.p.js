import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Passaporte</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Passaporte"/>
        <meta name="description" content="Trending News about Passaporte" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Passaporte</h1>
            <Image width={800} height={500} src="https://www.gov.br/pf/pt-br/assuntos/noticias/2022/11/nota-a-imprensa-confeccao-de-passaportes-sera-suspensa-a-partir-deste-sabado/whatsapp-image-2022-11-18-at-18-09-13.jpeg/@@images/e86a89f5-b3ab-4247-babd-74a88406412e.jpeg" alt="Passaporte"/>
            <h3>Recent News</h3>
            <a href='https://www.gov.br/pf/pt-br/assuntos/noticias/2022/11/nota-a-imprensa-confeccao-de-passaportes-sera-suspensa-a-partir-deste-sabado'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nota à Imprensa - Confecção de passaportes será suspensa a partir ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS8uXFIb9KVlJ-hxVFuW0xN5ydM6mvUt5ppG6rldkAmspI_Zq2AZHsbuLCsF2c7ahb_s5GK1BJA" alt="Nota à Imprensa - Confecção de passaportes será suspensa a partir ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O agendamento online do serviço e o atendimento nos postos da PF continuarão funcionando normalmente. No entanto, não há previsão para entrega do passaporte&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/politica/noticia/2022/11/18/policia-federal-informa-que-por-falta-de-verba-vai-suspender-confeccao-de-passaporte.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polícia Federal informa que, por falta de verba, vai suspender ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSrww8KoQJ4E7Q2dWz_-GbWdMP-A8DBglWMF4TtIph6yCjjAyi5mIDCpuQljEESY2jMgdU4NVq1" alt="Polícia Federal informa que, por falta de verba, vai suspender ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quem foi atendido até esta sexta receberá o documento. A PF não deu uma data para quando o serviço de confecção do passaporte será normalizado. O agendamento,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.melhoresdestinos.com.br/suspensao-passaportes-brasil-nov22.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Má notícia! Polícia Federal vai suspender a confecção de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRdOoYLa86y7SQXzVU3PlRcc7kzYnReTIyONsRGUX7_U2f3W4GMT_1NICrbn-4MD4nncGlN-WYa" alt="Má notícia! Polícia Federal vai suspender a confecção de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os viajantes brasileiros parecem não ter sossego! De acordo com um comunicado oficial da Polícia Federal, a confecção do passaporte brasileiro será suspensa&nbsp;...</p></div>
            </div>
        </a><a href='https://agenciabrasil.ebc.com.br/geral/noticia/2022-11/pf-vai-suspender-emissao-de-novos-passaportes-por-falta-de-verba'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PF vai suspender emissão de novos passaportes por falta de verba</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRcjiIF3BJ-3VPXHkpyka1qKo_aXgtXn4lpMMOY8VL-3LGPimniXfsmVRH2U2Ci3AZPsi0iBfEV" alt="PF vai suspender emissão de novos passaportes por falta de verba" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os usuários que foram atendidos até hoje nos postos de emissão vão receber os passaportes. Segundo a Polícia Federal, outros serviços prestados não serão&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}