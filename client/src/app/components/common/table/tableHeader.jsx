import React from "react";

const TableHeader = () => {
    return (
        <thead>
            <tr className="text-center">
                <th scope="col">Название</th>
                <th scope="col">Аавтор</th>
                <th scope="col">Категория</th>
                <th scope="col">Дата публикации</th>
                <th scope="col">Рейтинг</th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
        </thead>
    );
};

export default TableHeader;
