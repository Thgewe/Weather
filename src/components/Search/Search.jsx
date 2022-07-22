import React, {useRef} from 'react';
import cl from './search.module.scss'
import home from '../../images/svg/home.svg';
import magnifier from '../../images/svg/magnifier.svg';
const Search = ({searchFunc}) => {

    const input = useRef();
    const submit = () => {
        if (!input.current.value) return
        searchFunc(input.current.value);
    }

    return (
        <div className={cl.search}>
            <form className={cl.form} onSubmit={(e) => {
                e.preventDefault();
                submit();
            }}>
                <input
                    type="text"
                    className={cl.input}
                    placeholder="search for places"
                    ref={input}
                />
                <img src={magnifier} alt="" className={cl.glass} onClick={submit}/>
            </form>
            {/*<button className={cl.btn}>*/}
            {/*    <img src={home}/>*/}
            {/*</button>*/}
        </div>
    );
};

export default Search;