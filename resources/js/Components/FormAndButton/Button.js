import React from "react";
import classnames from "classnames";
import Icon from "../Icon";

export const LoadingButton = React.memo(({ 
    loading, 
    className, 
    children, 
    ...props 
    }) => {
    const buttonClass = classnames(
        "flex items-center",
        "focus:outline-none",
        { "pointer-events-none bg-opacity-75 select-none": loading },
        className
    );
    return (
        <button disabled={loading} className={buttonClass} {...props}>
            {loading && <div className="mr-2 btn-spinner" />}
            {children}
        </button>
    );
})


export const SimpleButton = ({
        className,
        children,
        icon,
        iconClass,
        iconRight = true,
        onClick,
        disable = false,
    }) => {
    const classNames = `flex items-center justify-center px-4 py-2 text-sm gap-x-1 ${className}  disabled:bg-neutral-200 disabled:text-gray-500}`;
    const iconView = <Icon name={icon} className={iconClass}/>
    return (
        <button disabled={disable} className={classNames} onClick={onClick}>
            {!iconRight ? iconView : ""}
            <span className="first-letter:uppercase inline-block w-fit">
                {children}
            </span>
            {iconRight ? iconView : ""}
        </button>
    );
};