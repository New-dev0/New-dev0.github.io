import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Twitter</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Twitter"/>
        <meta name="description" content="Trending News about Twitter" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Twitter</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A3793%3A2134%3Anowe%3A0%3A396%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F11%2F18220553%2FGettyImages-1238256745.jpg" alt="Twitter"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/11/18/twitter-arrisca-se-a-ficar-sem-trabalhadores-para-funcionar-rival-koo-pronto-para-contratar-quem-abandona-a-empresa-de-elon-musk/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter arrisca-se a ficar sem trabalhadores para funcionar. Rival ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR_d-kBXS2TCO0NOtXK3YVJ6lsNhFY-33JJN1u6ZhNg-xU7uPEP55Bzns6HmU9peSlmbt-5ladk" alt="Twitter arrisca-se a ficar sem trabalhadores para funcionar. Rival ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Parecia o funeral do pássaro azul e a hastag #RIPTwitter viralizou. Funcionários rejeitam pressão de Musk e abandonam a empresa.</p></div>
            </div>
        </a><a href='https://www.dn.pt/internacional/exodo-do-twitter-comeca-apos-ultimato-hardcore-de-elon-musk-15365045.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Êxodo do Twitter começa após ultimato &quot;hardcore&quot; de Elon Musk</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTDoPga440ALRDdo8M0TqtB2tckQxrZ2-q0O3CQm7znm8DQKLEW2tJk4NxMGqAuWnVStZQ8i-OY" alt="Êxodo do Twitter começa após ultimato &quot;hardcore&quot; de Elon Musk" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Musk, também CEO da Tesla e da SpaceX, foi criticado por promover mudanças radicais na empresa de redes sociais, que comprou por 44 mil milhões de dólares (&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/18/comissao-europeia-atenta-a-evolucao-na-rede-social-twitter-e-pondera-alternativas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Comissão Europeia atenta à evolução na rede social Twitter e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT7cfa42JimGqm5LdXje65mzZVFM00cM3p0JLDeSZRxTbSXmlbJdA-oKOZBt26jnzY1mEYnhGCx" alt="Comissão Europeia atenta à evolução na rede social Twitter e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Comissão Europeia salienta que estão a seguir os desenvolvimentos respeitantes ao Twitter e estão a ser estudados &quot;outros canais disponíveis&quot; para aumentar&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/18/edificios-do-twitter-de-portas-fechadas-ate-a-proxima-semana/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Edifícios do Twitter de portas fechadas até à próxima semana</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQk9KP2qTw7_1A-gvCmAyNOGRSrRux0_TxqcTZaeAosbLuwFNcqL513IH4xxMX5peWLOp9JbrOE" alt="Edifícios do Twitter de portas fechadas até à próxima semana" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os funcionários do Twitter receberam uma mensagem da empresa a avisar que os edifícios estarão fechados até à próxima segunda-feira.</p></div>
            </div>
        </a><a href='https://www.tsf.pt/mundo/no-dia-da-saida-trabalhadores-do-twitter-chamam-bilionario-incompetente-a-musk-15365855.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No dia da saída, trabalhadores do Twitter chamam &quot;bilionário ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQHHqBComGYm3SgRXedpCN-z62KCUyJlIL2jn9t6zYsPhyPFl6JB7jwJqQmv-emECz9df3thAn3" alt="No dia da saída, trabalhadores do Twitter chamam &quot;bilionário ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elon Musk deu-lhes um prazo, até ontem, para decidirem se queriam trabalhar arduamente durante longas horas ou deixar a empresa. A resposta foi bem clara:&nbsp;...</p></div>
            </div>
        </a><a href='https://eco.sapo.pt/2022/11/18/mais-de-metade-dos-trabalhadores-do-twitter-decidem-sair/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mais de metade dos trabalhadores do Twitter decidem sair</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ1jF-wuK_FxEpKbN9USV1Y6bi-BBdF258RAy4xUVafFy4BSi6D2b0cQnKgLWUgfyydeHP3Q53x" alt="Mais de metade dos trabalhadores do Twitter decidem sair" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois do ultimato de Elon Musk aos trabalhadores do Twitter, os escritórios da rede social fecharam as portas na quinta-feira. Espera-se que reabram na&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jn.pt/inovacao/twitter-fecha-escritorios-ate-segunda-feira-sem-aviso-previo-ou-justificacao-15364753.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter fecha escritórios até segunda-feira sem aviso prévio ou ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT5hx0wTwMMH1gPIoD1tPQfuuqQhrgU8cyNf9zCZoL7ZerOhWJ3bgWDYbzUHikygihAA9gxsShz" alt="Twitter fecha escritórios até segunda-feira sem aviso prévio ou ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Twitter informou os funcionários do fecho da sede da empresa, nos EUA, com efeitos imediatos e até 21 de novembro. Muitos trabalhadores, agastados com a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sabado.pt/dinheiro/detalhe/twitter-empregados-sem-acesso-aos-escritorios'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter. Empregados sem acesso aos escritórios</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRpkd440zKhwkhMxu_QeROc2qqnl_IjKaJVB0llVTqj-bSp_sm0Hwtddt4eiQa30IOcwvHtD8BL" alt="Twitter. Empregados sem acesso aos escritórios" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O acesso foi restringido até à próxima segunda-feira, 21 de novembro. Medida ainda não foi justificada pela empresa.</p></div>
            </div>
        </a><a href='https://valorinveste.globo.com/mercados/brasil-e-politica/noticia/2022/11/18/usuarios-e-influenciadores-fazem-campanha-para-trocar-o-twitter-por-rede-social-indiana.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Usuários e influenciadores fazem campanha para trocar o Twitter ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTu-RSLnQheQE9nQ3YCT0I0eZpGA61DLB_nP6XOY_w6siQtqJBcYgNgjAU4Gy8WxjjFeqMbP-rS" alt="Usuários e influenciadores fazem campanha para trocar o Twitter ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nesta sexta-feira (18), o tópico ficou entre os mais comentados no Twitter. Rede de microblog já é a segunda maior no mundo, após crescimento de 150% na&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/tecnologia/noticia/2022/11/18/koo-viraliza-e-faz-brasileiros-irem-para-rede-social-indiana-veja-outras-5-alterativas-ao-twitter.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Koo viraliza e faz brasileiros irem para rede social indiana; veja ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQImzh3v1-u-_PZk5ws4uz7CvflM9yq34LPmYZyQcmwqbgrJYZyk1bBvf81rhYjH9GrjioSfp8g" alt="Koo viraliza e faz brasileiros irem para rede social indiana; veja ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Usuários insatisfeitos com as decisões de Musk têm procurado outras redes sociais. Além do Koo, Mastodon, Reddit e Tumblr são outras opções disponíveis.</p></div>
            </div>
        </a>
        </Template></>;
}