import { Box, CardHeader } from "@mui/material"
import RegistroPaso1 from "./RegistroPaso1"
import RegistroPaso2 from "./RegistroPaso2"
import RegistroPaso3 from "./RegistroPaso3"
import RegistroPaso4 from "./RegistroPaso4"

export const StepperRegistro = ({}) => {
    return(
        <Box className='pb-5'>
            <CardHeader className="text-center" title="Registro de Usuario"> </CardHeader>
                <RegistroPaso1/>
                <RegistroPaso2/>
                <RegistroPaso3/>
                <RegistroPaso4/>
        </Box>
    )
}