import style from "./Paginator.module.scss"
import React, {memo, useState} from 'react';

interface PaginatorTypes {
    totalUsersCount: number;
    defaultPage: number;
    getUsers: (data: number) => void;


}


const Paginator: React.FC<PaginatorTypes> = ({totalUsersCount = 0,getUsers,defaultPage }) => {

    const countOfPages = Math.ceil(totalUsersCount / 10);

    const numberOfPagesInArray = [];

    for (let index = 1; index <= countOfPages; index++) {
        numberOfPagesInArray.push(index);
    }

    const pagesPortionCount = Math.ceil(countOfPages / 10);
    const [portionNumber, setPortionNumber] = useState(1);
    const [page, setPage] = useState<number>(defaultPage);

    const leftPortionPageNumber = (portionNumber - 1) * 10 ;
    const rightPortionPageNumber = portionNumber * 10;

    const pagesPortion = numberOfPagesInArray.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber);


    return (
        <div className={style.numberOfPage}>

            <button className={portionNumber <= 1 ? "del" : ""}
                    onClick={() => setPortionNumber(portionNumber - 1)}>Prev
            </button>

            {

                pagesPortion.map(number => <h3 className={page === number ? "active_page" : ""} onClick={() => {
                    setPage(number)
                    getUsers(number)

                }}>{number}</h3>)
            }

            <button className={pagesPortionCount <= portionNumber ? "del" : ""}
                    onClick={() => setPortionNumber(portionNumber + 1)}>Next
            </button>
        </div>
    )
};

export default Paginator;
