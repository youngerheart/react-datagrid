'use strict';

import faker from 'faker'
import React from 'react'
import DataGrid from 'react-datagrid'

const columns = [
  {name: 'name' },
  {name: 'email'}
]

var len = 1000
var data = [...Array(len)].map((_,i) => ({
  name : faker.name.findName(),
  id   : i,
  email:faker.internet.email()
}))

export default class App extends React.Component {

  render(){
    return <DataGrid idProperty='id'
        columns={columns}
        dataSource={data}
        style={{height: 500, width: '100%', border: '1px solid gray'}}
      />
  }
}