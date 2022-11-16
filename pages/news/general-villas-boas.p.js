import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>General Villas Boas</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,General Villas Boas"/>
        <meta name="description" content="Trending News about General Villas Boas" /></Head><Template>
            <h1 style={{fontSize: "30"}}>General Villas Boas</h1>
            <Image width={800} height={500} src="https://veja.abril.com.br/wp-content/uploads/2018/04/general-villas-boas-2017-1275.jpg?quality=70&strip=info&w=680&h=453&crop=1" alt="General Villas Boas"/>
            <h3>Recent News</h3>
            <a href='https://veja.abril.com.br/coluna/maquiavel/o-recado-do-general-villas-boas-aos-manifestantes-bolsonaristas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O recado do general Villas Boas aos manifestantes bolsonaristas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSyLMmxMGWF7IV1kR2rgzA7PvqCGZJAolP8FrG49IlWt-xDdtvVedsls5embppW5lkaiN9ugbkL" alt="O recado do general Villas Boas aos manifestantes bolsonaristas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-chefe do Exército flerta com os protestos golpistas, critica a imprensa e elogia os comandantes militares.</p></div>
            </div>
        </a><a href='https://maranhaohoje.com/politica/general-villas-boas-diz-que-o-povo-esta-na-porta-dos-quarteis-pedindo-socorro-as-forcas-armadas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>General Villas Boas diz que o povo está na porta dos quarteis ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRlGhr-04jcN48fw2JUxrdNpSSiR6AzoUUdTBvWBMdAGX88Qjo-RE8xOUo1L9IxRTs8lJeA8-Y_" alt="General Villas Boas diz que o povo está na porta dos quarteis ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-comandante do Exército, o general Eduardo Villas Boas divulgou nesta quinta-feira (15), Dia da Proclamação da República, um artigo sobre as manifestações&nbsp;...</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/poder/2022/11/villas-boas-adota-tom-golpista-e-diz-que-atos-antidemocraticos-sao-contra-atentados-a-democracia.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Villas Bôas adota tom golpista e diz que atos antidemocráticos são ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT-9P7HWIXBSqSOJ_BQoQXVoHlzh-fTsjvkjMpslCyofDjW3opXLKif0uLfFAd2T-oPvAOylEgy" alt="Villas Bôas adota tom golpista e diz que atos antidemocráticos são ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em publicação feita no Twitter, o militar disse que os atos são contra &quot;atentados à democracia&quot; e que também tratam das &quot;dúvidas sobre o processo eleitoral&quot;,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cartacapital.com.br/politica/villas-boas-reaparece-e-reclama-da-indiferenca-da-grande-imprensa-na-cobertura-dos-atos-golpistas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Villas Boas reaparece e reclama da &#39;indiferença da grande ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQY3JZ4ZcZ9KS4eyNk2YNUvZudTrMiPAbTNlpu4WIIogVED48A6d5wMNfCWAdfagR3iU931kJKv" alt="Villas Boas reaparece e reclama da &#39;indiferença da grande ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Após um período em silêncio, o general Eduardo Villas Boas, ex-comandante do Exército, reapareceu nesta terça-feira 15 e criticou o que chamou de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.poder360.com.br/eleicoes/ha-indiferenca-da-imprensa-as-manifestacoes-diz-villas-boas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Há “indiferença” da imprensa às manifestações, diz Villas Boas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQnhiQWm4KULV-DBOItmbjrIHrt53MacTSse--OPqbEN7wQnRv-SBFOK5PbXd2kpkYnq00xbYus" alt="Há “indiferença” da imprensa às manifestações, diz Villas Boas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>General afirma que protestos contra vitória de Lula pedem &quot;socorro às Forças Armadas&quot;, são significativos e pacíficos. Leia no Poder360.</p></div>
            </div>
        </a><a href='https://revistaoeste.com/politica/general-villas-boas-publica-carta-sobre-manifestacoes-contra-a-eleicao-de-lula/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>General Villas Boas publica carta sobre manifestações contra a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTSPrdjv48KfQ9vOlgFcGddFv2bQyoap-9S2Q0fSeyjtpoMjAIaSYmxktrL9zIHKTCJb97w6qjJ" alt="General Villas Boas publica carta sobre manifestações contra a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Villas Boas criticou o fato de a imprensa tradicional ter dado pouca evidência aos protestos contra Lula, que se espalharam por várias cidades do país. “Talvez&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}