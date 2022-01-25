import React, { useState,  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, FormControlLabel, Select, MenuItem, Input, FormHelperText, IconButton, Checkbox, InputLabel, Button, TextField, Dialog, DialogActions, DialogContent, FormControl, DialogTitle } from '@material-ui/core';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { getUsersAction, editUsersAction, createUsersAction, deleteUsersAction } from '../redux/usersDucks'
import { getRolesAction } from '../redux/rolesDucks'

import { useForm, Controller } from 'react-hook-form'

const rows = [
  { id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@gmail.com', rol: 'Administrator', active: false },
  { id: 2, firstName: 'Alejandro', lastName: 'Test', email: 'alejandrotest@gmail.com', rol: 'Workstation', active: true},
];

const Administrator = () => {

  const dispatch = useDispatch()

  const { register, handleSubmit, control, formState: { errors }, reset, clearErrors, setValue } = useForm()

  const [open, setOpen] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  const [id, setId] = useState(0);

  const handleClickOpen = (params) => {
    console.log(params.row);
    if(params.row){
      setIsEdit(true)
      for (const property in params.row) {
        if(property != 'id'){
          setValue(property, params.row[property])
        }else{
          setId(params.row[property])
        }
      }
    }
    else{
      setIsEdit(false)
      setId(0)
      reset()
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data, e) => {
    console.log(data, e)
    data.id = id
    if(!isEdit){
      dispatch(createUsersAction(data))
    }else{
      dispatch(editUsersAction(data))
    }
    handleClose()
  }

  useEffect(() => {
    console.log('Created')
    dispatch(getUsersAction())
    dispatch(getRolesAction())
  },[])

  useEffect(() => {
    if(!open){
      console.log("Change dialog")
      reset()
    }
  }, [open])

  const state = useSelector(store => store)

  const columns = [
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      flex: 1,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
    },
    { field: 'email', headerName: 'Email', flex: 1},
    {
      field: 'roleName',
      headerName: 'Role',
      flex: 1,
      editable: true,
    },
    {
      field: 'active',
      headerName: 'Active',
      type: 'boolean',
      flex: 1,
      renderHeader: (params) => (
        <strong style={{width: '100%',textAlign: 'left'}}>
          {params.colDef.headerName}
        </strong>
      ),
      align: 'left',
      editable: true,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      align: 'center',
      renderHeader: (params) => (
        <strong style={{width: '100%',textAlign: 'center'}}>
          {params.colDef.headerName}
        </strong>
      ),
      renderCell: (params) => (
        <strong>
          <IconButton onClick={()=>{handleClickOpen(params)}}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={()=>{{dispatch(deleteUsersAction(params.row))}}} >
            <DeleteIcon />
          </IconButton>
        </strong>
      ),
    }
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: 500,
      padding: '2rem 0',
      overflow: 'visible',
    },
    containCardHeader:{
      padding: '0 20px',
    },
    cardContent:{
      paddingTop: 0,
      padding: 0,
      height: '100%',
    },
    formTitle: {
      textAlign: 'center'
    },
    containInputs:{
      display: 'flex',
      flexWrap: 'wrap',
    },
    input:{
      width: '100%'
    },
    column: {
      width: '50%',
      padding: '1rem 1.5rem',
      minWidth: 210,
    }
  }))

  const classes = useStyles();

  return(
    <div style={{ width: '100%', padding: '0 5rem' }}>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.formTitle}>{!isEdit ? 'Crear' : 'Editar'} Usuario</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)} >
          <DialogContent className={classes.containInputs}>
              <div className={classes.column}>
                <Controller
                  defaultValue=""
                  control={control} 
                  name='firstName'
                  rules={{required:{value: true, message: 'Campo obligatorio'}}} 
                  render={({ field }) => <TextField
                    className={classes.input}
                    autoFocus
                    variant="outlined"
                    error={errors?.firstName?.message ? true : false}
                    helperText={errors?.firstName?.message && errors.firstName.message}
                    label="First Name"
                    {...field} /> }
                />
              </div>
              <div className={classes.column}>
                <Controller
                  defaultValue=""
                  control={control} 
                  name='lastName'
                  rules={{required:{value: true, message: 'Campo obligatorio'}}} 
                  render={({ field }) => <TextField
                    autoFocus
                    control={control}
                    className={classes.input}
                    variant="outlined"
                    error={errors?.lastName?.message ? true : false}
                    helperText={errors?.lastName?.message && errors.lastName.message}
                    label="Last Name"
                    {...field}/>}
                />
              </div>
              <div className={classes.column}>
                <Controller
                  defaultValue=""
                  control={control} 
                  name='email'
                  rules={{required:{value: true, message: 'Campo obligatorio'}}} 
                  render={({ field }) => <TextField
                    autoFocus
                    className={classes.input}
                    variant="outlined"
                    error={errors?.email?.message ? true : false}
                    helperText={errors?.email?.message && errors.email.message}
                    label="Email Address"
                    {...field}/>}
                />
              </div>
              <div className={classes.column}>
                <Controller
                  defaultValue=""
                  control={control} 
                  name='roleId'
                  rules={{required:{value: true, message: 'Campo obligatorio'}}} 
                  render={({ field }) => <FormControl variant="outlined" className={classes.input} error={errors?.roleId?.message ? true : false}>
                  <InputLabel htmlFor="outlined-age-native-simple">Role</InputLabel>
                  <Select
                    {...field}
                    label="Rol"
                  >
                    {
                      state.roles.array.map((el) => {
                        return <MenuItem value={el.id} key={el.id}>{el.name}</MenuItem>
                      })
                    }
                  </Select>
                  {errors?.roleId?.message && <FormHelperText>{errors.roleId.message}</FormHelperText>}
                </FormControl>}
                />
              </div>
              <div className={classes.column}>
                <Controller
                  name="active"
                  control={control}
                  render={({ field: { onChange, onBlur, value, ref }, }) => <FormControlLabel
                    control={
                      <Checkbox 
                      onBlur={onBlur}
                      onChange={onChange}
                      checked={value}
                      inputRef={ref} />
                    }
                    label="Active"
                  />}
                />
                
              </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      <Card className={classes.root}>
        <IconButton onClick={handleClickOpen}>
          <AddCircleIcon />
        </IconButton>
        <CardContent className={classes.cardContent}>
          <DataGrid
            className={classes.dataGrid}
            rows={state.users.array}
            columns={columns}
            components={{
              Toolbar: GridToolbar,
            }}
            pageSize={5}
            disableColumnMenu
            disableSelectionOnClick
          />
        </CardContent>
      </Card>
    </div>
  )
}

export default Administrator