/* eslint-disable react/jsx-indent-props */
import Link from 'next/link';
import { Group } from '@mantine/core';

interface HeaderProps {
    links: {
        link: string;
        label: string;
    }[];
}
export function HeaderMin({ links }: HeaderProps) {
    const items = links.map((link) => (
        <Link
            key={link.label}
            href={link.link}
        >
            {link.label}
        </Link>
    ));
    return (
        <>
            <h2>nitr7gen</h2>
            <Group>
                {items}
            </Group>
        </>
    );
}
