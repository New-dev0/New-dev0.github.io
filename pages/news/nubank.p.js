import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nubank</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nubank"/>
        <meta name="description" content="Trending News about Nubank" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nubank</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/oozarCHSdX4djzTCiFwljdCMqS4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_f035dd6fd91c438fa04ab718d608bbaa/internal_photos/bs/2022/j/q/wvPSrbSkaaPREqMjaHqg/copy-of-nbk02823.jpg" alt="Nubank"/>
            <h3>Recent News</h3>
            <a href='https://valorinveste.globo.com/mercados/renda-variavel/empresas/noticia/2022/11/16/sistema-do-nubank-enfrenta-instabilidade-nesta-quarta-usuarios-ficam-sem-acesso-a-servicos.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sistema do Nubank enfrenta instabilidade nesta quarta; usuários ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSA3NCgOHOu4pcjeJNC80axqelDfur95LT4is3IH-21b8lbXg2cCJJk6XkSVyDaSG6q1wbhDuZK" alt="Sistema do Nubank enfrenta instabilidade nesta quarta; usuários ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Clientes do banco digital reclamam estarem sem acesso ao saldo da conta e a outras funcionalidades do aplicativo. Empresa diz estar trabalhando para&nbsp;...</p></div>
            </div>
        </a><a href='https://valorinveste.globo.com/mercados/renda-variavel/empresas/noticia/2022/11/16/resultados-do-nubank-nubr33-superam-expectativas-com-solido-crescimento-em-receitas.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Resultados do Nubank (NUBR33) superam expectativas, com ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQeYs_gJiz2PHK7zniVDPgO9jjDoPMdG_pPyBmb7cdD2vnjTtiKbOjPpSzSYTFfPVBVGfuiWnBn" alt="Resultados do Nubank (NUBR33) superam expectativas, com ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Analistas veem indicadores fortes com o avanço do crédito, controle das despesas e índice de inadimplência abaixo do observado no mercado de cartões de&nbsp;...</p></div>
            </div>
        </a><a href='https://economia.uol.com.br/noticias/estadao-conteudo/2022/11/16/aplicativo-do-nubank-enfrenta-oscilacoes-na-tarde-desta-quarta-feira.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Clientes dizem que aplicativo do Nubank enfrenta oscilações</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQypNyH3tT-28qspuPkZyFClRYkfTIFnjRd1dvPHrO_yMjOkE18XylpLOTVlRu6M3TvKRb4o6ww" alt="Clientes dizem que aplicativo do Nubank enfrenta oscilações" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo o site Downdetector, que reúne reclamações sobre o funcionamento de aplicativos, as notificações de problemas com o Nubank cresceram no início da tarde,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.seudinheiro.com/2022/empresas/dinheiro-no-nubank-sumiu-usuarios-relatam-problemas-com-saldo-e-pix-do-banco-e-reclamam-de-instabilidade-no-aplicativo-lvit/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dinheiro no Nubank sumiu? Usuários relatam problemas com saldo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTLTOVbCUcHA5B88qAnAeUmDHmYSWrxbyebhpr_QpQpev-PRa39AV8sAG7gjEuNG0C9nTuL8VfS" alt="Dinheiro no Nubank sumiu? Usuários relatam problemas com saldo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo o Downdetector, site que monitora o status de vários sites e serviços, o app do Nubank começou a dar problema no início da tarde.</p></div>
            </div>
        </a><a href='https://www.suno.com.br/noticias/aplicativo-nubank-instabilidade-nubr33/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nubank (NUBR33): aplicativo enfrenta oscilações nesta quarta-feira ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT3KR6klZ7p68UTOJ0BfpkE6e1y0yBb1VX1-DViQhXPUt-9v5Q4MBRMBiEkUICVlQP447N_H6se" alt="Nubank (NUBR33): aplicativo enfrenta oscilações nesta quarta-feira ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo o site Downdetector, que reúne reclamações sobre o funcionamento de aplicativos, as notificações de problemas com o aplicativo do Nubank cresceram no&nbsp;...</p></div>
            </div>
        </a><a href='https://correiodoestado.com.br/economia/usuarios-do-nubank-se-atemorizam-com-bug-nao-explicado-no/407423/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Usuários do Nubank se atemorizam com &quot;bug&quot; não explicado no ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRNfKZgNpbrAC0mot5-yo7tFExZgr90ux2kO7uMEdd7CG-LUyjDthGK8c9V5PuYX14qLwuWtisy" alt="Usuários do Nubank se atemorizam com &quot;bug&quot; não explicado no ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Desde o início desta tarde, o sistema do banco está fora do ar, deixando pessoas físicas e jurídicas atemorizadas. Ninguém consegue ver o saldo, fazer&nbsp;...</p></div>
            </div>
        </a><a href='https://www.suno.com.br/noticias/nubank-nubr33-primeiro-lucro-acoes-comprar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nubank (NUBR33): Após &#39;primeiro lucro&#39;, é hora de comprar ações ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSkGRYwZ__QkzHLnkKPjdgQqZsulbLKxE9ieRi4bs9CNMKZXIcwknPGCAgwbeDzYHeVkGzIm4xM" alt="Nubank (NUBR33): Após &#39;primeiro lucro&#39;, é hora de comprar ações ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Recentemente o Nubank publicou seu resultado referente ao terceiro trimestre de 2022, com seu primeiro lucro. Clique aqui e veja análises!</p></div>
            </div>
        </a><a href='https://mercadohoje.uai.com.br/2022/11/16/nubank-nubr33-lucra-us-78-milhoes-3t22/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nubank (NUBR33) lucra US$ 7,8 milhões no 3T22</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRQDPU3JeRuBy6k91TEpnUxVNuFUDn692Sau2_aqBygBP2nNIoFz-3elKmDYgRL7CDXqzMr_Fkb" alt="Nubank (NUBR33) lucra US$ 7,8 milhões no 3T22" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Nu Holdings (NUBR33), controladora do banco Nubank divulgou seus resultados financeiros referentes ao terceiro trimestre de 2022.</p></div>
            </div>
        </a><a href='https://economia.uol.com.br/mais/ultimas-noticias/2022/11/16/nubank-sai-do-prejuizo-mas-acoes-nao-decolam-o-que-acontece.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nubank sai do prejuízo, mas ações não decolam: o que acontece?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSVAlmlexJ8hB_ivGYPolS3CbLj1Jk3SvzgU32o6u7P0StLyYv6PVDns7RhDt_fTtBo_PLBpILi" alt="Nubank sai do prejuízo, mas ações não decolam: o que acontece?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Nubank (NU) saiu do prejuízo e teve lucro pela primeira vez desde que abriu capital em dezembro do ano passado. O banco teve lucro líquido de US$ 7,8&nbsp;...</p></div>
            </div>
        </a><a href='https://olhardigital.com.br/2022/11/16/internet-e-redes-sociais/nubank-apresenta-instabilidade-nesta-quarta-16/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nubank apresenta instabilidade nesta quarta (16)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSDJHiHO5J4gsQkQpZHRkRdRWhoTyHAhtdyS0o9xtC-JChWUS_biW5v2GyonooFsJIlNFJevvhG" alt="Nubank apresenta instabilidade nesta quarta (16)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Usuários do Nubank estão afirmando que o aplicativo do banco on-line não está permitindo realizar transações financeiras.</p></div>
            </div>
        </a>
        </Template></>;
}