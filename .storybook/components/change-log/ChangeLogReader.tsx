import { useStorybookState } from '@storybook/api';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { VersionInfo, VersionItem } from '../../../components/version-info';
import CustomTheme from './CustomTheme';
import TableOfContentsLayout from './TableOfContentsLayout';

const StyledChangeLogReader = styled.div`
    padding: 1.2rem 2rem;
    background-color: white;
    .change-log-container {
        width: 100%;
        max-width: 50rem;
    }
`;

const components = {
    CustomTheme: CustomTheme,
    TableOfContentsLayout: TableOfContentsLayout,
    VersionInfo: VersionInfo,
    VersionItem: VersionItem
};

export const ChangeLogReader: FC = () => {
    const [changeLog, setChangeLog] = useState(undefined as any);
    const state = useStorybookState();

    useEffect(() => {
        const componentName = state.viewMode === 'change-log' ? getComponentName() : undefined;
        if (!componentName) {
            setChangeLog(undefined);
            return;
        }
        try {
            const changeLogModule = require(`!!babel-loader!@mdx-js/loader!../../../components/${componentName}/${componentName}.change-log.mdx`);
            setChangeLog(changeLogModule?.default({ components: components }));
        } catch (err) {
            setChangeLog(undefined);
        }
    }, [state.storyId, state.viewMode]);

    const getComponentName = () => {
        const id = new String(state.storyId);
        if (id.startsWith('components')) {
            const splitStoryName = id.split('--');
            splitStoryName.pop();
            const splitComponentName = splitStoryName[0].split('-');
            splitComponentName.shift();
            return splitComponentName.join(' ');
        } else {
            return String(undefined);
        }
    };

    return (
        <StyledChangeLogReader>
            <div className='change-log-container'>{changeLog}</div>
        </StyledChangeLogReader>
    );
};

ChangeLogReader.displayName = 'ChangeLogReader';

export default ChangeLogReader;
