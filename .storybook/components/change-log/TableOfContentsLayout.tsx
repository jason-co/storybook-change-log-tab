import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { VersionInfo } from '../../../components/version-info';

const StyledTableOfContentsLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 3rem;
    grid-gap: 1rem;
    .table-of-contents-container {
        position: sticky;
        top: 2rem;
        li {
            margin: 0.5rem 0;
        }
    }
`;

export const TableOfContentsLayout = ({ children }) => {
    const versions = React.Children.toArray(children)
        .filter((child: ReactElement) => child.type === VersionInfo)
        .map((info: ReactElement) => info.props.version);
    return (
        <StyledTableOfContentsLayout>
            <div>{children}</div>
            <div className='table-of-contents-container'>
                <h3>Versions</h3>
                <ul>
                    {versions &&
                        versions.map((version: string, index: number) => (
                            <li key={index}>
                                <a href={`#${version}`} target='_self'>
                                    {version}
                                </a>
                            </li>
                        ))}
                </ul>
            </div>
        </StyledTableOfContentsLayout>
    );
};

export default TableOfContentsLayout;
