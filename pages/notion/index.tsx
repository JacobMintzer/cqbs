import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import 'katex/dist/katex.min.css';

import dynamic from 'next/dynamic'
import {NotionRenderer} from "react-notion-x";
import {useRecordMap} from "@/components/useRecordMap/useRecordMap";
import {useComputedColorScheme, Image, Title, Flex} from "@mantine/core";

const Collection = dynamic(() =>
    import('react-notion-x/build/third-party/collection').then(
        (m) => m.Collection
    )
)
const Equation = dynamic(() =>
    import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)
const Pdf = dynamic(
    () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
    {
        ssr: false
    }
)
const Modal = dynamic(
    () =>
        import('react-notion-x/build/third-party/modal').then((m) => {
            m.Modal.setAppElement('.notion-viewport')
            return m.Modal
        }),
    {
        ssr: false
    }
)

export default function NotionPage() {
    const computedColorScheme = useComputedColorScheme('light', {getInitialValueInEffect: true});
    const {
        data,
        isLoading,
        isError
    } = useRecordMap();
    if (isLoading) return <div>Loading...</div>;

    console.log(data.block[Object.keys(data.block)[0]].value.format.page_cover);
    const cover = `https://www.notion.so/image/${
        encodeURIComponent(data.block[Object.keys(data.block)[0]].value.format.page_cover)
    }?table=block&id=${
        Object.keys(data.block)[0]
    }&cache=v2`;

    const notionTitle = data.block[Object.keys(data.block)[0]].value.properties.title[0][0];
    return (
        <Flex direction={"column"} gap={"md"}>
            <Image src={cover} mt={"-7vh"} mah={"20vh"}/>
            <Title
                ta={"center"}
                c={"var(--mantine-color-body)"}
                style={{
                    top: "-15vh",
                    position: "relative",
                    marginBottom: "-5vh"
                }}
            >
                {notionTitle}
            </Title>
            <NotionRenderer
                recordMap={data}
                fullPage={false}
                darkMode={computedColorScheme === 'dark'}
                components={{
                    Collection,
                    Modal
                }}
            />
        </Flex>
    );
}
