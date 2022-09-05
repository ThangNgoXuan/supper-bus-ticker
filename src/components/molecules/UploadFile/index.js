import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import Text from "../../atoms/Text";

export default function UploadFile({
  name,
  id,
  title,
  error,
  handleChange,
  handleRemove,
}) {
  const [fileName, setFileName] = useState("");
  const onChange = (e) => {
    const fileList = e.target.files;
    if (fileList && fileList?.length > 0) {
      const { name: filename = "" } = fileList[0];
      setFileName(filename);
    }

    return {
      [name]: {
        status: false,
        message: "Tải tập tin thất bại",
        data: null,
      },
    };
  };

  const removeFile = () => {
    setFileName("");
    if (handleRemove) handleRemove();
  };
  return (
    <div className="m-uploadFile">
      <div className="m-uploadFile_left">
        <div className="m-uploadFile_title">
          <Text modifiers={['14x18', '400']}>{title}</Text>
        </div>
        {fileName !== "" && (
          <div className="m-uploadFile_filename" title={fileName}>
            <Text modifiers={["14x18", "coolBlack", "600"]}>{fileName}</Text>
            <div className="m-uploadFile_filename_delete" onClick={removeFile}>
              <AiOutlineCloseCircle />
            </div>
          </div>
        )}
        <div className="m-uploadFile_input">
          <label htmlFor={id} className="m-uploadFile_label">
            <FiUpload />
            <Text modifiers={["14x18", "300", "arsenic"]}>
              Chọn file từ máy tính
            </Text>
            <input
              id={id}
              onChange={(e) => {
                onChange(e);
                if (handleChange) handleChange(e);
              }}
              type="file"
              name={name}
            />
          </label>
        </div>
        {error && (
          <div className="m-uploadFile_error">
            <Text modifiers={["12x18", "electricCrimson"]}>{error}</Text>
          </div>
        )}
      </div>
      <div className="m-uploadFile_right">
        <Text modifiers={[]}>
          Hỗ trợ đính kèm các tập tin định dạng: Word, Excel, Acrobat, Zip, Rar
        </Text>
      </div>
    </div>
  );
}
