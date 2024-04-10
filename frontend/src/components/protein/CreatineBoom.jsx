import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faFrown } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import './ProteinaAa.css';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Muy insatisfecho',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Insatisfecho',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfecho',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Muy satisfecho',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

function CreatineBoom() {
  const [productosEnCesta, setProductosEnCesta] = useState([]);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const [valoraciones, setValoraciones] = useState([]);
  const [nuevaValoracion, setNuevaValoracion] = useState({ nombre: '', calificacion: '', comentario: '' });

  const agregarProductoACesta = (producto) => {
    // Verificar si ya hay 100 productos en la cesta
    if (productosEnCesta.length >= 100) {
      alert('No se pueden agregar más de 100 productos a la cesta');
      return;
    }

    setProductosEnCesta([...productosEnCesta, producto]);
    setMostrarMensaje(true);
    // Después de 3 segundos, ocultar el mensaje
    setTimeout(() => {
      setMostrarMensaje(false);
    }, 3000);
  };

  const agregarValoracion = () => {
    if (nuevaValoracion.nombre.trim() === '' || nuevaValoracion.comentario.trim() === '') {
      alert('Por favor, ingresa todos los campos de la valoración');
      return;
    }

    setValoraciones([...valoraciones, nuevaValoracion]);
    setNuevaValoracion({ nombre: '', calificacion: '', comentario: '' });
  };

  return (
    <div>
      <h2 className="proteinPage2">Creatina BOOM</h2>
      <div className="imageContainer">
        <img src="/src/assets/151jmaV40ugL._AC_SX679_1.jpg" alt="Proteina" className="productImage" />
      </div>
      <div className="descriptionContainer">
        <p className="description">Proporciona una fuente de proteínas completa y de alta calidad para favorecer el crecimiento muscular.</p>
      </div>
      <div className="buttonContainer">
        <button type="submit" onClick={() => agregarProductoACesta({
          nombre: 'Proteína sabor chocolate',
          imagen: '/src/assets/151jmaV40ugL._AC_SX679_1.jpg',
          descripcion: 'Proporciona una fuente de proteínas completa y de alta calidad para favorecer el crecimiento muscular.'
        })} className="buttonProtein">
          Añadir a la cesta
        </button>
        <Link to="/comprar">
          <button type="submit" className="buttonProtein">
            Comprar
          </button>
        </Link>
      </div>
      {mostrarMensaje && <div className="mensaje">Producto añadido a la cesta</div>}
      <div className="valoracionesContainer">
        <h3>Cuentanos tu experiencia</h3>
        <ul>
          {valoraciones.map((valoracion, index) => (
            <li key={index}>
              <strong>{valoracion.nombre}:</strong> {valoracion.comentario} (Calificación: {valoracion.calificacion === 'feliz' ? <FontAwesomeIcon icon={faSmile} /> : <FontAwesomeIcon icon={faFrown} />})
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            value={nuevaValoracion.nombre}
            onChange={(e) => setNuevaValoracion({ ...nuevaValoracion, nombre: e.target.value })}
            placeholder="Nombre"
          />
          <StyledRating
            name="customized-icons"
            defaultValue={2}
            IconContainerComponent={IconContainer}
            onChange={(e, newValue) => setNuevaValoracion({ ...nuevaValoracion, calificacion: newValue })}
          />
          <input
            type="text"
            value={nuevaValoracion.comentario}
            onChange={(e) => setNuevaValoracion({ ...nuevaValoracion, comentario: e.target.value })}
            placeholder="Comentario"
          />
          <button className="buttonEnviar" type="submit" onClick={agregarValoracion}>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default CreatineBoom;