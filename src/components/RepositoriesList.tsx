import React, {FormEvent} from 'react';
import {useState} from "react";
import {useSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState<string>("");
    const {searchRepositories} = useActions();
    const {data, loading, error} = useSelector((state) => state.repositories);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchRepositories(term);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Search" value={term} onChange={e => setTerm(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
        </div>
    )
}

export default RepositoriesList;
