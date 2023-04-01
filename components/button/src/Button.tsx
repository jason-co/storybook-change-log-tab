import { Button as MButton } from '@mui/material';
import React, { FC } from 'react';

export const Button: FC<any> = (props: any) => {
    return <MButton {...props}></MButton>;
};

Button.displayName = 'Button';

export default Button;
