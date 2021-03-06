import React, { useContext } from 'react';
import { ProfileUserContext } from '../../context/ProfileUserContext';
import '../../css/ProfileEditForm.css';
import { __editProfile } from '../../helpers/__editProfile';
import useForm from '../../hooks/useForm';

const ProfileEditForm = ({ setShowEdit }) => {
  const { userInfo } = useContext(ProfileUserContext);

  const initFormEdit = {
    direccion: userInfo.direccion,
    telefono: userInfo.telefono,
  };

  const [form, handleInputChange] = useForm(initFormEdit);

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    if (!form.direccion.trim()) {
      alert('Campos requeridos');
      return;
    }
    console.log(userInfo._id);

    try {
      let res = await __editProfile(userInfo._id, form.direccion, form.telefono);
      let data = await res.json();
      console.log(data);
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="edit-profile">
      <h3>Editar Información</h3>
      <form action="" onSubmit={handleSubmitEdit}>
        <div className="row btn-edit-container">
          <div className="col-12 col-sm-6">
            <div className="mb-3">
              <label htmlFor="direccion" className="form-label">
                Direccion:
              </label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                value={form.direccion}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                Telefono:
              </label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                value={form.telefono}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 container-btns-edit">
            <input type="submit" value="Aceptar" className="btn btn-success btn-acept-edit" />
            <button className="btn btn-danger btn-cancel-edit" onClick={(e) => setShowEdit(false)}>
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditForm;
