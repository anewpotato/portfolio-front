import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@src/store';
import { useDispatch, useSelector } from 'react-redux';

type ActionType<T> = (payload: T) => PayloadAction;

/**
 * Redux 저장소 조회 및 updater 반환 hook.
 * @param key 조회하고자 하는 slice key.
 * @returns {[
 *   any,
 *   <P>(action: ActionType<P>, payload: P) => void
 * ]}
 */
export default function useRedux(key: string) {
  const targetState = useSelector((state: RootState) => state[key]);
  const dispatch = useDispatch();
  const actionCallback = <P>(action: ActionType<P>, payload: P) => {
    dispatch(action(payload));
  };

  return [targetState, actionCallback];
}
