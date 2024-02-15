import useGetAllSupervisors from "../../../../hooks/supervisors/useGetAllSupervisors";
import styles from "./styles.module.scss"

const SupervisorsTable = ({ title }) => {
  const [
    supervisorsList,
    supervisorsTotal,
    supervisorsCount,
    isLoadingAllSupervisors,
    errorAllSupervisors
  ] = useGetAllSupervisors(1);

  return (
    <section className={styles.table}>
      <div className={styles.head}>
        <h1>{title}</h1>
      </div>
      <div className={styles.body}>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>الاسم</th>
              <th>المنصب</th>
              <th>الايميل</th>
              <th>الموبايل</th>
              <th>الدولة</th>
              <th>الحالة</th>
              {/* <th>الموافقه</th> */}
            </tr>
          </thead>
          <tbody>
            {
              supervisorsList?.map((item, index) => (
                <tr key={index}>
                  <td>{item.user_id}</td>
                  <td>{item.user_name}</td>
                  <td>{item.position === 5 ? "مشرف" : "مندوب"}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>{item.country === "KSA" ? <span className=" text-red-500">السعودية</span> : <span className=" text-green-400">الإمارات</span>}</td>
                  <td>
                    <p className={
                      `${styles.status} 
                      ${item.is_active === 1 ? styles.active :
                        item.is_active === 0 ? styles.notActive :
                          item.is_active === 3 ? styles.pending : null
                      }`
                    }>
                      {item.is_active === 0 ? "غير نشط" : null}
                      {item.is_active === 1 ? "نشط" : null}
                    </p>
                  </td>
                  {/* <td>{item.terms_confirmation}</td> */}
                </tr>
              ))
            }
            {/* <tr>
              <td>2</td>
              <td>أحمد خالد</td>
              <td>مشرف</td>
              <td>ahmd.khaldd@gmail.com</td>
              <td>01018674965</td>
              <td>KSA</td>
              <td>نشط</td>
              <td>موافق</td>
            </tr>
            <tr>
              <td>3</td>
              <td>أحمد خالد</td>
              <td>مشرف</td>
              <td>ahmd.khaldd@gmail.com</td>
              <td>01018674965</td>
              <td>KSA</td>
              <td>نشط</td>
              <td>موافق</td>
            </tr>
            <tr>
              <td>4</td>
              <td>أحمد خالد</td>
              <td>مشرف</td>
              <td>ahmd.khaldd@gmail.com</td>
              <td>01018674965</td>
              <td>KSA</td>
              <td>نشط</td>
              <td>موافق</td>
            </tr>
            <tr>
              <td>5</td>
              <td>أحمد خالد</td>
              <td>مشرف</td>
              <td>ahmd.khaldd@gmail.com</td>
              <td>01018674965</td>
              <td>KSA</td>
              <td>نشط</td>
              <td>موافق</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default SupervisorsTable