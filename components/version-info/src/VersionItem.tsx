import React, { FC, HtmlHTMLAttributes } from 'react';

export interface VersionItemProps extends HtmlHTMLAttributes<HTMLDivElement> {
    type: 'feature' | 'bug';
}
export const VersionItem: FC<VersionItemProps> = ({ children, type, ...restProps }: VersionItemProps) => {
    return <div {...restProps}>{children}</div>;
};

export default VersionItem;
