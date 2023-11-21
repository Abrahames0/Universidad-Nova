import React, { useState } from 'react';
import { TextField, Card, Grid, Typography } from '@mui/material';

function RegistroPaso3({empPadres, setEmpPadres}) {

console.log(empPadres);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (isValidInput(name, value)) {
      setEmpPadres(prev => ({ ...prev, [name]: value }));
      setErrors(prev => ({ ...prev, [name]: '' }));
    } else {
      setErrors(prev => ({ ...prev, [name]: 'Entrada inválida' }));
    }
  };

  const isValidInput = (name, input) => {
    if (name.includes('telefono')) {
      return input.length <= 10 && /^[0-9]*$/.test(input);
    }
    return /^[a-zA-Z\s.]*$/.test(input);
  };

  const fieldsMadre = [
    { name: 'nombreMadre', label: 'Nombre de la madre' },
    { name: 'apellidoPaternoMadre', label: 'Apellido paterno de la madre' },
    { name: 'apellidoMaternoMadre', label: 'Apellido materno de la madre' },
    { name: 'telefonoMadre', label: 'Teléfono de la madre', type: 'tel' }
  ];

  const fieldsPadre = [
    { name: 'nombrePadre', label: 'Nombre del padre' },
    { name: 'apellidoPaternoPadre', label: 'Apellido paterno del padre' },
    { name: 'apellidoMaternoPadre', label: 'Apellido materno del padre' },
    { name: 'telefonoPadre', label: 'Teléfono del padre', type: 'tel' }
  ];

  return (
    <Card sx={{ maxWidth: 800, mx: 'auto', padding: 4 }}>
      <Typography variant="h5" component="h2" sx={{ textAlign: 'center', mb: 3 }}>
        Información de los Padres
      </Typography>
      <Grid container spacing={3}>
        {/* Sección de la Madre */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Datos de la Madre
          </Typography>
          {fieldsMadre.map(({ name, label, type }) => (
            <TextField
              key={name}
              fullWidth
              required
              name={name}
              label={label}
              margin="normal"
              variant="outlined"
              type={type || 'text'}
              value={empPadres[name]}
              onChange={handleChange}
              error={!!errors[name]}
              helperText={errors[name]}
              inputProps={{ maxLength: type === 'tel' ? 10 : undefined }}
            />
          ))}
        </Grid>
        {/* Sección del Padre */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Datos del Padre
          </Typography>
          {fieldsPadre.map(({ name, label, type }) => (
            <TextField
              key={name}
              fullWidth
              required
              name={name}
              label={label}
              margin="normal"
              variant="outlined"
              type={type || 'text'}
              value={empPadres[name]}
              onChange={handleChange}
              error={!!errors[name]}
              helperText={errors[name]}
              inputProps={{ maxLength: type === 'tel' ? 10 : undefined }}
            />
          ))}
        </Grid>
      </Grid>
    </Card>
  );
}

export default RegistroPaso3;