import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Koo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Koo"/>
        <meta name="description" content="Trending News about Koo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Koo</h1>
            <Image width={800} height={500} src="https://www.meioemensagem.com.br/wp-content/uploads/2022/11/Koo-twitter-cred-Ravi_Sharma1030-shutterstock.jpg" alt="Koo"/>
            <h3>Recent News</h3>
            <a href='https://www.meioemensagem.com.br/home/midia/2022/11/18/marcas-koo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marcas aproveitam o buzz do Koo para fazer ações</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTJ6KVC8CtaGCCCLM1VUwPKbTPYHNMfFj0ebI3LdZTTVDw1s_PwJaQqpEB1FaL1oUDaxNVFAVvu" alt="Marcas aproveitam o buzz do Koo para fazer ações" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alternativa ao Twitter, rede social indiana viraliza no Brasil pelo significado da sua pronúncia em português; marcas aproveitam o buzz para engajar&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/18/twitter-arrisca-se-a-ficar-sem-trabalhadores-para-funcionar-rival-koo-pronto-para-contratar-quem-abandona-a-empresa-de-elon-musk/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter arrisca-se a ficar sem trabalhadores para funcionar. Rival ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR_d-kBXS2TCO0NOtXK3YVJ6lsNhFY-33JJN1u6ZhNg-xU7uPEP55Bzns6HmU9peSlmbt-5ladk" alt="Twitter arrisca-se a ficar sem trabalhadores para funcionar. Rival ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Parecia o funeral do pássaro azul e a hastag #RIPTwitter viralizou. Funcionários rejeitam pressão de Musk e abandonam a empresa.</p></div>
            </div>
        </a><a href='https://g1.globo.com/tecnologia/noticia/2022/11/18/koo-viraliza-e-faz-brasileiros-irem-para-rede-social-indiana-veja-outras-5-alterativas-ao-twitter.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Koo viraliza e faz brasileiros irem para rede social indiana; veja ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRSAAgG9vNCfMt1ZeFFIKFN2JdUu-grJIdFKcxZcb2H_LFn0psbz1b-hmSRm08jH_AogNjaAmft" alt="Koo viraliza e faz brasileiros irem para rede social indiana; veja ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Usuários insatisfeitos com as decisões de Musk têm procurado outras redes sociais. Além do Koo, Mastodon, Reddit e Tumblr são outras opções disponíveis.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/tilt/noticias/redacao/2022/11/18/o-koo-e-melhor-rede-social-esta-ganhando-usuarios-com-crise-do-twitter.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Koo: o que é e quais os problemas do app que viralizou em crise do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSOtc1Y2-ynjLMrcMh-ix2uaSSvEPuT_E4eY8ELLhB4aB8raBRqk-yJ4hYR2WUFKPWjlb6Kapvd" alt="Koo: o que é e quais os problemas do app que viralizou em crise do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Diante da crise no Twitter, agravada após a compra da plataforma por Elon Musk, usuários insatisfeitos têm migrado para outras redes sociais.</p></div>
            </div>
        </a><a href='https://www.techtudo.com.br/dicas-e-tutoriais/2022/11/como-usar-o-koo-app-o-novo-substituto-do-twitter-de-elon-musk.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Como usar o Koo app, o novo substituto do Twitter de Elon Musk</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRtiE__53LijrphkftCpGIajxX0MO0EDyzCbI_LNoV9LkuKfziIR8pQjjGCcnMVmOHgIDvGH4f2" alt="Como usar o Koo app, o novo substituto do Twitter de Elon Musk" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com diversas polêmicas envolvendo o Twitter após a sua compra por Elon Musk, brasileiros estão migrando para a nova rede; no app as hashtags &#39;RIPTwitter&#39; e&nbsp;...</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/colunas/jamildo/2022/11/15123523-koo-app-lula-criou-conta-no-app-veja-publicacao-que-circula-nas-redes.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>KOO APP: o que é? LULA criou conta no app? Veja publicação que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSfvjfKJ3OyJ5HUP2Rs2F7jxGStUVtQ_bQjtuNPnAvN7EAKBqVcLVIoZjeyi0dc_QQsXc_B6w5x" alt="KOO APP: o que é? LULA criou conta no app? Veja publicação que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nas redes surgiu uma publicação sobre um perfil criado pelo presidente eleito Lula na rede social Koo. Ainda não há confirmação de que o perfil é&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}