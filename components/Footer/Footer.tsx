import { Group } from '@mantine/core';

interface FooterProps {
    socials: {
        name: string;
        icon: string;
    }[];
    author: {
        name: string;
        source: string;
    };
}

export function FooterMin(props: FooterProps) {
    const items = props.socials.map((social) => (
        <p>{social.name}</p>
    ));
    return (

        <>
            <h1>TOOD:</h1>
            <Group>
                {items}
            </Group>
        </>
    );
}
