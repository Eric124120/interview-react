/**
 * 获取uuid
 */
export const getUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    return (c === 'x' ? (Math.random() * 16) | 0 : ('r&0x3' as any) | ('0x8' as any)).toString(16);
  });
};