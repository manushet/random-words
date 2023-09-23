import React from 'react';
import { useRef } from 'react';

const AddWordForm = (props) => {

    const { onWordAdd } = props;

    const wordRef = useRef();
    const submitBtn = useRef();

    const onLoginSubmit = (e) => {
        e.preventDefault();

        submitBtn.current.disabled = true;        

        const word = wordRef.current.value;

        if (!word) {
            return false;
        }    
        
        onWordAdd(word);

        wordRef.current.value = "";
        submitBtn.current.disabled = false;
    }

    return (
        <div className='mt-4 mb-4'>
            <h2>Добавить слово</h2>
            <form className='mt-4 mb-4 needs-validation' onSubmit={onLoginSubmit}>
                <div className="mb-3 mt-3">
                    <input 
                        ref={wordRef}
                        type="text" 
                        className="form-control" 
                        id="word" 
                        name="word" 
                        placeholder="Введите новое слово" />
                    <div className="invalid-feedback">Это поле обязательно для заполнения.</div>                        
                </div>
                <button 
                    type="submit" 
                    ref={submitBtn}
                    className="btn btn-primary">
                    <i className="fa fa-plus"></i> Добавить
                </button>
            </form>    
        </div>
    );
};

export default AddWordForm;