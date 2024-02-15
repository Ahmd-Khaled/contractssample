import { Dot } from "lucide-react";
import { BsDot } from "react-icons/bs";
import styles from "./styles.module.scss";
import useGetContractDetails from "../../../hooks/contracts/useGetContractDetails";
import { useParams } from "react-router-dom";
import Spinner from "../../Utils/Spinner/Spinner";
import Error from "../../Utils/Error/Error";

const Contract = () => {
  const { contractId } = useParams();

  const  [
    getContractDetailsData,
    isLoadingContractDetails,
    errorContractDetails
  ] = useGetContractDetails(contractId);

  return (
    <section className={styles.contract}>
      {isLoadingContractDetails && <Spinner custom={true} />}
      {errorContractDetails && <Error errMsg={errorContractDetails} />}
      <div className={styles.secContainer}>
        <div className={styles.head}>
          <div className={styles.pageTitleBox}>
            <h1 className={styles.pageTitle}>تفاصيل العقد</h1>
          </div>
          <div className={styles.country}>
            <p className={getContractDetailsData?.country === "KSA" ? styles.contTxtKSA : styles.contTxtUAE}>
              {
                getContractDetailsData?.country === "KSA" ? "المملكة العربية السعودية" : "الأمارات العربية المتحدة"
              }
            </p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.topImage}>
            <img src={process.env.PUBLIC_URL + "/images/contract/top1.png"} alt="" />
          </div>
          <div className={styles.topBgImg}>
            <img src={process.env.PUBLIC_URL + "/images/contract/top-bg.png"} alt="" />
          </div>
          <div className={styles.downImage}>
            <img src={process.env.PUBLIC_URL + "/images/contract/down1.png"} alt="down-background" />
          </div>
          <div className={styles.downBgImg}>
            <img src={process.env.PUBLIC_URL + "/images/contract/down-bg.png"} alt="" />
          </div>
          <div className={styles.body}>
            <div className={styles.head}>
              <div className={styles.wrapper}>
                <ul className={styles.dates}>
                  <li className={styles.line}>
                    <p className={styles.arTxt}>
                      <span>الرقم التسلسلي </span>
                      <span>:</span>
                      <span className={styles.hUnderLine}>{getContractDetailsData?.serial_number}</span>
                    </p>
                    <p className={styles.enTxt}>Serial Number</p>
                  </li>
                  <li className={styles.line}>
                    <p className={styles.arTxt}>
                      <span>تاريخ العقد </span>
                      <span>:</span>
                      <span className={styles.hUnderLine}>1</span>
                      <span>/</span>
                      <span className={styles.hUnderLine}>1</span>
                      <span>/</span>
                      <span className={styles.hUnderLine}>2024م</span>
                    </p>
                    <p className={styles.enTxt}>Contract date</p>
                  </li>
                  <li className={styles.line}>
                    <p className={styles.arTxt}>
                      <span>تاريخ بداية الاشتراك </span>
                      <span>:</span>
                      <span className={styles.hUnderLine}>10</span>
                      <span>/</span>
                      <span className={styles.hUnderLine}>1</span>
                      <span>/</span>
                      <span className={styles.hUnderLine}>2024م</span>
                    </p>
                    <p className={styles.enTxt}>Subscription date</p>
                  </li>
                  <li className={styles.line}>
                    <p className={styles.arTxt}>
                      <span>توقيع المندوب: </span>
                      <span className={styles.hUnderLine2}>{getContractDetailsData?.delegate_name}</span>
                    </p>
                    <p className={styles.enTxt}>Representative</p>
                  </li>
                </ul>
              </div>
              <div className={styles.logo}>
                <img src={process.env.PUBLIC_URL + "/images/new-logo9.svg"} alt="" />
              </div>
            </div>
            <div className={styles.middle}>
              <h3 className={`gradientTxt ${styles.title}`}>
                <span>دليل</span>
                <span>D2020 MAP</span>
              </h3>
              <p className={styles.text}>(D2020 commercial Guide)</p>
            </div>
            <div className={styles.details}>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <p className={styles.txtAr}>إسم النشاط التجاري:</p>
                  <p className={styles.underlineTxt}>محل إلكترونيات</p>
                  <p className={styles.txtEn}>:Commercial activity name</p>
                </li>
                <li className={styles.item}>
                  <p className={styles.txtAr}>إسم الممثل/صاحب المحل:</p>
                  <p className={styles.underlineTxt}>أحمد خالد عبدالله</p>
                  <p className={styles.txtEn}>:Representative name/employer</p>
                </li>
                <li className={styles.item2}>
                  <div className={styles.box}>
                    <p className={styles.text}>
                      <span className={styles.ar}>نوع النشاط</span>
                      <span className={styles.en}>(Activity type)</span>
                      <span>:</span>
                    </p>
                    <p className={styles.underlineTxt}>إلكترونيات</p>
                  </div>
                  <div className={styles.box}>
                    <p className={styles.text}>
                      <span className={styles.ar}>المدينة</span>
                      <span className={styles.en}>(City)</span>
                      <span>:</span>
                    </p>
                    <p className={styles.underlineTxt}>الرياض</p>
                  </div>
                </li>
                <li className={styles.item2}>
                  <div className={styles.box}>
                    <p className={styles.text}>
                      <span className={styles.ar}>الحي</span>
                      <span className={styles.en}>(District)</span>
                      <span>:</span>
                    </p>
                    <p className={styles.underlineTxt}>الحي الاول</p>
                  </div>
                  <div className={styles.box}>
                    <p className={styles.text}>
                      <span className={styles.ar}>الشارع</span>
                      <span className={styles.en}>(Street)</span>
                      <span>:</span>
                    </p>
                    <p className={styles.underlineTxt}>شارع الملك فيصل</p>
                  </div>
                </li>
                <li className={styles.item}>
                  <p className={styles.txtAr}>رقم الاقمار الصناعية:</p>
                  <p className={styles.underlineTxt}>000000000000000000000000000</p>
                  <p className={styles.txtEn}>:Global Positioning System GPS</p>
                </li>
                <li className={styles.item3}>
                  <p className={styles.yTxy}>
                    <BsDot size={28} />
                    <span>رسوم الاشتراك لمدة سنة(150 درهم)</span>
                  </p>
                  <p className={styles.yTxy}>
                    <span>Annual subscription fees (150 AED)</span>
                    <BsDot size={28} />
                  </p>
                </li>
                <li className={styles.item4}>
                  <p className={styles.txtAr}>رقم التواصل:</p>
                  <div className={styles.squares}>
                    <div className={styles.sq}>6</div>
                    <div className={styles.sq}>1</div>
                    <div className={styles.sq}>5</div>
                    <div className={styles.sq}>7</div>
                    <div className={styles.sq}>8</div>
                    <div className={styles.sq}>3</div>
                    <div className={styles.sq}>8</div>
                    <div className={styles.sq}>0</div>
                    <div className={styles.sq}>9</div>
                    <div className={styles.sq}>2</div>
                  </div>
                  <p className={styles.txtEn}>:Contact No</p>
                </li>
              </ul>
            </div>
            <div className={styles.signature}>
              <div className={styles.texts}>
                <p className={`gradientTxt ${styles.text1}`}>توقيع المشترك</p>
                <p className={styles.text2}>({" "}Subscriber signature{" "})</p>
              </div>
              <div className={styles.userSig}>
                <p className={styles.sig}>
                  <span className={styles.bracket}>(</span>
                  <span className={styles.under}></span>
                  <span className={styles.bracket}>)</span>
                </p>
              </div>
            </div>
            <div className={styles.presents}>
              <div className={styles.box}>
                <h3 className={`gradientTxt ${styles.title}`}>
                  <span>ماذا يقدم دليل</span>
                  <span>D2020</span>
                  <span>؟</span>
                </h3>
                <p className={styles.parag}>هي خدمة تقدم للراغبين في الاشتراك وهي عبارة عن تطبيق وموقع إلكتروني بعد
                  الاشتراك في الخدمة يتم عمل حساب للمشترك كمتجر مصغر داخل التطبيق ليسهل
                  لعملائكم الوصول للمنشأة لوجود خاصية الاقمار الصناعية GPS ويتم ايضاً اضافة رقم
                  للتواصل و صفحة خاصة لعرض المنتجات والعروض بعدد لا نهائي , ويتم إلصاق باركود يوضح
                  موقع المنشأة في الدليل لسهولة الوصول , كما نقدم خدمة مجانية بنشر اعلانكم على
                  سناب الدليل Dlil.uae لمرة واحدة اثناء الشهرالاول من تاريخ الاشتراك,, و يتم انشاء الحساب
                  الخاص بكم
                </p>
                <p className={styles.parag2}>بعد الاشتراك وارسال بيانات الدخول عبر رقمكم في برنامج <span className="gradientGreen">واتس اب</span></p>
              </div>
              <div className={styles.box}>
                <h3 className={`gradientTxt ${styles.title}`}>
                  <span>?</span>
                  <span>What does D2020 guide presents</span>
                </h3>
                <p className={styles.parag}>
                D2020 guide <span className={styles.textUnder}>is a service presented to whome desire to subscribe</span> which is an
                  app. and website after subscription in the service an account is made for the subscriber as small market inside the app. To make it easy for your clients to reach the establishment because of GPS included also a contact number is added and separate page for endless offers and products, a par code is added to clarify the establishment position in the guide for easy reach, also a free service is provided to publish your commercial in guide snap Dlil.uae for one time during first month of subscription date, your account shall be created</p>
                <p className={styles.parag2}>After subscription and sending log in details through your <span className="gradientGreen">Whatsup</span> number</p>
              </div>
            </div>
            <div className={styles.whatsup}>
              <ul className={styles.numberList}>
                <li className={styles.numBox}>1</li>
                <li className={styles.numBox}>2</li>
                <li className={styles.numBox}>3</li>
                <li className={styles.numBox}>4</li>
                <li className={styles.numBox}>5</li>
                <li className={styles.numBox}>6</li>
                <li className={styles.numBox}>7</li>
                <li className={styles.numBox}>8</li>
                <li className={styles.numBox}>9</li>
                <li className={styles.numBox}>0</li>
              </ul>
              <img className={styles.iconWhats} src={process.env.PUBLIC_URL + "/images/contract/whatsapp.png"} alt="" />
            </div>
            <div className={styles.inCase}>
              <div className={styles.top}>
                <p className={styles.arTxt}>
                  <BsDot size={28} />
                  <span className={styles.text}>وفي حال لم تصل الرسالة .. يسعدنا تواصلكم معنا على الارقام الموضحة في هذا العقد</span>
                  <span>؟</span>
                </p>
                <p className={styles.enTxt}>
                  <span>In case</span>
                  <BsDot size={28} />
                </p>
              </div>
              <p className={styles.enTxt2}>Message not sent... Please contact up through the numbers in this contract</p>
            </div>
            <div className={styles.contacts}>
              <div className={styles.about}>
                <p className={styles.text}>شركة ماهر بن نايف لخدمة الإنترنت</p>
                <p className={styles.text}>
                  <span>رخصة رقم</span>
                  <span>:</span>
                  <b>88117</b>
                </p>
              </div>
              <div className={styles.info}>
                <div className={styles.box}>
                  <p className={`gradientTxt ${styles.title}`}>
                    For inquires, notes and technical support
                  </p>
                  <div className={styles.phoneNums}>
                    <p className={styles.nums}>
                      <span>00966126059755</span>
                      <span>-</span>
                      <span>0504402298</span>
                    </p>
                    <img className={styles.icon} src={process.env.PUBLIC_URL + "/images/contract/icon-phone.png"} alt="qr" />
                  </div>
                  <div className={styles.emails}>
                    <p className={styles.mail}>
                      <span className={styles.txt}>info@mahercp.net</span>
                      <span>-</span>
                      <span className={styles.txt}>info@D2020.net</span>
                    </p>
                    <img className={styles.icon} src={process.env.PUBLIC_URL + "/images/contract/icon-email.png"} alt="qr" />
                  </div>
                </div>
                <div className={styles.imageQr}>
                  <img src={process.env.PUBLIC_URL + "/images/contract/qr.png"} alt="qr" />
                </div>
              </div>
              <div className={styles.siteLink}>
                <a href="www.d2020.net" className="gradientTxt">www.d2020.net</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contract;