import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import Home from '../pages/home'
import JobVacancy from '../pages/job-vacancy'
import Login from '../pages/login'
import Register from '../pages/register'
import LayoutDashboard from '../widgets/LayoutDashboard'
import LayoutLanding from '../widgets/LayoutLanding'
import Cookies from 'js-cookie'
import Profile from '../pages/profile'
import JobDetail from '../pages/jobvacancy-detail'
import DataJobVancancy from '../pages/datajobvacancy'
import UbahPassword from '../pages/ubahpassword'
import CreateJobVacancy from '../pages/createjobvacancy'

const Router = () => {

    const LoginRoute = (props) => {
        if(Cookies.get('token') === undefined){
            return props.children
        }else if(Cookies.get('token') !== undefined){
            return <Navigate to={'/'} />
        }
    }

    const DashboardRoute = (props) => {
        if(Cookies.get('token') === undefined){
            return <Navigate to={'/login'} />
        }else if(Cookies.get('token') !== undefined){
            return props.children
        }
    }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ 
                        <LayoutLanding>
                            <Home />
                        </LayoutLanding>
                    } />
                    <Route path='/job-vacancy' element={ 
                        <LayoutLanding>
                            <JobVacancy />
                        </LayoutLanding>
                    } />
                    <Route path='/job-vacancy/:Id' element={ 
                        <LayoutLanding>
                            <JobDetail />
                        </LayoutLanding>
                    } />
                    <Route path='/dashboard' element={ 
                        <DashboardRoute>
                            <LayoutDashboard>
                                <Dashboard />
                            </LayoutDashboard>
                        </DashboardRoute>
                    }/>
                    <Route path='/login' element={ 
                        <LoginRoute>
                            <Login />
                        </LoginRoute>
                    }/>
                    <Route path='/register' element={ 
                        <Register />
                    }/>
                    <Route path='/dashboard/data-loker' element={ 
                        <DashboardRoute>
                        <LayoutDashboard>
                            <DataJobVancancy />
                        </LayoutDashboard>
                        </DashboardRoute>
                    }/>
                    <Route path='/dashboard/tambah-loker' element={ 
                        <DashboardRoute>
                        <LayoutDashboard>
                            <CreateJobVacancy />
                        </LayoutDashboard>
                        </DashboardRoute>
                    }/>
                    <Route path='/dashboard/edit/:Id' element={ 
                        <DashboardRoute>
                        <LayoutDashboard>
                            <CreateJobVacancy />
                        </LayoutDashboard>
                        </DashboardRoute>
                    }/>
                    <Route path='/dashboard/profile' element={ 
                        <LayoutDashboard>
                            <Profile />
                        </LayoutDashboard>
                    }/>
                    <Route path='/dashboard/ubah-password' element={ 
                        <DashboardRoute>
                        <LayoutDashboard>
                            <UbahPassword />
                        </LayoutDashboard>
                        </DashboardRoute>
                    }/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router