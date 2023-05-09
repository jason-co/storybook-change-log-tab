import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import DescriptionIcon from '@mui/icons-material/Description';
import { Badge, Chip, Divider } from '@mui/material';
import React, { FC, HtmlHTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';
import VersionItem from './VersionItem';

const StyledVersionInfo = styled.div`
    display: grid;
    grid-template-columns: 3rem 1fr;
    grid-gap: 1rem;
    .MuiChip-root {
        margin-top: 0.5rem;
    }
    .MuiBadge-root {
        margin-right: 0.25rem;
        margin-bottom: 0.25rem;
    }
`;
export interface VersionInfoProps extends HtmlHTMLAttributes<HTMLDivElement> {
    version: string;
    releaseDate: string;
}

export const VersionInfo: FC<VersionInfoProps> = ({ version, releaseDate, children }: VersionInfoProps) => {
    const features: ReactElement[] = [];
    const bugs: ReactElement[] = [];

    React.Children.toArray(children)
        .filter((child: ReactElement) => child.type === VersionItem)
        .forEach((child: ReactElement) => {
            if (child.props.type === 'feature') features.push(child);
            if (child.props.type === 'bug') bugs.push(child);
        });
    return (
        <StyledVersionInfo>
            <div>
                <Chip label={version} color='primary' />
            </div>
            <div>
                <a id={version} />
                <h2>{releaseDate}</h2>
                <Divider />
                {features.length > 0 && (
                    <>
                        <h3>
                            <Badge>
                                <DescriptionIcon />
                            </Badge>
                            Features
                        </h3>
                        <ul>
                            {features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </>
                )}
                {bugs.length > 0 && (
                    <>
                        <h3>
                            <Badge>
                                <AssignmentLateIcon />
                            </Badge>
                            Bugs
                        </h3>
                        <ul>
                            {bugs.map((bug, index) => (
                                <li key={index}>{bug}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </StyledVersionInfo>
    );
};

export default VersionInfo;
