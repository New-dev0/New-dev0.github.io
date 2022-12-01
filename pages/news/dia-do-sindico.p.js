import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dia do sindico</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dia do sindico"/>
        <meta name="description" content="Trending News about Dia do sindico" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dia do sindico</h1>
            <Image width={800} height={500} src="https://tnsul.com/wp-content/uploads/2022/11/Dia-do-Síndico-Nilton-Alves-50.jpg" alt="Dia do sindico"/>
            <h3>Recent News</h3>
            <a href='https://tnsul.com/2022/geral/dia-do-sindico-a-profissao-que-ganha-espaco-na-sociedade/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dia do Síndico: a profissão que ganha espaço na sociedade</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQqhYvCCte4fGZUquBw8q5Xgp6E2gPnytxFo7yv3HST-Eo04qyye6uggUeH8FV9iLzwopIkWVb2" alt="Dia do Síndico: a profissão que ganha espaço na sociedade" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A data foi criada no Brasil em 1984, como uma forma de homenagear os profissionais responsáveis pelo cuidado e zelo. Foto: Nilton Alves/TN&nbsp;...</p></div>
            </div>
        </a><a href='https://radiomarconi.net/2022/11/30/dia-do-sindico-e-lembrado-hoje-ponto-de-encontro-ressalta-importancia-da-funcao/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dia do Síndico é lembrado hoje; Ponto de Encontro ressalta ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSdIDZ4eeVzbrjDRg17LcFAfMxc9nULBoat5JcFTFVo7OFvJs53x-4HroWzpF3ojy3ETVrQJ3Ah" alt="Dia do Síndico é lembrado hoje; Ponto de Encontro ressalta ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Normalmente, um morador do prédio é o escolhido para ser síndico, mas há casos em que são contratados profissionais especializados para tratar dos assuntos.</p></div>
            </div>
        </a><a href='https://www.otempo.com.br/brasil/dia-do-sindico-saiba-quais-os-direitos-e-deveres-do-gestor-de-condominios-1.2774649'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dia do Síndico: saiba quais os direitos e deveres do gestor de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR3r0Ingf3mPJmoo-IwXqABh2Dc03HKX6Rs5xzptIw7Ii1-rS4DujuT6zTWZusgMvKUQwNs53YD" alt="Dia do Síndico: saiba quais os direitos e deveres do gestor de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No Brasil, o ofício é reconhecido legalmente desde 1964. Segundo a Associação Mineira dos Síndicos e Síndicos Profissionais (AMSSP) são mais de 40 mil&nbsp;...</p></div>
            </div>
        </a><a href='https://difusoraon.com/2022/11/30/dia-do-sindico-especialista-evidencia-importancia-do-sindico-profissional-para-seguranca/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dia do síndico: especialista evidencia importância do síndico ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTcdxXRVcyUSUPwnUXcsYYjGXjH47j3zx_SiBSZHseOVYvJtKj0jmnps06kfiYBuFOvGVueuZxH" alt="Dia do síndico: especialista evidencia importância do síndico ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Por fim, a vice-presidente da comissão de direito condominial, explica que, na seleção, o síndico profissional irá informar na sua proposta comercial o valor&nbsp;...</p></div>
            </div>
        </a><a href='https://diariodegoias.com.br/uso-de-tecnologia-e-a-principal-ferramenta-na-administracao-de-condominios-atualmente/263957/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uso de tecnologia é a principal ferramenta na administração de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTITjUQyd0zVNWLOOcewRUKAh77oSlYgWDzD1Fhz7Cw4aqeZmfOzCTzdwgMUFv__gauKx1e1ABA" alt="Uso de tecnologia é a principal ferramenta na administração de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Porém, agora, outra tarefa importante destes profissionais é saber se reinventar e trabalhar cada vez mais com o apoio da tecnologia. Para a administradora de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}