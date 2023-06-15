import React, { useState } from 'react'
import "./CreateQR.css"
import { QRCodeSVG } from 'qrcode.react';


function CreateQR() {


    const [usersData, setUsersData] = useState()


    return (
        <div className='createQR'>
            <h1>QR kodun adresi : </h1>
            <h2>{usersData ? usersData : "*boş*"}</h2>
            <p><span style={{ fontWeight: "700" }}>---&gt;</span> &nbsp; Oluşturmak istediğiniz QR kodun sizi hangi web adresine yönlendirmesini istiyorsanız <span style={{ textDecoration: "underline", fontWeight: "700" }}>"https://"</span> ile başlayarak lütfen ilgili bölüme yazınız.</p>
            <QRCodeSVG className='qr' value={usersData} size={"25%"} />
            <input type="text" placeholder='Adresinizi giriniz...' value={usersData} onChange={(e) => { setUsersData(e.target.value) }} />
        </div>
    )
}

export default CreateQR