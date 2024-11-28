import useSWR from 'swr';

export function useRecordMap() {
    const fetcher = async (url: string) => {
        const res = await fetch(url);
        return res.json();
    }

    const { data, error } = useSWR('/api/notion', fetcher, {
        revalidateOnFocus: false,
    });

    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    };
}
