import React from 'react'
import { signIn } from 'next-auth/react'

const BtnLogin = ({ provider, bgColor, txtColor }) => {
    return (
        <div>
            <button style={{background: `${bgColor}`, color: `${txtColor}`}} onClick={() =>signIn(provider.id)}>
                Iniciar Sesión con {provider.name}
            </button>
        </div>
    )
}

BtnLogin.defaultProps = {
    txtColor: 'decoration-gray-600'
}
export default BtnLogin
