
import React, { useEffect, useState, FC, ReactNode } from 'react';
// import { HelixThemeProvider } from '@helix/theming';
import * as theming from '@storybook/theming';
// import '../../../packages/styles/dist/helix.css';

export interface ChangeLogProps {
    componentName: string;
}

export const ChangeLog: FC<ChangeLogProps> = ({ componentName }: ChangeLogProps) => {
    const [notes, setNotes] = useState(undefined as ReactNode);
    // const NewBadge = () => <span className='helix-badge helix-badge--success helix-badge--small'>New</span>;
    // const BadgeGrid = ({ children }: any) => <div style={{ display: 'flex', gap: '8px' }}>{children}</div>;
    // const VersionBadge = ({ children }: any) => <span className='helix-badge ml-2'>{children}</span>;
    // const UpdatedBadge = () => <span className='helix-badge helix-badge--info helix-badge--small'>Updated</span>;
    // const anyTheming: any = theming;
    // const components = {
    //     HelixThemeProvider: HelixThemeProvider,
    //     VersionBadge: VersionBadge,
    //     BadgeGrid: BadgeGrid,
    //     NewBadge: NewBadge,
    //     UpdatedBadge: UpdatedBadge,
    //     h1: anyTheming.styled.h1(({ theme }: any) => ({
    //         fontFamily: theme.typography.fonts.base,
    //         fontWeight: `${theme.typography.weight.black}`,
    //         fontSize: theme.typography.size.l1,
    //         color: theme.color.defaultText,
    //         margin: '0 0 8px'
    //     })),
    //     h2: anyTheming.styled.h2(({ theme }: any) => ({
    //         fontFamily: theme.typography.fonts.base,
    //         fontWeight: `${theme.typography.weight.bold}`,
    //         fontSize: theme.typography.size.m2,
    //         color: theme.color.defaultText,
    //         margin: '0 0 8px',
    //         borderBottom: '1px solid rgba(0,0,0,.1)',
    //         paddingBottom: '4px'
    //     })),
    //     h3: anyTheming.styled.h3(({ theme }: any) => ({
    //         fontFamily: theme.typography.fonts.base,
    //         fontWeight: `${theme.typography.weight.bold}`,
    //         fontSize: theme.typography.size.m1,
    //         color: theme.color.defaultText,
    //         margin: '20px 0 8px'
    //     })),
    //     ul: anyTheming.styled.ul(({ theme }: any) => ({
    //         fontFamily: theme.typography.fonts.base,
    //         fontWeight: `${theme.typography.weight.regular}`,
    //         fontSize: theme.typography.size.s2,
    //         color: theme.color.defaultText,
    //         paddingLeft: '30px',
    //         margin: '16px 0'
    //     })),
    //     li: anyTheming.styled.li(({ theme }: any) => ({
    //         fontFamily: theme.typography.fonts.base,
    //         fontWeight: '300',
    //         fontSize: theme.typography.size.s2,
    //         color: theme.color.defaultText,
    //         lineHeight: '24px'
    //     })),
    //     code: anyTheming.styled.code(({ theme }: any) => ({
    //         fontFamily: theme.typography.fonts.mono,
    //         fontWeight: `${theme.typography.weight.regular}`,
    //         fontSize: theme.typography.size.s1,
    //         color: theme.color.defaultText,
    //         border: `1px solid ${theme.color.mediumlight}`,
    //         backgroundColor: theme.color.lighter
    //     }))
    //     // h2: anyTheming.styled.p((props: any) => {
    //     //     console.group('p');
    //     //     console.log(props);
    //     //     console.groupEnd();
    //     // })
    // };
    useEffect(() => {
        if (!componentName) {
            setNotes(undefined);
            return;
        }
        try {
            const path = require(`!!@mdx-js/loader!../../../packages/${componentName}/${componentName}.change-log.mdx`);
            // setNotes(path.default({ components: components }));
            setNotes(path.default());
        } catch (err) {
            setNotes(undefined);
        }
    }, [componentName]);
    return (
        <>
            {notes && (
                <div
                    style={{
                        display: 'flex',
                        padding: '4rem 20px',
                        justifyContent: 'center',
                        backgroundColor: 'white'
                    }}
                >
                    <div style={{ width: '100%', maxWidth: '1000px' }}>{notes}</div>
                </div>
            )}
        </>
    );
};

ChangeLog.displayName = 'ChangeLog';

export default ChangeLog;
