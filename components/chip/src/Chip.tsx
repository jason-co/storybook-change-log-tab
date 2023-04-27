import { Chip as MChip } from '@mui/material';
import React, { FC } from 'react';

export const Chip: FC<any> = (props) => {
    return <MChip {...props} />;
};

Chip.displayName = 'Chip';

export default Chip;
