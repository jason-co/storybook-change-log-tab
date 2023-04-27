import { addons, types } from '@storybook/addons';
import React from 'react';
import ChangeLogReader from './ChangeLogReader';

addons.register('change-log', () => {
    let componentName: string;
    addons.add('change-log', {
        type: types.TAB,
        title: 'Change Log',
        route: ({ storyId, refId }) => {
            // storyId format: components-<component-name>--<story-name>
            const id = new String(storyId);
            if (id.startsWith('components')) {
                const splitStoryName = id.split('--');
                splitStoryName.pop();
                const splitComponentName = splitStoryName[0].split('-');
                splitComponentName.shift();
                componentName = splitComponentName.join(' ');
            } else {
                componentName = String(undefined);
            }
            return `/change-log/${storyId}`;
        },
        match: ({ viewMode }) => viewMode === 'change-log',
        render: () => <ChangeLogReader componentName={componentName} />
    });
});
