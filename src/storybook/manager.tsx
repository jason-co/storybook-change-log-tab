import { addons, types } from '@storybook/addons';
import React from 'react';
import ChangeLogReader from './ChangeLogReader';

addons.register('change-log', () => {
    addons.add('change-log', {
        type: types.TAB,
        title: 'Change Log',
        route: ({ storyId, refId }) => {
            return `/change-log/${storyId}`;
        },
        match: ({ viewMode }) => viewMode === 'change-log',
        render: () => <ChangeLogReader />
    });
});
