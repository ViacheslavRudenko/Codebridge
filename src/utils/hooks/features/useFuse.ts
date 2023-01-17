import Fuse from 'fuse.js';
import { useCallback, useMemo, useState } from 'react';
import { debounce } from 'throttle-debounce';
import { Article } from '../../../types/article';

export const useFuse = (list: Article[], options: any) => {
    console.log(options);

    const [query, updateQuery] = useState('');
    const { limit, matchAllOnEmptyQuery, ...fuseOptions } = options;


    const fuse: any = useMemo(
        () => new Fuse(list, fuseOptions),
        [list, fuseOptions]
    );

    const hits = useMemo(
        () => !query && matchAllOnEmptyQuery
            ? fuse.getIndex().docs.slice(0, limit).map((item: Article, refIndex: number) => ({ item, refIndex }))
            : fuse.search(query.replace(/\s/g, ""), { limit }),
        [fuse, limit, matchAllOnEmptyQuery, query]
    );

    const setQuery = useCallback(
        debounce(100, updateQuery),
        []
    );

    const onSearch = useCallback(
        (e: any) => setQuery(e.target.value),
        [setQuery]
    );

    return {
        hits,
        onSearch,
        query,
        setQuery,
    };
};
