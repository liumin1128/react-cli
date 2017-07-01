import React from 'react';
import {
  BrowserRouter as Router,
  Route,   // 这是基本的路由块
  Link,    // 这是a标签
  Switch,   // 这是监听空路由的
  Redirect, // 这是重定向
  Prompt,   // 防止转换
} from 'react-router-dom';

import Index from './routes/Index';

// const Home = () => (
//   <h2>Home2</h2>
// );

const Form = () => (
  <h2>Forttm</h2>
);


const NoMatch = () => (
  <h2>NoMatch</h2>
);


const WillMatch = () => (
  <h2>WillMatch</h2>
);

// 模板，套路
const RouterConfig = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Form</Link></li>
        <li><Link to="/one">One</Link></li>
        <li><Link to="/two">Two</Link></li>
      </ul>
      <Route path="/" exact component={Form} />
      <Route path="/one" render={() => <h3>One</h3>} />
      <Route path="/two" render={() => <h3>Two</h3>} />
      <Switch>
        <Route path="/" exact component={Index} />
        <Redirect from="/old-match" to="/will-match" />
        <Route path="/will-match" component={WillMatch} />
        <Route component={NoMatch} />
      </Switch>
      <Prompt  // 防止转换 通常是在表单输入时使用
        when={false}  // 是否开启防止转换
        message={location => (`Are you sure you want to go to ${location.pathname}`)}
      />
    </div>
  </Router>
);

export default RouterConfig;
