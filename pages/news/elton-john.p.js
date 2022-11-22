import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Elton John</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Elton John"/>
        <meta name="description" content="Trending News about Elton John" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Elton John</h1>
            <Image width={800} height={500} src="https://radiocomercial.iol.pt/upload/E/elton_john1200x634.jpg" alt="Elton John"/>
            <h3>Recent News</h3>
            <a href='https://radiocomercial.iol.pt/noticias/130588/elton-john-deu-o-ultimo-concerto-nos-estados-unidos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elton John deu o último concerto nos Estados Unidos - Rádio ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRJDxTycskuIxCGh3HeFh7jO2Kuvy4kRN3-Jqu6tOC63axrCkYeCeW1qWGPGGDxP0GHSfPasSqf" alt="Elton John deu o último concerto nos Estados Unidos - Rádio ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>E chamou ao palco Dua Lipa, Kiki Dee e Brandi Carlile. A &quot;Farewell Yellow Brick Road&quot; é a digressão de despedida do músico britânico.</p></div>
            </div>
        </a><a href='https://caras.sapo.pt/realeza/2022-11-21-harry-e-meghan-deixam-mensagem-carinhosa-a-elton-john-num-momento-em-que-o-musico-se-despede-dos-palcos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Caras | Harry e Meghan deixam mensagem carinhosa a Elton John ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSpsoaIwRIcDp9Q2qWQ21Ej_2l3tj02XSOkXc-RF614MmIROS2XxgMoQhmBc4IgHD9DgcHVgk6t" alt="Caras | Harry e Meghan deixam mensagem carinhosa a Elton John ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os duques de Sussex apareceram num vídeo gravado durante o concerto final da última &#39;tour&#39; do músico. Harry e Meghan enviaram uma mensagem muito especial a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.flash.pt/celebridades/nacional/detalhe/ele-nao-esquece-principe-harry-agarra-se-a-elton-john-por-causa-da-mae-a-princesa-diana'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ele não esquece. Príncipe Harry agarra-se a Elton John por causa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRh_gVg5dIfjr6iw_YCX3uhvgKhfbMgU36VhFPIJyLz5oyrWCLgwZCwQpXkmMOalDBbxCkAsmPI" alt="Ele não esquece. Príncipe Harry agarra-se a Elton John por causa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O príncipe Harry recordou a amizade da mãe, a princesa Diana, e Elton John, num novo vídeo. O duque e a duquesa de Sussex surgem nas novas imagens a dar os&nbsp;...</p></div>
            </div>
        </a><a href='https://gauchazh.clicrbs.com.br/cultura-e-lazer/noticia/2022/11/como-foi-o-ultimo-show-da-turne-de-despedida-de-elton-john-nos-estados-unidos-claqybwvh00gv01g2dvvpgk8f.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Como foi o último show da turnê de despedida de Elton John nos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Como foi o último show da turnê de despedida de Elton John nos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quarenta e sete anos depois de subir ao palco no Dodger Stadium em Los Angeles (EUA) em um uniforme de beisebol cravejado de lantejoulas como o maior&nbsp;...</p></div>
            </div>
        </a><a href='https://disney.com.br/novidades/onde-assistir-ao-show-de-despedida-de-elton-john-online'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Onde assistir ao show de despedida de Elton John online</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTFJC_-SUkBnsALwHPLxwUsUftD-2otuMhks9vW-tYcNiFD4-KQlkfZEAZypi6yuQDbUAKYhwE2" alt="Onde assistir ao show de despedida de Elton John online" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cantor britânico se despede dos palcos em sua última turnê, e o emocionante show poderá ser visto via streaming.</p></div>
            </div>
        </a><a href='https://gshow.globo.com/tudo-mais/pop/noticia/dua-lipa-vibra-em-dueto-com-elton-john-no-ultimo-show-dele-nos-eua.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dua Lipa vibra em dueto com Elton John no último show dele nos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSkoW_2RbiHKcDJmu3qL22CQ1lNWi6wSgdMJg8CklPXXZC5Jm68afJ94zPJ8FXV7yLdrebEipXO" alt="Dua Lipa vibra em dueto com Elton John no último show dele nos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;Meu herói musical&#39;, declarou a musa pop ao lado do cantor, que encerrou a turnê &#39;Elton John Live: Farewell from Dodger Stadium&#39; com transmissão no Disney+.</p></div>
            </div>
        </a><a href='https://hugogloss.uol.com.br/musica/elton-john-faz-ultimo-show-nos-eua-com-surpresa-de-principe-harry-e-a-primeira-performance-com-dua-lipa-de-cold-heart-assista/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elton John faz último show nos EUA, com surpresa de príncipe ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSumO-4uQYUjFmX29_0jJtdzMOP-WcBU8ybGk3uGCqpoT-GGN3K8uBOSOFMiH7v4v1GKYNi6dp4" alt="Elton John faz último show nos EUA, com surpresa de príncipe ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dua Lipa foi uma das convidadas da noite e abrilhantou o ambiente com o dueto “Cold Heart”, hit que bombou nas paradas. No especial de quase 3 horas, Elton&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}