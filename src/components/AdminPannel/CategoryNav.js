import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CategoryNav({title}) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
        <h4>{title}</h4>
    </Breadcrumbs>
  );
}