import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./PersonelList.module.css";
import { BiEdit } from "react-icons/bi";
import { CgRemove } from "react-icons/cg";
import importOne from "./../../assets/importOne.svg";
import importGroup from "./../../assets/importGroup.svg";
import InsertUser from "./InsertUser";

function PersonelList({ setShowNC, form, onEdit, onDelete }) {
  const { name, id } = form;
  const [showInsertUser, setShowInsertUser] = useState(false);
  const handleEdit = () => {
    if (onEdit) {
      onEdit(id);
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  return (
    <>
      <div className={style.list}>
        <div className={style.listTitle}>
          <h4>لیست پرسنل</h4>
          <div>
            <span onClick={() => setShowNC(true)}>
              افزودن تکی <img src={importOne} alt="Add Single" />
            </span>
            <span>
              افزودن گروهی <img src={importGroup} alt="Add Group" />
            </span>
            <span onClick={() => setShowInsertUser(true)}>
              افزودن کاربر <img src={importOne} alt="Add Single" />
            </span>
          </div>
        </div>
        <div className={style.contentList}>
          <div className={style.contentListItem}>
            <span>
              {name} <input type="checkbox" />
            </span>
            <div>
              <button onClick={handleEdit} className={style.editButton}>
                ویرایش <BiEdit size={20} />
              </button>
              <button onClick={handleDelete} className={style.removeButton}>
                حذف <CgRemove size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {showInsertUser && <InsertUser setShowInsertUser={setShowInsertUser} setShowNC={setShowNC} />}
    </>
  );
}

export default PersonelList;
