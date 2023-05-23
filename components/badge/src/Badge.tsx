import { Badge as MBadge } from '@mui/material';
import React, { FC } from 'react';

export const Badge: FC<any> = (props) => {
    return <MBadge {...props} />;
};

Badge.displayName = 'Badge';

export default Badge;
