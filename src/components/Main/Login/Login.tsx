import React from 'react';
import style from './Login.module.scss';
import {useForm} from 'react-hook-form';
import errorImage from './../../../icons/error.jpg'

import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";

import {logInThunk} from "../../../store/thunks/authThunks";



function Login() {

    const dispatch =useAppDispatch();
    const {error} = useAppSelector(state => state.auth)

    const {register,
        handleSubmit,
        formState:{errors}
    } = useForm({mode:"onTouched"});

    const onSubmit = (data: any) => {

        dispatch(logInThunk(data));
    }


    return (

        <div className={style.login}>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Sign in</h1>
                <div className={style.loginInput}>
                    <input type="input" {...register("email",{required:true})} />
                    {errors.email && <img className={style.errorImage} src={errorImage} alt="error"></img>}

                </div>

                <div className={style.passwordInput}>
                    <input type="password" {...register("password",{required:true})} />
                    {errors.password && <img className={style.errorImage} src={errorImage} alt="error"></img>}
                </div>

                <div className={style.errorDiv}>
                    {(errors.login || errors.password) ?  <p>Fields required</p> : ""}
                    <p>
                        {error && error}
                    </p>


                </div>

                <div className={style.rememberMeInput}>
                    <input type="checkbox" {...register("rememberMe")} />
                    <h3>Remember Me</h3>
                </div>


                <div  className={style.submitButton}>
                    <button>Login</button>

                </div>

            </form>

        </div>
    )
}

export default Login
