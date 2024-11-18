import useSWR from 'swr';

export function useEmail() {
    const fetcher = async (url: string) => {
        const res = await fetch(url);
        return res.json();
    }

    const { data, error } = useSWR('/api/email', fetcher);

    return {
        e: data,
        isLoading: !error && !data,
        isError: error
    };
}
