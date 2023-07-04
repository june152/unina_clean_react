import { Helmet } from "react-helmet";
import '../styles/common.css'
import '../styles/style.css'

const SEO = () => {
    return (
        <Helmet>
            <title>이 집 청소 잘 하네 유니나 청소</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="title" content="이 집 청소 잘 하네 유니나 청소" />
            <meta name="subject" content="이 집 청소 잘 하네 유니나 청소" />
            <meta name="publisher" content="유니나 청소" />
            <meta name="author" content="유니나 청소" />
            <meta name="robots" content="index,follow" />
            <meta name="keywords" content="유니나 청소, 유니나, 광주청소, 광주청소업체, 거주청소, 입주청소, 사무실청소, 상가청소, 청소업체, 저렴한 청소업체, 저렴한 청소" />
            <meta name="description" content="엄마의 손으로 못하는 청소는 없다. 거주청소/입주청소 등 청소고민 끝!" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="og:title" content="이 집 청소 잘 하네 유니나 청소" />
            <meta property="og:site_name" content="이 집 청소 잘 하네 유니나 청소" />
            <meta property="og:author" content="유니나 청소" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="엄마의 손으로 못하는 청소는 없다. 거주청소/입주청소 등 청소고민 끝!" />
            <meta property="og:url" content="http://www.uninacleans.com" />

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Helmet>
    );
};

export default SEO;