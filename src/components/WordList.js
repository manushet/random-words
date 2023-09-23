import React from 'react';

const WordList = (props) => {

    const {words} = props;

    return (
        <div className='mt-4 mb-4'>
            <h2>Список слов</h2>
            <ul className="list-group">
                { words && words.map((word, i) => <li className="list-group-item" key={i}>{word}</li>) }
            </ul>
        </div>
    );
};

export default WordList;