
import * as React from "react"
import { Helmet, HelmetProvider } from 'react-helmet-async';
// ページコンポーネントから、titleをpropしています
const Head = (props) => {
    const {title} = props
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title}</title>
                <meta
                    name="description"
                    content="フランスのベーカリー＆カフェ「ゴントラン　シェリエ」が日本に再上陸。厳選された食材、オリジナル配合の小麦粉やノルマンディー産のバターを使った上質なパン、パティスリーを是非ご賞味ください。ドリンクやライトミールも取りそろえ、イートインでもお楽しみいただけます。"
                />
                <link rel="shortcut icon" href="https://img07.shop-pro.jp/PA01461/818/favicon.ico"></link>
                <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0"></meta>
                {/* OGP ここから */}
                <head prefix="og: http://ogp.me/ns#" />
                <meta property="og:url" content="OGPに掲載するページのURL" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="OGPに掲載するページタイトル" />
                <meta property="og:description" content="OGPに掲載する説明文" />
                <meta property="og:site_name" content="OGPに掲載するサイト名" />
                <meta property="og:image" content="OGPに掲載する画像" />
                {/* OGP ここまで */}
                {/* Google Font ここから */}
                {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600&family=Montserrat:wght@700&display=swap" rel="stylesheet" />*/}
                {/* Google Font ここまで */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
                
            </Helmet>
        </HelmetProvider>
    )
}

export default Head