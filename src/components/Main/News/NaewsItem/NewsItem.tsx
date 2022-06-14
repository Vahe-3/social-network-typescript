import React from "react";
import styles from "./NewsItem.module.scss";
import {NewsType} from "../../../../types/newsTypes";
import emptyPicture from "./../../../../icons/noImage.jpg"

interface NewsItemPropsTypes extends NewsType {};

const NewsItem: React.FC<NewsItemPropsTypes> = ({
                                                    urlToImage,
                                                    content,
                                                    author,
                                                    title,
                                                    description,
                                                    url,
                                                    publishedAt,
                                                    source
                                                }) => {

    const date = publishedAt?.split("").filter(val => {
        if (!isNaN(+val) || val === "-" || val === ":") {
            return val
        }
    }).join("");

    const month = date?.slice(0, 10);
    const hour = date?.slice(10, 15);

    return (
        <div className={styles.news_item}>

            <h1>{source.name}</h1>
            <div>
                <h3>{author ? author : "Unknown source"}</h3>
                <h4>{month + ` / ` + hour}</h4>
                <h4>{title}</h4>
                <img src={urlToImage ? urlToImage : emptyPicture} alt="newsPhoto"/>
                <h3>{description}</h3>
                <p>{content}</p>
                <a href={url ? url : ""}>go to news</a>
            </div>

        </div>
    )
};

export default NewsItem;