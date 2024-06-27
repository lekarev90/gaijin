import { memo, useCallback } from 'react';

import { getTextStyleHistoryAvailable, textAreaWithHistoryActions } from '@/entities/textareaWithHistory';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/useStoreHooks';
import { Button } from '@/shared/ui/Button';

export const HistoryControls = memo(() => {
  const dispatch = useAppDispatch();
  const { isRedoAvailable, isUndoAvailable } = useAppSelector(getTextStyleHistoryAvailable);
  const { historyRedo, historyUndo } = textAreaWithHistoryActions;

  const onUndo = useCallback(() => {
    dispatch(historyUndo());
  }, [dispatch, historyUndo]);

  const onRedo = useCallback(() => {
    dispatch(historyRedo());
  }, [dispatch, historyRedo]);

  return (
    <>
      <Button isWide onClick={onUndo} disabled={!isUndoAvailable}>
        Undo
      </Button>
      <Button isWide onClick={onRedo} disabled={!isRedoAvailable}>
        Redo
      </Button>
    </>
  );
});
