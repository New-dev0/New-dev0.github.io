import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ministro da Fazenda</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ministro da Fazenda"/>
        <meta name="description" content="Trending News about Ministro da Fazenda" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ministro da Fazenda</h1>
            <Image width={800} height={500} src="https://www.infomoney.com.br/wp-content/uploads/2019/06/fernando-haddad-24.jpg?quality=70" alt="Ministro da Fazenda"/>
            <h3>Recent News</h3>
            <a href='https://www.infomoney.com.br/mercados/com-haddad-ministro-da-fazenda-visto-como-precificado-o-que-o-mercado-esta-olhando-agora/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Com Haddad ministro da Fazenda visto como “precificado”, o que o ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRXGuMVFDVqUWqdJtutQc2f6hQDUxfIrtd1BhSUDos7MSi-cFqDvWlkVdMR84HsqN30Plb8Z7Yr" alt="Com Haddad ministro da Fazenda visto como “precificado”, o que o ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mesmo com Bolsa em alta após o anúncio, a visão dos analistas não é muito positiva para o nome; PEC da Transição e equipe do ministério serão monitoradas.</p></div>
            </div>
        </a><a href='https://veja.abril.com.br/economia/o-recado-de-henrique-meirelles-para-o-novo-ministro-da-fazenda/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O recado de Henrique Meirelles para o novo ministro da Fazenda</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR04bdg16h4n51qefcaTphG8zK48bnBlywaig_QgHtcGcQNR38UuTMulTwhEjdpECkky8OyXssF" alt="O recado de Henrique Meirelles para o novo ministro da Fazenda" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Além de desejar boa sorte, ex-ministro pede olhar para o equilíbrio da responsabilidade fiscal e social.</p></div>
            </div>
        </a><a href='https://g1.globo.com/economia/noticia/2022/12/09/mercado-recebe-nomeacao-de-haddad-ao-ministerio-da-fazenda-com-cautela.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mercado recebe nomeação de Haddad ao Ministério da Fazenda ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQXR_NWzNRh9bGqIWwlb_JxDwuGfH_niBEJlpaOQ4XbB3YZ8Zs8yapzRMxMdYp3UXMHrJ0iU6CZ" alt="Mercado recebe nomeação de Haddad ao Ministério da Fazenda ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Conforme esperado, o presidente eleito Luiz Inácio Lula da Silva anunciou Fernando Haddad como o ministro da Fazenda do próximo governo no fim da manhã&nbsp;...</p></div>
            </div>
        </a><a href='https://oglobo.globo.com/economia/noticia/2022/12/quem-e-fernando-haddad-ministro-da-fazenda-do-governo-lula.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quem é Fernando Haddad, ministro da Fazenda do governo Lula</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQChhzWdgKrSQqpsl0uPiAb2DfB6ZfL5EyOAReQH0Y8cULOH1PqPb_xoXEvbHldJ5mEtspxg4e0" alt="Quem é Fernando Haddad, ministro da Fazenda do governo Lula" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-prefeito de São Paulo, ele terá que minimizar críticas do mercado no cargo e dialogar com o Congresso. Plano é que ele se cacife para concorrer às&nbsp;...</p></div>
            </div>
        </a><a href='https://economia.uol.com.br/noticias/redacao/2022/12/09/fernando-haddad.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Haddad, ministro da Fazenda de Lula, foi analista de banco e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ_6kZSujTQtWTGDrISsg-BvbaPptZJaXyypJcUe4GDVve2ZZYLbgNpBzBv_2FEGYu0mVil04Cf" alt="Haddad, ministro da Fazenda de Lula, foi analista de banco e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ele foi prefeito de São Paulo e ministro da Educação em governos petistas. É filiado ao PT desde 1983. Tem mestrado em economia pela USP (Universidade de São&nbsp;...</p></div>
            </div>
        </a><a href='https://exame.com/brasil/lula-confirma-fernando-haddad-como-ministro-da-fazenda/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lula confirma Fernando Haddad como ministro da Fazenda | Exame</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTNWD0Zz1JUeYk00Jz5WgqK8PKrwn3v02089PXHzuNTBooPdKvWThoFkQVEeu4uuveKKx9x5cw1" alt="Lula confirma Fernando Haddad como ministro da Fazenda | Exame" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O anúncio foi feito em coletiva de imprensa no Centro Cultural Banco do Brasil (CCBB), sede do governo de transição, em Brasília.</p></div>
            </div>
        </a>
        </Template></>;
}