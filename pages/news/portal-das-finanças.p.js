import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Portal das Finanças</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Portal das Finanças"/>
        <meta name="description" content="Trending News about Portal das Finanças" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Portal das Finanças</h1>
            <Image width={800} height={500} src="https://imagens.publico.pt/imagens.aspx/1756298?tp=UH&db=IMAGENS&type=JPG&share=1&o=BarraFacebook_Publico.png" alt="Portal das Finanças"/>
            <h3>Recent News</h3>
            <a href='https://www.publico.pt/2022/11/30/economia/noticia/portal-financas-temporariamente-indisponivel-2029753'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portal das Finanças está “temporariamente indisponível”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTZns3amlD-y5Tj9g6K3YxHzTQJCP_yuFyDYgCh9rn0zNy_KXoC6KKu6QJSOomFw-ci3MLAPFOg" alt="Portal das Finanças está “temporariamente indisponível”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Está em curso a renovação dos certificados digitais do Portal das Finanças”, explica a Autoridade Tributária e Aduaneira.</p></div>
            </div>
        </a><a href='https://www.jornaldenegocios.pt/economia/detalhe/portal-das-financas-esta-temporariamente-indisponivel'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portal das Finanças está temporariamente indisponível</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRUdf_E1lIKUlnicZtcFTw6cu2Q8PIjQAOVlSCclFIglk8LWsf23iWGQsmLsnL33sCTjB_wxR0N" alt="Portal das Finanças está temporariamente indisponível" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Autoridade Tributária afasta existência de qualquer ataque informático, justificando que certificado digital expirou.</p></div>
            </div>
        </a><a href='https://eco.sapo.pt/2022/11/30/portal-das-financas-indisponivel-certificado-de-seguranca-passou-a-validade/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portal das Finanças indisponível. Certificado passa validade</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSewlr4gI06WIpVVBd2Ryzrg4PbsH_eQQEHpCG7aUla4OOvCUo4JzWLdWBX9Bd-b191qdl7VZhy" alt="Portal das Finanças indisponível. Certificado passa validade" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Autoridade Tributária não renovou atempadamente o certificado de segurança da página de acesso ao Portal das Finanças, deixando os contribuintes sem acesso&nbsp;...</p></div>
            </div>
        </a><a href='https://expresso.pt/economia/2022-11-30-Portal-das-Financas-ficou-inoperacional-mas-a-culpa-nao-foi-de-um-ataque-informatico-923d5a3e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portal das Finanças ficou inoperacional, mas a culpa não foi de um ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQpsfh1tTyOe2iOm1B6aJ9T5RwAOz8HnSuQfJNljpvLup0KnsBUf3S863v2K9H34iIMeGkl8BnX" alt="Portal das Finanças ficou inoperacional, mas a culpa não foi de um ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Expirou a certificação digital que acautela privacidade e segurança dos utilizadores dos serviços de autenticação online do Governo. Ministério das Finanças&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/30/sem-conseguir-aceder-ao-portal-das-financas-nao-e-um-ataque-informatico-mas-sim-uma-renovacao-de-certificados/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sem conseguir aceder ao Portal das Finanças? Não é um ataque ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQE4n-gyirBGdfRKRwVOoguFJm_f4-GshzW9NXuyIz_0J7SLu6dO9WfXZfKnRqb-z3wAeIBuzzp" alt="Sem conseguir aceder ao Portal das Finanças? Não é um ataque ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Portal das Finanças está indisponível, mas fonte da Autoridade Tributária explica que não se trata de um ataque informático, mas sim da &quot;renovação de&nbsp;...</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/noticia/economia/2022/11/30/portal-das-financas-em-baixo/310107/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portal das Finanças em baixo? - Renascença</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS5WtRtebGtkeJJXgDox8cFa9rAdABdKSHe89UzeDYtJ8MY_q7tS9MkY5g44b4NkXBNPAKBsgPd" alt="Portal das Finanças em baixo? - Renascença" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portal das Finanças em baixo? 30 nov, 2022 - 11:01 • Redação. Ministério das Finanças justifica com a “renovação dos certificados digitais do Portal das&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}