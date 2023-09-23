import React from 'react';

const WordList = (props) => {

    const {words, onWordDelete} = props;

    const onWordDeleteClick = (e) => {
        const word = e.target.getAttribute("data-word")

        onWordDelete(word);
    }

    const RenderWordItems = () => {
        if (words && (words.length > 0)) {
            return words.map((word, i) => {
                return (
                    <li className="list-group-item d-flex justify-content-between" key={i}>
                        <span>{word}</span><button className="btn btn-danger" onClick={onWordDeleteClick} data-word={word}><i className="fa fa-times link"></i> Удалить</button>
                    </li>
                );
            });
        }
        else {
            return <div>Нет слов...</div>
        }
    }

    return (
        <div className='mt-4 mb-4'>
            <h2>Список слов</h2>
            <ul className="list-group">
                { RenderWordItems() }
            </ul>
        </div>
    );
};

export default WordList;