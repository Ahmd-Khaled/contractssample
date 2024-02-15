import { IoMdRemoveCircle } from "react-icons/io";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { VscScreenFull } from "react-icons/vsc";
import { TfiFullscreen } from "react-icons/tfi";
import styles from "./styles.module.scss";

const UploadImage = ({
  id,
  label,
  fileHandler,
  file,
  removeFile,
  color,
  name,
  value,
  onChange,
  onBlur,
  errorMsg,
  fullScreenHandler,
}) => {
  const imageSize = file ? `${Math.floor(file.size / 1024)}KB` : "";

  const onChangeHandler = (e) => {
    fileHandler(e);
    onChange(e);
  };

  return (
    <li className={styles.uploadItem} style={{ borderColor: color }}>
      <div className={styles.uploadBox}>
        <label className={styles.uploadLabel} htmlFor={id}>
          <RiUploadCloud2Fill
            className={styles.uploadIcon}
            style={{ fill: color }}
          />
          <span className={styles.uploadTxt} style={{ color: color }}>
            {label}
          </span>
        </label>
        <input
          accept='image/*'
          className="uploadInput"
          id={id}
          type="file"
          // name="contractImg"
          style={{ display: "none" }}
          name={name}
          filename={value}
          onChange={(e) => onChangeHandler(e)}
          onBlur={onBlur}
        />
      </div>
      <div className={styles.previewImage}>
        <div className="imgBox">
          <img
            htmlFor={id}
            src={
              file ? URL.createObjectURL(file) : "/images/no-image-icon-0.jpg"
            }
            alt=""
          />
          <IoMdRemoveCircle
            onClick={removeFile}
            className={!file ? styles.removeIconGray : styles.removeIcon}
          />
          {file ? (
            <div
              onClick={() => fullScreenHandler(file)}
              className={styles.fullScreen}
            >
              <TfiFullscreen
                className={styles.fullScreenIcon}
                style={{ fill: color }}
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className={styles.imageDetails}>
        <span className={styles.imgText}>{file?.name}</span>
        <span className={styles.imgText}>{imageSize}</span>
      </div>
      {errorMsg ? (
        <div className={styles.errorMsg}>
          <p className={styles.errorMsgText}>{errorMsg}</p>
        </div>
      ) : null}
    </li>
  );
};

export default UploadImage;
