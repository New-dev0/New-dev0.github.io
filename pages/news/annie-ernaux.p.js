import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Annie Ernaux</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Annie Ernaux"/>
        <meta name="description" content="Trending News about Annie Ernaux" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Annie Ernaux</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=e90b1d5e-1b7e-42e8-960f-1cb5455f8cc7&w=800&h=420&watermark=true&t=20221125184900" alt="Annie Ernaux"/>
            <h3>Recent News</h3>
            <a href='https://www.dn.pt/cultura/livro-de-annie-ernaux-sobre-morte-dos-pais-reeditado-depois-de-20-anos-esgotado-15388667.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Livro de Annie Ernaux sobre morte dos pais reeditado depois de 20 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS_MbGuZysS857Fu4FVcOBzJcUbN6ExbWf5vdDQ5MpbcKU_nFzgqRLdKI8MKjIQNKwHCdxZz-rc" alt="Livro de Annie Ernaux sobre morte dos pais reeditado depois de 20 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um lugar ao sol seguido de Uma mulher são &quot;peças literárias fulgurantes, misto de biografia, sociologia e história, onde resplandece a ambivalência dos&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/rj/sul-do-rio-costa-verde/noticia/2022/11/26/flip-recebe-annie-ernaux-vencedora-do-nobel-de-literatura-neste-sabado.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Flip recebe Annie Ernaux, vencedora do Nobel de Literatura, neste ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQs7vop-3aXTBwd29nD0sm0QN2oJRJF6bZZRnW3E-4jF3plEdbVWS8CBOQFrzz3G70umBZkjtUL" alt="Flip recebe Annie Ernaux, vencedora do Nobel de Literatura, neste ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Escritora francesa, de 82 anos, é conhecida pelos romances sobre classe e gênero baseados em sua experiência pessoal.</p></div>
            </div>
        </a><a href='https://veja.abril.com.br/coluna/veja-gente/anniemania-annie-ernaux-a-premio-nobel-sensacao-da-flip/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Anniemania&#39;: Annie Ernaux, a prêmio Nobel sensação da Flip</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSY_Recg6-kOs-poBB7UvqeKeG8I-UvP0QVK8YrbL4N1LAJ-RQSkg20vZVR1S1kj4Hd1mYi3oH-" alt="&#39;Anniemania&#39;: Annie Ernaux, a prêmio Nobel sensação da Flip" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Escritora francesa, de 82 anos, se tornou o fenômeno literário da 20ª edição do evento.</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/ilustrada/2022/11/annie-ernaux-emociona-flip-ao-ostentar-a-escrita-de-uma-mulher-livre.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Annie Ernaux emociona Flip ao ostentar a escrita de uma mulher ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQpomWZj1A1z_7iVYrMy11Hf3q5mdpqH8lDT1KlCcrg715sHPw2cTQUYW9jFPtiEgvSuqy9niLB" alt="Annie Ernaux emociona Flip ao ostentar a escrita de uma mulher ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mesa da vencedora do Nobel de Literatura, a mais aguardada da festa literária em Paraty, terminou com aplausos e lágrimas.</p></div>
            </div>
        </a><a href='https://oglobo.globo.com/cultura/noticia/2022/11/annie-ernaux-vencer-o-nobel-e-como-ganhar-na-loteria-nunca-tive-tanto-dinheiro.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Annie Ernaux: &#39;Vencer o Nobel é como ganhar na loteria, nunca tive ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR1NgeQWyZp7GjLuMV69plT7tGJc_RQaggYPJ9K_NGg41WyUC7apO8XwWJRCCaLwTAt4-XGQ9XW" alt="Annie Ernaux: &#39;Vencer o Nobel é como ganhar na loteria, nunca tive ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em entrevista na Flip, Annie Ernaux descreve sua primeira reação ao saber do prêmio da Academia Sueca: &#39;Saí do meu corpo&#39;</p></div>
            </div>
        </a><a href='https://www.terra.com.br/diversao/annie-ernaux-leva-o-publico-da-flip-as-lagrimas,a2f0b0f629eb6e5ffc70a00dc70a24031rlahsgb.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Annie Ernaux leva o público da Flip às lágrimas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSh60BQJ0AP5w-fPueOJut3zcxeiYzGdNzoRgEgw3ceJnp0v_5yS7QvuaBja3n0NpnuzuRfl2OU" alt="Annie Ernaux leva o público da Flip às lágrimas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Francesa causa comoção ao contar na festa de Paraty como venceu a resistência da direita francesa ao ganhar o prêmio Nobel de literatura.</p></div>
            </div>
        </a><a href='https://www.publishnews.com.br/materias/2022/11/25/flip-ve-annie-ernaux-passear-pelas-ruas-de-paraty-e-entra-em-extase-com-richarlison'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Flip vê Annie Ernaux passear pelas ruas de Paraty e entra em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSS_0EtzYQFPyG0ccvDsRr0P1gGAV02RRsmCwfKj15L4zsqPNLQfH72ytQ-HUKWV-cqIE_MrYmZ" alt="Flip vê Annie Ernaux passear pelas ruas de Paraty e entra em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A quinta-feira (24) da 20ª Festa Literária Internacional de Paraty viu Annie Ernaux – a prêmio Nobel de Literatura e estrela desta edição – passear pelas&nbsp;...</p></div>
            </div>
        </a><a href='https://comunidadeculturaearte.com/nobel-da-literatura-vinte-anos-depois-um-lugar-ao-sol-seguido-de-uma-mulher-de-annie-ernaux-volta-as-livrarias/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nobel da Literatura. Vinte anos depois, “Um Lugar ao Sol seguido ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSJCZjSnkCfeYkvDDhaypzk3znI6mY8kvHyrJLvP3M1glyqCNSxWhAUoev72rSpZDWxmSbwL2E_" alt="Nobel da Literatura. Vinte anos depois, “Um Lugar ao Sol seguido ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Duas mortes, infinitamente marcantes, digeridas pela autora através da escrita. “Um Lugar ao Sol seguido de Uma Mulher” reúne os dois textos de Annie Ernaux&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}