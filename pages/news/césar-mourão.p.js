import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>César Mourão</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,César Mourão"/>
        <meta name="description" content="Trending News about César Mourão" /></Head><Template>
            <h1 style={{fontSize: "30"}}>César Mourão</h1>
            <Image width={800} height={500} src="https://famashow.pt/wp-content/uploads/2022/12/cesar-mourao-1-e1670598112865.jpeg" alt="César Mourão"/>
            <h3>Recent News</h3>
            <a href='https://famashow.pt/nas-redes/cara-do-pai-e-todo-estiloso-cesar-mourao-revela-foto-do-filho-a-posar-para-a-camara/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Cara do pai e todo estiloso&quot;! César Mourão revela foto do filho a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRlbTBpArGuIbsWXzOK7HsgwlYkIolyFywizkUVX7Nq8fbujw-X3kGEjhuXMhbIDVZSkSLN4jPG" alt="&quot;Cara do pai e todo estiloso&quot;! César Mourão revela foto do filho a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Martim tem quatro anos e é um dos três filhos do humorista.</p></div>
            </div>
        </a><a href='https://www.flash.pt/celebridades/nacional/detalhe/cesar-mourao-arrasado-depois-de-ter-dito-em-direto-que-preferia-que-a-selecao-perdesse-a-deixar-cristiano-ronaldo-no-banco'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>César Mourão arrasado depois de ter dito em direto que preferia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSg4rhiIcKJaQPUR9sIoh1MmhYnVjyVoIPrURwThk1oSJWYaiug24jr9Ifn4my0RoiDLz81b-SV" alt="César Mourão arrasado depois de ter dito em direto que preferia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Humorista &#39;virou&#39; comentador de futebol e esteve na SIC Notícias a falar de Cristiano Ronaldo. César Mourão não entende Cristiano Ronaldo no banco e diz que&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hiper.fm/cesar-mourao-mostra-filho-a-posar-para-a-foto-e-brinca-catalogo-outono-inverno/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>César Mourão mostra filho a &#39;posar&#39; para a foto e brinca: “Catálogo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR10U5AsJhCxR4N_Hp920cruHaaIJOkumIpX2s4RaMr1R8ZMbFRgueL7rycjMSWizp0MfX4b8m6" alt="César Mourão mostra filho a &#39;posar&#39; para a foto e brinca: “Catálogo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>César Mourão partilhou uma foto de Martim, a posar para a câmara, na rua, e brincou com o momento...</p></div>
            </div>
        </a><a href='https://infocul.pt/cesar-mourao-arrasado-apos-preferir-derrota-de-portugal-a-que-ronaldo-seja-suplente-traidor-a-patria/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>César Mourão arrasado após preferir derrota de Portugal a que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSkfAMcDn8Ja80B4SYH8fvaG4Nwn2-8tXXz_FRKHECAYGHCptm6seSqLxD_64Qfv-Ea8EwNxAom" alt="César Mourão arrasado após preferir derrota de Portugal a que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Adriano Silva Martins comentou uma afirmação de César Mourão na SIC a propósito da polémica de Cristiano Ronaldo. “Tenho que deixar aqui um recadinho ao César&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hiper.fm/adriano-silva-martins-arrasa-cesar-mourao-preferia-ronaldo-a-titular-a-nao-ganhar-o-jogo-com-a-suica/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adriano Silva Martins arrasa César Mourão: “Preferia Ronaldo a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ8lPLK6aAI4l7ImVvc_3uJCCstAUEJOsiw6IIqt_MzRV2Uu3tjmAW6uivnNiLQeK1tguHQuFps" alt="Adriano Silva Martins arrasa César Mourão: “Preferia Ronaldo a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na SIC, o humorista revelou que preferia ter perdido o jogo com a Suíça e ver Cristiano Ronaldo a titular, mostrando-se grato por tudo o que o jogador já deu ao&nbsp;...</p></div>
            </div>
        </a><a href='https://infocul.pt/cesar-mourao-volta-a-encantar-fas-com-fotografia-do-filho-catalogo-outono-inverno/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>César Mourão volta a encantar fãs com fotografia do filho: “Catálogo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRuTcHtU2j7lAcRr_hTsnaNPMAgyqV5OEyp90Pajh_b2s664lS14EebP6PNTSo3Vz-OObKx4S-i" alt="César Mourão volta a encantar fãs com fotografia do filho: “Catálogo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>César Mourão partilhou com os seguidores uma fotografia do pequeno Martim, de 4 anos. “Catálogo outono/inverno”, escreveu na legenda da imagem. “E um belo&nbsp;...</p></div>
            </div>
        </a><a href='https://www.atelevisao.com/sic/cesar-mourao-brindou-os-fas-com-novo-registo-do-pequeno-martim-tal-pai-tal-filho/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>César Mourão &#39;brindou&#39; os fãs com novo registo do pequeno Martim ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTZfxT5t9PaMytbP7GJG4Z3blHg34saZkw7ObLA7cc945HFnQ4ANNWf8qn27YZu1C70sHv03gBH" alt="César Mourão &#39;brindou&#39; os fãs com novo registo do pequeno Martim ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>César Mourão começou a manhã desta sexta-feira, dia 09 de dezembro, com uma partilha amorosa. O humorista e apresentador da SIC partilhou com os seguidores.</p></div>
            </div>
        </a><a href='https://www.atelevisao.com/famosos/adriano-silva-martins-deixa-recado-a-cesar-mourao-em-direto-traidor-a-patria-estiveste-muito-mal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adriano Silva Martins deixa &#39;recado&#39; a César Mourão em direto ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR5JiZHSu9lXwUIZAWKNsE-LZmK4B4zfTSI0ExHRO2AMqb2o1t-D0SN16Z5qbz1mlreqelCp4o1" alt="Adriano Silva Martins deixa &#39;recado&#39; a César Mourão em direto ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na manhã desta sexta-feira, dia 09 de dezembro, o jornalista Adriano Silva Martins participou, como é habitual, na rubrica das notícias sobre o mundo dos.</p></div>
            </div>
        </a><a href='https://holofote.sapo.pt/celebridades/2022-12-08-a-linda-filha-de-cesar-mourao/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A linda filha de César Mourão</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQSXfsQmJ0FnxIuk-ovInhpjJo_KpD-zXQr9GAtWFC53dNxZr0zxIvgzSahntt1v64LWeDvjf-K" alt="A linda filha de César Mourão" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A linda filha de César Mourão. A opinião é unânime: César Mourão tem uma filha muito bonita. Não desfazendo na beldade do progenitor, claro.</p></div>
            </div>
        </a><a href='https://www.cmjornal.pt/famosos/detalhe/preferia-ronaldo-a-titular-a-nao-ganhar-o-jogo-declaracoes-polemicas-de-cesar-morao-irritam-adeptos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Preferia Ronaldo a titular a não ganhar o jogo&quot;: Declarações ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQiPAv0kbwhrY9goG3uK8lV80NgKygjryFQBRuQmV7awymjyEn1bQzlUwSenhsBHKmZandv528w" alt="&quot;Preferia Ronaldo a titular a não ganhar o jogo&quot;: Declarações ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Comediante admitiu em direto que preferia que CR7 tivesse jogado desde o início, mesmo que isso implicasse perder o jogo frente à Suíça.</p></div>
            </div>
        </a>
        </Template></>;
}