
export const getServerSideProps = async () => {
    const response = await axios.get('http://localhost/api.php');
    
    if(!response.ok) {

    }

    const data = response.data;

    return {
        props: {
            data
        }
    };
};

export default function InformationDayOffPage() {
    
    let data = getServerSideProps().data;

    return (
        <>
        <div className="container">
            <h1>ข้อมูล รายการขอลาหยุด</h1>
            <h2>
                ชื่อ-นามสกุล : 
                สังกัด :
                Email :
                เบอร์โทรศัพท์ :
                ประเภทการลา :
                สาเหตุการลา :
                วันที่ขอลา - ถึงวันที่ :
                วันเวลาที่บันทึกกข้อมูล :
                สถานะ :
            </h2>
        </div>
        </>
    );
}