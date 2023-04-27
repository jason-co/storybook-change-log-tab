import React, { FC, useEffect, useState } from 'react';

export interface ChangeLogReaderProps {
    componentName: string;
}

export const ChangeLogReader: FC<ChangeLogReaderProps> = ({ componentName }: ChangeLogReaderProps) => {
    const [changeLog, setChangeLog] = useState(undefined as any);

    useEffect(() => {
        if (!componentName) {
            setChangeLog(undefined);
            return;
        }
        try {
            const changeLogModule = require(`!!raw-loader!../../../components/${componentName}/${componentName}.change-log.mdx`);
            setChangeLog(changeLogModule?.default);
        } catch (err) {
            setChangeLog(undefined);
        }
    }, [componentName]);

    return (
        <div
            style={{
                display: 'flex',
                padding: '12px 20px',
                backgroundColor: 'white',
                height: '100%'
            }}
        >
            <div style={{ width: '100%', maxWidth: '1000px', whiteSpace: 'pre-line' }}>{changeLog}</div>
        </div>
    );
};

ChangeLogReader.displayName = 'ChangeLogReader';

export default ChangeLogReader;
