import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    width: {
        margin: '0 auto',
        padding: "0 10px",
        width: theme.breakpoints.wrappers.xs,
        [theme.breakpoints.up('sm')]: {
            width: theme.breakpoints.wrappers.sm,
        },
        [theme.breakpoints.up('md')]: {
            width: theme.breakpoints.wrappers.md,
            padding: "0",
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.breakpoints.wrappers.lg,
            padding: "0",
        },
        [theme.breakpoints.up('xl')]: {
            width: theme.breakpoints.wrappers.xl,
            padding: "0",
        },
    },
    widthFull: {
        width: '100%',
    },
});

const Wrapper = (props) => {
    const {
        children,
        classes,
        className,
        component: Component,
        style,
        fullWidth,
    } = props;

    return (
        <Component
            className={classNames(
                classes.width,
                {
                    [classes.widthFull]: fullWidth,
                },
                className,
            )}
            style={style}
        >
            {children}
        </Component>
    );
}
Wrapper.defaultProps = {
    component: 'div',
};

export default withStyles(styles)(Wrapper);