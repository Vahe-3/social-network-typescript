import React, {useEffect} from "react";
import styles from "./News.module.scss";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {getNewsThunk} from "../../../store/thunks/newsThunks";
import Preloader from "../../Preloader/Preloader";
import NewsItem from "./NaewsItem/NewsItem";


const News: React.FC = () => {

    const dispatch = useAppDispatch();
    const {news, isLoading, error} = useAppSelector(state => state.news);


    useEffect(() => {
        //News api only supports requests from localhost
        // dispatch(getNewsThunk())
    }, []);

    if (isLoading) {
        return <Preloader/>
    }

    if (error) {
        alert(error)
    }

    return (
        <div className={styles.news}>
            {
                news && news.map(n => <NewsItem key={n.title}
                                                source={n.source} author={n.author} title={n.title}
                                                description={n.description} url={n.url}
                                                urlToImage={n.urlToImage} publishedAt={n.publishedAt}
                                                content={n.content}/>)
            }
        </div>
    )
};

export default News;