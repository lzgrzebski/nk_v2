import * as React from 'react';
import MenuItem from './MenuItem';
import { ActiveLink } from '../../ActiveLink';

const links = [
    { name: 'Działania', path: '/posts', as: '/posts' },
    { name: 'Atrakcje', path: '/attractions', as: '/attractions' },
    { name: 'Historia', path: '/history', as: '/history' },
    { name: 'Galeria', path: '/gallery/[id]', as: '/gallery/1' },
    { name: 'Kontakt', path: '/contact', as: '/contact' }
];
export const Menu = () => (
    <div>
        {
            links.map(link => (
                <MenuItem key={link.path}>
                    <ActiveLink activeClassName="active" href={link.path} as={link.as}><a>{link.name}</a></ActiveLink>
                </MenuItem>
            ))
        }
    </div>
);