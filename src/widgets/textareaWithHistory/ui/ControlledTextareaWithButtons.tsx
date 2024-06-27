import { TextareaWithHistory, useTextData } from '@/entities/textareaWithHistory';
import { ChangeStyleButton, HistoryControls } from '@/features/textareaWithHistory';

import styles from './ControlledTextareaWithButtons.module.scss';

export const ControlledTextareaWithButtons = () => {
  const { isInitialized } = useTextData();

  return (
    <div className={styles.container}>
      {isInitialized ? (
        <div className={styles.wrapper}>
          <TextareaWithHistory />
          <div className={styles.buttons}>
            <ChangeStyleButton isWide styleName="bold" />
            <ChangeStyleButton isWide styleName="italic" />
            <div className={styles.historyButtons}>
              <HistoryControls />
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
