import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://www.nisanthan.me/">
          www.nisanthan.me
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

class Footer extends Component {
    render() {
        return (
            <footer className={this.props.footerClass}>
            <Typography variant="h6" align="center" gutterBottom>
            Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Designed and Developed by Nisanthan K
            </Typography>
            <Copyright />
            </footer>
      );
}}

export default Footer;