'use client'
import React, {useState} from "react";
import axios from "axios";

export default function InformationReceive() {
    const [formData, setFormData] = useState({
        username: '',
        deputy: '',
        email: '',
        phone_number: '',
        dayoff_type: 'อื่นๆ',
        dayoff_reason: '',
        datefrom: '',
        dateuntil: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dateOff_form = new Date(formData.datefrom);
        const dateOff_until = new Date(formData.dateuntil);
        const dateNow = new Date().now;
        let dateOFF_NowMoreThanThree = (dateOff_form.getDate() + 2);
        let dateOFF_DateBetweenDate = ((dateOff_until.getDate()) - (dateOff_form.getDate() -2) - 1);

        console.log(dateOff_until.getDate())
        console.log(dateOFF_NowMoreThanThree);
        console.log(dateOFF_DateBetweenDate);
        
        if((dateOff_form >= dateOff_until) || ((formData.dayoff_type == "พักร้อน") && (dateOff_until.getDate() <= dateOFF_NowMoreThanThree || dateOFF_DateBetweenDate > 2))) {
           alert("กรุณาใส่วันที่และเวลาให้ถูกต้อง");
        }else {
            // try {
            //     const response = await axios.post('http://localhost/api.php', formData);
            //     console.log(response.data);
            // } catch (error) {
            //     console.error('Error submitting form:', error);
            // }
        }
    };

    return (
        <>
        <div className="container">
            <h1>รายการขอลาหยุด</h1>
            <form method="post" onSubmit={handleSubmit}>
                ชื่อ-นามสกุล<input type="text" name="username" value={formData.name} onChange={handleChange} required /><br />
                สังกัด<input type="text" name="deputy" value={formData.deputy} onChange={handleChange} /><br />
                Email<input type="text" name="email" value={formData.email} onChange={handleChange} /><br />
                เบอร์โทรศัพท์<input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} required /><br />
                ประเภทการลา<select name="dayoff_type" value={formData.dayoff_type} onChange={handleChange} required>
                    <option>ลาป่วย</option>
                    <option>ลากิจ</option>
                    <option>พักร้อน</option>
                    <option>อื่นๆ</option>
                </select><br />
                สาเหตุการลา<input type="text" name="dayoff_reason" value={formData.dayoff_reason} onChange={handleChange} required /><br />
                วันที่ขอลา<input type="date" name="datefrom" value={formData.datefrom} onChange={handleChange} required /><br />
                ถึงวันที่<input type="date" name="dateuntil" value={formData.dateuntil} onChange={handleChange} required /><br />
                <button type="submit">บัณทึกการลา</button>
            </form>
        </div>
        </>
    );
}