import { Divider as MDivider } from '@mui/material';
import React, { FC } from 'react';

export const Divider: FC<any> = (props) => {
    return <MDivider {...props} />;
};

Divider.displayName = 'Divider';

export default Divider;
