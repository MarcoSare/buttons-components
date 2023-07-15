//import { useState } from 'react'
import '../styles/btn_styles.css'
import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: string;
    color?: string;
    size?: string;
    startIcon?: string;
    endIcon?: string;
    disableShadow?: boolean;
  };


const Button:React.FC<ButtonProps>  = ({ variant,
    color,
    size,
    startIcon,
    endIcon,
    disableShadow = false,
    className,
    children,
    ...props }) => {


    const colorObj: { [key: string]: string } = {
        default: 'btn-color-default',
        primary: 'btn-color-primary',
        secondary: 'btn-color-secondary',
        danger: 'btn-color-danger',
        warning:'btn-color-warning',
        success : 'btn-color-success'
    }

    const variObj: { [key: string]: string } = {
        outline: 'btn-vari-outline',
        text: 'btn-vari-text'
    }

    const sizeObj: { [key: string]: string } = {
        sm : 'btn-size-sm',
        lg: 'btn-size-lg'
    }

    function getNameClasses(): string {
      let nameClasses = ''
        if (color !== undefined) {
          nameClasses += `${colorObj[color]} `
        }
        if (variant !== undefined) {
          nameClasses += `${variObj[variant]} `
        }
        if (size !== undefined) {
          nameClasses += `${sizeObj[size]} `
        }
        if (disableShadow) {
          nameClasses += 'btn-disable-shadow'
        }
        return nameClasses.trim()
      }

    const nameClasses: string = getNameClasses();

    return <button {...props} className={`${nameClasses} ${className??''}`}>
        {startIcon !== undefined ? <span className={`material-icons btn-icon${children !== undefined ? ' mr-05' : ''}`}>{startIcon}</span> : ""}
        {children}
        {endIcon !== undefined ? <span className="material-icons btn-icon ml-05">{endIcon}</span> : ""}
    </button>
}

export default Button