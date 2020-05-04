import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ResetStyle from './theme/reset';
// pages
import Home from './components/pages/main/Home';
import About from './components/pages/main/About';
import Community from './components/pages/main/Community';
import FriendsProfile from './components/pages/FriendsProfile';
import Event from './components/pages/main/Event';
import EventDetail from './components/pages/EventDetail';
import Profile from './components/pages/main/Profile';
import ProfileEdit from './components/pages/ProfileEdit';
import MyGoal from './components/pages/main/MyGoal';
import GoalEgg from './components/pages/GoalEgg';
import Pomodolo from './components/pages/Pomodolo';
import Quote from './components/pages/main/Quotes';
import Book from './components/pages/main/Book';
import Tips from './components/pages/main/Tips';
import Contact from './components/pages/Contact';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import CommunityDetail from './components/pages/CommunityDetail';

const App: FC = () => {
  return (
    <>
      <ResetStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* nav */}
          <Route path="/about" exact component={About} />
          <Route path="/community" exact component={Community} />
          <Route path="/friendsprofile" exact component={FriendsProfile} />
          <Route path="/event" exact component={Event} />
          <Route path="/event-detail" exact component={EventDetail} />
          <Route path="/mygoal" exact component={MyGoal} />
          <Route path="/quote" exact component={Quote} />
          <Route path="/book" exact component={Book} />
          <Route path="/tips" exact component={Tips} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/profile-edit" exact component={ProfileEdit} />

          {/* show more */}
          <Route path="/contact" exact component={Contact} />
          <Route path="/goal-egg" exact component={GoalEgg} />
          <Route path="/pomodolo" exact component={Pomodolo} />
          <Route path="/community-detail" exact component={CommunityDetail} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
