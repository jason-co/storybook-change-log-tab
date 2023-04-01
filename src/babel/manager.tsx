import React from 'react';
import { addons, types } from '@storybook/addons';
addons.register('change-log', () => {
    addons.add('change-log', {
        type: types.TAB,
        title: 'Change Log',
        route: ({ storyId, refId }) => {
            return `/change-log/${storyId}`;
        },
        match: ({ viewMode }) => viewMode === 'change-log',
        render: () => <div>Our new tab contents!</div>
    });
});
