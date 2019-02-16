import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    width: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 10,
        paddingRight: 10,
        [theme.breakpoints.up(600)]: {
            width: "100%",
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 30,
            paddingRight: 30
        },
        [theme.breakpoints.up(1280)]: {
            width: 1140,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    widthFull: {
        width: '100%',
    },
});

const LayoutContainer = (props) => {
    const {
        children,
        classes,
        className,
        component: Component,
        style,
        width,
        fullWidth,
        ...other
    } = props;

    return (
        <Component
            className={classNames(
                classes.root,
                classes.width,                
                {
                    [classes.widthFull]: fullWidth,
                },
                className,
            )}
            style={style}
            {...other}
        >
            {children}
        </Component>
    );
}

LayoutContainer.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    style: PropTypes.object,
};

LayoutContainer.defaultProps = {
    component: 'div',
};

export default withStyles(styles)(LayoutContainer);