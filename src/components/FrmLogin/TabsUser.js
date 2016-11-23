import React, {Component, PropTypes} from "react";

import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import DataField from 'components/DataField'

import CircularProgress from "material-ui/CircularProgress";

import CnnSettings from './CnnSettings';

import classes from "./FrmLogin.scss";


export default class TabsUser extends Component {

  static propTypes = {

    zone: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    couch_path: PropTypes.string.isRequired,
    enable_save_pwd: PropTypes.bool.isRequired,
    handleSetPrm: PropTypes.func.isRequired,

    _obj: PropTypes.object,
    _acl: PropTypes.string.isRequired,

    handleSave: PropTypes.func.isRequired,
    handleRevert: PropTypes.func.isRequired,
    handleMarkDeleted: PropTypes.func.isRequired,
    handlePost: PropTypes.func.isRequired,
    handleUnPost: PropTypes.func.isRequired,
    handlePrint: PropTypes.func.isRequired,
    handleAttachment: PropTypes.func.isRequired,
    handleValueChange: PropTypes.func.isRequired,
    handleAddRow: PropTypes.func.isRequired,
    handleDelRow: PropTypes.func.isRequired
  }

  constructor(props) {

    super(props)

    this.state = {
      tab_value: 'a',
      btn_login_disabled: !props.login || !props.password
    }
  }

  tabChange = (tab_value) => {
    if(tab_value === 'a' || tab_value === 'b'){
      this.setState({
        tab_value: tab_value,
      });
    }
  };

  handleLogOut = () => {
    this.props.handleLogOut()
  }

  handleSave(){

  }

  handleSend(){

  }

  handleMarkDeleted(){

  }

  handlePrint(){

  }

  handleAttachment(){

  }


  render() {

    const { props } = this

    return (


        <div className={classes.paper}>

          {
            this.props._obj

              ?

              <Paper zDepth={3} rounded={false}>

                <Tabs
                  value={this.state.tab_value}
                  onChange={this.tabChange}
                >
                  <Tab label="Профиль" value="a">

                    <div className={classes.sub_paper}>

                      <div className={classes.cont}>

                        <DataField _obj={this.props._obj} _fld="id" />
                        <DataField _obj={this.props._obj} _fld="name" />

                      </div>

                      <br />
                      <Divider />

                      <RaisedButton label="Выйти"
                                    className={classes.button}
                                    onTouchTap={this.handleLogOut}/>

                    </div>

                  </Tab>

                  <Tab label="Подключение" value="b">

                    <CnnSettings {...props} />

                  </Tab>

                </Tabs>

              </Paper>

              :
              <div >
                <CircularProgress size={120} thickness={5} className={classes.progress} />
              </div>
          }

        </div>

    );
  }
}

