import React from 'react';
import moment from 'moment'

class BlacklistTableContainer {
  state = {
    hasBlacklist: false,
    blacklist: [],
  }

  ComponentDidMount() {
    Meteor.call('blacklist.get', (err, res) => {
      if (err) throw new Meteor.Error(err);

      const { data: blacklist } = res;

      this.setState({
        hasBlacklist: true,
        blacklist,
      })
    })
  }

  render() {
    const { hasBlacklist } = this.state;
    const blacklist = hasBlacklist ? this.state.blacklist : ['...loading'];

    return (
      <BlacklistTable { ...this.props } blacklist = { blacklist } />
    )
  }
}
