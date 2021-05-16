import React, { Fragment, useEffect, useState } from 'react';
import { Input } from '../Input/Input'
import { Button } from '../Button/Button';
import { store, actionCreators } from '../../state';

export function Repositories() {
    const [term, setTerm] = useState('');
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(false)
    const onSearchRepositories = () => {
        store.dispatch(actionCreators.searchRepositories(term))
        // console.log('onSearchRepositories called', store.getState())
    }
    const onChangeTerm = (event: any) => {
        setTerm(event.target.value);
    }
    useEffect(() => {
        const subscription = store.subscribe(() => {
            const { loading, data, error } = store.getState().repositories;
            setRepositories(data)
            setLoading(loading)
        })
        return () => subscription.unsubscribe()
    }, [])
    return (
        <Fragment>
            <Input size="small" placeholder="Enter Repo name" value={term} onChange={onChangeTerm} />
            <br />
            <Button variant="primary" onClick={onSearchRepositories}>Search</Button>
            {loading && <p>Loading...</p>}
            <ul>
                {repositories && repositories.map(name => {
                   return <li key={name}>{name}</li>
                })}
            </ul>
        </Fragment>
    )
}