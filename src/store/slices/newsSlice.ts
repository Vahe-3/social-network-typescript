import {createSlice} from "@reduxjs/toolkit";
import {NewsStateTypes} from "../../types/newsTypes";
import {getNewsThunk} from "../thunks/newsThunks";


//News api only supports requests from localhost, news array here to showcase work
const articles = [
    {
        "source": {
            "id": null,
            "name": "Cointelegraph"
        },
        "author": "William Suberg",
        "title": "BTC price crashes to $20.8K as ‘deadly’ candles liquidate $1.2 billion - Cointelegraph",
        "description": "BTC price nears 2017 all-time highs as Bitcoin volatility costs traders big.",
        "url": "https://cointelegraph.com/news/btc-price-crashes-to-20-8k-as-deadly-candles-liquidate-1-2-billion",
        "urlToImage": "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDYvZmNiODJiZGEtYmI5Yi00YjQ2LWFiMDgtMmU1NDkzYzI5Y2NlLmpwZw==.jpg",
        "publishedAt": "2022-06-14T06:32:43Z",
        "content": "Bitcoin (BTC) came within $1,000 of its previous cycle all-time highs on June 14 as liquidations mounted across crypto markets. \r\nBTC/USD 1-hour candle chart (Bitstamp). Source: TradingView\r\nBitcoin … [+3710 chars]"
    },
    {
        "source": {
            "id": "financial-times",
            "name": "Financial Times"
        },
        "author": null,
        "title": "Live news updates: Bitcoin slides 10% as US inflation fears hit digital assets and equities - Financial Times",
        "description": "",
        "url": "https://www.ft.com/content/4ae49946-7ad5-4921-910f-5e28502332da",
        "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fb151efac-4b9e-4a99-aad7-dc4c51b3cdca.jpg?source=next-opengraph&fit=scale-down&width=900",
        "publishedAt": "2022-06-14T05:25:27Z",
        "content": "Jars contain rare earth minerals produced by Lynas from its Mount Weld operations in Western Australia © Melanie Burton/Reuters\r\nThe US defence department has signed a $120mn deal with Australias Lyn… [+1824 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Android Authority"
        },
        "author": null,
        "title": "Google engineer says AI chatbot has developed feelings, gets suspended - Android Authority",
        "description": "A Google engineer claims that the company's AI chatbot LaMDA is gaining sentience and becoming self aware. The company suspended him.",
        "url": "https://www.androidauthority.com/google-lamda-3176080/",
        "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2022/06/Google-LaMDA.jpg",
        "publishedAt": "2022-06-14T05:08:57Z",
        "content": "<ul><li>Google has suspended an engineer who claims that one of its AI chatbots is becoming self-aware.</li><li>I am, in fact, a person, the AI replied to the engineer during a conversation.</li></ul… [+2908 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Chinese Markets Have Turned the Corner: Peng - Bloomberg Markets and Finance",
        "description": "Ken Peng, Asia Pacific investment strategist at Citi Private Bank, discusses Asian markets, his investment strategy and where he’s finding opportunity. He sp...",
        "url": "https://www.youtube.com/watch?v=1kit5KGUqhk",
        "urlToImage": "https://i.ytimg.com/vi/1kit5KGUqhk/hqdefault.jpg",
        "publishedAt": "2022-06-14T04:49:41Z",
        "content": null
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": null,
        "title": "Asian stocks slide as Fed hike fears tip Wall St into bear market - Reuters.com",
        "description": "Asian shares slid sharply and the safe-haven dollar held near a two-decade peak on Tuesday after Wall Street hit a confirmed bear market milestone on fears aggressive U.S. interest rate hikes would push the world's largest economy into recession.",
        "url": "https://www.reuters.com/markets/europe/global-markets-wrapup-1-2022-06-14/",
        "urlToImage": "https://www.reuters.com/resizer/GlmwOq_JbiX7AVDUOOUlh8nvHvA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CP3RUH6SCJJ2BHRZNXYZTSODPU.jpg",
        "publishedAt": "2022-06-14T04:44:00Z",
        "content": "HONG KONG, June 14 (Reuters) - Asian shares slid sharply and the safe-haven dollar held near a two-decade peak on Tuesday after Wall Street hit a confirmed bear market milestone on fears aggressive U… [+4167 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Bitcoin.com"
        },
        "author": null,
        "title": "JPMorgan Economist Expects the Fed to Hike Benchmark Rate by 75 bps as Global Markets Bleed – Economics Bitcoin News - Bitcoin News",
        "description": "JPMorgan economist Michael Feroli believes that rising inflation will push the Fed to increase the rate by 75 basis points (bps).",
        "url": "https://news.bitcoin.com/jpmorgan-economist-expects-the-fed-to-hike-benchmark-rate-by-75-bps-as-global-markets-bleed/",
        "urlToImage": "https://static.news.bitcoin.com/wp-content/uploads/2022/06/hhgg66666.jpg",
        "publishedAt": "2022-06-14T03:36:23Z",
        "content": "The U.S. Federal Reserve is expected to raise the federal funds rate during its next meeting on Wednesday and JPMorgan economist Michael Feroli believes that rising inflation will push the Fed to inc… [+4824 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "WPVI-TV"
        },
        "author": "6abc Digital Staff, Bob Brooks",
        "title": "Chick-fil-A employee shot on Adams Street Philadelphia's Crescentville neighborhood - WPVI-TV",
        "description": "Philadelphia police are investigating after a Chick-Fil-A employee was shot in the city's Crescentville section Monday night.",
        "url": "https://6abc.com/philadelphia-shooting-chick-fil-a-employee-shot-adams-street-crescentville-philly/11956380/",
        "urlToImage": "https://cdn.abcotvs.com/dip/images/11956831_061322-wpvi-chickfilea-worker-shot-latest-11pm-CC-vid.jpg?w=1600",
        "publishedAt": "2022-06-14T02:34:39Z",
        "content": "PHILADELPHIA (WPVI) -- A Chick-fil-A employee was shot by a food delivery driver in Philadelphia's Crescentville section Monday night, according to police.It happened just after 8 p.m. on the 800 blo… [+883 chars]"
    },
    {
        "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
        },
        "author": "Sarah E. Needleman",
        "title": "Elon Musk to Participate in Twitter All-Hands Meeting Thursday - The Wall Street Journal",
        "description": "It would mark the first time the billionaire will have spoken directly with the company’s workforce since he agreed to buy Twitter for $44 billion in April.",
        "url": "https://www.wsj.com/articles/elon-musk-to-participate-in-twitter-all-hands-meeting-thursday-11655165470",
        "urlToImage": "https://images.wsj.net/im-563293/social",
        "publishedAt": "2022-06-14T02:10:00Z",
        "content": "Elon Musk is set to participate in an all-hands meeting with Twitter employees on Thursday, marking the first time the billionaire will have spoken directly with the companys workforce since he began… [+283 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Historic Bitcoin Crash Causes Crypto Stocks To Plummet, Celsius Halts Trading | Forbes - Forbes",
        "description": "The cryptocurrency market witnessed a major selloff this morning with its overall market cap dropping below $1 trillion for the first time in over a year aft...",
        "url": "https://www.youtube.com/watch?v=WKMAePxJxnI",
        "urlToImage": "https://i.ytimg.com/vi/WKMAePxJxnI/hqdefault.jpg",
        "publishedAt": "2022-06-14T02:01:44Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "KABC-TV"
        },
        "author": "Jordan Valinsky, CNN Business",
        "title": "Coca-Cola partnering with Brown-Forman to make a new canned cocktail combining Coke and Jack Daniel's Tennessee Whiskey - KABC-TV",
        "description": "Coca-Cola is partnering with Brown-Forman to make a new canned cocktail combining Coke and Jack Daniel's Tennessee Whiskey.",
        "url": "https://abc7.com/coca-cola-jack-daniels-tennessee-whiskey-canned-cocktail/11956459/",
        "urlToImage": "https://cdn.abcotvs.com/dip/images/11956430_jack-and-coke-CNN.jpg?w=1600",
        "publishedAt": "2022-06-14T01:47:54Z",
        "content": "Drinking a Jack and Coke is about to become, somehow, even easier.Coca-Cola is partnering with Brown-Forman to make a new canned cocktail combining Coke and Jack Daniel's Tennessee Whiskey. The drink… [+2158 chars]"
    },
    {
        "source": {
            "id": "bloomberg",
            "name": "Bloomberg"
        },
        "author": null,
        "title": "Wall Street's Favorite Recession Signal Is Back as Curves Invert - Bloomberg",
        "description": null,
        "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=53e8f64d-ebaf-11ec-ab3d-77477a72524c&url=L25ld3MvYXJ0aWNsZXMvMjAyMi0wNi0xNC93YWxsLXN0cmVldC1zLWZhdm9yaXRlLXJlY2Vzc2lvbi1zaWduYWwtaXMtYmFjay1hcy1jdXJ2ZXMtaW52ZXJ0",
        "urlToImage": null,
        "publishedAt": "2022-06-14T01:34:00Z",
        "content": "To continue, please click the box below to let us know you're not a robot."
    },
    {
        "source": {
            "id": null,
            "name": "TheStreet"
        },
        "author": "Kirk O’Neil",
        "title": "How Long Does the Average Bear Market Last? - TheStreet",
        "description": "S&P 500 entered bear market country on June 13, down 21% from its high on Jan. 3, while Nasdaq has been in a bear market since March 2022.",
        "url": "https://www.thestreet.com/investing/how-long-does-the-average-bear-market-last",
        "urlToImage": "https://www.thestreet.com/.image/t_share/MTcxMzkwNjQxNDkyNzMxNTcx/bear-market.jpg",
        "publishedAt": "2022-06-14T01:30:52Z",
        "content": "Bear markets have a long history with the S&amp;P 500, Nasdaq Composite and Dow Jones Industrial Average indexes and they have returned as a result of the economic turmoil caused by inflation, rising… [+2798 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Julia Horowitz, CNN Business",
        "title": "Tesla is trying an old trick to boost its stock. It may not work - CNN",
        "description": "In recent years, when a company announced it was splitting its stock, Wall Street went wild. When Tesla revealed such plans in 2020, its shares immediately shot up. They climbed 66% over the following 12 months.",
        "url": "https://www.cnn.com/2022/06/13/investing/premarket-stocks-trading/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220610164422-tesla-store-california-2021-file-super-tease.jpg",
        "publishedAt": "2022-06-14T00:00:00Z",
        "content": "A version of this story first appeared in CNN Business' Before the Bell newsletter. Not a subscriber? You can sign up right here. You can listen to an audio version of the newsletter by clicking the … [+5400 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "U.S. stocks sink as inflation fears mount - CBS News",
        "description": "The stock market's tumble has put the S and P 500 into a bear market. CBS News correspondent Elaine Quijano reports on Wall Street's drop on Monday. Then, Ak...",
        "url": "https://www.youtube.com/watch?v=psCB4dHymPE",
        "urlToImage": "https://i.ytimg.com/vi/psCB4dHymPE/maxresdefault.jpg",
        "publishedAt": "2022-06-13T23:56:23Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Decrypt"
        },
        "author": "Stacy Elliott",
        "title": "How the Celsius Liquidity Crunch Is Linked to Lido's Staked Ethereum - Decrypt",
        "description": "A core piece of Celsius's Earn strategy relies on Staked ETH not losing parity with Ethereum. But it has, and now customers want their money back.",
        "url": "https://decrypt.co/102812/celsius-liquidity-crunch-lido-staked-ethereum-steth",
        "urlToImage": "https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2022/06/celsius-logo-lido-staked-eth-gID_1.jpg",
        "publishedAt": "2022-06-13T23:53:49Z",
        "content": "Its only been a month since the collapse of Terra, and the chaos that it created in the crypto market, and now Lido Finance and its Staked Ethereum (stETH) are at the center of another potential liqu… [+5523 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Here's what the US economy can expect if a recession hits - CNN",
        "description": null,
        "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DMgprqjEVaTE",
        "urlToImage": null,
        "publishedAt": "2022-06-13T23:35:31Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Amazon to begin drone deliveries in Lockeford, California this year - BBC",
        "description": "The shopping giant hopes to deliver parcels to shoppers by air for the first time later in 2022.",
        "url": "https://www.bbc.com/news/business-61790085",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7D9E/production/_125385123_amazondrone.jpg",
        "publishedAt": "2022-06-13T23:35:21Z",
        "content": "Amazon says it will begin delivering parcels to shoppers by drone for the first time later this year, pending final regulatory approval.\r\nUsers in the Californian town of Lockeford will be able to si… [+2350 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "MarketWatch"
        },
        "author": "Zoe Han",
        "title": "Crypto crash FOMO and Americans are increasingly worried about red-hot inflation, jobs and their own deteriorating finances - MarketWatch",
        "description": "Monday’s top personal finance stories",
        "url": "https://www.marketwatch.com/story/crypto-crash-fomo-and-americans-are-increasingly-worried-about-red-hot-inflation-jobs-and-their-own-deteriorating-finances-11655162363",
        "urlToImage": "https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png",
        "publishedAt": "2022-06-13T23:19:00Z",
        "content": "Hi, MarketWatchers. Dont miss these top stories.I sit here day after day, doing the same old drudgery, and I want to have some hope that I may have an exit strategy. Read MoreStagflation concerns mou… [+2127 chars]"
    },
    {
        "source": {
            "id": "politico",
            "name": "Politico"
        },
        "author": null,
        "title": "Stock plunge shakes confidence of higher-income Americans - POLITICO",
        "description": "The cratering of optimism across all income groups — even as the economy is churning out jobs and growing — is bleak news for Democrats as they head into the midterm elections.",
        "url": "https://www.politico.com/news/2022/06/13/wealthier-americans-inflation-stocks-00039157",
        "urlToImage": "https://static.politico.com/fb/93/6f0c457e4874b9e19e34907d25ec/https-delivery.gettyimages.com/downloads/1402189361",
        "publishedAt": "2022-06-13T23:10:18Z",
        "content": "The instability of the market has rattled both the wage payer and the wage earner, said Kevin Madden, executive vice president of advocacy at Arnold Ventures and a veteran Republican strategist.\r\nWit… [+4598 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "INSIDER"
        },
        "author": "Anna Medaris",
        "title": "Alopecia treatment that restores hair approved by the FDA - Insider",
        "description": "Olumiant and other drugs like it had already been approved to treat autoimmune conditions like rheumatoid arthritis, but used off-label for alopecia.",
        "url": "https://www.insider.com/alopecia-treatment-restores-hair-olumiant-approved-by-fda-2022-6",
        "urlToImage": "https://i.insider.com/62a7b394ac534e0019331833?width=1200&format=jpeg",
        "publishedAt": "2022-06-13T23:08:30Z",
        "content": "The first systemic treatment for alopecia areata was approved today by the US Food and Drug Administration.\r\nAlopecia areata is an autoimmune disorder in which the body attacks hair follicles, leadin… [+3704 chars]"
    }
];



const initialState : NewsStateTypes =  {

    news: articles,
    error: null,
    isLoading: false,

}

const newsSlice = createSlice({
    name: "news",
    initialState,

    reducers: {},

    extraReducers:(builder) => {
        builder
            .addCase(getNewsThunk.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(getNewsThunk.fulfilled, (state,action) => {
                state.news = action.payload;
                state.isLoading = false;
            })
            .addCase(getNewsThunk.rejected, (state,action) => {
                state.error = action.payload ? action.payload : "Unknown error";
                state.isLoading = false
            })

    }
})

export const newsReducer = newsSlice.reducer;


