import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Table from '..'

export class SquadListContainer {
  static propTypes = {}

  onEditSubmit = e => {
    Meteor
      .callPromise('member.edit', {})
      .then()
      .catch()
  }
  onClick = e => {
    switch(this.refs.value) {
      case 'edit': {
        return this.editAction(e)
      }
    }
    return null
  }

  render() {}
}
