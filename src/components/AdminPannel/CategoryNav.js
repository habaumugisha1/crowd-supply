import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';



export default function CategoryNav({title}) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
        <h4>{title}</h4>
    </Breadcrumbs>
  );
}