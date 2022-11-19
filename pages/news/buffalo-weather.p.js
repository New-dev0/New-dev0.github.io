import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Buffalo Weather</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Buffalo Weather"/>
        <meta name="description" content="Trending News about Buffalo Weather" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Buffalo Weather</h1>
            <Image width={800} height={500} src="" alt="Buffalo Weather"/>
            <h3>Recent News</h3>
            <a href='https://www.nytimes.com/2022/11/18/nyregion/buffalo-snow-storm-ny.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Buffalo Storm: More Snow Expected in Western New York</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQecR-VEMvNfKItji12raELqyRYYIHgjIeoTMj4IcYI4_FIlay4-Yh0q0KYUF3IsbW7CDWiO8M8" alt="Buffalo Storm: More Snow Expected in Western New York" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A storm lasting through the weekend is underway on the eastern coasts of Lakes Erie and Ontario, with snowfall rates reaching over three inches per hour.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/18/weather/new-york-great-lakes-snowstorm-friday/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>More than 4 feet has fallen in New York snowstorm and 2 people ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ2QFbcOTGuB9KqHT5i_YpliGpVxhcXkiNGyuaojq6XEKO40eAIybuKWewsGj0h5aqf444OycOp" alt="More than 4 feet has fallen in New York snowstorm and 2 people ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Heavy snowfall is pounding parts of western New York state as a potentially historic storm that&#39;s already halted traffic on major roadways threatens to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnbc.com/2022/11/18/erie-county-hit-with-3-feet-of-snow-as-buffalo-braces-for-historic-winter-storm.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Upstate New York hit with 4 feet of snow in &#39;historic&#39; winter storm</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQA0pJvpVgEY5SGmWJqDMSYvBJxlqKHEnoXr59qH47r9iq40ppZoouqoaUSzu6fXw2TJVYVir1i" alt="Upstate New York hit with 4 feet of snow in &#39;historic&#39; winter storm" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Parts of the Erie County, including the city of Buffalo, could be covered in more than 4 feet of snow, the National Weather Service has warned.</p></div>
            </div>
        </a><a href='https://abc7ny.com/buffalo-snowstorm-state-of-emergency-driving-ban/12467398/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lake-effect snow paralyzes parts of western, northern New York</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT1T2TqLDRnZ9jHlv9zn0or1VGDZZ4Hd4rNyB13un2mt4sh2AwWULy9j-O9FBNTjm_V9-LeXHlz" alt="Lake-effect snow paralyzes parts of western, northern New York" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A dangerous lake-effect snowstorm paralyzed parts of Buffalo, New York with nearly 2 feet of snow already on the ground in some places.</p></div>
            </div>
        </a><a href='https://globalnews.ca/news/9289146/buffalo-snowstorm-blizzard-new-york-lake-effect-snow-photos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Buffalo, Western New York absolutely slammed by lake-effect ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSlH-MCW5jqntGP67mB8BYLIyZwwmEVJ6cpxitdxA7GPtPq8eh3zo3MUhywySrJic6N1d_i5F6_" alt="Buffalo, Western New York absolutely slammed by lake-effect ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With more than a foot of snow already on the ground in some areas after a wild night, some photos and video need to be seen to be believed.</p></div>
            </div>
        </a><a href='https://www.usatoday.com/story/news/nation/2022/11/18/buffalo-new-york-snow-storm/10725985002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Buffalo lake-effect snowstorm: 2 deaths blamed on snow clearing; 4 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTVh-fuoYcfmZjOg-WKr-05BzPW288B9216SJQ8_UGm1PiV_xkjpbyCv1oGHVu3C-09bxdB_0Fa" alt="Buffalo lake-effect snowstorm: 2 deaths blamed on snow clearing; 4 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A lake-effect snowstorm canceled flights and stranded drivers in Buffalo, New York, as it continues dumping heavy snow.</p></div>
            </div>
        </a>
        </Template></>;
}