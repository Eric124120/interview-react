/*
 * @Author: 黄承文 chengwen@ssc-hn.com
 * @Date: 2024-04-15 19:35:02
 * @LastEditors: 黄承文 chengwen@ssc-hn.com
 * @LastEditTime: 2024-04-15 19:49:02
 * @FilePath: /interview-react/src/pages/home/todoList.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { getUUID } from '@/utils/index';

export interface ITodoInterface {
  id: string;
  text: string;
  completed: boolean;
}

export function createTodo(text: string, completed: boolean = false): ITodoInterface {
  return {
    id: getUUID(),
    text,
    completed
  };
}

export const initialTodoList: ITodoInterface[] = [
  createTodo('文昌鸡', false),
  createTodo('加积鸭', false),
  createTodo('东山羊', false),
  createTodo('和乐蟹', true),
];