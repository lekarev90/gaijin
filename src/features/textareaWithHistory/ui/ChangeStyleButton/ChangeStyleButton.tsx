import { memo, useCallback } from 'react';

import { getTextStyleByName, textAreaWithHistoryActions, ITextStyles } from '@/entities/textareaWithHistory';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/useStoreHooks';
import { Button, TButtonOutlineColor } from '@/shared/ui/Button';

interface IChangeStyleButtonProps {
  styleName: keyof ITextStyles;
  isWide?: boolean
}

export const ChangeStyleButton = memo(({ isWide, styleName }: IChangeStyleButtonProps) => {
  const dispatch = useAppDispatch();
  const { setStyle } = textAreaWithHistoryActions;
  const currentStyleState = useAppSelector(getTextStyleByName(styleName));
  const outlineColor: TButtonOutlineColor = currentStyleState ? 'success' : 'normal';

  const onChangeStyle = useCallback(
    () => {
      dispatch(setStyle({ styleName, styleState: !currentStyleState }));
    },
    [currentStyleState, dispatch, setStyle, styleName],
  );

  return (
    <Button onClick={onChangeStyle} variant="outline" outlineColor={outlineColor} isWide={isWide}>
      {styleName}
    </Button>
  );
});
