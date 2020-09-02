import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  colors
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.indigo[600],
    height: 56,
    width: 56
  }
}));

const TotalEmp = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              TOTAL EMPLOYEES
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              14
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <GroupAddOutlinedIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TotalEmp.propTypes = {
  className: PropTypes.string
};

export default TotalEmp;
