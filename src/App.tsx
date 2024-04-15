/*
 * @Author: 黄承文 chengwen@ssc-hn.com
 * @Date: 2024-04-15 16:21:24
 * @LastEditors: 黄承文 chengwen@ssc-hn.com
 * @LastEditTime: 2024-04-15 16:42:51
 * @FilePath: /interview-react/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import routerMapping from './router-mapping';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Redirect exact from="/" to="/home" />
        {routerMapping.map((route) => {
            return (
              <Route
                component={route.component}
                key={route.path}
                path={route.path}
              />
            )
        })}
        <Redirect to="/error/404" />
      </Switch>
    </HashRouter>
  );
}

export default App;
