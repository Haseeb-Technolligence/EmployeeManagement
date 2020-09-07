import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Email', field: 'email' },
      { title: 'Department', field: 'department'},
      { title: 'Designation', field: 'designation'},
      { title: 'Status', field: 'status'},
    ],
    data: [
      { name: 'Mehmet', email: 'Baran', department: 'Accounts', designation: 'Deputy Director', status: 'Active' },
      { name: 'Ali', email: 'Awan', department: 'Accounts', designation: 'Assistant Director', status: 'Active' },
      { name: 'Kashif', email: 'Baran', department: 'Accounts', designation: 'Admin', status: 'Active' },
      { name: 'Noman', email: 'Thann', department: 'Accounts', designation: 'SO Director', status: 'Active' },
    ],
  });

  return (
    <MaterialTable
      title="Manage Employees"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
