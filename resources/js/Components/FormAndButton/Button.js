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
        "focus:outline-none btn",
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
        type = 'button'
    }) => {
    const classNames = `flex items-center justify-center gap-x-1 btn  ${className}  disabled:bg-neutral-200 disabled:text-gray-500 focus:outline-none}`;
    const iconView = <Icon name={icon} className={iconClass}/>
    return (
        <button disabled={disable} className={classNames} onClick={onClick} type={type}>
            {!iconRight ? iconView : ""}
            <span className="first-letter:uppercase inline-block w-fit">
                {children}
            </span>
            {iconRight ? iconView : ""}
        </button>
    );
};

export const ButtonBack = () => {
    const handleBackClick = () => {
        window.history.back();
    }
    return (
        <button
            className="flex gap-1 text-sm justify-start items-center font-medium w-fit cursor-pointer"
            onClick={handleBackClick}
        >
            <Icon name="chevron-left" />
            Back
        </button>
    );
}