
// features/useFuse.js
import Fuse from 'fuse.js';
import { useCallback, useMemo, useState } from 'react';
import { debounce } from 'throttle-debounce';
import { Article } from '../../../types/article';

export const useFuse = (list: any, options: any): any => {
    // defining our query state in there directly
    const [query, updateQuery] = useState('');

    // removing custom options from Fuse options object
    // NOTE: `limit` is actually a `fuse.search` option, but we merge all options for convenience
    const { limit, matchAllOnEmptyQuery, ...fuseOptions } = options;

    // let's memoize the fuse instance for performances
    const fuse: any = useMemo(
        () => new Fuse(list, fuseOptions),
        [list, fuseOptions]
    );

    // memoize results whenever the query or options change
    const hits = useMemo(
        // if query is empty and `matchAllOnEmptyQuery` is `true` then return all list
        // NOTE: we remap the results to match the return structure of `fuse.search()`
        () => !query && matchAllOnEmptyQuery
            ? fuse.getIndex().docs.slice(0, limit).map((item: any, refIndex: number) => ({ item, refIndex }))
            : fuse.search(query, { limit }),
        [fuse, limit, matchAllOnEmptyQuery, query]
    );

    // debounce updateQuery and rename it `setQuery` so it's transparent
    const setQuery = useCallback(
        debounce(100, updateQuery),
        []
    );

    // pass a handling helper to speed up implementation
    const onSearch = useCallback(
        (e: any) => setQuery(e.target.value.trim()),
        [setQuery]
    );

    // still returning `setQuery` for custom handler implementations
    return {
        hits,
        onSearch,
        query,
        setQuery,
    };
};
