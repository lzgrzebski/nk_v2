import * as React from 'react';
import GalleryTabItem from './GalleryTabItem';
import GalleryTabsWrapper from './GalleryTabsWrapper';
import Link from 'next/link';

interface GalleryTabsProps {
    id: number;
    galleries: {
        id: string;
        name: string;
    }[]
}

export const GalleryTabs: React.SFC<GalleryTabsProps> = ({galleries, id}) => (
    <GalleryTabsWrapper>
        {
            galleries.map(link => (
                <GalleryTabItem key={link.id} active={+link.id === id}>
                    <Link href="/gallery/[id]" as={'/gallery/' + link.id}>
                        <a>{link.name}</a>
                    </Link>
                </GalleryTabItem>
            ))
        }
    </GalleryTabsWrapper>
);