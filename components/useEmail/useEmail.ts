import useSWR from 'swr';

export function useEmail() {
    const fetcher = async (url: string) => {
        const res = await fetch(url);
        return res.json();
    }

    const { data, error } = useSWR('/api/email', fetcher);

    return {
        email: data,
        isLoading: !error && !data,
        isError: error
    };
}
